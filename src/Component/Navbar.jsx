import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-orange-500">
              U Mart
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative w-1/2">
            <input
              type="text"
              className="w-full h-10 px-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Search for products..."
            />
            <button className="absolute top-0 right-0 h-full px-4 bg-orange-600 text-white rounded-r-lg">
              Search
            </button>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <select className="block appearance-none bg-white border border-gray-300 text-orange-600 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-600">
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Tamil</option>
             
            </select>
          </div>

          {/* Navbar Options */}
          <div className="flex items-center space-x-6">
            <Link
            to="/signin" className="text-white hover:text-orange-600">
              Sign In
            </Link>
            <Link
            to="/orders" className="text-white hover:text-orange-600">
              Return & Orders
            </Link>
            <Link
            to="/cart" className="flex items-center text-white hover:text-orange-600">
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l1.38-6.24a1 1 0 00-.38-.76l-11-7A1 1 0 006 0H4a1 1 0 00-1 1v1M16 12v9a1 1 0 001 1h4m-4 0a1 1 0 01-1-1v-9m-4-5H5m7-2V4m0 0L6 2m8 10l1.38-6.24a1 1 0 00-.38-.76l-11-7A1 1 0 006 0H4a1 1 0 00-1 1v1m0 0v12a1 1 0 001 1h13.68c.44 0 .84-.25 1.02-.64L21 8H7.39"
                ></path>
              </svg>
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
