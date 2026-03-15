import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  Globe,
  Ship,
  Anchor,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Shipping Companies And Routes From China To Worldwide | Complete Guide | Upfreights',
  description: 'Complete guide to global shipping routes from China covering North America, Europe, South America, Africa, Middle East, Asia-Pacific. Learn about the best shipping companies and base ports for each destination.',
  alternates: {
    canonical: '/shipping-routes-china',
  },
  openGraph: {
    title: 'Shipping Companies And Routes From China To Worldwide | Complete Guide',
    description: 'Complete guide to global shipping routes from China covering North America, Europe, South America, Africa, Middle East, Asia-Pacific.',
  },
};

export default function ShippingRoutesWorldwidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Route Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Globe className="h-4 w-4 text-orange" />
              <span>Global Shipping Routes</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Shipping Companies And Routes From China To Worldwide
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Complete guide to global shipping routes from China covering North America, Europe, South America, Africa, Middle East, Asia-Pacific and more. Learn about the best shipping companies, base ports, and routing options for each destination.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Routes Covered</span>
                <p className="text-white font-semibold">15 Major Regions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Ports Listed</span>
                <p className="text-white font-semibold">150+ Destinations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Carriers</span>
                <p className="text-white font-semibold">20+ Shipping Lines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Navigating international shipping from China requires understanding the complex network of routes, ports, and shipping companies that connect Chinese manufacturers to markets worldwide. This comprehensive guide breaks down every major shipping corridor, helping you choose the right carriers and routes for your cargo.
              </p>

              {/* Table of Contents */}
              <Card className="mb-12 border-teal/30 bg-teal/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <a href="#no-1-china-to-us-and-canada" className="text-teal hover:text-teal-light">1. US & Canada Routes</a>
                    <a href="#no-2-central-south-america-caribbean" className="text-teal hover:text-teal-light">2. Central/South America & Caribbean</a>
                    <a href="#no-3-south-american-routes" className="text-teal hover:text-teal-light">3. South American Routes</a>
                    <a href="#no-4-european-routes" className="text-teal hover:text-teal-light">4. European Routes</a>
                    <a href="#no-5-mediterranean-east-black-sea" className="text-teal hover:text-teal-light">5. Mediterranean East & Black Sea</a>
                    <a href="#no-6-mediterranean-west" className="text-teal hover:text-teal-light">6. Mediterranean West</a>
                    <a href="#no-7-middle-east-red-sea" className="text-teal hover:text-teal-light">7. Middle East Red Sea</a>
                    <a href="#no-8-north-africa" className="text-teal hover:text-teal-light">8. North Africa</a>
                    <a href="#no-9-west-africa" className="text-teal hover:text-teal-light">9. West Africa</a>
                    <a href="#no-10-east-africa" className="text-teal hover:text-teal-light">10. East Africa</a>
                    <a href="#no-11-south-africa" className="text-teal hover:text-teal-light">11. South Africa</a>
                    <a href="#no-12-korea-japan" className="text-teal hover:text-teal-light">12. Korea & Japan</a>
                    <a href="#no-13-southeast-asia" className="text-teal hover:text-teal-light">13. Southeast Asia</a>
                    <a href="#no-14-india-pakistan-bangladesh" className="text-teal hover:text-teal-light">14. India/Pakistan/Bangladesh</a>
                    <a href="#no-15-australia-new-zealand" className="text-teal hover:text-teal-light">15. Australia & New Zealand</a>
                  </div>
                </CardContent>
              </Card>

              {/* Route 1: US and Canada */}
              <div id="no-1-china-to-us-and-canada" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">1</span>
                  China to US and Canada Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  We can also call it the North American route, which includes Canada and the United States, which in turn span the Atlantic and the Pacific. It can also be divided into the US East route / US West route.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">US West Base Ports</h4>
                      <p className="text-sm text-muted-foreground mb-2"><strong>US:</strong> LOS ANGELES, LONG BEACH, OAKLAND, SEATTLE, SAN FRANCISCO, TACOMA</p>
                      <p className="text-sm text-muted-foreground"><strong>Canada:</strong> VANCOUVER</p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">US East Base Ports</h4>
                      <p className="text-sm text-muted-foreground mb-2"><strong>US:</strong> NEW YORK, NORFOLK, SAVANNAH, NEWARK, CHARLESTON, MIAMI</p>
                      <p className="text-sm text-muted-foreground"><strong>Canada:</strong> TORONTO, MONTREAL</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-muted-foreground mb-4">
                  In many inland points in the United States and Canada, and sometimes in the East Coast ports, the method of sea-rail combined transport is adopted, because the basic ports of the United States and the cities are connected by rail, and the east coast base port has a full-water way.
                </p>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Company Options</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Category</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Cheap price and acceptable service</td>
                            <td className="py-2 text-foreground">MSC, COSCO, HPL, WANHAI, ZIM (more to Canada)</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Expensive and good service</td>
                            <td className="py-2 text-foreground">MAERSK, COSCO, EMC, APL, HYUNDAI, etc.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Route 2: Central and South America */}
              <div id="no-2-central-south-america-caribbean" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">2</span>
                  China to Central and South America and Caribbean Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  The route is made up of small countries south of the United States and north of Colombia and Brazil, while the Panama Canal is the closest link to the Atlantic Ocean and the Pacific Ocean. Goods that usually travel to the US East Coast and the Gulf of Mexico and the Caribbean all pass through here.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Central and South American Base Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      MEXICO CITY, MANZANILLO, COLON FREE ZONE, LA GUAIRA, CAUCEDO, PUERTO CABELLO, KINGSTON, PUERTO QUETZAL, GUATEMALA CITY
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Note:</strong> COLON FREE ZONE is the largest port and free trade zone here, responsible for the transit of goods from Central and South America. Almost all cargo in the Caribbean is transited from this port.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies for This Route</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Category</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">General service, relatively cheap</td>
                            <td className="py-2 text-foreground">MSC, ZIM, HPL, COSCO</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Good service, relatively expensive</td>
                            <td className="py-2 text-foreground">EMC, MAERSK, CMA, ONE, etc.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Route 3: South American Routes */}
              <div id="no-3-south-american-routes" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">3</span>
                  China to South American Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  The South American route can also be divided into South American East and South American West routes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                  <li><strong>South American East:</strong> Brazil, Argentina, and Uruguay</li>
                  <li><strong>South American West:</strong> Colombia, Chile, Peru, Ecuador and other countries</li>
                </ul>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">South American Base Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      BUENOS AIRES, SANTOS, MONTEVIDEO, BUENAVENTURA, IQUIQUE, CALLAO, GUAYAQUIL, VALPARAISO
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      The ports to South American East are basically around the Indian Ocean via the South African Durban. South America West is directly from the Pacific Ocean.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies for South America</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Route</th>
                            <th className="text-left py-2 font-semibold">Cheaper Options</th>
                            <th className="text-left py-2 font-semibold">Better Service</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">South America West</td>
                            <td className="py-2 text-foreground">MSC, ZIM, COSCO</td>
                            <td className="py-2 text-foreground">ONE, MAERSK</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">South America East</td>
                            <td className="py-2 text-foreground">MSC, COSCO, HPL</td>
                            <td className="py-2 text-foreground">ONE, MAERSK, HAMBURG SUD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Route 4: European Routes */}
              <div id="no-4-european-routes" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">4</span>
                  China to European Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  This route can be divided into the European route and the Nordic Baltic route, mainly composed of Western Europe: France, Britain, the Netherlands, Germany, Sweden, Finland, Belgium, Denmark, Norway, Ireland and some landlocked countries.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">European Basic Line Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        ANTWERP, BREMEN, FELIXSTOWE, HAMBURG, LE HAVRE, ROTTERDAM, SOUTHAMPTON
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Nordic Baltic Sea Line Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        AARHUS, COPENHAGEN, GOTHENBURG, KOTKA, OSLO
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-teal/30 bg-teal/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Transit Ports</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>FELIXSTOWE</strong> is the largest transit port in the UK</li>
                      <li>• <strong>HAMBURG</strong> and <strong>ROTTERDAM</strong> are among the largest transit ports in Europe</li>
                      <li>• Many European inland points are transited through these two ports, particularly HAMBURG</li>
                      <li>• The vast majority of goods from Northern Europe, Russia, and Poland are transferred through HAMBURG</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies for Europe</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Category</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">General service and price</td>
                            <td className="py-2 text-foreground">MSC, ANL, COSCO, PIL, WANHAI, HPL, YML</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Good service, relatively expensive</td>
                            <td className="py-2 text-foreground">APL, EMC, COSCO, MAERSK, CMA, HYUNDAI</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Best for inland points</td>
                            <td className="py-2 text-foreground">COSCO, CMA, MAERSK, HYUNDAI</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>To Northern Europe:</strong> EMC, COSCO, CMA, MAERSK, APL and other shipping companies.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 5: Mediterranean East and Black Sea */}
              <div id="no-5-mediterranean-east-black-sea" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">5</span>
                  Mediterranean East and Black Sea Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  The important countries here are: Greece, Serbia and Montenegro, Bulgaria, Ukraine, Romania, Slovenia, Croatia, Turkey, Syria, Lebanon, Israel and Egypt.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Mediterranean East Line Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        ALEXANDRIA, DAMIETTA, PORT SAID, BEIRUT, LATTAKIA, ASHDOD, HAIFA, ISTANBUL, LIMASSOL, IZMIR
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Black Sea Aegean Sea Line Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        ODESSA, NOVOROSSIYSK, ILLICHIVSK, CONSTANTA, VARNA, PIRAEUS, THESSALONIKI, RIJEKA
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Category</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Relatively good</td>
                            <td className="py-2 text-foreground">COSCO, CMA, MAERSK, ONE, etc.</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Relatively basic</td>
                            <td className="py-2 text-foreground">MSC, COSCO, HPL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Note:</strong> ALEXANDRIA, DAMIETTA, and PORT SAID are placed on the red line by APL and PIL.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 6: Mediterranean West */}
              <div id="no-6-mediterranean-west" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">6</span>
                  China to Mediterranean West Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  The important countries of this route are: Italy, Spain, France, Malta, Portugal.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      ALGECIRAS, BARCELONA, VALENCIA, FOS, GENOA, ANCONA, NAPLES, LA SPEZIA, TARANTO, LISBON, MALTA
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-teal/30 bg-teal/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Transit Ports</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>MALTA</strong> is the mother port of CMA Europe and the largest transit port of CMA</li>
                      <li>• <strong>ALGECIRAS</strong> is the largest cargo transit port for MAERSK in Europe</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Category</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Good and expensive</td>
                            <td className="py-2 text-foreground">MAERSK, COSCO, YML, EMC, CMA, HYUNDAI</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Relatively cheaper</td>
                            <td className="py-2 text-foreground">MSC, OOCL, HPL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Since this route is a relatively competitive route, the price is relatively transparent.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 7: Middle East Red Sea */}
              <div id="no-7-middle-east-red-sea" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">7</span>
                  China to Middle East Red Sea Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ports on this route are very concentrated, with large volume, transparent price, and very smart customers, and relatively more CIF goods. At the same time, the Red Sea and the Suez Canal also control the throat fortresses of the Mediterranean and Europe.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Persian Gulf Middle East Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        DUBAI, DAMMAM, BANDAR ABBAS, RIYADH, KUWAIT, DOHA
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Red Sea Gulf of Aden Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        ADEN, AQABA, JEDDAH, PORT SUDAN, SOKHNA
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-teal/30 bg-teal/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Ports</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>DUBAI</strong> is not only the largest port in the Middle East, but also one of the most important transit ports in the world and a free trade port</li>
                      <li>• <strong>JEDDAH</strong> is the largest basic and transit port in the Red Sea</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies by Region</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Region</th>
                            <th className="text-left py-2 font-semibold">Common Choices</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Persian Gulf</td>
                            <td className="py-2 text-foreground">MSC, APL, MAERSK, EMC, K LINE, WANHAI, YML</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Red Sea</td>
                            <td className="py-2 text-foreground">HPL, EMC, PIL, APL, K LINE, COSCO, YML, MSC</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Cheaper options</td>
                            <td className="py-2 text-foreground">HPL, MSC, MAERSK, YML</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Better service (Red Sea advantage)</td>
                            <td className="py-2 text-foreground">APL, PIL, EMC</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Route 8: North Africa */}
              <div id="no-8-north-africa" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">8</span>
                  China to North Africa Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  The main countries that make up this route are: Morocco, Algeria, Tunisia, Libya.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      ALGIERS, SKIKDA, ORAN, BEJAIA, CASABLANCA, TANGIER, TUNIS, BENGHAZI, MISURATA, TRIPOLI, EL KHOMS
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      CMA, MAERSK, MSC, EMC, COSCO
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Market Share:</strong> CMA and MAERSK have more than 85% of the market here, especially CMA with 50% market share. Many customers like to choose CMA because it has a great advantage in customs clearance. MSC is relatively cheap but service is only acceptable.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 9: West Africa */}
              <div id="no-9-west-africa" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">9</span>
                  China to West Africa Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  This route is mainly composed of African countries on the near Atlantic coast, mainly: Mauritania, Senegal, Guinea, Cameroon, Sierra Leone, Nigeria, Ghana, Angola, Liberia, Benin, Congo.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Base Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      ABIDJAN, BANJUL, DAKAR, NOUAKCHOTT, COTONOU, TEMA, APAPA, LAGOS, LUANDA, DOUALA, LOME
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Ranking</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Best options</td>
                            <td className="py-2 text-foreground">MAERSK, CMA</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Best for minor ports</td>
                            <td className="py-2 text-foreground">DELMAS</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Second tier</td>
                            <td className="py-2 text-foreground">ONE, PIL</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Third tier</td>
                            <td className="py-2 text-foreground">MSC, COSCO</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Route 10: East Africa */}
              <div id="no-10-east-africa" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">10</span>
                  China to East Africa Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Major countries:</strong> Tanzania, Kenya, Mozambique, Madagascar
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      BEIRA, DAR ES SALAAM, NACALA, MAPUTO, MOMBASA, TAMATAVE, ZANZIBAR
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Major Shipping Companies</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Ranking</th>
                            <th className="text-left py-2 font-semibold">Shipping Companies</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-2 text-muted-foreground">Good options</td>
                            <td className="py-2 text-foreground">PIL, MAERSK</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-muted-foreground">Second tier</td>
                            <td className="py-2 text-foreground">MSC, HPL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Route 11: South Africa */}
              <div id="no-11-south-africa" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">11</span>
                  China to South Africa Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Main countries:</strong> South Africa, Namibia, Zimbabwe, Zambia, Reunion Island
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      DURBAN, CAPE TOWN, PORT LOUIS, JOHANNESBURG, HARARE, WALVIS BAY, PORT ELIZABETH, LUSAKA
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-teal/30 bg-teal/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Port</h4>
                    <p className="text-sm text-muted-foreground">
                      The most important of these ports is <strong>DURBAN</strong>, because it is not only a major transit port to East Africa, West Africa, but even the world. Therefore, there are more goods and boats going here.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Shipping Companies</h4>
                    <p className="text-sm text-foreground">
                      MAERSK, MSC, EMC, PIL, COSCO, HPL, HAMBURG-SUD
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 12: Korea and Japan */}
              <div id="no-12-korea-japan" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">12</span>
                  China to Korean-Japanese Routes
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">South Korea Base Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        INCHON, BUSAN
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Japan Base Ports</h4>
                      <p className="text-sm text-muted-foreground">
                        NAGOYA, OSAKA, TOKYO, KOBE
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-muted-foreground mb-4">
                  There are many shipping companies to choose from on this route, but usually some small shipping companies have more advantages here.
                </p>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Recommended Shipping Companies</h4>
                    <p className="text-sm text-foreground mb-3">
                      YML, WANHAI, OOCL, Yantai Shipping
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Surcharges:</strong> THC, DOC
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Since going to this place, the distance is short, the flight period is short, and it is usually necessary to make telex release.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 13: Southeast Asia */}
              <div id="no-13-southeast-asia" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">13</span>
                  China to Southeast Asia Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Countries:</strong> Philippines, Singapore, Malaysia, Indonesia, Vietnam, Thailand, Myanmar, etc.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Base Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      SINGAPORE, BANGKOK, PENANG, PORT KLANG, MANILA, JAKARTA, LAEM CHABANG
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Better Shipping Companies</h4>
                    <p className="text-sm text-foreground">
                      CNC, YML, WANHAI, OOCL, TS LINE, SITC
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      There are a lot of shipping companies going to this route, and there is a lot of room for choice.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 14: India Pakistan Bangladesh */}
              <div id="no-14-india-pakistan-bangladesh" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">14</span>
                  China to India Pakistan Bangladesh Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  It can also be called the South Asia route, which consists of India, Pakistan, Bangladesh and Sri Lanka.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Base Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      NHAVA SHEVA, MUMBAI, NEW DELHI, MUNDRA, CHENNAI, KARACHI, CHITTAGONG, COLOMBO
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Commonly Selected Shipping Companies</h4>
                    <p className="text-sm text-foreground">
                      MAERSK, WANHAI, YANGMING, HPL, OOCL, APL, HYUNDAI
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      Because it is also a close distance, short ship period, there are more shipping companies and more choices, so there is not much difference in price and service. Every shipping company has its own advantages.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Route 15: Australia New Zealand */}
              <div id="no-15-australia-new-zealand" className="scroll-mt-24 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold">15</span>
                  China to Australia-New Zealand Routes
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Major countries:</strong> Australia, New Zealand and some island countries in the Pacific.
                </p>

                <Card className="border-border/50 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Main Ports</h4>
                    <p className="text-sm text-muted-foreground">
                      ADELAIDE, AUCKLAND, BRISBANE, FREMANTLE, SYDNEY, MELBOURNE, WELLINGTON, PORT CHALMERS
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange/30 bg-orange/5 mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3">Frequent Shipping Companies</h4>
                    <p className="text-sm text-foreground">
                      HAMBURG-SUD, MAERSK, ONE, COSCO, HYUNDAI
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Note:</strong> There are very few ships going to minor ports of the Pacific islands and the price is very high.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Conclusion */}
              <Card className="border-teal/30 bg-teal/5 mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Conclusion</h2>
                  <p className="text-muted-foreground mb-4">
                    We hope our clients can read the above articles and contact us if you have any questions or need. We can match your any freight forwarding service need from China. Also we may give you some good suggestions if you have container shipment from China.
                  </p>
                  <p className="text-muted-foreground">
                    Understanding these routes and shipping company options is crucial for optimizing your supply chain from China. Each route has its own characteristics, preferred carriers, and pricing dynamics. By choosing the right combination of route and shipping company, you can balance cost, transit time, and service quality for your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Related Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/sea-freight" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Ship className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Sea Freight
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      FCL and LCL ocean shipping
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/customs-clearance" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Anchor className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Customs Clearance
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Expert customs brokerage
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/door-to-door" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Door to Door
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Complete logistics solutions
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Need Help With Global Shipping From China?"
        description="Our team of experts can help you choose the right shipping routes and carriers for your cargo. Get competitive rates and reliable service to any destination worldwide."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
