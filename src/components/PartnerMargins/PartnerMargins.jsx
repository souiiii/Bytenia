import React from 'react';
import { 
  HardDrives, 
  SlidersHorizontal, 
  Tag, 
  Headset, 
  ShieldCheck, 
  Cube 
} from '@phosphor-icons/react';
import './PartnerMargins.css';

const marginFeatures = [
  { text: "HARDWARE SCALING", icon: <HardDrives size={24} weight="regular" /> },
  { text: "CUSTOM ADMIN DASHBOARD", icon: <SlidersHorizontal size={24} weight="regular" /> },
  { text: "BULK VOLUME DISCOUNTS", icon: <Tag size={24} weight="regular" /> },
  { text: "PREFERENTIAL SUPPORT", icon: <Headset size={24} weight="regular" /> },
  { text: "PREMIUM SLA", icon: <ShieldCheck size={24} weight="regular" /> },
  { text: "DEDICATED INTEGRATIONS", icon: <Cube size={24} weight="regular" /> }
];

const PartnerMargins = () => {
  return (
    <section className="partner-margins section text-center">
      <div className="container" style={{ maxWidth: '1000px' }}>
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
