import React from 'react';

const categories = [
  {
    name: 'Mobiles',
    image: 'https://example.com/mobile-image.jpg',
  },
  {
    name: 'Electronics',
    image: 'https://example.com/electronics-image.jpg',
  },
  {
    name: 'Home & Kitchen',
    image: 'https://example.com/home-kitchen-image.jpg',
  },
  {
    name: 'Laptop',
    image: 'https://example.com/laptop-image.jpg',
  },
  {
    name: 'Car & Bike',
    image: 'https://example.com/car-bike-image.jpg',
  },
  {
    name: 'Sports',
    image: 'https://example.com/sports-image.jpg',
  },
];

const Allproduct = () => {
  return (
    <div id="all-product" className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Explore Our Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl font-semibold">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allproduct;
