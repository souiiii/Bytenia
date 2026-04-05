import React from 'react';
import Footer from '../components/Footer/Footer';

const ThankYouPage = () => {
  return (
    <>
      <main className="page-content" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '20px' }}>Thank You!</h1>
          <p style={{ color: 'var(--text-muted-light)' }}>
            We have received your submission.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage;
