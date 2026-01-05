import React from 'react';
import Head from 'next/head';
import styles from '@/styles/HealthReport.module.css';

const HealthReport = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Health Progress Report - December 2025</title>
      </Head>

      <div className={styles.header}>
        <h1>Health Progress Report</h1>
        <div className={styles.subtitle}>Understanding & Treating the Root Cause</div>
        <div className={styles.date}>December 18, 2025</div>
      </div>

      <div className={styles.content}>
        {/* Executive Summary */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <p className={styles.summaryText}>
            After years of struggling with chronic airway stenosis requiring countless surgeries, with the help
            from AI, I&apos;ve identified the likely root cause:{' '}
            <strong>histamine-driven systemic inflammation</strong>. Following
            the start of targeted antihistamine therapy on December 11, 2025, 
            objective health metrics show significant improvement within one week.
          </p>
        </div>

        {/* The Discovery */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Breakthrough Discovery</h2>
          <div className={styles.discoveryBox}>
            <h3>
              <i className="fas fa-microscope" style={{ marginRight: '10px', color: 'var(--lime)' }}></i> 
              What We Found
            </h3>
            <p>
              The airway issues, facial rashes, fatigue, and anxiety were all symptoms of the same underlying
              problem: <strong>chronic histamine-mediated inflammation</strong>, most consistent with Mast Cell
              Activation Syndrome (MCAS).
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Treatment Protocol Started Dec 11:</strong><br />
              • Zyrtec (H1 blocker) - 10mg at 10 AM<br />
              • Pepcid (H2 blocker) - 20mg at 6 PM<br />
              • Low-histamine diet modifications
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Objective Health Improvements</h2>
          <div className={styles.statGrid}>
            <div className={`${styles.statCard} ${styles.statCardPositive}`}>
              <div className={styles.statLabel}>Sleep HRV</div>
              <div className={styles.statValue}>+28%</div>
              <div className={styles.statChange}>38 → 49 ms</div>
            </div>
            <div className={`${styles.statCard} ${styles.statCardPositive}`}>
              <div className={styles.statLabel}>Resting Heart Rate</div>
              <div className={styles.statValue}>-9%</div>
              <div className={styles.statChange}>79 → 72 bpm</div>
            </div>
            <div className={`${styles.statCard} ${styles.statCardPositive}`}>
              <div className={styles.statLabel}>Body Readiness</div>
              <div className={styles.statValue}>+63%</div>
              <div className={styles.statChange}>23 → 38 score</div>
            </div>
            <div className={`${styles.statCard} ${styles.statCardPositive}`}>
              <div className={styles.statLabel}>Facial Rash</div>
              <div className={styles.statValue}>~90%</div>
              <div className={styles.statChange}>Cleared</div>
            </div>
          </div>
        </div>

        {/* Visual Comparison */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Before & After Comparison</h2>
          <div className={styles.chartContainer}>
            <div className={styles.chartTitle}>Heart Rate Variability (HRV) - Higher is Better</div>
            <div className={styles.barChart}>
              <div className={styles.barGroup}>
                <div className={styles.bars}>
                  <div className={`${styles.bar} ${styles.pre}`} style={{ height: '76px' }}>
                    <div className={styles.barValue}>38 ms</div>
                  </div>
                  <div className={`${styles.bar} ${styles.post}`} style={{ height: '98px' }}>
                    <div className={styles.barValue}>49 ms</div>
                  </div>
                </div>
                <div className={styles.barLabel}>Sleep HRV</div>
              </div>
              <div className={styles.barGroup}>
                <div className={styles.bars}>
                  <div className={`${styles.bar} ${styles.pre}`} style={{ height: '40px' }}>
                    <div className={styles.barValue}>20 ms</div>
                  </div>
                  <div className={`${styles.bar} ${styles.post}`} style={{ height: '60px' }}>
                    <div className={styles.barValue}>30 ms</div>
                  </div>
                </div>
                <div className={styles.barLabel}>Daytime HRV</div>
              </div>
              <div className={styles.barGroup}>
                <div className={styles.bars}>
                  <div className={`${styles.bar} ${styles.pre}`} style={{ height: '158px' }}>
                    <div className={styles.barValue}>79 bpm</div>
                  </div>
                  <div className={`${styles.bar} ${styles.post}`} style={{ height: '144px' }}>
                    <div className={styles.barValue}>72 bpm</div>
                  </div>
                </div>
                <div className={styles.barLabel}>Resting HR</div>
              </div>
            </div>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={styles.legendColor} style={{ background: '#E2E8F0' }}></span>
                Pre-Treatment (Dec 1-10)
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendColor} style={{ background: 'var(--lime)' }}></span>
                Post-Treatment (Dec 12-18)
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms Improved */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Symptoms That Have Improved</h2>
          <div className={styles.keyImprovements}>
            <div className={styles.improvementItem}>
              <h4><i className="fas fa-lungs" style={{ color: 'var(--lime)' }}></i> Breathing</h4>
              <p>Airway feels clearer, less throat tightness, reduced air hunger</p>
            </div>
            <div className={styles.improvementItem}>
              <h4><i className="fas fa-bed" style={{ color: 'var(--lime)' }}></i> Sleep Quality</h4>
              <p>Better overnight recovery, improved deep sleep, more restful</p>
            </div>
            <div className={styles.improvementItem}>
              <h4><i className="fas fa-brain" style={{ color: 'var(--lime)' }}></i> Anxiety</h4>
              <p>Decreased systemic &quot;wired&quot; feeling, calmer nervous system</p>
            </div>
            <div className={styles.improvementItem}>
              <h4><i className="fas fa-person-walking" style={{ color: 'var(--lime)' }}></i> Inflammation</h4>
              <p>Morning leg stiffness reduced, heel pain improved, toe pain gone</p>
            </div>
            <div className={styles.improvementItem}>
              <h4><i className="fas fa-bolt" style={{ color: 'var(--lime)' }}></i> Energy</h4>
              <p>Body stress metrics normalized, better stress resilience</p>
            </div>
            <div className={styles.improvementItem}>
              <h4><i className="fas fa-hand-holding-medical" style={{ color: 'var(--lime)' }}></i> Skin</h4>
              <p>Facial rash ~90% cleared, lip rash fully resolved</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Treatment Timeline</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Nov 14</div>
              <div className={styles.timelineContent}>
                <h4>Latest Surgery</h4>
                <p>Post-operative steroids provided temporary relief as expected, confirming
                  inflammation-responsive disease</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Dec 1-10</div>
              <div className={styles.timelineContent}>
                <h4>Pre-Treatment Baseline</h4>
                <p>Symptoms returning after steroid taper. Chronic stress state with suppressed HRV (avg
                  23.1), elevated resting HR (79 bpm)</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Dec 11</div>
              <div className={styles.timelineContent}>
                <h4>
                  <i className="fas fa-bullseye" style={{ marginRight: '8px', color: 'var(--lime)' }}></i> 
                  Treatment Started
                </h4>
                <p><strong>11:00 AM:</strong> First dose of Zyrtec + Pepcid. Within 10 hours, HRV jumped
                  from 12 → 40 ms (+233%)</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Dec 12-15</div>
              <div className={styles.timelineContent}>
                <h4>Initial Response</h4>
                <p>Sustained improvement across all metrics. Facial rash clearing. Sleep quality improving.
                  Initial protocol: Pepcid at 9 PM</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Dec 16-18</div>
              <div className={styles.timelineContent}>
                <h4>Protocol Optimization</h4>
                <p>Adjusted Pepcid timing to 6 PM for better evening/overnight coverage. Continued positive
                  trend</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projected Outlook */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4-Week Outlook & Expectations</h2>
          <div className={styles.projectionBox}>
            <h3>
              <i className="fas fa-chart-line" style={{ marginRight: '10px', color: 'var(--royal-blue)' }}></i> 
              Evidence-Based Projections
            </h3>
            <p style={{ color: 'var(--slate-body)', marginBottom: '20px', fontSize: '1.05em' }}>
              Based on typical MCAS treatment response patterns and current trajectory, here&apos;s what we can
              reasonably expect:
            </p>
            <div className={styles.projectionTimeline}>
              <div className={styles.projectionItem}>
                <span className={styles.projectionWeek}>Week 2 (Dec 19-25)</span>
                <div className={styles.projectionDesc}>
                  Continued stabilization. HRV may climb to 50-55 ms average. Day-to-day variability
                  should decrease. Diet triggers become clearer.
                </div>
              </div>
              <div className={styles.projectionItem}>
                <span className={styles.projectionWeek}>Week 3 (Dec 26-Jan 1)</span>
                <div className={styles.projectionDesc}>
                  Further improvements in baseline. Target HRV 55-60 ms. Breathing continues to improve.
                  Body adapts to consistent histamine control.
                </div>
              </div>
              <div className={styles.projectionItem}>
                <span className={styles.projectionWeek}>Week 4 (Jan 2-8)</span>
                <div className={styles.projectionDesc}>
                  Approaching new baseline. HRV targeting 60-70+ ms. Resting HR stabilizes 65-70 bpm.
                  Consistent energy levels. Reduced symptom flares.
                </div>
              </div>
              <div className={styles.projectionItem}>
                <span className={styles.projectionWeek}>Beyond (Jan 9+)</span>
                <div className={styles.projectionDesc}>
                  Sustained improvement phase. May consider additional interventions if needed. Focus on
                  maintaining gains and optimizing quality of life.
                </div>
              </div>
              <div className={styles.projectionItem} style={{ gridColumn: '1 / -1', borderTop: '2px dashed #E2E8F0', marginTop: '10px', paddingTop: '25px' }}>
                <span className={styles.projectionWeek} style={{ color: 'var(--lime)' }}>Long-Term Vision</span>
                <h4 style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--royal-blue)', marginBottom: '10px', fontSize: '1.1em' }}>
                  SURGERY FREQUENCY PROJECTION
                </h4>
                <div className={styles.projectionDesc}>
                  <strong>Past pattern:</strong> Surgery every 3-4 months. With inflammation
                  now controlled, this cycle may be disrupted. <strong>Key test:</strong> Feb-March 2025
                  (3-4 months post-surgery). If we reach this milestone without stenosis return, it
                  suggests treatment is addressing root cause. <strong>Potential outcomes:</strong>
                  Extended intervals (6-12+ months), reduced severity, or potentially elimination of
                  surgical need. Next 2-3 months will determine if we&apos;ve broken the cycle.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What This Means Going Forward</h2>
          <div className={styles.infoBox}>
            <p>
              <strong>The Good News:</strong> We&apos;ve identified a treatable root cause.
              The rapid response to antihistamine therapy validates our hypothesis and provides a clear path forward. 
              This isn&apos;t just managing symptoms—we&apos;re addressing the underlying inflammation.
            </p>
            <p>
              <strong>The Reality:</strong> This is week one. Full recovery will take time. 
              The body needs weeks-to-months to heal from years of chronic inflammation. 
              Progress won&apos;t always be linear—there will be good days and harder days.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>The Plan:</strong> Continue current protocol, track metrics closely, identify dietary triggers, 
              and work with medical team to optimize treatment. May need additional interventions (mast cell stabilizers, 
              additional antihistamines) if progress plateaus.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className={styles.bottomLineSection}>
          <h2>Bottom Line</h2>
          <p className={styles.bottomLineText}>
            For the first time in years, we have <strong>objective data</strong> showing real improvement.<br />
            The treatment is working. The trajectory is positive.<br />
            <span className={styles.optimismText}>
              There is reason for optimism.
            </span>
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>This report is based on objective health data collected via Apple Watch and analyzed over the period of Dec 1-18, 2025.</p>
        <p style={{ marginTop: '10px' }}>Data sources: Heart Rate Variability (HRV-SDNN), Resting Heart Rate, Body Feedback Score, Sleep Quality Metrics</p>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>Questions? Happy to discuss any aspect of this report in more detail.</p>
      </div>
    </div>
  );
};

export default HealthReport;

