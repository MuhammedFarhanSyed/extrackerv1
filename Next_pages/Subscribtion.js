"use client";

import { useState } from 'react';

export default function Subscribtion() {
  const [feedback, setFeedback] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [subscriptions, setSubscriptions] = useState([
    { name: 'John Doe', price: '5$', status: 'Active', date: '01 Jan 2024',note:'for family' },
    { name: 'Jane Smith', price: '$4', status: 'Pending', date: '05 Feb 2024' ,note:'for family'},
    { name: 'Jack Black', price: '$3', status: 'Expired', date: '10 Mar 2024', note:'for family'},
  ]);

  // Function to handle search
  const filteredSubscriptions = subscriptions.filter((subscription) =>
    subscription.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add a new subscription
  const addSubscription = () => {
    const name = prompt('Enter name:');
    const price = prompt('Enter price:');
    const status = prompt('Enter status (Active/Pending/Expired):');
    const date = new Date().toLocaleDateString();
    const note = prompt('Enter notes:');

    if (name && price && status && note) {
      setSubscriptions([...subscriptions, { name, price, status, date ,note }]);
    }
  };

  return (
    <div className="flex h-screen">
      <main className="bg-gray-900 h-full text-white p-8 flex-1 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Subscription Management</h1>
          <button
            className="rounded bg-gray-800 text-white py-2 px-4 border border-white hover:bg-white hover:text-gray-900"
            onClick={() => setFeedback('Thanks for your feedback!')}
          >
            Send Feedback
          </button>
        </div>

        {/* Summary Section */}
        <section className="bg-gray-800 flex justify-around my-8 p-5 rounded">
          <div className="text-white bg-gray-900 p-5 w-1/4 text-center rounded-lg border border-white transform hover:scale-110 transition-transform">
            <h2 className="text-4xl">100</h2>
            <p className="text-sm text-gray-300">Total Subscriptions</p>
          </div>
          <div className="text-white bg-gray-900 p-5 w-1/4 text-center rounded-lg border border-white transform hover:scale-110 transition-transform">
            <h2 className="text-4xl">50-20</h2>
            <p className="text-sm text-gray-300">Active-Cancelled Subscriptions</p>
          </div>
          <div className="text-white bg-gray-900 p-5 w-1/4 text-center rounded-lg border border-white transform hover:scale-110 transition-transform">
            <h2 className="text-4xl">$20</h2>
            <p className="text-sm text-gray-300">Total Active Monthly</p>
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-gray-800 p-5 rounded shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Filter subscriptions by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-3 border border-gray-700 text-left bg-gray-900">Name</th>
                <th className="p-3 border border-gray-700 text-left bg-gray-900">Price</th>
                <th className="p-3 border border-gray-700 text-left bg-gray-900">Status</th>
                <th className="p-3 border border-gray-700 text-left bg-gray-900">Subscription Date</th>
                <th className="p-3 border border-gray-700 text-left bg-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscriptions.map((subscription, index) => (
                <tr key={index}>
                  <td className="p-3 border border-gray-700 bg-gray-900">{subscription.name}</td>
                  <td className="p-3 border border-gray-700 bg-gray-900">{subscription.price}</td>
                  <td className="p-3 border border-gray-700 bg-gray-900">{subscription.status}</td>
                  <td className="p-3 border border-gray-700 bg-gray-900">{subscription.date}</td>
                  <td className="p-3 border border-gray-700 bg-gray-900">{subscription.note}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Floating Action Button for adding a new subscription */}
        <button
          className="fixed bottom-5 right-5 bg-white text-black w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold hover:bg-gray-500"
          onClick={addSubscription}
        >
          +
        </button>
      </main>
    </div>
  );
}
