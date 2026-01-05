import { XMLParser } from 'fast-xml-parser';
import { getMetricInfo } from './metricMapping';

export interface ParsedRecord {
  type: string;
  value: number;
  unit: string;
  startDate: string;
  endDate: string;
  sourceName: string;
  date: string; // YYYY-MM-DD format
}

export interface DailyAggregatedData {
  date: string;
  [metricKey: string]: number | string;
}

// Parse Apple HealthKit date format: "2025-11-18 00:52:46 -0700"
function parseHealthKitDate(dateStr: string): Date {
  // Handle format: "2025-11-18 00:52:46 -0700"
  const parts = dateStr.split(' ');
  if (parts.length >= 3) {
    const dateTime = `${parts[0]}T${parts[1]}${parts[2]}`;
    return new Date(dateTime);
  }
  return new Date(dateStr);
}

// Normalize date to YYYY-MM-DD format
function normalizeDate(dateStr: string): string {
  const date = parseHealthKitDate(dateStr);
  return date.toISOString().split('T')[0];
}

// Parse XML file content
export function parseHealthKitXML(xmlContent: string): ParsedRecord[] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '_text',
    parseAttributeValue: true,
    parseTagValue: true,
    trimValues: true
  });

  try {
    const result = parser.parse(xmlContent);
    const records: ParsedRecord[] = [];

    // Navigate through the XML structure
    const healthData = result.HealthData;
    if (!healthData || !healthData.Record) {
      return records;
    }

    const recordArray = Array.isArray(healthData.Record) ? healthData.Record : [healthData.Record];

    recordArray.forEach((record: any) => {
      if (!record.type || record.value === undefined || record.value === null) {
        return;
      }

      const startDate = record.startDate || record.startdate;
      const endDate = record.endDate || record.enddate;
      
      if (!startDate) {
        return;
      }

      const value = parseFloat(record.value);
      if (isNaN(value)) {
        return;
      }

      records.push({
        type: record.type,
        value: value,
        unit: record.unit || '',
        startDate: startDate,
        endDate: endDate || startDate,
        sourceName: record.sourceName || record.sourcename || 'Unknown',
        date: normalizeDate(startDate)
      });
    });

    return records;
  } catch (error) {
    console.error('Error parsing XML:', error);
    return [];
  }
}

// Aggregate records by date and metric
export function aggregateDailyData(records: ParsedRecord[]): DailyAggregatedData[] {
  const dailyData: { [date: string]: { [metricKey: string]: number[] } } = {};

  records.forEach(record => {
    const metricInfo = getMetricInfo(record.type);
    if (!metricInfo) {
      return; // Skip unmapped metrics for now
    }

    const date = record.date;
    if (!dailyData[date]) {
      dailyData[date] = {};
    }

    if (!dailyData[date][metricInfo.key]) {
      dailyData[date][metricInfo.key] = [];
    }

    dailyData[date][metricInfo.key].push(record.value);
  });

  // Convert to array and calculate daily averages
  const result: DailyAggregatedData[] = Object.keys(dailyData)
    .sort()
    .map(date => {
      const dayData: DailyAggregatedData = { date };
      
      Object.keys(dailyData[date]).forEach(metricKey => {
        const values = dailyData[date][metricKey];
        // Calculate average
        const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
        dayData[metricKey] = Math.round(avg * 10) / 10;
      });

      return dayData;
    });

  return result;
}

// Handle sleep analysis records (category type with duration)
export function parseSleepAnalysis(xmlContent: string): DailyAggregatedData[] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '_text',
    parseAttributeValue: true,
    parseTagValue: true,
    trimValues: true
  });

  try {
    const result = parser.parse(xmlContent);
    const sleepData: { [date: string]: number } = {}; // Total sleep hours per day

    const healthData = result.HealthData;
    if (!healthData || !healthData.Record) {
      return [];
    }

    const recordArray = Array.isArray(healthData.Record) ? healthData.Record : [healthData.Record];

    recordArray.forEach((record: any) => {
      if (record.type !== 'HKCategoryTypeIdentifierSleepAnalysis') {
        return;
      }

      const startDate = record.startDate || record.startdate;
      const endDate = record.endDate || record.enddate;
      
      if (!startDate || !endDate) {
        return;
      }

      const start = parseHealthKitDate(startDate);
      const end = parseHealthKitDate(endDate);
      const durationHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

      // Only count "asleep" records (value="HKCategoryValueSleepAnalysisAsleep")
      // For simplicity, we'll count all sleep records, but you can filter by value if needed
      const date = normalizeDate(startDate);
      
      if (!sleepData[date]) {
        sleepData[date] = 0;
      }
      
      sleepData[date] += durationHours;
    });

    // Convert to array format
    return Object.keys(sleepData)
      .sort()
      .map(date => ({
        date,
        sleep: Math.round(sleepData[date] * 10) / 10
      }));
  } catch (error) {
    console.error('Error parsing sleep XML:', error);
    return [];
  }
}

// Parse all XML files and combine data
export async function parseAllHealthKitFiles(): Promise<DailyAggregatedData[]> {
  const files = [
    'HRV.xml',
    'Heart_Rate.xml',
    'Vitals.xml',
    'Sleep.xml',
    'Activity.xml',
    'Mobility.xml',
    'Environmental.xml'
  ];

  const allRecords: ParsedRecord[] = [];
  const sleepData: DailyAggregatedData[] = [];

  // Parse all files
  const basePath = '/Health-Report-Status';
  for (const file of files) {
    try {
      const response = await fetch(`${basePath}/split_data/${file}`);
      const xmlContent = await response.text();
      
      if (file === 'Sleep.xml') {
        // Handle sleep separately as it's a category type
        const parsed = parseSleepAnalysis(xmlContent);
        sleepData.push(...parsed);
      } else {
        const records = parseHealthKitXML(xmlContent);
        allRecords.push(...records);
      }
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }

  // Aggregate all quantity records
  const aggregatedData = aggregateDailyData(allRecords);

  // Merge sleep data with aggregated data
  const sleepMap = new Map(sleepData.map(d => [d.date, d.sleep]));
  
  // Combine all data by date
  const combinedMap = new Map<string, DailyAggregatedData>();

  // Add aggregated quantity data
  aggregatedData.forEach(day => {
    combinedMap.set(day.date, { ...day });
  });

  // Add sleep data
  sleepMap.forEach((sleepHours, date) => {
    if (combinedMap.has(date)) {
      combinedMap.get(date)!.sleep = sleepHours;
    } else {
      combinedMap.set(date, { date, sleep: sleepHours });
    }
  });

  // Calculate Body Feedback Score for dates with HRV and RHR
  combinedMap.forEach((day, date) => {
    const hrv = day.hrv as number | undefined;
    // Try restingHeartRate first, fall back to hr (which might be resting in manual data)
    const rhr = (day.restingHeartRate as number | undefined) ?? (day.hr as number | undefined);
    
    if (hrv !== undefined && rhr !== undefined) {
      // Body Feedback Score = 1.114 × HRV - 2.220 × RHR + 173.6
      const bodyFeedback = Math.round((1.114 * hrv - 2.220 * rhr + 173.6) * 10) / 10;
      day.bodyFeedback = bodyFeedback;
    }
  });

  return Array.from(combinedMap.values()).sort((a, b) => 
    a.date.localeCompare(b.date)
  );
}

