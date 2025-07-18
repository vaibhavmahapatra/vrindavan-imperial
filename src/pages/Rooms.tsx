import React from 'react';
import { Wifi, Coffee, Tv, Bath, Users, Star, Crown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Executive Suite Room',
      price: 2000,
      image: 'suite1.jpg',
      gallery: [
        'washroom3.jpg',
        'suite room 2.jpg',
        'washroom2.jpg'
      ],
      description: 'Comfortable and elegant rooms with modern amenities and serene garden views in the divine city.',
      capacity: 2,
      amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Private Bathroom', '24/7 Room Service', 'Garden View'],
      size: '25 sqm',
      video: 'https://player.vimeo.com/external/198031816.hd.mp4?s=7a3de44f56094b4e5a43d2ad1b33db8a5b5b7b5d&profile_id=119'
    },
    {
      id: 2,
      name: 'Deluxe AC Room',
      price: 1600,
      image: 'room1.jpg',
      gallery: [
        'washroom3.jpg',
        'room2.jpg',
        'washroom2.jpg'
      ],
      description: 'Spacious rooms with premium furnishing and panoramic views of Vrindavan temples.',
      capacity: 3,
      amenities: ['Free WiFi', 'Premium Bedding', 'Air Conditioning', 'Private Bathroom'],
      size: '35 sqm',
      video: 'https://player.vimeo.com/external/198031816.hd.mp4?s=7a3de44f56094b4e5a43d2ad1b33db8a5b5b7b5d&profile_id=119'
    },
    {
      id: 3,
      name: 'Deluxe Non-AC Room',
      price: 2400,
      image: 'delux4.jpg',
      gallery: [
       'washroom3.jpg',
        'room2.jpg',
        'washroom2.jpg'
      ],
      description: 'Luxurious suite with separate living area and premium amenities overlooking sacred gardens.',
      capacity: 4,
      amenities: ['Free WiFi', '24/7 Room-Service','Smart TV'],
      size: '60 sqm',
      video: 'https://player.vimeo.com/external/198031816.hd.mp4?s=7a3de44f56094b4e5a43d2ad1b33db8a5b5b7b5d&profile_id=119'
    },
    {
      id: 4,
      name: 'Deluxe AC 4-bed Room',
      price: 2100,
      image: '4bed3.jpg',
      gallery: [
       'washroom3.jpg',
        '4bed2.jpg',
        'washroom2.jpg'
      ],
      description: 'The ultimate luxury experience with panoramic temple views and exclusive spiritual services.',
      capacity: 6,
      amenities: ['Free WiFi', '24/7 Room-Service','Smart TV'],
      size: '100 sqm',
      video: 'https://player.vimeo.com/external/198031816.hd.mp4?s=7a3de44f56094b4e5a43d2ad1b33db8a5b5b7b5d&profile_id=119'
    }
  ];

  const handleBookNow = (room: any) => {
    const message = `🏨 *Vrindavan Imperial Resort*

I'm interested in booking the *${room.name}* 

💰 Rate: ₹${room.price}/night
👥 Capacity: Up to ${room.capacity} guests
📐 Size: ${room.size}

Please share availability and booking details.

Thank you! 🙏`;

    const whatsappNumber = '+919876543210';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-12 w-12 text-amber-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Our Rooms & Suites</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully designed accommodations in the divine city of Vrindavan, each offering unique comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-amber-200">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold">₹{room.price}/night</span>
                </div>
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold">Premium</span>
                </div>
              </div>

              {/* Room Gallery */}
              <div className="p-2">
                <div className="grid grid-cols-3 gap-2">
                  {room.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${room.name} view ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>

                <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-amber-600" />
                    Up to {room.capacity} guests
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1 text-amber-600" />
                    {room.size}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Crown className="h-4 w-4 mr-2 text-amber-600" />
                    Premium Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mr-2"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleBookNow(room)}
                    className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Book via WhatsApp
                  </button>
                  <Link
                    to="/booking"
                    className="px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 border border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Crown className="mr-3 h-8 w-8 text-amber-600" />
            Luxury Room Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">High-Speed WiFi</h3>
              <p className="text-sm text-gray-600">Complimentary high-speed internet in all rooms</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Coffee className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Room Service</h3>
              <p className="text-sm text-gray-600">Round-the-clock room service available</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-violet-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Tv className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Entertainment</h3>
              <p className="text-sm text-gray-600">Smart TV with premium streaming services</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Bath className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Luxury Bath</h3>
              <p className="text-sm text-gray-600">Premium toiletries and spa amenities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;