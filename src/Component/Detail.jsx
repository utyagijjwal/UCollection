import React from 'react';
import Allproduct from '../page/Allproduct';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div className="w-full bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Flex container for buttons */}
        <div className="flex flex-wrap justify-center space-x-4">

           {/* Home */}
           <button className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Home
          </button>
          
          {/* All Product */}
          <Link to="/allproduct" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            All Product
          </Link>

          {/* Mobiles */}
          <Link to="/mobile" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Mobiles
          </Link>

          {/* Electronics */}
          <Link to="/electronics" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Electronics
          </Link>

          {/* Home & Kitchen */}
          <Link to="/kitchen" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Home & Kitchen
          </Link>

          {/* Laptop */}
          <Link to="/laptop" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Laptop
          </Link>

          {/* Car & Bike */}
          <Link to="Bike" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Car & Bike
          </Link>

          {/* Sports */}
          <Link to="sports" className="category-button bg-gray-800 hover:bg-orange-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none">
            Sports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
