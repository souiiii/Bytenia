import React from 'react';
import { 
  Receipt, 
  Gear, 
  ArrowsClockwise, 
  Gauge, 
  CalendarBlank, 
  Certificate 
} from '@phosphor-icons/react';
import './PartnerMargins.css';

const marginFeatures = [
  { text: "VOLUME-BASED PRICING", icon: <Receipt size={40} weight="light" /> },
  { text: "CUSTOM HARDWARE CONFIGURATIONS", icon: <Gear size={40} weight="light" /> },
  { text: "FLEXIBLE BILLING CYCLES", icon: <ArrowsClockwise size={40} weight="light" /> },
  { text: "PERFORMANCE-BASED REBATES", icon: <Gauge size={40} weight="light" /> },
  { text: "MULTI-YEAR INCENTIVES", icon: <CalendarBlank size={40} weight="light" /> },
  { text: "DEAL REGISTRATION PROTECTION", icon: <Certificate size={40} weight="light" /> }
];

const PartnerMargins = () => {
  return (
    <section className="partner-margins section text-center">
      <div className="container">
        <h2 className="margins-title">
          <strong>Built for</strong> Long-Term Margins
        </h2>
        
        <div className="margins-grid">
          {marginFeatures.map((feat, idx) => (
            <div key={idx} className="margin-pill">
              <div className="margin-icon">
                {feat.icon}
              </div>
              <span className="margin-text">{feat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMargins;
