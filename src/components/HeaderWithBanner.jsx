import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const HeaderWithBanner = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between rounded px-8 py-4 bg-purple-600 text-white">
        {/* Logo and Brand Name */}
        <div className="text-lg font-bold">
          Gadget Heaven
        </div>

        {/* Centered Menu Items */}
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-gray-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-gray-300'
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-gray-300'
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* Icons on the Right */}
        <div className="flex space-x-4">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-200">
            <FiShoppingCart size={20} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-200">
            <FiHeart size={20} />
          </button>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative bg-purple-500 text-white py-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Gadget Heaven!</h1>
        <p className="mb-6">Explore the latest and greatest gadgets.</p>
        <NavLink to="/dashboard">
          <button className="px-6 py-2 bg-white text-purple-600 rounded hover:bg-gray-200">
            Go to Dashboard
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderWithBanner;
