import React from 'react';
import { LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import './LeadershipTeam.css';

const teamMembers = [
  {
    name: "Jack Guild",
    title: "CEO",
    desc: "Aliquam in hendrerit urna. Pellentesque malesuada libero nec posuere consectetur. Suspendisse pulvinar purus vitae dolor lobortis cursus.",
    image: null,
    linkedin: "#",
    email: "#"
  },
  {
    name: "Jack Guild",
    title: "CEO",
    desc: "Aliquam in hendrerit urna. Pellentesque malesuada libero nec posuere consectetur. Suspendisse pulvinar purus vitae dolor lobortis cursus.",
    image: null,
    linkedin: "#",
    email: "#"
  },
  {
    name: "Jack Guild",
    title: "CEO",
    desc: "Aliquam in hendrerit urna. Pellentesque malesuada libero nec posuere consectetur. Suspendisse pulvinar purus vitae dolor lobortis cursus.",
    image: null,
    linkedin: "#",
    email: "#"
  },
  {
    name: "Jack Guild",
    title: "CEO",
    desc: "Aliquam in hendrerit urna. Pellentesque malesuada libero nec posuere consectetur. Suspendisse pulvinar purus vitae dolor lobortis cursus.",
    image: null,
    linkedin: "#",
    email: "#"
  },
  {
    name: "Jack Guild",
    title: "CEO",
    desc: "Aliquam in hendrerit urna. Pellentesque malesuada libero nec posuere consectetur. Suspendisse pulvinar purus vitae dolor lobortis cursus.",
    image: null,
    linkedin: "#",
    email: "#"
  },
  {
    name: "Jack Guild",
    title: "CEO",
    desc: "Aliquam in hendrerit urna. Pellentesque malesuada libero nec posuere consectetur. Suspendisse pulvinar purus vitae dolor lobortis cursus.",
    image: null,
    linkedin: "#",
    email: "#"
  }
];

const LeadershipTeam = ({ visible = false }) => {
  if (!visible) return null; // Hidden for MVP as requested

  return (
    <section className="leadership-section section">
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div className="text-center" style={{ marginBottom: '50px' }}>
          <h2 className="h2" style={{ color: 'var(--bg-dark)' }}>
            Leadership Team
          </h2>
        </div>

        <div className="leadership-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-image-placeholder">
                {member.image ? <img src={member.image} alt={member.name} /> : null}
              </div>
              <h4 className="team-name">{member.name}</h4>
              <p className="team-title">{member.title}</p>
              <p className="team-desc">{member.desc}</p>
              <div className="team-socials">
                <a href={member.linkedin} className="team-social-icon"><LinkedinLogo size={20} /></a>
                <a href={member.email} className="team-social-icon"><EnvelopeSimple size={20} /></a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
