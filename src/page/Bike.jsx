import React from 'react';

const vehicleProducts = [
  {
    name: 'Mountain Bike',
    image: 'https://example.com/mountain-bike-image.jpg',
    price: '$500',
  },
  {
    name: 'Road Bike',
    image: 'https://example.com/road-bike-image.jpg',
    price: '$700',
  },
  {
    name: 'Electric Bike',
    image: 'https://example.com/electric-bike-image.jpg',
    price: '$1000',
  },
  {
    name: 'Sedan Car',
    image: 'https://example.com/sedan-car-image.jpg',
    price: '$20,000',
  },
  {
    name: 'SUV',
    image: 'https://example.com/suv-image.jpg',
    price: '$25,000',
  },
  {
    name: 'Sports Car',
    image: 'https://example.com/sports-car-image.jpg',
    price: '$50,000',
  },
];

const Bike = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Bikes and Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vehicleProducts.map((product, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center">
                  <h2 className="text-white text-2xl font-semibold">{product.name}</h2>
                  <p className="text-white text-lg font-bold mt-2">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bike;
