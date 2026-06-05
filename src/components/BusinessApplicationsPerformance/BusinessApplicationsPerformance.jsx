import React from 'react';
import { BadgeCheck, BarChart2 } from 'lucide-react';
import './BusinessApplicationsPerformance.css';

const performanceList = [
  "Enterprise networking with optimized routing",
  "Consistent high performance with low jitter",
  "Fully redundant N+2 systems"
];

const BusinessApplicationsPerformance = () => {
  return (
    <section className="biz-app-perf section">
      <div className="container">
        <div className="biz-app-perf-card">
          <div className="perf-grid">
            
            {/* Left Column: Graph Widget */}
            <div className="perf-graph-col">
              <div className="perf-widget">
                <div className="perf-widget-header">
                  <span className="perf-widget-title">GLOBAL LATENCY</span>
                  <BarChart2 size={16} color="white" />
                </div>
                
                <div className="perf-widget-chart">
                  <div className="perf-bar bar-1"></div>
                  <div className="perf-bar bar-2"></div>
                  <div className="perf-bar bar-3"></div>
                  <div className="perf-bar bar-4"></div>
                </div>

                <div className="perf-widget-stats">
                  <div className="perf-stat">
                    <div className="perf-stat-value">99.99%</div>
                    <div className="perf-stat-label">SYSTEM UPTIME</div>
                  </div>
                  <div className="perf-stat">
                    <div className="perf-stat-value">&lt; 1ms</div>
                    <div className="perf-stat-label">INTERNAL LATENCY</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="perf-text-col">
              <h2 className="perf-title">Performance &amp; Reliability</h2>
              <p className="perf-desc">
                Our infrastructure is built for stability and speed. We optimize every route and redundant path to ensure your production environment remains stable under any load.
              </p>
              <ul className="perf-list">
                {performanceList.map((item, index) => (
                  <li key={index} className="perf-list-item">
                    <BadgeCheck size={20} className="perf-list-icon" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsPerformance;
