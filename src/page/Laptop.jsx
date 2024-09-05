import React from 'react';

const laptopProducts = [
  {
    name: 'MacBook Pro',
    image: 'https://example.com/macbook-pro-image.jpg',
    price: '$2,000',
  },
  {
    name: 'Dell XPS 13',
    image: 'https://example.com/dell-xps13-image.jpg',
    price: '$1,500',
  },
  {
    name: 'HP Spectre x360',
    image: 'https://example.com/hp-spectre-image.jpg',
    price: '$1,400',
  },
  {
    name: 'Lenovo ThinkPad X1',
    image: 'https://example.com/lenovo-thinkpad-image.jpg',
    price: '$1,600',
  },
  {
    name: 'Microsoft Surface Laptop 4',
    image: 'https://example.com/microsoft-surface-image.jpg',
    price: '$1,800',
  },
  {
    name: 'Asus ZenBook 14',
    image: 'https://example.com/asus-zenbook-image.jpg',
    price: '$1,200',
  },
];

const Laptop = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Laptops</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {laptopProducts.map((product, index) => (
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

export default Laptop;
