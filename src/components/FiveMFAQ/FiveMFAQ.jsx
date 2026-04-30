import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import './FiveMFAQ.css';

const faqs = [
  {
    id: 1,
    question: "Do I get a dedicated IP address?",
    answer: "Yes, every FiveM server deployment includes a dedicated IPv4 address to ensure reliable connectivity and standard port (30120) availability without conflicts."
  },
  {
    id: 2,
    question: "What operating systems are supported?",
    answer: "We currently support the latest stable releases of Windows Server 2022 and Ubuntu 22.04 LTS. Both environments are highly optimized for running the FXServer runtime."
  },
  {
    id: 3,
    question: "Is DDoS protection included?",
    answer: "Absolutely. All our FiveM nodes are backed by multi-terabit layer 4/7 DDoS mitigation specifically tuned to filter out malicious game-server traffic while letting legitimate players through."
  }
];

const FiveMFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="fivem-faq section">
      <div className="container">
        <div className="fivem-faq-header">
          <h2 className="fivem-faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="fivem-faq-list">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
               <div className={`fivem-faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                 <button 
                   className="fivem-faq-question" 
                   onClick={() => toggleFaq(faq.id)}
                   aria-expanded={isOpen}
                 >
                   <span className="fivem-faq-q-text">Q: {faq.question}</span>
                   <Plus 
                     size={20} 
                     weight="bold" 
                     className={`fivem-faq-icon ${isOpen ? 'rotated' : ''}`} 
                   />
                 </button>
                 {isOpen && (
                   <div className="fivem-faq-answer">
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

export default FiveMFAQ;
