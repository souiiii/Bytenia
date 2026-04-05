import React from 'react';
import { HardDrives, Power, Globe, Cursor } from '@phosphor-icons/react';
import './ColocationPricing.css';

const pricingPlans = [
  {
    title: "Single server colocation",
    features: [
      {
        icon: <HardDrives size={24} weight="regular" />,
        main: "1U Rackspace",
        sub: "+$75/mo for each extra U"
      },
      {
        icon: <Power size={24} weight="regular" />,
        main: "1A @ 208V (up to 200W usable)",
        sub: "+$15/mo for each extra amp"
      },
      {
        icon: <Globe size={24} weight="regular" />,
        main: "Unmetered 1Gbps port + IPMI port",
        sub: null
      },
      {
        icon: <Cursor size={24} weight="regular" />,
        main: "1 IPv4 address included - additional IPs only $1/mo each",
        sub: null
      }
    ],
    locations: [
      { flag: "gb", city: "London", country: "United Kingdom", priceVal: "125" },
      { flag: "au", city: "Sydney", country: "Australia", priceVal: "100" },
      { flag: "us", city: "Dallas", country: "USA", priceVal: "130" }
    ]
  },
  {
    title: "Half rack colocation",
    features: [
      {
        icon: <HardDrives size={24} weight="regular" />,
        main: "20U Rackspace",
        sub: null
      },
      {
        icon: <Power size={24} weight="regular" />,
        main: "15A @ 208V (up to 2.5kW usable)",
        sub: null
      },
      {
        icon: <Globe size={24} weight="regular" />,
        main: "Unmetered 1Gbps port + IPMI port (Switch(es) included)",
        sub: null
      },
      {
        icon: <Cursor size={24} weight="regular" />,
        main: "32 IPv4 addresses included - additional IPs only $1/mo each",
        sub: null
      }
    ],
    locations: [
      { flag: "gb", city: "London", country: "United Kingdom", priceVal: "2200" },
      { flag: "au", city: "Sydney", country: "Australia", priceVal: "2200" },
      { flag: "us", city: "Dallas", country: "USA", priceVal: "2200" }
    ]
  }
];

const ColocationPricing = () => {
  return (
    <section className="colocation-pricing section text-center">
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <h2 className="colocation-pricing-title">
          <span style={{ fontWeight: 300 }}>Power Your Infrastructure</span><br/>
          <strong>with Reliable Colocation</strong>
        </h2>

        <div className="colocation-pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className="colo-card">
              <h3 className="colo-card-title">{plan.title}</h3>
              
              <ul className="colo-features">
                {plan.features.map((feat, i) => (
                  <li key={i} className="colo-feature-item">
                    <div className="colo-feature-icon">{feat.icon}</div>
                    <div className="colo-feature-text">
                      <p className="colo-main">{feat.main}</p>
                      {feat.sub && <p className="colo-sub">{feat.sub}</p>}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="colo-locations">
                {plan.locations.map((loc, i) => (
                  <div key={i} className="colo-loc-pill">
                    <div className="colo-loc-left">
                      <img 
                        src={`https://flagcdn.com/w40/${loc.flag}.png`} 
                        alt={loc.country} 
                        className="colo-flag-img"
                      />
                      <div className="colo-loc-info">
                        <span className="colo-city">{loc.city}</span>
                        <span className="colo-country">{loc.country}</span>
                      </div>
                    </div>
                    <div className="colo-loc-right">
                      <span className="colo-price">From <strong>$ {loc.priceVal}</strong> / month</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ColocationPricing;
