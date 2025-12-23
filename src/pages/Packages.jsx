import React from 'react';
import { Check, Clock, Users, ArrowRight } from 'lucide-react';
import { packages } from '../Mock_DATA/packagesData';

const Packages = () => {
 
  return (
    <div className="bg-neutral-950 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
            Hand-Picked Experiences
          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Curated Travel Packages
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto">
            Choose from our selection of meticulously planned itineraries designed to give you the most authentic and luxurious experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    BEST SELLER
                  </div>
                )}

                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur px-3 py-1 rounded-md text-white font-bold border border-white/10">
                  {pkg.price}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-bold text-white mb-4">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-4 mb-6 text-sm text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    {pkg.duration}
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-emerald-500" />
                    2-10 People
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-white/5 hover:bg-emerald-600 hover:text-white text-neutral-300 font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-emerald-500 group-hover:bg-emerald-600/10 group-hover:text-white">
                  View Itinerary
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Packages;
