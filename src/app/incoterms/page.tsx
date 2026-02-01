import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Ship, Truck, Plane, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Incoterms 2020 Guide | International Trade Terms Explained',
  description: 'Complete guide to Incoterms 2020. Understand EXW, FOB, CIF, DDP and all international commercial terms for shipping from China. Learn seller and buyer responsibilities.',
  alternates: {
    canonical: '/incoterms',
  },
  openGraph: {
    title: 'Incoterms 2020 Guide | UpFreights',
    description: 'Complete guide to Incoterms 2020. Understand all international commercial terms for shipping from China.',
  },
};

const incoterms = [
  {
    abbreviation: 'EXW',
    fullExpression: 'Ex Works',
    description: '"Ex Works" means that the seller delivers when it places the goods at the disposal of the buyer at the seller\'s premises or at another named place (i.e., works, factory, warehouse, etc.). The seller does not need to load the goods on any collecting vehicle, nor does it need to clear the goods for export, where such clearance is applicable.',
    mode: 'any',
    link: '/incoterms/exw',
  },
  {
    abbreviation: 'FCA',
    fullExpression: 'Free Carrier',
    description: '"Free Carrier" means that the seller delivers the goods to the carrier or another person nominated by the buyer at the seller\'s premises or another named place. The parties are well advised to specify as clearly as possible the point within the named place of delivery, as the risk passes to the buyer at that point.',
    mode: 'any',
    link: '/incoterms/fca',
  },
  {
    abbreviation: 'CPT',
    fullExpression: 'Carriage Paid To',
    description: '"Carriage Paid To" means that the seller delivers the goods to the carrier or another person nominated by the seller at an agreed place (if any such place is agreed between parties) and that the seller must contract for and pay the costs of carriage necessary to bring the goods to the named place of destination.',
    mode: 'any',
    link: '/incoterms/cpt',
  },
  {
    abbreviation: 'CIP',
    fullExpression: 'Carriage And Insurance Paid To',
    description: '"Carriage and Insurance Paid to" means that the seller delivers the goods to the carrier or another person nominated by the seller at an agreed place (if any such place is agreed between parties) and that the seller must contract for and pay the costs of carriage necessary to bring the goods to the named place of destination. The seller also contracts for insurance cover against the buyer\'s risk of loss of or damage to the goods during the carriage. The buyer should note that under CIP the seller is required to obtain insurance only on minimum cover. Should the buyer wish to have more insurance protection, it will need either to agree as much expressly with the seller or to make its own extra insurance arrangements.',
    mode: 'any',
    link: '/incoterms/cip',
  },
  {
    abbreviation: 'DAP',
    fullExpression: 'Delivered At Place',
    description: '"Delivered at Place" means that the seller delivers when the goods are placed at the disposal of the buyer on the arriving means of transport ready for unloading at the named place of destination. The seller bears all risks involved in bringing the goods to the named place.',
    mode: 'any',
    link: '/incoterms/dap',
  },
  {
    abbreviation: 'DPU',
    fullExpression: 'Delivered at Place Unloaded',
    description: '"Delivered at Place Unloaded" means that the seller delivers when the goods, once unloaded from the arriving means of transport, are placed at the disposal of the buyer at a named place of destination. The seller bears all risks involved in bringing the goods to and unloading them at the named place of destination.',
    mode: 'any',
    link: '/incoterms/dpu',
  },
  {
    abbreviation: 'DDP',
    fullExpression: 'Delivered Duty Paid',
    description: '"Delivered Duty Paid" means that the seller delivers the goods when the goods are placed at the disposal of the buyer, cleared for import on the arriving means of transport ready for unloading at the named place of destination. The seller bears all the costs and risks involved in bringing the goods to the place of destination and has an obligation to clear the goods not only for export but also for import, to pay any duty for both export and import and to carry out all customs formalities.',
    mode: 'any',
    link: '/incoterms/ddp',
  },
  {
    abbreviation: 'FAS',
    fullExpression: 'Free Alongside Ship',
    description: '"Free Alongside Ship" means that the seller delivers when the goods are placed alongside the vessel (e.g., on a quay or a barge) nominated by the buyer at the named port of shipment. The risk of loss of or damage to the goods passes when the goods are alongside the ship, and the buyer bears all costs from that moment onwards.',
    mode: 'sea',
    link: '/incoterms/fas',
  },
  {
    abbreviation: 'FOB',
    fullExpression: 'Free On Board',
    description: '"Free On Board" means that the seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment or procures the goods already so delivered. The risk of loss of or damage to the goods passes when the goods are on board the vessel, and the buyer bears all costs from that moment onwards.',
    mode: 'sea',
    link: '/incoterms/fob',
  },
  {
    abbreviation: 'CFR',
    fullExpression: 'Cost and Freight',
    description: '"Cost and Freight" means that the seller delivers the goods on board the vessel or procures the goods already so delivered. The risk of loss of or damage to the goods passes when the goods are on board the vessel. The seller must contract for and pay the costs and freight necessary to bring the goods to the named port of destination.',
    mode: 'sea',
    link: '/incoterms/cfr',
  },
  {
    abbreviation: 'CIF',
    fullExpression: 'Cost, Insurance and Freight',
    description: '"Cost, Insurance and Freight" means that the seller delivers the goods on board the vessel or procures the goods already so delivered. The risk of loss of or damage to the goods passes when the goods are on board the vessel. The seller must contract for and pay the costs and freight necessary to bring the goods to the named port of destination. The seller also contracts for insurance cover against the buyer\'s risk of loss of or damage to the goods during the carriage. The buyer should note that under CIF the seller is required to obtain insurance only on minimum cover. Should the buyer wish to have more insurance protection, it will need either to agree as much expressly with the seller or to make its own extra insurance arrangements.',
    mode: 'sea',
    link: '/incoterms/cif',
  },
];

const anyModeTerms = incoterms.filter(term => term.mode === 'any');
const seaTerms = incoterms.filter(term => term.mode === 'sea');

export default function IncotermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-orange" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Incoterms 2020 Guide
              </h1>
            </div>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Understanding Incoterms is essential for international trade. These standardized terms define the responsibilities of buyers and sellers for the delivery of goods under sales contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Incoterms (International Commercial Terms) are a set of pre-defined commercial terms published by the International Chamber of Commerce (ICC). They are widely used in international commercial transactions to clearly communicate the tasks, costs, and risks associated with the transportation and delivery of goods.
              </p>
              <p>
                The Incoterms 2020 rules are divided into two categories: terms for any mode of transport and terms specifically for sea and inland waterway transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Any Mode of Transport Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-orange" />
                <Ship className="h-6 w-6 text-orange" />
                <Plane className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Rules for Any Mode of Transport
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              These Incoterms can be used regardless of the mode of transport selected and whether one or more modes of transport are used.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold w-24">Abbreviation</th>
                    <th className="px-4 py-4 text-left font-semibold w-48">Full Expression</th>
                    <th className="px-4 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {anyModeTerms.map((term, index) => (
                    <tr
                      key={term.abbreviation}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-bold text-orange">
                        {term.link ? (
                          <Link href={term.link} className="hover:underline flex items-center gap-1">
                            {term.abbreviation}
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        ) : (
                          term.abbreviation
                        )}
                      </td>
                      <td className="px-4 py-4 font-medium text-foreground">{term.fullExpression}</td>
                      <td className="px-4 py-4 text-muted-foreground text-sm">{term.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sea Transport Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Ship className="h-6 w-6 text-ocean" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Rules for Sea and Inland Waterway Transport
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              These Incoterms should only be used when the goods are delivered on board a vessel (or in the case of FAS, alongside the vessel) at the port of shipment.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="px-4 py-4 text-left font-semibold w-24">Abbreviation</th>
                    <th className="px-4 py-4 text-left font-semibold w-48">Full Expression</th>
                    <th className="px-4 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {seaTerms.map((term, index) => (
                    <tr
                      key={term.abbreviation}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-bold text-ocean">
                        {term.link ? (
                          <Link href={term.link} className="hover:underline flex items-center gap-1">
                            {term.abbreviation}
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        ) : (
                          term.abbreviation
                        )}
                      </td>
                      <td className="px-4 py-4 font-medium text-foreground">{term.fullExpression}</td>
                      <td className="px-4 py-4 text-muted-foreground text-sm">{term.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Common Terms for China Shipping */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Most Common Incoterms for Shipping from China
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange mb-2">FOB</div>
                  <h3 className="font-semibold text-foreground mb-3">Free On Board</h3>
                  <p className="text-sm text-muted-foreground">
                    The most commonly used term for sea freight from China. The seller is responsible for delivering goods on board the vessel at the named port. Risk transfers to the buyer once goods are on board.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange mb-2">CIF</div>
                  <h3 className="font-semibold text-foreground mb-3">Cost, Insurance and Freight</h3>
                  <p className="text-sm text-muted-foreground">
                    Popular for buyers who want the seller to arrange shipping and basic insurance. The seller pays freight and insurance to the destination port, but risk transfers when goods are loaded.
                  </p>
                </CardContent>
              </Card>

              <Link href="/incoterms/exw" className="block">
                <Card className="border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-orange mb-2 flex items-center justify-between">
                      EXW
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">Ex Works</h3>
                    <p className="text-sm text-muted-foreground">
                      Minimum obligation for the seller. The buyer arranges everything from the seller&apos;s premises. Often used when the buyer has strong logistics capabilities in China.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange mb-2">DDP</div>
                  <h3 className="font-semibold text-foreground mb-3">Delivered Duty Paid</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximum obligation for the seller. The seller handles everything including import customs and duties. Ideal for buyers who want a hassle-free delivered price.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Need Help Choosing the Right Incoterm?"
        description="Our freight experts can advise on the best Incoterms for your specific shipping needs from China. Get a quote with your preferred terms."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
