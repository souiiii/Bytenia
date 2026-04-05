import React from 'react';
import './PartnershipTiers.css';

const tiers = [
  {
    name: "BRONZE PARTNER",
    subtitle: "For growing resellers.",
    features: [
      "API access",
      "Standard support",
      "Minimum commitment: $2,500",
    ],
    discount: "10% base discount"
  },
  {
    name: "SILVER PARTNER",
    subtitle: "For scaling infrastructure providers.",
    features: [
      "Private Slack/Channel access",
      "API access",
      "Dedicated account contact",
      "Minimum commitment: $7,500",
    ],
    discount: "15% base discount"
  },
  {
    name: "GOLD PARTNER",
    subtitle: "For high-volume partners.",
    features: [
      "Priority provisioning",
      "Dedicated Partner Manager",
      "Custom billing options",
      "Early feature access",
      "Minimum commitment: $15,000",
    ],
    discount: "20% base discount"
  },
  {
    name: "PLATINUM PARTNER",
    subtitle: "For strategic infrastructure partners.",
    features: [
      "24/7 priority escalation",
      "Custom infrastructure solutions",
      "Joint marketing opportunities",
      "White-label options",
      "Executive-level support",
      "Minimum commitment: $30,000",
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
                <h4 className="tier-name">
                  <strong>{tier.name.split(' ')[0]}</strong> <span style={{ fontWeight: 300, color: 'var(--text-muted)' }}>{tier.name.split(' ')[1]}</span>
                </h4>
                <p className="tier-subtitle">{tier.subtitle}</p>
              </div>
              <ul className="tier-features">
                {tier.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <div className="tier-footer">
                <div className="discount-pill">
                  <strong>{tier.discount.split(' ')[0]}</strong> <span style={{ fontWeight: 400 }}>{tier.discount.substring(tier.discount.indexOf(' ') + 1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipTiers;
