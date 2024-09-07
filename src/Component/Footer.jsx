import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">U Mart</h2>
          <p className="text-gray-400">
            Discover the best products in mobiles, electronics, home & kitchen, computer, and car & bike.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="w-full mt-2 p-2 bg-orange-700 rounded-md text-white hover:bg-orange-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; 2024 U Mart. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-white">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
