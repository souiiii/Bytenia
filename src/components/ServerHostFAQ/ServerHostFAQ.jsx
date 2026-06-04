import React, { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import './ServerHostFAQ.css';

const faqs = [
  {
    id: 1,
    question: "Which dedicated server should I choose?",
    answer: "Our technical team can help you analyze your workload requirements, including CPU, RAM, and storage I/O, to recommend the perfect server configuration for your needs."
  },
  {
    id: 2,
    question: "What can a dedicated server be used for?",
    answer: "Dedicated servers are ideal for high-traffic websites, large databases, game server hosting, machine learning workloads, and enterprise applications requiring maximum performance."
  },
  {
    id: 3,
    question: "Do I get full control over my dedicated server?",
    answer: "Yes, you get full control. You can configure the operating system, deploy your preferred stack, manage services, set security policies, and customize performance tuning to match your workload."
  },
  {
    id: 4,
    question: "Is technical support included?",
    answer: "Yes, enterprise-grade technical support is included. Our team is available 24/7 to assist with hardware issues, network configuration, and initial setup."
  },
  {
    id: 5,
    question: "Can I upgrade my server later?",
    answer: "Absolutely. We offer flexible upgrade paths for RAM, storage, and network capacity without requiring a full server migration in most cases."
  },
  {
    id: 6,
    question: "Is my data secure on a dedicated server?",
    answer: "We implement strict physical and network security protocols. Additionally, you have full root access to implement your own firewalls, encryption, and security policies."
  }
];

const ServerHostFAQ = () => {
  const [openId, setOpenId] = useState(3); // Default open is #3 as per screenshot

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="sh-faq-section">
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <div className="sh-faq-header text-center">
          <h2>FAQs</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <div className="sh-faq-list">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
               <div className={`sh-faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                 <button 
                   className="sh-faq-question" 
                   onClick={() => toggleFaq(faq.id)}
                   aria-expanded={isOpen}
                 >
                   <span className="sh-faq-q-text">{faq.question}</span>
                   {isOpen ? (
                     <Minus size={20} className="sh-faq-icon" />
                   ) : (
                     <Plus size={20} className="sh-faq-icon" />
                   )}
                 </button>
                 {isOpen && (
                   <div className="sh-faq-answer">
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

export default ServerHostFAQ;
