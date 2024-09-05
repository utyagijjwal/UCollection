import React from 'react';

const mobileProducts = [
  {
    name: 'iPhone 13 Pro',
    image: 'https://example.com/iphone13-pro-image.jpg',
    price: '$1,200',
  },
  {
    name: 'Samsung Galaxy S21',
    image: 'https://example.com/samsung-galaxy-s21-image.jpg',
    price: '$999',
  },
  {
    name: 'Google Pixel 6',
    image: 'https://example.com/google-pixel-6-image.jpg',
    price: '$899',
  },
  {
    name: 'OnePlus 9 Pro',
    image: 'https://example.com/oneplus-9-pro-image.jpg',
    price: '$950',
  },
  {
    name: 'Xiaomi Mi 11 Ultra',
    image: 'https://example.com/xiaomi-mi-11-ultra-image.jpg',
    price: '$850',
  },
  {
    name: 'Sony Xperia 1 III',
    image: 'https://example.com/sony-xperia-image.jpg',
    price: '$1,000',
  },
];

const Mobiles = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Mobiles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mobileProducts.map((product, index) => (
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

export default Mobiles;
