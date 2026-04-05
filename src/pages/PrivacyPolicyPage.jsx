import React from 'react';
import Footer from '../components/Footer/Footer';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <main className="page-content privacy-policy-page" style={{ backgroundColor: '#F8F8FA' }}>
        
        <div className="container privacy-hero-container">
          <div className="privacy-hero-card">
            <h1 className="privacy-hero-title text-white">
              Byteania Privacy Policy
            </h1>
            <p className="privacy-hero-date text-gray">
              Last updated: 25 July 2024
            </p>
          </div>
        </div>

        <div className="privacy-content-container">
          <p className="privacy-intro">
            Welcome to Byteania ("Byteania", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@byteania.com.
          </p>

          <section className="privacy-section">
            <h3>1. SCOPE</h3>
            <p>This privacy policy applies to all information collected through:</p>
            <ul>
              <li>Our website (https://www.byteania.com/)</li>
              <li>Byteania routing protocols</li>
              <li>As well as any related services, sales, marketing, or events (we refer to them collectively in this privacy policy as the "Services").</li>
            </ul>
            <p>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>
          </section>

          <section className="privacy-section">
            <h3>2. INFORMATION WE COLLECT</h3>
            <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.</p>
            
            <h4>A. Information you provide</h4>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, passwords, contact preferences, and similar information.</li>
              <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe.</li>
              <li><strong>Authentication Data:</strong> We collect passwords, password hints, and similar security information used for authentication and account access.</li>
            </ul>

            <h4>B. Information collected automatically</h4>
            <ul>
              <li><strong>System configuration and hardware:</strong> Details about the devices connected to your network, OS version, browser type, network utilization.</li>
              <li><strong>Server configuration:</strong> Data related to the servers, virtual machines, hypervisors, load balancers, routing tables, and IP management.</li>
            </ul>

            <h4>C. Service, network, and security data</h4>
            <p>We collect data related to the security of our Services, identifying and resolving security threats...</p>
          </section>

          <section className="privacy-section">
            <h3>3. HOW WE USE INFORMATION</h3>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:</p>
            <ul>
              <li>To facilitate account creation and logon process.</li>
              <li>To send you administrative information.</li>
              <li>Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
              <li>To administer prize draws and competitions.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>4. LEGAL BASES FOR PROCESSING</h3>
            <p>We may process your data if you have given us specific consent to use your personal information for a specific purpose.</p>
            <ul>
              <li>Performance of a Contract.</li>
              <li>Legitimate Interests.</li>
              <li>Legal Obligations.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>5. COOKIES AND TRACKING</h3>
            <p>We may use cookies and similar tracking technologies to access or store information. We use the following types of cookies:</p>
            <ul>
              <li>Strictly necessary cookies.</li>
              <li>Performance and analytics cookies.</li>
              <li>Functionality cookies.</li>
              <li>Targeting and advertising cookies.</li>
            </ul>
            <p>You can find out more about your cookie preferences and how to manage them in our Cookie Policy.</p>
          </section>

          <section className="privacy-section">
            <h3>6. HOW WE SHARE INFORMATION</h3>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            
            <h4>A. Service providers and processors</h4>
            <p>We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts.</p>

            <h4>B. Network, datacenter, and connectivity partners</h4>
            <p>In order to provide our routing and connectivity services, we may share certain technical information with our datacenter partners and upstream ISPs. This information is limited to network management, IP routing metrics, and similar data.</p>

            <h4>C. Legal compliance and safety</h4>
            <p>We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</p>
            <p>We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities.</p>

            <h4>D. Business transfers</h4>
            <p>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
          </section>

          <section className="privacy-section">
            <h3>7. DATA RETENTION</h3>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.</p>
            <ul>
              <li>For active accounts, we retain data for the life of the account.</li>
              <li>For inactive accounts, we retain data for up to 3 years.</li>
              <li>Financial transactions are retained for 7 years for tax and accounting purposes.</li>
              <li>Network routing logs are retained for 90 days.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>8. SECURITY</h3>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
          </section>

          <section className="privacy-section">
            <h3>9. INTERNATIONAL TRANSFERS</h3>
            <p>Our servers are located primarily in Europe and the United States. If you are accessing our Services from outside these regions, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information.</p>
          </section>

          <section className="privacy-section">
            <h3>10. YOUR RIGHTS AND CHOICES</h3>
            <p>In some regions, you have certain rights under applicable data protection laws. These may include the right:</p>
            <ul>
              <li>to request access and obtain a copy of your personal information;</li>
              <li>to request rectification or erasure;</li>
              <li>to restrict the processing of your personal information;</li>
              <li>if applicable, to data portability.</li>
            </ul>
            <p>In certain circumstances, you may also have the right to object to the processing of your personal information.</p>
            <p>To make such a request, please contact us using the details provided below.</p>
            <p>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.</p>
          </section>

          <section className="privacy-section">
            <h3>11. CHILDREN'S PRIVACY</h3>
            <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.</p>
          </section>

          <section className="privacy-section">
            <h3>12. THIRD-PARTY LINKS</h3>
            <p>Our Services may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or the content of these third-party websites.</p>
          </section>

          <section className="privacy-section">
            <h3>13. CHANGES TO THIS PRIVACY POLICY</h3>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
          </section>

          <section className="privacy-section">
            <h3>14. CONTACT</h3>
            <p>If you have questions or comments about this policy, you may email us at privacy@byteania.com.</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
