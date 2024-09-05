import React from 'react';

const sportsProducts = [
  {
    name: 'Football',
    image: 'https://example.com/football-image.jpg',
    price: '$50',
  },
  {
    name: 'Basketball',
    image: 'https://example.com/basketball-image.jpg',
    price: '$60',
  },
  {
    name: 'Tennis Racket',
    image: 'https://example.com/tennis-racket-image.jpg',
    price: '$120',
  },
  {
    name: 'Cricket Bat',
    image: 'https://example.com/cricket-bat-image.jpg',
    price: '$80',
  },
  {
    name: 'Yoga Mat',
    image: 'https://example.com/yoga-mat-image.jpg',
    price: '$20',
  },
  {
    name: 'Boxing Gloves',
    image: 'https://example.com/boxing-gloves-image.jpg',
    price: '$45',
  },
];

const Sports = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Sports Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sportsProducts.map((product, index) => (
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

export default Sports;
