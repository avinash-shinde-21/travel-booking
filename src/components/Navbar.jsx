import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Compass, Map, Briefcase, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/', icon: Compass },
    { label: 'Destinations', path: '/destinations', icon: Map },
    { label: 'Packages', path: '/packages', icon: Briefcase },
    { label: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav className= "fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-emerald-900/50">
              <Compass className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-wide">
              Emerald<span className="text-emerald-500">Horizons</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2
                    ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-900/20 ring-1 ring-emerald-500/50'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
            >
              {isOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left px-3 py-4 rounded-md text-base font-medium flex items-center gap-3
                  ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-900/20'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )} 
    </nav>
  );
};

export default Navbar;
