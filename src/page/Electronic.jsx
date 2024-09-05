import React from 'react';

const electronicsProducts = [
  {
    name: 'Smart TV',
    image: 'https://example.com/smart-tv-image.jpg',
    price: '$1,200',
  },
  {
    name: 'Bluetooth Speaker',
    image: 'https://example.com/bluetooth-speaker-image.jpg',
    price: '$150',
  },
  {
    name: 'Gaming Console',
    image: 'https://example.com/gaming-console-image.jpg',
    price: '$500',
  },
  {
    name: 'Smartphone',
    image: 'https://example.com/smartphone-image.jpg',
    price: '$999',
  },
  {
    name: 'Headphones',
    image: 'https://example.com/headphones-image.jpg',
    price: '$200',
  },
  {
    name: 'Smartwatch',
    image: 'https://example.com/smartwatch-image.jpg',
    price: '$250',
  },
];

const Electronic = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Electronics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {electronicsProducts.map((product, index) => (
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

export default Electronic;
