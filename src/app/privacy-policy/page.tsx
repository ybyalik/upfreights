import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Database, Share2, Lock, UserCheck, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | UpFreights',
  description: 'UpFreights privacy policy. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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

            {/* Information We Collect */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-copper" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                    <p className="text-muted-foreground mb-4">
                      When you request shipping quotes or use our services, we collect:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Name and contact information (email, phone number, address)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Company name and business details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Shipping and cargo information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Payment and billing information
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Automatically Collected Information</h3>
                    <p className="text-muted-foreground mb-4">
                      We automatically collect certain information when you visit our website:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        IP address and location data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Browser type and version
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Pages visited and time spent on site
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0" />
                        Referring website information
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                We use your personal information for the following purposes:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Provide freight forwarding services',
                  'Process shipping quotes and bookings',
                  'Communicate about shipments and services',
                  'Process payments and billing',
                  'Improve our website and services',
                  'Comply with legal obligations',
                  'Send marketing communications (with consent)',
                  'Prevent fraud and ensure security',
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

            {/* Information Sharing and Disclosure */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate/10 flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-slate" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Information Sharing and Disclosure</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>

              <div className="space-y-4">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Service Providers</h3>
                    <p className="text-muted-foreground">
                      We share information with shipping carriers, customs brokers, and other logistics partners necessary to fulfill your shipping requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground">
                      We may disclose information when required by law, court order, or to protect our rights and safety.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Business Transfers</h3>
                    <p className="text-muted-foreground">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-copper" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'SSL encryption for data transmission',
                  'Secure database storage',
                  'Regular security audits',
                  'Access controls and authentication',
                  'Employee training on data protection',
                  'Incident response procedures',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-copper/5 rounded-lg border border-copper/10">
                    <Lock className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Your Rights and Choices</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                You have the following rights regarding your personal information:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    number: '1',
                    title: 'Access and Portability',
                    description: 'Request a copy of your personal information we hold',
                  },
                  {
                    number: '2',
                    title: 'Correction',
                    description: 'Request correction of inaccurate or incomplete information',
                  },
                  {
                    number: '3',
                    title: 'Deletion',
                    description: 'Request deletion of your personal information (subject to legal obligations)',
                  },
                  {
                    number: '4',
                    title: 'Opt-out',
                    description: 'Unsubscribe from marketing communications at any time',
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us About Privacy */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-slate" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Contact Us About Privacy</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="h-5 w-5 text-copper" />
                      <h3 className="font-semibold text-foreground">Email</h3>
                    </div>
                    <p className="text-muted-foreground">quote@upfreights.com</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-5 w-5 text-copper" />
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                    </div>
                    <p className="text-muted-foreground">We respond to privacy requests within 30 days</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Updates Notice */}
            <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Updates to This Policy:</strong> We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website with a new effective date.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
