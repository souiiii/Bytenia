import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import './DayZFAQ.css';

const faqs = [
  {
    id: 1,
    question: "HOW IS THE HARDWARE ISOLATED?",
    answer: "We use KVM (Kernel-based Virtual Machine) which provides full hardware virtualization. Each instance has its own kernel, disk space, and allocated CPU/RAM that cannot be accessed or affected by other users on the same physical host."
  },
  {
    id: 2,
    question: "DO YOU OFFER MANAGED SERVICES?",
    answer: "While we provide full root access for self-management, our enterprise support team is available 24/7 to assist with infrastructure-level troubleshooting and initial server deployments upon request."
  },
  {
    id: 3,
    question: "WHAT IS THE DDOS MITIGATION LIMIT?",
    answer: "Our L7 filtering scrubbers are capable of mitigating multi-terabit attacks globally, ensuring your DayZ servers remain online during volumetric floods or Source Engine specific query attacks."
  },
  {
    id: 4,
    question: "CAN I UPGRADE RESOURCES ON-THE-FLY?",
    answer: "Yes, our control panel allows for instant horizontal and vertical scaling. You can hot-swap CPU and RAM allocations without needing to migrate your core server files."
  }
];

const DayZFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="dayz-faq-section section">
      <div className="container">
        <div className="dayz-faq-header">
          <span className="dayz-faq-eyebrow">KNOWLEDGE_BASE</span>
          <h2 className="dayz-faq-title">QUERY RESPONSES.</h2>
        </div>

        <div className="dayz-faq-list">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
               <div className={`dayz-faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                 <button 
                   className="dayz-faq-question" 
                   onClick={() => toggleFaq(faq.id)}
                   aria-expanded={isOpen}
                 >
                   <span className="dayz-faq-q-text">{faq.question}</span>
                   <Plus 
                     size={20} 
                     weight="bold" 
                     className={`dayz-faq-icon ${isOpen ? 'rotated' : ''}`} 
                   />
                 </button>
                 {isOpen && (
                   <div className="dayz-faq-answer">
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

export default DayZFAQ;
