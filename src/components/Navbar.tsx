import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Booking', path: '/booking' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Events', path: '/events' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-200' 
        : 'bg-black/30 backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-amber-500 to-orange-600' 
                : 'bg-gradient-to-br from-yellow-400 to-amber-500'
            }`}>
              <img src="/Logo.png" alt="Vrindavan Imperial Logo" className="h-10 w-10 rounded-full object-cover"/>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Vrindavan Imperial
              </span>
              <span className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-amber-600' : 'text-yellow-300'
              }`}>
                Luxury Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === item.path
                      ? isScrolled 
                        ? 'text-white bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg' 
                        : 'text-black bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600' 
                        : 'text-white hover:text-black hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-1">
            <div className="bg-white/98 backdrop-blur-lg rounded-2xl mx-4 shadow-2xl border border-gray-200 overflow-hidden">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 text-base font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-amber-500 to-orange-600'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600'
                  } ${index !== navItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;