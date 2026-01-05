// HealthKit record type to user-friendly metric mapping
export interface MetricInfo {
  key: string;
  label: string;
  unit: string;
  category: 'Cardiovascular' | 'Activity' | 'Sleep' | 'Mobility' | 'Environmental' | 'Other';
}

export const healthKitMetricMap: { [hkType: string]: MetricInfo } = {
  // Cardiovascular
  'HKQuantityTypeIdentifierHeartRateVariabilitySDNN': {
    key: 'hrv',
    label: 'HRV (SDNN)',
    unit: 'ms',
    category: 'Cardiovascular'
  },
  'HKQuantityTypeIdentifierHeartRate': {
    key: 'hr', // Use 'hr' to match manual data
    label: 'Heart Rate',
    unit: 'bpm',
    category: 'Cardiovascular'
  },
  'HKQuantityTypeIdentifierRestingHeartRate': {
    key: 'restingHeartRate',
    label: 'Resting Heart Rate',
    unit: 'bpm',
    category: 'Cardiovascular'
  },
  'HKQuantityTypeIdentifierOxygenSaturation': {
    key: 'spo2',
    label: 'Blood Oxygen (SpO2)',
    unit: '%',
    category: 'Cardiovascular'
  },
  'HKQuantityTypeIdentifierRespiratoryRate': {
    key: 'respiratoryRate',
    label: 'Respiratory Rate',
    unit: 'breaths/min',
    category: 'Cardiovascular'
  },
  'HKQuantityTypeIdentifierWalkingHeartRateAverage': {
    key: 'walkingHeartRate',
    label: 'Walking Heart Rate',
    unit: 'bpm',
    category: 'Cardiovascular'
  },
  
  // Activity
  'HKQuantityTypeIdentifierStepCount': {
    key: 'steps',
    label: 'Steps',
    unit: 'count',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierActiveEnergyBurned': {
    key: 'activeEnergy',
    label: 'Active Energy',
    unit: 'kcal',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierBasalEnergyBurned': {
    key: 'basalEnergy',
    label: 'Basal Energy',
    unit: 'kcal',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierAppleExerciseTime': {
    key: 'exerciseTime',
    label: 'Exercise Time',
    unit: 'min',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierAppleStandTime': {
    key: 'standTime',
    label: 'Stand Time',
    unit: 'min',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierDistanceWalkingRunning': {
    key: 'distance',
    label: 'Distance',
    unit: 'm',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierFlightsClimbed': {
    key: 'flightsClimbed',
    label: 'Flights Climbed',
    unit: 'count',
    category: 'Activity'
  },
  'HKQuantityTypeIdentifierPhysicalEffort': {
    key: 'physicalEffort',
    label: 'Physical Effort',
    unit: '',
    category: 'Activity'
  },
  'HKCategoryTypeIdentifierAppleStandHour': {
    key: 'standHours',
    label: 'Stand Hours',
    unit: 'hours',
    category: 'Activity'
  },
  
  // Sleep
  'HKCategoryTypeIdentifierSleepAnalysis': {
    key: 'sleep',
    label: 'Sleep',
    unit: 'h',
    category: 'Sleep'
  },
  'HKQuantityTypeIdentifierAppleSleepingWristTemperature': {
    key: 'wristTemperature',
    label: 'Wrist Temperature',
    unit: '°F',
    category: 'Sleep'
  },
  
  // Mobility
  'HKQuantityTypeIdentifierWalkingSpeed': {
    key: 'walkingSpeed',
    label: 'Walking Speed',
    unit: 'm/s',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierWalkingStepLength': {
    key: 'stepLength',
    label: 'Step Length',
    unit: 'm',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierWalkingDoubleSupportPercentage': {
    key: 'doubleSupport',
    label: 'Double Support %',
    unit: '%',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierWalkingAsymmetryPercentage': {
    key: 'walkingAsymmetry',
    label: 'Walking Asymmetry',
    unit: '%',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierAppleWalkingSteadiness': {
    key: 'walkingSteadiness',
    label: 'Walking Steadiness',
    unit: '%',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierStairAscentSpeed': {
    key: 'stairAscentSpeed',
    label: 'Stair Ascent Speed',
    unit: 'm/s',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierStairDescentSpeed': {
    key: 'stairDescentSpeed',
    label: 'Stair Descent Speed',
    unit: 'm/s',
    category: 'Mobility'
  },
  'HKQuantityTypeIdentifierSixMinuteWalkTestDistance': {
    key: 'sixMinWalk',
    label: '6-Min Walk Distance',
    unit: 'm',
    category: 'Mobility'
  },
  
  // Environmental
  'HKQuantityTypeIdentifierEnvironmentalAudioExposure': {
    key: 'audioExposure',
    label: 'Audio Exposure',
    unit: 'dBASPL',
    category: 'Environmental'
  },
  'HKQuantityTypeIdentifierEnvironmentalSoundReduction': {
    key: 'soundReduction',
    label: 'Sound Reduction',
    unit: 'dB',
    category: 'Environmental'
  },
  'HKQuantityTypeIdentifierHeadphoneAudioExposure': {
    key: 'headphoneExposure',
    label: 'Headphone Exposure',
    unit: 'dBASPL',
    category: 'Environmental'
  },
  'HKQuantityTypeIdentifierTimeInDaylight': {
    key: 'daylightTime',
    label: 'Time in Daylight',
    unit: 'min',
    category: 'Environmental'
  }
};

// Get metric info by HealthKit type
export function getMetricInfo(hkType: string): MetricInfo | null {
  return healthKitMetricMap[hkType] || null;
}

// Get all available metrics grouped by category
export function getMetricsByCategory(): { [category: string]: MetricInfo[] } {
  const byCategory: { [category: string]: MetricInfo[] } = {};
  
  Object.values(healthKitMetricMap).forEach(metric => {
    if (!byCategory[metric.category]) {
      byCategory[metric.category] = [];
    }
    byCategory[metric.category].push(metric);
  });
  
  return byCategory;
}

// Get all metric keys
export function getAllMetricKeys(): string[] {
  return Object.values(healthKitMetricMap).map(m => m.key);
}

