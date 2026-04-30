import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import './MinecraftFAQ.css';

const faqs = [
  {
    id: 1,
    question: "How is the hardware isolated?",
    answer: "We use KVM (Kernel-based Virtual Machine) which provides full hardware virtualization. Each instance has its own kernel, disk space, and allocated CPU/RAM that cannot be accessed or affected by other users on the same physical host."
  },
  {
    id: 2,
    question: "Do you offer managed services?",
    answer: "Yes, we offer fully managed support tiers for enterprise clients. Our engineers can handle plugin configurations, automated hourly backups, and performance tuning so you can focus entirely on actively growing your community."
  },
  {
    id: 3,
    question: "What is the DDoS mitigation limit?",
    answer: "Our infrastructure is protected by a multi-terabit anycast scrubbing network capable of mitigating volumetric attacks up to 12Tbps. Dedicated edge rules automatically filter Minecraft-specific protocol exploits."
  },
  {
    id: 4,
    question: "Can I upgrade resources on-the-fly?",
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
          <span className="mc-faq-super">Knowledge Base</span>
          <h2 className="mc-faq-title">Query Responses.</h2>
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
