import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleModal = (type) => {
    setModalType(modalType === type ? null : type);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    console.log(`Searching for: ${query}`);
    
    if (query === 'home') {
      navigate('/home');
    } else if (query === 'mobile'|| query==='mobiles') {
      navigate('/mobile');
    } else if (query === 'all products' || query === 'allproduct') {
      navigate('/allproduct');
    } else if (query === 'laptop') {
      navigate('/laptop');
    } else if (query === 'electronics') {
      navigate('/electronics');
    } else if (query === 'home & kitchen' || query === 'kitchen') {
      navigate('/kitchen');
    } else if (query === 'car & bike' || query === 'car&bike' || query === 'car bike') {
      navigate('/bike');
    } else if (query === 'sports') {
      navigate('/sports');
    } else {
      alert('No matching category found');
    }
  };
  

  return (
    <>
      <nav className="bg-black shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-orange-500">
                U Mart
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  ></path>
                </svg>
              </button>
            </div>

            {/* Navbar Options and Search Bar (Hidden on mobile) */}
            <div className={`flex-1 justify-between items-center w-full lg:flex lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
              {/* Search Bar */}
              <div className="relative w-full lg:w-1/2 mb-4 lg:mb-0 lg:ml-8">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 px-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Search for products..."
                />
                <button
                  className="absolute top-0 right-0 h-full px-4 bg-orange-600 text-white rounded-r-lg"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>

              {/* Navbar Options */}
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <button
                  onClick={() => toggleModal('signin')}
                  className="text-white hover:text-orange-600 transition-colors duration-300"
                >
                  Sign In
                </button>
                <button
                  onClick={() => toggleModal('signup')}
                  className="text-white hover:text-orange-600 transition-colors duration-300"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => toggleModal('orders')}
                  className="text-white hover:text-orange-600 transition-colors duration-300"
                >
                  Return & Orders
                </button>
                <Link
                  to="/cart"
                  className="flex items-center text-white hover:text-orange-600 transition-colors duration-300"
                >
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
        </div>
      </nav>

      {/* Modals */}
      {modalType && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-md mx-auto transform transition-transform duration-300 scale-100">
              <div className="bg-white rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {modalType === 'signin' && 'Sign In'}
                    {modalType === 'signup' && 'Sign Up'}
                    {modalType === 'orders' && 'Return & Orders'}
                  </h3>
                  <button
                    className="text-black bg-transparent border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => toggleModal(null)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Body */}
                <div className="relative p-6 flex-auto">
                  {modalType === 'signin' && (
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="py-2 px-4 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300"
                        >
                          Sign In
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleModal(null)}
                          className="ml-4 py-2 px-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  )}

                  {modalType === 'signup' && (
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="py-2 px-4 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300"
                        >
                          Sign Up
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleModal(null)}
                          className="ml-4 py-2 px-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  )}

                  {modalType === 'orders' && (
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Order ID</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter your order ID"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Reason for Return</label>
                        <textarea
                          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          placeholder="Enter the reason for returning the product"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="py-2 px-4 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleModal(null)}
                          className="ml-4 py-2 px-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Background overlay */}
          <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={() => toggleModal(null)}></div>
        </>
      )}
    </>
  );
};

export default Navbar;
