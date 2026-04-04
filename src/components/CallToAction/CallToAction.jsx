import React from 'react';
import shapeSvg from '../../assets/shape.svg';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="choice-card">
          <div className="choice-graphic">
            <img src={shapeSvg} alt="Graphic Shape" className="shape-img" />
          </div>
          <div className="choice-content">
            <h3 className="choice-title text-white">
              <span style={{fontWeight: 300}}>NOT SURE </span> WHICH SERVER <span style={{fontWeight: 300}}>TO CHOOSE?</span>
            </h3>
            <p className="choice-desc text-white" style={{opacity: 0.9}}>
              Our experts will help you select the right configuration for your workload and budget.
            </p>
            <button className="btn-outline" style={{borderColor: 'rgba(255,255,255,0.2)', paddingLeft: '32px', paddingRight: '32px', color: '#fff'}}>
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
