import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import './GarrysModFAQ.css';

const faqs = [
  {
    id: 1,
    question: "How is the hardware isolated?",
    answer: "We use KVM (Kernel-based Virtual Machine) which provides full hardware virtualization. Each instance has its own kernel, disk space, and allocated CPU/RAM that cannot be accessed or affected by other users on the same physical host."
  },
  {
    id: 2,
    question: "Do you offer managed services?",
    answer: "While we provide full root access for self-management, our enterprise support team is available 24/7 to assist with infrastructure-level troubleshooting and initial server deployments upon request."
  },
  {
    id: 3,
    question: "What is the DDoS mitigation limit?",
    answer: "Our L7 filtering scrubbers are capable of mitigating multi-terabit attacks globally, ensuring your Garry's Mod servers remain online during volumetric floods or Source Engine specific query attacks."
  },
  {
    id: 4,
    question: "Can I upgrade resources on-the-fly?",
    answer: "Yes, our control panel allows for instant horizontal and vertical scaling. You can hot-swap CPU and RAM allocations without needing to migrate your core server files."
  }
];

const GarrysModFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="garrys-faq-section section">
      <div className="container">
        <div className="garrys-faq-header">
          <span className="garrys-faq-eyebrow">KNOWLEDGE_BASE</span>
          <h2 className="garrys-faq-title">Query Responses.</h2>
        </div>

        <div className="garrys-faq-list">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
               <div className={`garrys-faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                 <button 
                   className="garrys-faq-question" 
                   onClick={() => toggleFaq(faq.id)}
                   aria-expanded={isOpen}
                 >
                   <span className="garrys-faq-q-text">{faq.question}</span>
                   <Plus 
                     size={20} 
                     weight="bold" 
                     className={`garrys-faq-icon ${isOpen ? 'rotated' : ''}`} 
                   />
                 </button>
                 {isOpen && (
                   <div className="garrys-faq-answer">
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

export default GarrysModFAQ;
