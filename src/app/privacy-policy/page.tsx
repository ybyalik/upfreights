import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Upfreights',
  description: 'Upfreights privacy policy. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              Upfreights (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website upfreights.com or use our freight forwarding services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect information about you in a variety of ways:</p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Data</h3>
            <p className="text-muted-foreground mb-4">
              When you request a quote or use our services, we collect personally identifiable information such as your name, email address, phone number, company name, and shipping details.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Usage Data</h3>
            <p className="text-muted-foreground mb-6">
              We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide, operate, and maintain our freight forwarding services</li>
              <li>Process and fulfill your shipping requests</li>
              <li>Send you quotes, invoices, and service-related communications</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Improve our website and services</li>
              <li>Send marketing and promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
            <p className="text-muted-foreground mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Shipping carriers and logistics partners to fulfill your shipments</li>
              <li>Customs authorities as required for international shipping</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> info@upfreights.com<br />
              <strong>Phone:</strong> +86-573-82600785<br />
              <strong>Address:</strong> Room 1106, Fuyue Building, No.28 Zhonghuan West Road, Jiaxing, China 314000
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
