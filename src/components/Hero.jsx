import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Beautiful Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium tracking-wide mb-6 backdrop-blur-sm animate-fade-in-up">
          REDEFINING LUXURY TRAVEL
        </span>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Discover the World <br />
          <span className="text-emerald-500 italic">Uncharted</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience bespoke journeys curated by world-class travel experts. Your next adventure awaits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/destinations"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/50"
          >
            Explore Destinations
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/packages"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center"
          >
            View Packages
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;
