import React from "react";
import {
  TrendingUp,
  Settings2,
  ShieldCheck,
  CalendarClock,
} from "lucide-react";
import "./WhyChoose.css";

const reasons = [
  {
    text: "Predictable performance",
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
  },
  {
    text: "Scalable configurations",
    icon: <Settings2 size={28} strokeWidth={1.5} />,
  },
  {
    text: "Security protection",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
  },
  {
    text: "Fixed monthly pricing",
    icon: <CalendarClock size={28} strokeWidth={1.5} />,
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="why-choose-bg">
        <div className="why-choose-overlay"></div>
        <img
          src="/server_room_bg.png"
          alt="Server Room Background"
          className="why-choose-img"
        />
      </div>

      <div className="container why-choose-content">
        <h2 className="why-choose-title below-title">
          Why Choose
          <br />
          Tempest Dedicated Servers
        </h2>

        <div className="why-choose-pills">
          {reasons.map((reason, idx) => (
            <div key={idx} className="why-choose-pill">
              <span className="pill-icon">{reason.icon}</span>
              <span className="pill-text">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
