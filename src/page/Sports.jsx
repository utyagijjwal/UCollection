import React from 'react';
import Detail from '../Component/Detail';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Component/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sports = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Football",
      price: 2000,
      
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Basketball",
      price: 1000,
      
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Tennis Racket",
      price: 4000,
      
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      name: "Cricket Bat",
      price: 5000,
      
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzL8CYP57uz8uF0augMtgTGtBFK46GyTGxQ&s",
    },
    {
      id: 5,
      name: "Yoga Mat",
      price: 500,
      
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjGnBE2vvpER0V6NbXTO0uxiHUMsrBhn36w&s",
    },
    {
      id: 6,
      name: "Boxing Gloves",
      price: 2000 ,
      
      image: "data:image/jpeg;base64,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",
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart successfully!`);
  };

  return (
    <div>
      {/* Render the Detail component at the top */}
      <Detail />
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-black mb-10">
          Explore Our Sports Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-84 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 text-center">
                <h2 className="text-gray-800 text-2xl font-bold">{product.name}</h2>
                <p className="text-gray-600 text-xl font-semibold mt-2">Rs{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ToastContainer to display toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
    </div>
  );
};

export default Sports;
