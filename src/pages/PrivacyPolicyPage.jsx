import React from 'react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <main className="page-content privacy-policy-page" style={{ backgroundColor: '#F8F8FA' }}>
        
        <div className="container privacy-hero-container">
          <div className="privacy-hero-card">
            <h1 className="privacy-hero-title text-white">
              Tempest Privacy Policy
            </h1>
            <p className="privacy-hero-date text-gray">
              Last updated: 25 July 2024
            </p>
          </div>
        </div>

        <div className="privacy-content-container">
          <div className="privacy-intro">
            <p style={{ marginBottom: '16px' }}>
              AGX Management Consultancy FZCO (“Tempest,” “we,” “us,” or “our”) values your privacy and is committed to being transparent about how we collect, use, and protect personal information in connection with our website, products, and services (collectively, the “Services”).
            </p>
            <p>
              This Privacy Policy explains what information we collect, why we collect it, how we use it, and the choices you may have. By accessing or using the Services, you acknowledge this Privacy Policy.
            </p>
          </div>

          <section className="privacy-section">
            <h3>1. Scope</h3>
            <p>This Privacy Policy applies to personal information we collect when you:</p>
            <ul>
              <li>Visit our websites or portals that link to this Privacy Policy</li>
              <li>Create an account or place an order</li>
              <li>Use our infrastructure services (including dedicated servers, colocation, networking, and related offerings)</li>
              <li>Contact support, sales, or otherwise communicate with Tempest</li>
            </ul>
            <p>This Privacy Policy does not cover third-party websites, services, or applications that may be linked from our Services.</p>
          </section>

          <section className="privacy-section">
            <h3>2. Information we collect</h3>
            <p>We collect information in three main ways: (a) information you provide, (b) information collected automatically, and (c) information generated in connection with delivering and securing the Services.</p>
            
            <h4>A. Information you provide</h4>
            <ul>
              <li><strong>Account information:</strong> name, company name, email address, phone number, username, and authentication details.</li>
              <li><strong>Billing information:</strong> billing address, tax/VAT details (where applicable), and payment-related identifiers. Payment card details are typically processed by our payment processors rather than stored directly by Tempest.</li>
              <li><strong>Order and service details:</strong> products purchased, service configurations, resource identifiers, and related provisioning information.</li>
              <li><strong>Support and communications:</strong> messages you send to support, sales, abuse, or other Tempest channels, including attachments you provide.</li>
            </ul>

            <h4>B. Information collected automatically</h4>
            <ul>
              <li><strong>Device and usage information:</strong> IP address, browser type, device identifiers, operating system, pages viewed, timestamps, referring/exit pages, and interaction data.</li>
              <li><strong>Cookies and similar technologies:</strong> cookies, pixels, local storage, and similar tools used for core site functionality, security, analytics, and preferences.</li>
            </ul>

            <h4>C. Service, network, and security data</h4>
            <ul>
              <li><strong>Operational logs:</strong> service health and performance logs required to deliver and maintain Services.</li>
              <li><strong>Network and abuse telemetry:</strong> traffic metadata and security logs used to detect, prevent, and respond to fraud, abuse, attacks, or violations of our terms.</li>
              <li><strong>Access logs:</strong> authentication events, administrative actions, and other events associated with account and service access.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>3. How we use information</h3>
            <p>We use personal information for the following purposes:</p>
            <ul>
              <li><strong>Provide and operate Services:</strong> provisioning, authentication, service delivery, account administration, and customer support.</li>
              <li><strong>Billing and transactions:</strong> processing payments, invoicing, collections, and fraud prevention.</li>
              <li><strong>Security and integrity:</strong> monitoring, detecting, preventing, and investigating suspicious activity, abuse, policy violations, and threats to our network.</li>
              <li><strong>Service improvement:</strong> debugging, analytics, product development, and improving performance and user experience.</li>
              <li><strong>Communications:</strong> sending transactional messages, service notices, security alerts, administrative updates, and responding to inquiries.</li>
              <li><strong>Legal and compliance:</strong> meeting legal obligations, enforcing our agreements, protecting rights and property, and addressing disputes.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>4. Legal bases for processing</h3>
            <p>Where required by applicable data protection laws, we rely on one or more of the following legal bases:</p>
            <ul>
              <li><strong>Contractual necessity:</strong> to provide Services you request and administer your account.</li>
              <li><strong>Legitimate interests:</strong> to secure, maintain, and improve our Services; prevent fraud and abuse; and protect our network and customers.</li>
              <li><strong>Consent:</strong> where required for certain cookies or marketing communications; you may withdraw consent at any time.</li>
              <li><strong>Legal obligations:</strong> to comply with applicable laws, regulations, and lawful requests.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>5. Cookies and tracking</h3>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Enable core site functions (login sessions, security protections, account access)</li>
              <li>Remember preferences and settings</li>
              <li>Understand site performance and improve usability</li>
              <li>Help detect fraud and prevent abuse</li>
            </ul>
            <p>You can control cookie behavior through your browser settings. Some cookies are necessary for the Services to function properly; disabling them may impact functionality.</p>
          </section>

          <section className="privacy-section">
            <h3>6. How we share information</h3>
            <p>We may share personal information in the following circumstances:</p>

            <h4>A. Service providers and processors</h4>
            <p>We share information with vendors that help us operate the Services, such as payment processors, cloud/infrastructure providers, support platforms, analytics providers, and security tooling. These providers are authorized to process information only as needed to provide services to Tempest and must protect it consistent with contractual obligations.</p>

            <h4>B. Network, datacenter, and connectivity partners</h4>
            <p>Where necessary to deliver Services (including colocation and connectivity), we may share limited information with datacenters, carriers, or upstream providers, such as service identifiers, routing details, and operational contact information.</p>

            <h4>C. Legal, compliance, and safety</h4>
            <p>We may disclose information if we believe, in good faith, that disclosure is necessary to:</p>
            <ul>
              <li>Comply with law, regulation, legal process, or lawful requests</li>
              <li>Protect the rights, property, and safety of Tempest, our customers, or others</li>
              <li>Investigate and address fraud, abuse, security incidents, or policy violations</li>
            </ul>

            <h4>D. Business transfers</h4>
            <p>If Tempest is involved in a merger, acquisition, reorganization, or sale of assets, information may be transferred as part of that transaction, subject to appropriate confidentiality protections.</p>
            <p>We do not sell personal information in exchange for money. If certain privacy laws define “sale” or “sharing” broadly (for example, in relation to some advertising technologies), you may have rights to opt out as described below.</p>
          </section>

          <section className="privacy-section">
            <h3>7. Data retention</h3>
            <p>We retain personal information for as long as reasonably necessary to:</p>
            <ul>
              <li>Provide the Services and maintain your account</li>
              <li>Meet legal, accounting, and compliance obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain security records and abuse-prevention logs</li>
            </ul>
            <p>Retention periods vary by data type and context. Where feasible, we delete or de-identify information when it is no longer needed.</p>
          </section>

          <section className="privacy-section">
            <h3>8. Security</h3>
            <p>We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, alteration, disclosure, or destruction. However, no system is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="privacy-section">
            <h3>9. International transfers</h3>
            <p>Your information may be processed in countries other than where you live, including where Tempest, our affiliates, or our service providers operate. Where required, we use appropriate safeguards for cross-border transfers.</p>
          </section>

          <section className="privacy-section">
            <h3>10. Your rights and choices</h3>
            <p>Depending on where you live, you may have certain rights, which can include:</p>
            <ul>
              <li>Accessing the personal information we hold about you</li>
              <li>Correcting inaccurate or incomplete information</li>
              <li>Deleting personal information (subject to legal and operational requirements)</li>
              <li>Objecting to or restricting certain processing</li>
              <li>Requesting portability of certain information</li>
              <li>Opting out of certain marketing communications</li>
              <li>Opting out of certain cookie-based tracking (where applicable)</li>
            </ul>
            <p>Marketing emails: You can opt out by using the unsubscribe link in marketing emails. Transactional and service notices may still be sent when necessary.</p>
            <p>To exercise your rights, contact us using the details below. We may request information to verify your identity before fulfilling certain requests.</p>
          </section>

          <section className="privacy-section">
            <h3>11. Children’s privacy</h3>
            <p>The Services are not directed to children, and we do not knowingly collect personal information from children.</p>
          </section>

          <section className="privacy-section">
            <h3>12. Third-party links</h3>
            <p>Our Services may link to third-party websites or tools. Their privacy practices are governed by their own policies, not this Privacy Policy. Review those policies before providing personal information.</p>
          </section>

          <section className="privacy-section">
            <h3>13. Changes to this Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. Updates will be reflected by the “Last updated” date. If changes are material, we may provide additional notice consistent with applicable law. Continued use of the Services after an update means you accept the revised Privacy Policy.</p>
          </section>

          <section className="privacy-section">
            <h3>14. Contact</h3>
            <p>For privacy questions or requests, contact Tempest using the support or contact methods listed on the Tempest website, or email: privacy@tempest.com.</p>
          </section>

        </div>
      </main>
          </>
  );
};

export default PrivacyPolicyPage;
