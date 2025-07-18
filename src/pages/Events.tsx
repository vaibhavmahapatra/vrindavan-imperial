import React, { useState,useEffect } from 'react';
import { Calendar, Users, Camera, Award, MapPin, Star, Clock, Wifi, Car, Utensils, Music, Sparkles } from 'lucide-react';

const LuxuryResortEvents = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [activeTab, setActiveTab] = useState('lawn');
  const heroImages = [
    'lawn1.jpg',
    'hall2.jpg',
    'hotel1.jpg',
    'hall1.jpg'
  ];

  useEffect(() => {
      setIsLoaded(true);
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 2300);
      return () => clearInterval(interval);
    }, []);
  
    const galleryImages = [
      {
        url: 'hall1.jpg',
        title: 'Hall',
        category: 'For Parties'
      },
      {
        url: 'suite room 2.jpg',
        title: 'Premium Suites',
        category: 'Accommodation'
      },
      {
        url: 'hotel1.jpg',
        title: 'Fine Dining',
        category: 'Restaurant'
      },
      {
        url: 'lawn1.jpg',
        title: 'Event Spaces',
        category: 'Events'
      },
      {
        url: '4bed3.jpg',
        title: '4 bed Accommodation',
        category: 'Wellness'
      },
      {
        url: 'hall2.jpg',
        title: 'Garden Views',
        category: 'Landscape'
      }
    ];
 
  const lawnFeatures = [
    { icon: <Users className="h-5 w-5" />, text: 'Capacity: 650 guests' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Scenic garden views' },
    { icon: <Sparkles className="h-5 w-5" />, text: 'Natural lighting' },
    { icon: <Music className="h-5 w-5" />, text: 'Sound system' },
    { icon: <Car className="h-5 w-5" />, text: 'Valet parking' },
    { icon: <Utensils className="h-5 w-5" />, text: 'Outdoor catering setup' }
  ];

  const hallFeatures = [
    { icon: <Users className="h-5 w-5" />, text: 'Capacity: 100-400 guests' },
    { icon: <Wifi className="h-5 w-5" />, text: 'High-speed Wi-Fi' },
    { icon: <Clock className="h-5 w-5" />, text: '24/7 climate control' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
              Luxury Hotel Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Where extraordinary moments become timeless memories in the most elegant settings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919098112090">
                <button className="bg-gradient-to-r from-gold-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-gold-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Plan Your Event
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Venue Selection Tabs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Venue</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our exquisite venues, each designed to create unforgettable experiences
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('lawn')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'lawn'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Luxury Lawn
              </button>
              <button
                onClick={() => setActiveTab('hall')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'hall'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Celebration Hall
              </button>
            </div>
          </div>

          {/* Lawn Booking Section */}
          {activeTab === 'lawn' && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="lawn1.jpg"
                    alt="Luxury Lawn"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Sparkles className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Luxury Lawn</h3>
                      <p className="text-green-600 font-semibold">Outdoor Elegance</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    Immerse yourself in nature's beauty with our meticulously maintained luxury lawn. 
                    Perfect for weddings, garden parties, and intimate celebrations under the open sky.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {lawnFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="text-green-600 mr-3">{feature.icon}</div>
                        <span className="font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Starting from</h4>
                    <div className="text-3xl font-bold text-green-600"> ₹65,000</div>
                    <p className="text-sm text-gray-600">per event (includes basic setup)</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Book Luxury Lawn Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Hall Booking Section */}
          {activeTab === 'hall' && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="hall1.jpg"
                    alt="Celebration Hall"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Celebration Hall</h3>
                      <p className="text-purple-600 font-semibold">Indoor Grandeur</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    Experience sophistication in our grand celebration hall featuring crystal chandeliers, 
                    marble floors, and state-of-the-art facilities for your most important occasions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {hallFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="text-purple-600 mr-3">{feature.icon}</div>
                        <span className="font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl mb-6">
                    <div className="text-3xl font-bold text-purple-600">₹15000, ₹8,000</div>
                    <p className="text-sm text-gray-600">per event (includes premium setup)</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Book Celebration Hall Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Past Events Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Event Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the magic of our past celebrations and get inspired for your special day
            </p>
          </div>
        </section>

        {/* Hero Section with Smooth Image Transitions */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Crossfade */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})`, zIndex: 0 }}
          ></div>
        ))}

        {/* Enhanced Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

        {/* Hero Content */}
        <div
          className={`relative z-20 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-300 font-light mt-2">
              Hotel Vrindavan Imperial
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-gray-100 font-light max-w-4xl mx-auto leading-relaxed transition-all duration-1500 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Book the Perfect Space for Your Special Day!
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1500 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
          </div>

          
        </div>
      </section>


        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl text-white p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Dream Event?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let our expert team transform your vision into an extraordinary celebration that will be remembered for years to come
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/Contact">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
              </a>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </section>
      </div>
    </div>
  );
};

export default LuxuryResortEvents;

