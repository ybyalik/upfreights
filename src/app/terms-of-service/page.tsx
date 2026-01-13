import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Package, Users, DollarSign, AlertTriangle, Shield, Ban, Settings, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | UpFreights',
  description: 'UpFreights terms of service. Please read these terms carefully before using our freight forwarding services.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-white/80 mb-4">
              Please read these terms carefully before using our freight forwarding services.
            </p>
            <p className="text-white/60">
              Last Updated: January 25, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Acceptance of Terms */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-copper" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
              </div>

              <p className="text-muted-foreground mb-4">
                By accessing and using Upfreights.com&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our freight forwarding, logistics, and related services.
              </p>

              <div className="bg-copper/5 border border-copper/20 rounded-lg p-4">
                <p className="text-foreground font-medium">
                  <strong>Important:</strong> If you do not agree to abide by these Terms of Service, you are not authorized to use or access our services.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Service Description</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                Upfreights.com provides freight forwarding and logistics services including:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'International air freight services',
                  'Ocean freight and container shipping',
                  'Customs clearance assistance',
                  'Documentation preparation',
                  'Cargo insurance arrangements',
                  'Door-to-door delivery coordination',
                  'Supply chain consulting',
                  'Warehousing and distribution',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center text-xs font-semibold text-teal">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">User Responsibilities</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                As a user of our services, you agree to:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Accurate Information</h3>
                    <p className="text-muted-foreground">
                      Provide accurate, complete, and current information about your shipments, including cargo descriptions, values, and destinations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Legal Compliance</h3>
                    <p className="text-muted-foreground">
                      Ensure all cargo complies with applicable laws, regulations, and restrictions for import/export in origin and destination countries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Documentation</h3>
                    <p className="text-muted-foreground">
                      Provide all required documentation in a timely manner, including commercial invoices, packing lists, and any special permits or licenses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Payment Terms</h3>
                    <p className="text-muted-foreground">
                      Pay all charges and fees according to agreed payment terms and schedules.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing and Payment Terms */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-copper" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Pricing and Payment Terms</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Service Fees</h3>
                    <p className="text-muted-foreground mb-4">
                      All service fees are quoted based on current market rates and may be subject to change due to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Fuel surcharges and currency fluctuations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Peak season or capacity constraints
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Additional services or special handling requirements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Changes in carrier rates or government fees
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Payment Terms</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">New Customers:</h4>
                        <p className="text-muted-foreground">Payment required before service</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Established Customers:</h4>
                        <p className="text-muted-foreground">Net 30 days with approved credit</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              </div>

              <div className="bg-teal/5 border border-teal/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Important Limitation</h3>
                <p className="text-muted-foreground mb-4">
                  Our liability for loss or damage to cargo is limited to the lesser of:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    The actual value of the goods
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    $2.00 per kilogram for air freight
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    $2.00 per kilogram or $500 per package for ocean freight
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    The amount covered by insurance (if purchased)
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground mb-4">
                We strongly recommend purchasing cargo insurance for full protection of your shipments. We are not liable for indirect, consequential, or special damages including lost profits or business interruption.
              </p>

              <p className="text-muted-foreground">
                <strong className="text-foreground">Claims:</strong> All claims must be reported in writing within 9 months of delivery or the date when delivery should have occurred.
              </p>
            </div>

            {/* Prohibited and Restricted Items */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Ban className="h-6 w-6 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Prohibited and Restricted Items</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                We do not ship the following prohibited items:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-red-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Dangerous Goods (without proper certification)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        Explosives and flammable materials
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        Toxic and corrosive substances
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        Radioactive materials
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        Compressed gases
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Restricted Items</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        Perishable food items
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        Live animals and plants
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        Illegal substances
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        Counterfeit goods
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-muted-foreground">
                Contact us for guidance on shipping special or regulated items that may require additional permits or handling procedures.
              </p>
            </div>

            {/* Termination and Modification */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate/10 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-slate" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Termination and Modification</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Service Termination</h3>
                    <p className="text-muted-foreground mb-4">
                      We reserve the right to refuse or terminate service for any reason, including but not limited to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2 flex-shrink-0" />
                        Violation of these terms of service
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2 flex-shrink-0" />
                        Non-payment of fees or charges
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2 flex-shrink-0" />
                        Providing false or misleading information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2 flex-shrink-0" />
                        Shipping prohibited or restricted items
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Terms Modification</h3>
                    <p className="text-muted-foreground">
                      We may modify these Terms of Service at any time. Updated terms will be posted on our website with a new effective date. Continued use of our services constitutes acceptance of the modified terms.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Questions About These Terms */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-copper" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Questions About These Terms</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                If you have questions about these Terms of Service or need clarification on any provision, please contact us:
              </p>

              <Card className="border-border/50 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-5 w-5 text-copper" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <p className="text-muted-foreground">quote@upfreights.com</p>
                </CardContent>
              </Card>
            </div>

            {/* Governing Law Notice */}
            <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Governing Law:</strong> These Terms of Service are governed by and construed in accordance with applicable international trade laws and regulations. Any disputes will be resolved through binding arbitration.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
