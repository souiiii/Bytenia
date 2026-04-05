import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is a dedicated server?",
    a: "A dedicated server is a physical server entirely dedicated to a single tenant. Unlike shared hosting, you have full access to all resources (CPU, RAM, storage) without noisy neighbors.",
  },
  {
    q: "What are the differences between a bare metal server and a cloud server?",
    a: "Bare metal servers provide direct access to hardware without a virtualization layer, offering maximum performance. Cloud servers are virtualized environments that offer more flexibility but with a slight performance overhead.",
  },
  {
    q: "Do I get full access to my dedicated server?",
    a: "Yes, you receive full root access, giving you complete control over your server environment, allowing you to install any software or configure settings as needed.",
  },
  {
    q: "Is a dedicated IP included?",
    a: "Yes, every dedicated server comes with at least one dedicated IPv4 address, and additional IPs can be added depending on your requirements.",
  },
  {
    q: "Can I host whatever I want?",
    a: "You can host a wide variety of applications, websites, and services as long as they comply with our Terms of Service and acceptable use policies.",
  },
  {
    q: "How long does a standard setup take?",
    a: "Standard automated deployments typically take between 15 to 45 minutes after payment confirmation, depending on the specific hardware and OS configuration chosen.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(2);

  const toggleFAQ = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section className="faq">
      <div className="container faq-container">
        <div className="section-header text-center faq-header">
          <h2 className="h2" style={{ marginBottom: "8px" }}>
            FAQs
          </h2>
          <p
            className="subtitle"
            style={{ fontSize: "1.5rem", color: "#0b0e18" }}
          >
            Frequently Asked Questions
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question">
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
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

export default FAQ;
