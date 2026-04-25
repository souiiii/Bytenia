import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import './MinecraftFAQ.css';

const faqs = [
  {
    id: 1,
    question: "HOW IS THE HARDWARE ISOLATED?",
    answer: "We use KVM (Kernel-based Virtual Machine) which provides full hardware virtualization. Each instance has its own kernel, disk space, and allocated CPU/RAM that cannot be accessed or affected by other users on the same physical host."
  },
  {
    id: 2,
    question: "DO YOU OFFER MANAGED SERVICES?",
    answer: "Yes, we offer fully managed support tiers for enterprise clients. Our engineers can handle plugin configurations, automated hourly backups, and performance tuning so you can focus entirely on actively growing your community."
  },
  {
    id: 3,
    question: "WHAT IS THE DDOS MITIGATION LIMIT?",
    answer: "Our infrastructure is protected by a multi-terabit anycast scrubbing network capable of mitigating volumetric attacks up to 12Tbps. Dedicated edge rules automatically filter Minecraft-specific protocol exploits."
  },
  {
    id: 4,
    question: "CAN I UPGRADE RESOURCES ON-THE-FLY?",
    answer: "Absolutely. Our cloud-native orchestration allows you to effortlessly scale CPU cores, RAM, and NVMe storage allocations directly through the control panel with near-zero downtime or data loss."
  }
];

const MinecraftFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mc-faq section">
      <div className="container">
        <div className="mc-faq-header">
          <span className="mc-faq-super">KNOWLEDGE_BASE</span>
          <h2 className="mc-faq-title">QUERY RESPONSES.</h2>
        </div>

        <div className="mc-faq-list">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div className={`mc-faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                <button 
                  className="mc-faq-question" 
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="mc-faq-q-text">{faq.question}</span>
                  <Plus 
                    size={20} 
                    weight="bold" 
                    className={`mc-faq-icon ${isOpen ? 'rotated' : ''}`} 
                  />
                </button>
                {isOpen && (
                  <div className="mc-faq-answer">
                    <p>{faq.answer}</p>
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

export default MinecraftFAQ;
