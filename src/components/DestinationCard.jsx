import React from 'react';
import { Star, MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-emerald-900/20 hover:-translate-y-2">
      
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-semibold text-white">
            {destination.rating}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-1">
              {destination.name}
            </h3>

            <div className="flex items-center text-emerald-500 text-sm">
              <MapPin className="w-3 h-3 mr-1" />
              {destination.country}
            </div>
          </div>

          <span className="text-white font-bold bg-emerald-900/30 px-2 py-1 rounded text-sm border border-emerald-500/20">
            {destination.price}
          </span>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
            {destination.category}
          </span>

          <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors">
            View Details &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
