import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Upfreights',
  description: 'Upfreights terms of service. Read our terms and conditions for using our freight forwarding services.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Terms of Service
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
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using Upfreights services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-6">
              Upfreights provides international freight forwarding services including sea freight, air freight, door-to-door delivery, and customs clearance assistance. We act as an intermediary between shippers and carriers to facilitate the transportation of goods.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information about your shipments</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Ensure that goods shipped are legal and not prohibited</li>
              <li>Properly package and label all shipments</li>
              <li>Pay all fees and charges associated with your shipments</li>
              <li>Obtain any necessary licenses, permits, or certifications</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Prohibited Items</h2>
            <p className="text-muted-foreground mb-4">The following items are prohibited from shipment:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Illegal substances and controlled drugs</li>
              <li>Weapons and ammunition</li>
              <li>Hazardous materials (without proper documentation)</li>
              <li>Counterfeit goods</li>
              <li>Live animals (without proper permits)</li>
              <li>Items prohibited by destination country</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Quotes and Pricing</h2>
            <p className="text-muted-foreground mb-6">
              All quotes provided are estimates based on the information you provide. Final charges may vary based on actual dimensions, weight, and other factors. Quotes are valid for the time period specified and are subject to change.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment terms will be specified in your service agreement. We accept various payment methods. Late payments may incur additional fees and may result in suspension of services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Liability Limitations</h2>
            <p className="text-muted-foreground mb-4">
              Our liability for loss or damage to goods is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Sea freight: Limited by applicable maritime conventions</li>
              <li>Air freight: Limited by Warsaw/Montreal Convention</li>
              <li>Additional cargo insurance is recommended for valuable shipments</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              We are not liable for delays caused by weather, customs, carrier issues, or other circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Insurance</h2>
            <p className="text-muted-foreground mb-6">
              We strongly recommend purchasing cargo insurance for all shipments. We can assist you in obtaining appropriate coverage. Without insurance, your recovery for loss or damage may be significantly limited.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Customs and Documentation</h2>
            <p className="text-muted-foreground mb-6">
              You are responsible for ensuring all customs documentation is accurate and complete. We provide assistance with customs clearance but are not responsible for delays or penalties resulting from incorrect or incomplete documentation.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">10. Claims</h2>
            <p className="text-muted-foreground mb-6">
              Claims for loss or damage must be submitted in writing within 7 days of delivery for visible damage or 14 days for concealed damage. Claims not submitted within these timeframes may be denied.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground mb-6">
              You agree to indemnify and hold Upfreights harmless from any claims, damages, or expenses arising from your use of our services, including claims related to the nature of goods shipped.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to refuse service or terminate relationships with customers who violate these terms or engage in conduct detrimental to our business.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms of Service shall be governed by and construed in accordance with applicable international trade laws and the laws of the People&apos;s Republic of China.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us:
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
