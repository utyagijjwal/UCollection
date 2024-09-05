import React, { useState } from 'react';

const Return = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order ID:', orderId, 'Email:', email, 'Reason:', reason, 'Comments:', comments);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Return or Exchange an Order</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="orderId">Order ID</label>
            <input
              type="text"
              id="orderId"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="reason">Reason for Return/Exchange</label>
            <select
              id="reason"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="">Select a reason</option>
              <option value="Damaged Product">Damaged Product</option>
              <option value="Incorrect Item">Incorrect Item</option>
              <option value="Changed Mind">Changed Mind</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="comments">Additional Comments (Optional)</label>
            <textarea
              id="comments"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide additional details"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Return Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Return;
