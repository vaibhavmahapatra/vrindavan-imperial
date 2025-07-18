import React, { useState } from 'react';
import { Calendar, Users, Bed, MessageCircle, Crown, Phone } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'deluxe',
    firstName: '',
    lastName: '',
    phone: '',
    specialRequests: ''
  });

  const roomTypes = [
    { id: 'standard', name: 'Executive Suite Room', price: 2000 },
    { id: 'deluxe', name: 'Deluxe AC Room', price: 1600 },
    { id: 'suite', name: 'Deluxe Non-AC Room', price: 1300 },
    { id: 'presidential', name: 'Deluxe AC 4-bed Room', price: 2400 },
    { id: 'presidential', name: 'Deluxe Non-AC 4-bed Room', price: 2100 }
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedRoom = roomTypes.find(room => room.id === formData.roomType);
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const nights = formData.checkIn && formData.checkOut ? 
      Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)) : 0;
    const totalCost = nights > 0 && selectedRoom ? nights * selectedRoom.price : 0;
    
    // Create WhatsApp message
const message = `🏨 *Vrindavan Imperial Resort Booking Request*

👤 *Guest Details:*
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}

📅 *Booking Details:*
Check-in: ${new Date(formData.checkIn).toLocaleDateString()}
Check-out: ${new Date(formData.checkOut).toLocaleDateString()}
Nights: ${nights}
Guests: ${formData.guests}
Room Type: ${selectedRoom?.name}

💰 *Cost Details:*
Rate per night: ₹${selectedRoom?.price}
Total Cost: ₹${totalCost}

📝 *Special Requests:*
${formData.specialRequests || 'None'}

Please confirm availability and send booking confirmation.

Thank you! 🙏`;

    // WhatsApp number (replace with actual resort WhatsApp number)
    const whatsappNumber = '919098112090';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const selectedRoom = roomTypes.find(room => room.id === formData.roomType);
  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const nights = formData.checkIn && formData.checkOut ? 
    Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)) : 0;
  const totalCost = nights > 0 && selectedRoom ? nights * selectedRoom.price : 0;

    const subtotal = totalCost;
    const sgst = subtotal * 0.06;
    const cgst = subtotal * 0.06;
    const totalWithGST = subtotal + sgst + cgst;
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-12 w-12 text-amber-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Book Your Stay</h1>
          </div>
          <p className="text-xl text-gray-600">Reserve your divine getaway at Vrindavan Imperial</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-200">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Calendar className="mr-3" />
              Reservation Details
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline mr-2 h-4 w-4" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Bed className="inline mr-2 h-4 w-4" />
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                >
                  {roomTypes.map(room => (
                    <option key={room.id} value={room.id}>
                      {room.name} - ₹{room.price}/night
                    </option>
                  ))}
                </select>
              </div>
            </div>


            {/* Enhanced Booking Summary */}
            {nights > 0 && (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-amber-600" />
                  Booking Summary
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>Room Type:</span>
                    <span className="font-medium">{selectedRoom?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nights:</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rate per night:</span>
                    <span className="font-medium">₹{selectedRoom?.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>CGST:</span>
                    <span className="font-medium">₹{cgst}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SGST:</span>
                    <span className="font-medium">₹{sgst}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold text-amber-700">
                    <span>Total Cost:</span>
                    <span>₹{totalCost+cgst+sgst}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Guest Information */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Guest Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Any special requirements or preferences..."
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Send Booking Request via WhatsApp
              </button>
              <p className="text-center text-sm text-gray-600 mt-3">
                <Phone className="inline h-4 w-4 mr-1" />
                Your booking request will be sent directly to our reservations team via WhatsApp
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;