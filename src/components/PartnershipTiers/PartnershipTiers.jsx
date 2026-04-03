import React from 'react';
import './PartnershipTiers.css';

const tiers = [
  {
    name: "BRONZE PARTNER",
    subtitle: "For new partners",
    features: [
      "API access",
      "Basic tech support",
      "Standard payout terms (Net45)",
    ],
    discount: "10% base discount"
  },
  {
    name: "SILVER PARTNER",
    subtitle: "For growing infrastructure",
    features: [
      "Priority Tier 2 tech support",
      "API access",
      "Dedicated account rep",
      "Net 30 discount terms",
    ],
    discount: "15% base discount"
  },
  {
    name: "GOLD PARTNER",
    subtitle: "For high-volume resellers",
    features: [
      "Priority provisioning",
      "Dedicated Sales Manager",
      "24/7 priority support",
      "Co-marketing funds",
      "SLA reimbursement 100%",
    ],
    discount: "20% base discount"
  },
  {
    name: "PLATINUM PARTNER",
    subtitle: "For Enterprise integrations",
    features: [
      "Fully priority resolution",
      "Dedicated slack channel with ops",
      "QBRs with engineering tier",
      "White-label options",
      "Priority network ingress",
      "Instant payout terms (Net15)",
    ],
    discount: "25% base discount"
  }
];

const PartnershipTiers = () => {
  return (
    <section className="partnership-tiers section">
      <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
        <h2 className="tiers-title text-white text-center">
          Partnership Tiers
        </h2>
        
        <div className="tiers-grid">
          {tiers.map((tier, idx) => (
            <div key={idx} className="tier-card">
              <div className="tier-header">
                <h4 className="tier-name">{tier.name}</h4>
                <p className="tier-subtitle">{tier.subtitle}</p>
              </div>
              <ul className="tier-features">
                {tier.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <div className="tier-footer">
                <div className="discount-pill">{tier.discount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipTiers;
