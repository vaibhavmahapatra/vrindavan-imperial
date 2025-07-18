import React, { useState } from 'react';

const Restaurant = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full min-h-screen bg-white pt-6 pb-12 px-0 relative">
      {loading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
        </div>
      )}

      <div className={`w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[16/9] ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <iframe
          src="https://scanmenu.in/restaurant/menu/table-1/ZDhmYmJiNTM4MzliMDYyMEJKQjJjbExpeWtRK25mMUdBaEtMN0E9PQ==?online=true"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          title="Restaurant Menu"
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </div>
  );
};

export default Restaurant;
