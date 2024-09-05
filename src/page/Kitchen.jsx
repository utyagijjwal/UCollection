import React from 'react';

const kitchenProducts = [
  {
    name: 'Microwave Oven',
    image: 'https://example.com/microwave-oven-image.jpg',
    price: '$300',
  },
  {
    name: 'Blender',
    image: 'https://example.com/blender-image.jpg',
    price: '$120',
  },
  {
    name: 'Cookware Set',
    image: 'https://example.com/cookware-set-image.jpg',
    price: '$250',
  },
  {
    name: 'Coffee Maker',
    image: 'https://example.com/coffee-maker-image.jpg',
    price: '$150',
  },
  {
    name: 'Toaster',
    image: 'https://example.com/toaster-image.jpg',
    price: '$60',
  },
  {
    name: 'Air Fryer',
    image: 'https://example.com/air-fryer-image.jpg',
    price: '$180',
  },
];

const Kitchen = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Kitchen Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {kitchenProducts.map((product, index) => (
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

export default Kitchen;
