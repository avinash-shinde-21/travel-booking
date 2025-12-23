import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-serif font-bold text-white tracking-wide block mb-4">
            Emerald<span className="text-emerald-500">Horizons</span>
          </span>
          <p className="text-sm leading-relaxed mb-4">
            Crafting unforgettable journeys with the power of Artificial Intelligence and human expertise.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Sustainable Travel</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact Center</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            Newsletter
          </h3>
          <p className="text-sm mb-4">
            Subscribe for travel inspiration and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-neutral-900 border border-neutral-800 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:border-emerald-500 text-white"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-md transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-neutral-900 text-center text-xs">
        &copy; {new Date().getFullYear()} Emerald Horizons Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
