import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import { Sparkles, MapPin, Briefcase } from 'lucide-react';

const Home = ({ destinations }) => {
  const featured = destinations.slice(0, 3);

  return (
    <div className="bg-neutral-950 min-h-screen pb-20">
      <Hero />

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info Card 1 */}
          <div className="bg-neutral-900/90 backdrop-blur border border-white/10 p-8 rounded-xl shadow-xl">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Curated Packages</h3>
            <p className="text-neutral-400 text-sm">
              All-inclusive travel packages designed by our expert team for a hassle-free experience.
            </p>
          </div>

          {/* Info Card 2 */}
          <div className="bg-neutral-900/90 backdrop-blur border border-white/10 p-8 rounded-xl shadow-xl">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Exclusive Locations</h3>
            <p className="text-neutral-400 text-sm">
              Access to private resorts and hidden gems that generic booking sites miss.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-emerald-600 p-8 rounded-xl shadow-xl flex flex-col justify-center items-start">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Ready to go?</h3>
            <p className="text-emerald-100 text-sm mb-6">
              Browse our top-rated seasonal packages available for a limited time.
            </p>
            <Link
              to="/packages"
              className="bg-white text-emerald-900 px-6 py-2 rounded-lg font-bold text-sm hover:bg-emerald-50 transition-colors"
            >
              View Packages
            </Link>
          </div>

        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Trending Destinations
              </h2>
              <p className="text-neutral-400">
                Popular spots recommended by travelers this month.
              </p>
            </div>

            <Link
              to="/destinations"
              className="hidden md:block text-emerald-500 font-medium hover:text-emerald-400 transition-colors"
            >
              View all locations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              to="/destinations"
              className="text-emerald-500 font-medium hover:text-emerald-400 transition-colors"
            >
              View all locations
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Sparkles className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Your Perfect Trip Starts Here
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Whether you want a relaxing beach getaway or an adventurous mountain trek,
            we have a package for you.
          </p>

          <Link
            to="/packages"
            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-lg shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-105 inline-block"
          >
            Browse All Packages
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
