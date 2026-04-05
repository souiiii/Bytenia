import React from 'react';
import Footer from '../components/Footer/Footer';
import './TermsOfServicePage.css';

const TermsOfServicePage = () => {
  return (
    <>
      <main className="page-content tos-page" style={{ backgroundColor: '#F8F8FA' }}>
        
        <div className="container tos-hero-container">
          <div className="tos-hero-card">
            <h1 className="tos-hero-title text-white">
              Byteania Terms of Service
            </h1>
            <p className="tos-hero-date text-gray">
              Last updated: 25 July 2024
            </p>
          </div>
        </div>

        <div className="tos-content-container">
          <div className="tos-intro">
            <p className="tos-intro-p">
              These Terms of Service (the “Terms”) govern your access to and use of the Byteania website (the “Site”) and any products or services offered through the Site (collectively, the “Services”).
            </p>
            <p className="tos-intro-p">
              The Site and Services are operated by AGX Management Consultancy FZCO (“Byteania,” “we,” “us,” or “our”). By accessing the Site or purchasing, deploying, or using any Services, you agree to be bound by these Terms and any policies referenced here, including the Privacy Policy.
            </p>
            <p className="tos-intro-p">
              If you do not agree to these Terms, do not use the Site or Services.
            </p>
          </div>

          <section className="tos-section">
            <h3>1. Eligibility and account responsibilities</h3>
            <p>You represent that you are legally able to enter into these Terms and that any information you provide is accurate and kept up to date. If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activity under your account.</p>
          </section>

          <section className="tos-section">
            <h3>2. Services and service changes</h3>
            <p>We provide infrastructure and related services, which may include dedicated servers, virtual servers, colocation, networking, security features, and support options. Services may vary by location, product line, and availability.</p>
            <p>We may modify, update, suspend, or discontinue any part of the Services at any time. Where practical, we will provide reasonable notice of material changes that affect active Services.</p>
          </section>

          <section className="tos-section">
            <h3>3. Orders, provisioning, and delivery</h3>
            <p>Provisioning timelines may vary. Any estimated delivery or deployment windows are non-binding. You are responsible for confirming that the Services you order meet your technical requirements prior to purchase.</p>
          </section>

          <section className="tos-section">
            <h3>4. Fees, billing, taxes, and payment methods</h3>
            <p>You agree to pay all fees associated with your order, including recurring fees, usage-based charges (if applicable), setup fees, add-ons, and applicable taxes.</p>
            <p>You authorize us (and our payment processors) to charge your selected payment method for amounts due. If a payment fails, we may suspend or terminate Services until payment is successfully collected.</p>
            <p>Some payment methods may be non-reversible (for example, certain cryptocurrency payments). Where applicable, you acknowledge that refunds, reversals, and chargebacks may not be available or may be restricted for those methods.</p>
          </section>

          <section className="tos-section">
            <h3>5. Refunds</h3>
            <p>If you request a refund due to dissatisfaction, we may provide a refund for payments made within 48 hours of the request in the form of account credit, subject to eligibility. We reserve the right to deny a refund where any of the following apply: violation of these Terms, outgoing DDoS activity, hosting illegal content, participation in attacks on our network, or other conduct we deem unsuitable in our sole discretion.</p>
          </section>

          <section className="tos-section">
            <h3>6. Acceptable Use Policy</h3>
            <p>You may not use the Services to engage in, facilitate, or promote unlawful, harmful, or abusive activity, including (without limitation):</p>
            <ul>
              <li>Unauthorized access, scanning, exploitation, or intrusion attempts.</li>
              <li>Distribution of malware, botnets, credential theft, phishing, or fraud.</li>
              <li>Hosting or distributing illegal content.</li>
              <li>Coordinating or conducting attacks of any kind (including DDoS), or generating traffic that disrupts networks or services.</li>
              <li>Abusive, harassing, or threatening behavior, including targeting our staff, partners, or other customers.</li>
              <li>Any activity that violates applicable laws, regulations, or third-party rights.</li>
            </ul>
            <p>We may suspend or terminate Services immediately if we believe your use creates risk to the network, other customers, third parties, or Byteania.</p>
          </section>

          <section className="tos-section">
            <h3>7. Security and customer responsibilities</h3>
            <p>You are responsible for securing your systems, applications, and credentials, including:</p>
            <ul>
              <li>Keeping operating systems and software up to date.</li>
              <li>Using strong authentication and access controls.</li>
              <li>Maintaining backups and recovery plans.</li>
              <li>Securing applications and configurations you deploy.</li>
            </ul>
            <p>We are not responsible for compromises caused by your applications, credentials, misconfigurations, or third-party software.</p>
          </section>

          <section className="tos-section">
            <h3>8. Network integrity, abuse handling, and enforcement</h3>
            <p>We maintain policies and controls to protect our network and customers. We may rate-limit, filter, null-route, or otherwise mitigate traffic to preserve network stability, including during attack conditions.</p>
            <p>If we receive complaints, abuse reports, or legal notices relating to your use, you agree to cooperate promptly and to remediate issues within the timeframe we specify.</p>
          </section>

          <section className="tos-section">
            <h3>9. Colocation-specific terms</h3>
            <p>For colocation, you are responsible for:</p>
            <ul>
              <li>Hardware ownership, licensing, and compliance.</li>
              <li>Packaging, labeling, and shipping logistics.</li>
              <li>Ensuring your equipment meets datacenter requirements (power draw, dimensions, airflow, safety standards).</li>
            </ul>
            <p>We may refuse equipment that poses safety, compliance, or operational risks.</p>
          </section>

          <section className="tos-section">
            <h3>10. Support</h3>
            <p>Support availability may vary by product. Unless expressly stated otherwise on the Site or in an order form, support is provided on a commercially reasonable basis and may be subject to fair-use limitations.</p>
          </section>

          <section className="tos-section">
            <h3>11. Third-party services</h3>
            <p>Certain components of the Services may rely on third parties (datacenters, carriers, payment processors, software vendors). We are not responsible for third-party failures outside our reasonable control.</p>
          </section>

          <section className="tos-section">
            <h3>12. Intellectual property</h3>
            <p>The Site, branding, and all related content and materials are owned by or licensed to Byteania and are protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer the Site or Services except as expressly permitted by law or in writing by Byteania.</p>
          </section>

          <section className="tos-section">
            <h3>13. Customer content and data</h3>
            <p>You retain all rights in your content and data. You grant Byteania a limited license to host, process, and transmit your data solely to provide the Services, maintain security, and comply with legal obligations.</p>
          </section>

          <section className="tos-section">
            <h3>14. Suspension and termination</h3>
            <p>We may suspend or terminate Services immediately for:</p>
            <ul>
              <li>Non-payment,</li>
              <li>Violations of these Terms,</li>
              <li>Network abuse or security risk,</li>
              <li>Legal or regulatory requirements,</li>
              <li>Actions that materially impact service integrity.</li>
            </ul>
            <p>Upon termination, your access ends and you remain responsible for outstanding balances. Data deletion and retention are addressed in the Privacy Policy and/or any applicable data handling terms.</p>
          </section>

          <section className="tos-section">
            <h3>15. Disclaimers</h3>
            <p>The Site and Services are provided on an “as is” and “as available” basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section className="tos-section">
            <h3>16. Limitation of liability</h3>
            <p>To the maximum extent permitted by law, Byteania will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, or goodwill, arising from or related to your use of the Services.</p>
            <p>Byteania’s total liability for any claim will not exceed the amount you paid to Byteania for the affected Service during the three (3) months preceding the event giving rise to the claim.</p>
          </section>

          <section className="tos-section">
            <h3>17. Indemnification</h3>
            <p>You agree to defend, indemnify, and hold harmless Byteania, its affiliates, and its personnel from claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your use of the Services, your content, or your violation of these Terms or applicable law.</p>
          </section>

          <section className="tos-section">
            <h3>18. Governing law and disputes</h3>
            <p>These Terms are governed by the laws applicable to AGX Management Consultancy FZCO, without regard to conflict of law principles. Venue and dispute procedures will be as permitted and required by applicable law, and may be further specified in ordering documentation where relevant.</p>
          </section>

          <section className="tos-section">
            <h3>19. Changes to these Terms</h3>
            <p>We may update these Terms from time to time. Continued use of the Site or Services after changes become effective constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="tos-section">
            <h3>20. Contact</h3>
            <p>For questions about these Terms, contact us using the support or contact methods listed on the Site.</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
