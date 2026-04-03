import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './TermsOfServicePage.css';

const TermsOfServicePage = () => {
  return (
    <>
      <Navbar />
      <main className="page-content tos-page" style={{ backgroundColor: '#fcfcfc' }}>
        
        <div className="container tos-hero-container">
          <div className="tos-hero-card">
            <h1 className="h1 text-white" style={{ marginBottom: '16px' }}>
              Byteania Terms of Service
            </h1>
            <p className="text-gray" style={{ fontSize: '0.9rem' }}>
              Last updated: 25 July 2024
            </p>
          </div>
        </div>

        <div className="tos-content-container">
          <div className="tos-intro">
            <p className="tos-intro-p">
              These Terms of Service ("Terms") govern your access to and use of Byteania's standard services, including our web platform, APIs, colocation, and networking solutions.
            </p>
            <p className="tos-intro-p">
              By clicking "I Agree," by creating a Byteania account, or by using our Services, you agree to these Terms. If you are accepting these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
            </p>
            <p className="tos-intro-p">
              If you don't agree with these Terms, you may not use our Services.
            </p>
          </div>

          <section className="tos-section">
            <h3>1. ELIGIBILITY AND ACCOUNT RESPONSIBILITIES</h3>
            <p>You must be at least 18 years old to use the Services. You are responsible for all activities that occur under your account and for maintaining the security of your account credentials. You must notify us immediately of any unauthorized access to your account.</p>
          </section>

          <section className="tos-section">
            <h3>2. SERVICES AND SERVICE CHANGES</h3>
            <p>Byteania delivers compute, networking, and colocation services as described on our pricing pages and system documentation. Service availability relies on upstream internet routing and hardware functionality.</p>
            <p>We continually strive to improve our Services. We may add, alter, or remove functionality from a Service at any time without prior notice. We may also limit, suspend, or discontinue a Service at our discretion.</p>
          </section>

          <section className="tos-section">
            <h3>3. ORDERS, PROVISIONING, AND DELIVERY</h3>
            <p>The delivery time for specific services varies depending on requested hardware configurations, stock availability, and data center locations. Byteania generally provisions standard configurations within one hour of payment clearance.</p>
          </section>

          <section className="tos-section">
            <h3>4. FEES, BILLING, TAXES, AND PAYMENT METHODS</h3>
            <p>All fees are displayed in United States Dollars (USD) unless otherwise explicitly specified. You must pay all applicable fees relative to your account services.</p>
            <p>We bill in advance for most services. Byteania utilizes third-party payment infrastructure via Stripe and PayPal. We do not natively process, handle, or retain complete credit card numbers on our infrastructure.</p>
            <p>Overdue payments may result in the suspension of your services. Accounts carrying balances past due for more than 7 consecutive days are strictly subject to automated suspension, and eventually permanent data termination, without further notice.</p>
          </section>

          <section className="tos-section">
            <h3>5. REFUNDS</h3>
            <p>Byteania does not generally offer refunds for operational servers unless the service rendered significantly deviates from the specifications originally provisioned, or experiences extensive downtime breaching our stated uptime SLA. All colocation, customized IP transit, and dedicated server deployments are universally restricted from standard refunds due to the immediate resource and bandwidth allocation overheads incurred.</p>
          </section>

          <section className="tos-section">
            <h3>6. ACCEPTABLE USE POLICY</h3>
            <p>You agree not to use the Services in a manner that:</p>
            <ul>
              <li>Violates any local, state, national, or international law or regulation.</li>
              <li>Infringes on or violates any intellectual property rights or any other rights of anyone else.</li>
              <li>Distributes malware, phishing campaigns, or spam.</li>
              <li>Conducts denial of service (DoS) attacks, network scanning, or unauthorized probing of our architecture or any third party.</li>
              <li>Facilitates the hosting of child sexual abuse material (CSAM), unregulated weapons, or illicit narcotics.</li>
              <li>Involves automated cryptocurrency mining outside of explicitly authorized enterprise hardware.</li>
            </ul>
            <p>We reserve the right to immediately suspend or terminate your account if we determine, in our sole discretion, that you violated our Acceptable Use Policy.</p>
          </section>

          <section className="tos-section">
            <h3>7. SECURITY AND CUSTOMER RESPONSIBILITIES</h3>
            <p>You are strictly responsible for implementing appropriate security measures for your environment, including:</p>
            <ul>
              <li>Operating system upgrades and dependency patching</li>
              <li>Firewalls, access control lists, and network hardening</li>
              <li>SSL/TLS implementation and renewals</li>
              <li>Local application penetration testing and debugging</li>
            </ul>
            <p>Byteania is expressly not responsible for breaches, data loss, or system compromise resulting from your software architecture.</p>
          </section>

          <section className="tos-section">
            <h3>8. NETWORK INTEGRITY, ABUSE HANDLING, AND ENFORCEMENT</h3>
            <p>Our specialized abuse monitoring algorithms analyze network heuristics to detect anomalies indicating outbound DoS campaigns, sustained port scanning, or SSH bruteforcing originating from your instances.</p>
            <p>Any IP ranges associated with your servers caught conducting hostile activity towards external infrastructure will be immediately null-routed over BGP to preserve routing integrity, triggering account lockouts.</p>
          </section>

          <section className="tos-section">
            <h3>9. COLOCATION SPECIFIC TERMS</h3>
            <p>If you are deploying hardware to our data center facilities:</p>
            <ul>
              <li>You must carry comprehensive insurance for your specific hardware.</li>
              <li>Only registered, pre-authorized technicians are permitted physical access.</li>
              <li>Hardware not retrieved within 30 days of contract termination will be classified as abandoned and responsibly recycled.</li>
            </ul>
            <p>Please carefully review the full Colocation Matrix Addendum explicitly issued with your contract for detailed limits.</p>
          </section>

          <section className="tos-section">
            <h3>10. SUPPORT</h3>
            <p>Our support teams utilize internal ticketing matrices for assistance mapping. We are not responsible for application-level troubleshooting, debugging your operating system modules, or modifying software environments you mount to our servers.</p>
          </section>

          <section className="tos-section">
            <h3>11. THIRD-PARTY SERVICES</h3>
            <p>Our Services may incorporate links to or integrations with third-party products. We don't endorse, and are not responsible for the functionality, architecture, or data handling practices of these third-party platforms.</p>
          </section>

          <section className="tos-section">
            <h3>12. INTELLECTUAL PROPERTY</h3>
            <p>You retain all rights to any underlying data, applications, and architecture you deploy via Byteania hardware. Byteania retains all rights, title, and interest in and to our Services, including the platforms, network configurations, global infrastructure, logos, and underlying proprietary software.</p>
          </section>

          <section className="tos-section">
            <h3>13. CUSTOMER CONTENT AND DATA</h3>
            <p>Byteania does not inspect, modify, or assume ownership over any data structures you route or mount via our architecture. You are entirely responsible for backing up your data to external redundant locations.</p>
          </section>

          <section className="tos-section">
            <h3>14. SUSPENSION AND TERMINATION</h3>
            <p>We reserve the absolute right to suspend or terminate your access to the Services if:</p>
            <ul>
              <li>You breach these Terms</li>
              <li>You fail to pay any undisputed invoices</li>
              <li>We determine your use of the Services poses a security risk</li>
              <li>We are required to do so by applicable law</li>
              <li>Your use of the Services negatively impacts our network capacity or causes disruption to other clients.</li>
            </ul>
            <p>Upon termination, your account data will be permanently wiped from our storage architectures. Byteania fundamentally assumes no liability for the resultant destruction of active application environments.</p>
          </section>

          <section className="tos-section">
            <h3>15. DISCLAIMERS</h3>
            <p>The Services are provided "as is" and "as available". We make no warranties, express or implied, regarding the Services, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section className="tos-section">
            <h3>16. LIMITATION OF LIABILITY</h3>
            <p>To the maximum extent permitted by applicable law, in no event will Byteania be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
            <p>Our aggregate liability arising out of or relating to these Terms or the Services will not exceed the greater of $100 or the amount you have paid us in the past twelve months relative to the specific service module associated with your dispute.</p>
          </section>

          <section className="tos-section">
            <h3>17. INDEMNIFICATION</h3>
            <p>You agree to indemnify and hold Byteania, its officers, directors, employees, and agents from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with your access to or use of the Services, your Content, or your violation of these Terms.</p>
          </section>

          <section className="tos-section">
            <h3>18. GOVERNING LAW AND DISPUTES</h3>
            <p>These Terms are governed by and construed in accordance with the laws of the State of Delaware, without giving effect to any conflict of law principles. Any dispute or claim arising out of or relating to these Terms or the Services will be resolved by binding arbitration in Wilmington, Delaware.</p>
          </section>

          <section className="tos-section">
            <h3>19. CHANGES TO THESE TERMS</h3>
            <p>We may modify these Terms at any time. We will provide notice of any material changes via email or system dashboards. By continuing to use the Services after the effective date of any modifications to these Terms, you agree to be bound by the modified Terms.</p>
          </section>

          <section className="tos-section">
            <h3>20. CONTACT</h3>
            <p>If you have any questions or concerns about these Terms, please contact us at legal@byteania.com.</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
