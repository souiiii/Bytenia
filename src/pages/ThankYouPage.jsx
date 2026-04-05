import React from 'react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <>
      <main className="page-content ty-page">
        <div className="container ty-container">
          <div className="ty-card">
            <h1 className="ty-title">Thank You!</h1>
            <p className="ty-subtitle">
              Your request has been sent successfully. Our team will contact you shortly.
            </p>
          </div>
        </div>
      </main>
          </>
  );
};

export default ThankYouPage;
