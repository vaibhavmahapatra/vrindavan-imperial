import React from 'react';
import { Crown, Phone, Mail, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-bold">Vrindavan Imperial</span>
                <p className="text-amber-400 font-medium">Luxury Resort</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Experience unparalleled luxury and comfort at our premium resort destination. Where every moment becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group bg-white/10 p-3 rounded-full hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group bg-white/10 p-3 rounded-full hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group bg-white/10 p-3 rounded-full hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/rooms" className="hover:text-amber-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                Rooms & Suites
              </a></li>
              <li><a href="/restaurant" className="hover:text-amber-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                Fine Dining
              </a></li>
              <li><a href="/events" className="hover:text-amber-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                Events & Celebrations
              </a></li>
              <li><a href="/lawn" className="hover:text-amber-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                Lawn & Gardens
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-semibold">Vrindavan Imperial</p>
                  <p>Vivekanand Colony Jashpur Chhattisgarh</p>
                  <p>Near Bus-Stand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-semibold">+91 9098112090</p>
                  <p className="text-sm">24/7 Reservations</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-semibold">hotelvrindavan.jsp@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Vrindavan Imperial Resort. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
               Developer - Vaibhav Mahapatra
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;