import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi,Shield, Car, Coffee, Utensils, TreePalm, Calendar, ArrowRight, Play, Award, Users, Heart } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'hotel1.jpg',
    'hall2.jpg',
    'suite1.jpg',
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
  return (
    <div className="relative">
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
            <span className="block mb-2">Welcome to</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
              Vrindavan Imperial
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-300 font-light mt-2">
              Luxury Hotel
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-gray-100 font-light max-w-4xl mx-auto leading-relaxed transition-all duration-1500 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Where divine luxury meets paradise. Experience the finest hospitality in the sacred land of Jashpur.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1500 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/booking"
              className="group relative bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-black px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg min-w-[220px] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/rooms"
              className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 min-w-[220px] backdrop-blur-sm bg-white/10"
            >
              <span className="flex items-center justify-center">
                Explore Rooms
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Enhanced Image Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-amber-600">Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              Discover the beauty and elegance of Vrindavan Imperial
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        Experience <span className="text-amber-400">Vrindavan Imperial</span>
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
        Take a virtual tour of our luxurious facilities and breathtaking surroundings
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {[
        {
          title: 'Hall Overview',
          duration: '0.15',
          videoUrl: 'video1.mp4', // your actual video path here
          poster: 'hall1.jpg',
        },
        {
          title: 'Hotel View',
          duration: '0.06',
          videoUrl: 'video2.mp4',
          poster: 'hotel1.jpg',
        },
      ].map((video, index) => (
        <div
          key={index}
          className="group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-black"
        >
          <video
            controls
            preload="metadata"
            poster={video.poster}
            className="w-full h-64 object-cover rounded-t-2xl"
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4">
            <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
            <p className="text-amber-300 text-sm">{video.duration}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Enhanced Services Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-amber-600">Premium Services</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              Everything you need for a perfect spiritual getaway
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { icon: Wifi, label: 'Free WiFi', color: 'from-blue-500 to-blue-600', bg: 'from-blue-50 to-blue-100' },
              { icon: Car, label: 'Valet Parking', color: 'from-green-500 to-green-600', bg: 'from-green-50 to-green-100' },
              { icon: Coffee, label: '24/7 Service', color: 'from-amber-500 to-orange-600', bg: 'from-amber-50 to-orange-100' },
              { icon: Utensils, label: 'Restaurant', color: 'from-red-500 to-pink-600', bg: 'from-red-50 to-pink-100' },
              { icon: Heart, label: 'Instant Service', color: 'from-cyan-500 to-blue-600', bg: 'from-cyan-50 to-blue-100' },
              { icon: TreePalm, label: 'Garden', color: 'from-purple-500 to-indigo-600', bg: 'from-purple-50 to-indigo-100' }

            ].map((service, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-br ${service.bg} p-6 rounded-3xl mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2 border border-gray-200`}>
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                </div>
                <p className="font-bold text-sm sm:text-base lg:text-lg text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quick Booking Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Award className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready for Your Divine Getaway?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-orange-100 max-w-3xl mx-auto">
              Book your stay today and experience luxury like never before in the sacred city of Vrindavan
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              to="/booking"
              className="group bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-amber-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[220px] shadow-xl"
            >
              <span className="flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 min-w-[220px] backdrop-blur-sm bg-white/10"
            >
              <span className="flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;