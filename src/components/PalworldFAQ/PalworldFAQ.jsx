import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import './PalworldFAQ.css';

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
    answer: "Our L7 filtering scrubbers are capable of mitigating multi-terabit attacks globally, ensuring your Palworld servers remain online during volumetric floods or query attacks."
  },
  {
    id: 4,
    question: "Can I upgrade resources on-the-fly?",
    answer: "Yes, our control panel allows for instant horizontal and vertical scaling. You can hot-swap CPU and RAM allocations without needing to migrate your core server files."
  }
];

const PalworldFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="palworld-faq-section section">
      <div className="container">
        <div className="palworld-faq-header">
          <span className="palworld-faq-eyebrow">Knowledge Base</span>
          <h2 className="palworld-faq-title">Query Responses.</h2>
        </div>

        <div className="palworld-faq-list">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
               <div className={`palworld-faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                 <button 
                   className="palworld-faq-question" 
                   onClick={() => toggleFaq(faq.id)}
                   aria-expanded={isOpen}
                 >
                   <span className="palworld-faq-q-text">{faq.question}</span>
                   <Plus 
                     size={20} 
                     weight="bold" 
                     className={`palworld-faq-icon ${isOpen ? 'rotated' : ''}`} 
                   />
                 </button>
                 {isOpen && (
                   <div className="palworld-faq-answer">
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

export default PalworldFAQ;
