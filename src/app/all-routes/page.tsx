import { Metadata } from 'next';
import { Ship, Plane } from 'lucide-react';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';
import { AllRoutesClient } from '@/components/sections';
import { Breadcrumbs } from '@/components/sections';

export const metadata: Metadata = {
  title: 'All Shipping Routes | Upfreights',
  description: 'Browse all sea freight and air freight routes from China to destinations worldwide. Find shipping routes from Shanghai, Shenzhen, Guangzhou, and more.',
  alternates: {
    canonical: '/all-routes',
  },
  openGraph: {
    title: 'All Shipping Routes from China | Upfreights',
    description: 'Complete directory of sea and air freight routes from major Chinese ports to global destinations.',
  },
};

export default function AllRoutesPage() {
  const seaRoutes = generateSeaRoutes();
  const airRoutes = generateAirRoutes();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'All Routes' },
              ]}
              variant="light"
              className="mb-6"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              All Shipping Routes
            </h1>
            <p className="text-lg text-white/80 mb-4">
              Browse our complete directory of sea freight and air freight routes from China to destinations worldwide. Use the search and filters below to find your route.
            </p>
            <div className="flex gap-6 flex-wrap text-white/90">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Ship className="h-5 w-5 text-orange" />
                <span className="font-semibold">{seaRoutes.length}</span>
                <span>Sea Freight Routes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Plane className="h-5 w-5 text-orange" />
                <span className="font-semibold">{airRoutes.length}</span>
                <span>Air Freight Routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section with Search and Filters */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <AllRoutesClient seaRoutes={seaRoutes} airRoutes={airRoutes} />
        </div>
      </section>
    </>
  );
}
