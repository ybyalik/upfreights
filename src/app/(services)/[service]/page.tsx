import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Ship, Plane, Home, FileCheck, CheckCircle, ArrowRight, MapPin, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs, ProcessTimeline, ServiceCard, CTASection, FilterableRoutesList } from '@/components/sections';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/lib/data/services';
import {
  getCountryBySlug,
  getAllCountrySlugs,
  getSeaFreightCountryBySlug,
  getAllSeaFreightCountrySlugs,
  CountryDestination,
  SeaFreightCountry,
} from '@/lib/data/countries';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';

const serviceIcons: Record<string, React.ElementType> = {
  'sea-freight': Ship,
  'air-freight': Plane,
  'door-to-door': Home,
  'customs-clearance': FileCheck,
};

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  // Combine service slugs with country slugs
  const serviceParams = getAllServiceSlugs().map((slug) => ({
    service: slug,
  }));
  const countryParams = getAllCountrySlugs().map((slug) => ({
    service: slug,
  }));
  const seaFreightCountryParams = getAllSeaFreightCountrySlugs().map((slug) => ({
    service: slug,
  }));
  return [...serviceParams, ...countryParams, ...seaFreightCountryParams];
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;

  // Check for service page
  const service = getServiceBySlug(serviceSlug);
  if (service) {
    return {
      title: service.title,
      description: service.description,
      alternates: {
        canonical: `/${serviceSlug}`,
      },
      openGraph: {
        title: `${service.title} | UpFreights`,
        description: service.shortDescription,
      },
    };
  }

  // Check for sea freight country page
  const seaFreightCountry = getSeaFreightCountryBySlug(serviceSlug);
  if (seaFreightCountry) {
    return {
      title: `Sea Freight from China to ${seaFreightCountry.country}`,
      description: seaFreightCountry.description,
      alternates: {
        canonical: `/${serviceSlug}`,
      },
      openGraph: {
        title: `Sea Freight from China to ${seaFreightCountry.country} | UpFreights`,
        description: seaFreightCountry.description,
      },
    };
  }

  // Check for country destination page
  const country = getCountryBySlug(serviceSlug);
  if (country) {
    return {
      title: `Shipping from China to ${country.name}`,
      description: country.description,
      alternates: {
        canonical: `/${serviceSlug}`,
      },
      openGraph: {
        title: `Shipping from China to ${country.name} | UpFreights`,
        description: country.description,
      },
    };
  }

  return {
    title: 'Page Not Found',
  };
}

// Render sea freight country page
function SeaFreightCountryPage({ country }: { country: SeaFreightCountry }) {
  const seaRoutes = generateSeaRoutes().filter(r =>
    r.destinationCountry.toLowerCase().includes(country.country.toLowerCase().split(' ')[0])
  );

  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Services', href: '/services' },
                { label: 'Sea Freight', href: '/sea-freight' },
                { label: country.country },
              ]}
              variant="light"
              className="mb-6"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
              <Ship className="h-4 w-4" />
              Sea Freight
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sea Freight from China to {country.country}
            </h1>
            <p className="text-lg text-white/80 mb-8">
              {country.description}
            </p>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange" />
                <span>{country.transitTime} transit</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange" />
                <span>{country.majorPorts.length} major ports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Major Destination Ports
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {country.majorPorts.map((port) => (
              <Card key={port} className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-4">
                    <Ship className="h-6 w-6 text-ocean" />
                  </div>
                  <h3 className="font-bold text-foreground">{port}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Available Routes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seaRoutes.slice(0, 12).map((route) => (
              <Link
                key={route.id}
                href={`/sea-freight-${route.slug}`}
                className="p-4 border rounded-lg hover:border-orange transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-medium text-foreground">{route.originCity}</span>
                  <span className="text-muted-foreground mx-2">→</span>
                  <span className="font-medium text-foreground">{route.destinationCity}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-orange" />
              </Link>
            ))}
          </div>
          {seaRoutes.length > 12 && (
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <Link href="/all-routes">
                  View All {seaRoutes.length} Routes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        variant="gradient"
        title="Get a Sea Freight Quote"
        description={`Request a free quote for shipping from China to ${country.country}.`}
      />
    </>
  );
}

// Render country destination page
function CountryDestinationPage({ country }: { country: CountryDestination }) {
  const countryNameLower = country.name.toLowerCase();
  const seaRoutes = generateSeaRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === countryNameLower ||
    r.destinationCountry.toLowerCase().includes(countryNameLower.split(' ')[0])
  );
  const airRoutes = generateAirRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === countryNameLower ||
    r.destinationCountry.toLowerCase().includes(countryNameLower.split(' ')[0])
  );

  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Destinations', href: '/shipping' },
                { label: country.name },
              ]}
              variant="light"
              className="mb-6"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Shipping from China to {country.name}
            </h1>
            <p className="text-lg text-white/80 mb-8">
              {country.description}
            </p>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange" />
                <span>{country.transitTime} transit</span>
              </div>
              <div className="flex items-center gap-2">
                <Ship className="h-5 w-5 text-orange" />
                <span>{seaRoutes.length} sea routes</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-orange" />
                <span>{airRoutes.length} air routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Service Overview Cards */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-4">
                  <Ship className="h-6 w-6 text-ocean" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Sea Freight</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Cost-effective ocean shipping with FCL and LCL options.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    {seaRoutes.length} routes available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    Weekly departures
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Air Freight</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Fast express delivery for time-sensitive shipments.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    {airRoutes.length} routes available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    Daily flights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Major Ports</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {country.majorPorts.length} destination ports in {country.name}.
                </p>
                <div className="flex flex-wrap gap-1">
                  {country.majorPorts.slice(0, 4).map((port) => (
                    <span key={port} className="text-xs bg-secondary px-2 py-0.5 rounded">
                      {port}
                    </span>
                  ))}
                  {country.majorPorts.length > 4 && (
                    <span className="text-xs text-muted-foreground">
                      +{country.majorPorts.length - 4} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Popular Goods */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Popular Goods Shipped</h2>
            <div className="flex flex-wrap gap-2">
              {country.popularGoods.map((good) => (
                <span
                  key={good}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium text-foreground"
                >
                  <Package className="h-3.5 w-3.5 inline mr-1.5" />
                  {good}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Routes Section with Filters */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              All Routes to {country.name}
            </h2>
            <p className="text-muted-foreground">
              Browse all {seaRoutes.length + airRoutes.length} shipping routes from China to {country.name}.
              Use filters to find the perfect route for your shipment.
            </p>
          </div>

          <FilterableRoutesList
            seaRoutes={seaRoutes}
            airRoutes={airRoutes}
            countryName={country.name}
          />
        </div>
      </section>

      <CTASection
        variant="gradient"
        title={`Ship to ${country.name} Today`}
        description={`Get a free quote for shipping from China to ${country.name}. Our team will help you choose the best option.`}
      />
    </>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;

  // Check for service page first
  const service = getServiceBySlug(serviceSlug);
  if (service) {
    const Icon = serviceIcons[service.slug] || Ship;
    const otherServices = services.filter((s) => s.slug !== service.slug);

    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: 'Services', href: '/services' },
                { label: service.shortTitle },
              ]}
              variant="light"
              className="mb-6"
            />
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-orange" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-white/80 max-w-3xl">
              {service.description}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Service Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/30"
                    >
                      <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Key Benefits
                </h2>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-orange">{index + 1}</span>
                          </div>
                          <span className="text-foreground pt-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Button asChild className="mt-6 bg-orange hover:bg-orange-dark text-white">
                  <Link href="/quote">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures your cargo moves efficiently from origin to destination.
              </p>
            </div>

            <ProcessTimeline steps={service.process} variant="horizontal" />
          </div>
        </section>

        {/* Pricing Factors Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Pricing Factors
                </h2>
                <p className="text-muted-foreground">
                  Our quotes are customized based on the following factors to ensure you get the best rate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {service.pricingFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 border border-border/50 rounded-lg"
                  >
                    <Badge variant="outline" className="flex-shrink-0">
                      {index + 1}
                    </Badge>
                    <span className="text-foreground">{factor}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Want a detailed quote for your shipment?
                </p>
                <Button asChild className="bg-orange hover:bg-orange-dark text-white">
                  <Link href="/quote">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Other Services
              </h2>
              <p className="text-muted-foreground">
                Explore our complete range of freight forwarding solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map((otherService) => (
                <ServiceCard key={otherService.id} service={otherService} variant="default" />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          variant="gradient"
          title={`Ready to Ship with ${service.shortTitle}?`}
          description="Get a free, no-obligation quote for your shipment. Our team will respond within 24 hours."
        />
      </>
    );
  }

  // Check for sea freight country page
  const seaFreightCountry = getSeaFreightCountryBySlug(serviceSlug);
  if (seaFreightCountry) {
    return <SeaFreightCountryPage country={seaFreightCountry} />;
  }

  // Check for country destination page
  const country = getCountryBySlug(serviceSlug);
  if (country) {
    return <CountryDestinationPage country={country} />;
  }

  // Not found
  notFound();
}
