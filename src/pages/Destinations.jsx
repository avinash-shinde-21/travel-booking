import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import { Search, Filter } from 'lucide-react';

const Destinations = ({ destinations }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Nature', 'Urban', 'Beach', 'History'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = filter === 'All' || dest.category === filter;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-neutral-950 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Explore Destinations
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            From the bustling streets of Tokyo to the serene beaches of Bali, find your next getaway.
          </p>
        </div>

    
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    filter === cat
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                      : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 border border-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search places..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
            <Search className="absolute left-3 top-2.5 text-neutral-500 w-4 h-4" />
          </div>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-900/50 rounded-xl border border-white/5">
            <Filter className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              No destinations found
            </h3>
            <p className="text-neutral-500">
              Try adjusting your search or filters.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Destinations;
