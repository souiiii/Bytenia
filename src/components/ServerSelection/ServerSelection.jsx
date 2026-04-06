import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Server, Database, Cloud } from "lucide-react";
import "./ServerSelection.css";

const serverData = [
  {
    id: "enterprise",
    title: "Enterprise Dedicated Servers",
    icon: <Server size={64} strokeWidth={1} />,
    subtitle:
      "Recommended when: uptime, security, and performance are non-negotiable.",
    features: [
      {
        name: "FINTECH & FINANCIAL SERVICES",
        desc: "Payment systems, financial processing, compliance-driven projects.",
      },
      {
        name: "GAMING & STREAMING",
        desc: "Game servers, live streaming platforms, high-concurrency workloads.",
      },
      {
        name: "AI / MACHINE LEARNING",
        desc: "Model training, high-performance computing, GPU workloads.",
      },
      {
        name: "ENTERPRISE SYSTEMS",
        desc: "Business-critical applications requiring 24/7 availability.",
      },
    ],
    price: "$ 99.99",
    whyChoose: [
      "Entire server resources dedicated to your business",
      "Highest level of security and control",
      "Enterprise-grade performance and SLA",
    ],
  },
  {
    id: "cost-optimized",
    title: "Cost-Optimized Servers",
    icon: <Database size={64} strokeWidth={1} />,
    subtitle:
      "Recommended when: budget efficiency is more important than peak performance.",
    features: [
      {
        name: "STARTUPS & MVPS",
        desc: "Launching new products, testing ideas, and validating business models.",
      },
      {
        name: "SMALL E-COMMERCE",
        desc: "Online stores with moderate traffic and seasonal demand.",
      },
      {
        name: "WEB STUDIOS & FREELANCERS",
        desc: "Hosting client websites, landing pages, and CMS-based projects.",
      },
      {
        name: "DEVELOPMENT & TESTING",
        desc: "Development, staging, and test environments.",
      },
    ],
    price: "$ 79.99",
    whyChoose: [
      "Low total cost of ownership",
      "Reliable performance for standard workloads",
      "Fast deployment with minimal upfront investment",
    ],
  },
  {
    id: "vds",
    title: "Virtual Dedicated Servers",
    icon: <Cloud size={64} strokeWidth={1} />,
    subtitle:
      "Recommended when: your project is growing and requires predictable performance.",
    features: [
      {
        name: "SAAS PLATFORMS",
        desc: "CRM systems, online services, subscription-based products.",
      },
      {
        name: "DIGITAL AGENCIES",
        desc: "Multiple client projects with isolated resources on one server.",
      },
      {
        name: "SMALL & MEDIUM BUSINESSES",
        desc: "Corporate portals, ERP systems, internal applications.",
      },
      {
        name: "DATA & ANALYTICS",
        desc: "BI tools, dashboards, and data processing workloads.",
      },
    ],
    price: "$ 39.99",
    whyChoose: [
      "Dedicated CPU and RAM resources",
      "Flexible and easy scalability",
      "Optimal balance between cost and control",
    ],
  },
];

const ServerSelection = () => {
  const [activeId, setActiveId] = useState("enterprise");

  return (
    <section className="server-selection section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="h2" style={{ marginBottom: "16px" }}>
            Choose the Right Server
            <br />
            <span style={{ fontWeight: 400 }}>for Your Industry</span>
          </h2>
          <p
            className="subtitle"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Every workload has different requirements for performance,
            scalability, and cost efficiency. We help you select the dedicated
            server configuration that fits your operational needs and growth
            plans.
          </p>
        </div>

        <div className="server-cards-container">
          {serverData.map((server) => {
            const isActive = activeId === server.id;
            return (
              <div
                key={server.id}
                className={`server-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveId(server.id)}
                onClick={() => setActiveId(server.id)}
              >
                {!isActive ? (
                  <div className="server-card-collapsed">
                    <h3 className="collapsed-title">{server.title}</h3>
                    <div className="collapsed-icon">{server.icon}</div>
                  </div>
                ) : (
                  <div className="server-card-expanded">
                    <div className="expanded-header">
                      <div className="expanded-icon">{server.icon}</div>
                      <div>
                        <h3 className="expanded-title h3">{server.title}</h3>
                        <p className="expanded-subtitle">{server.subtitle}</p>
                      </div>
                    </div>

                    <div className="expanded-features">
                      {server.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <h4 className="feature-name">{feature.name}</h4>
                          <p className="feature-desc">{feature.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="expanded-footer">
                      <div className="why-choose-box">
                        <h5 className="why-choose-title">
                          WHY CHOOSE THIS SERVER
                        </h5>
                        <ul className="why-choose-list">
                          {server.whyChoose.map((item, idx) => (
                            <li key={idx} className="why-choose-li">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pricing-box">
                        <span className="price-label">
                          From {server.price} / month
                        </span>
                        <Link
                          to={`/${server.id}`}
                          className="btn-view-servers"
                          onClick={(e) => e.stopPropagation()}
                          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}
                        >
                          View Servers
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServerSelection;
