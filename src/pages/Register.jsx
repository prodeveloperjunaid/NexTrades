import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaStore, FaShoppingCart, FaChevronDown } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'buyer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white rounded-xl overflow-hidden flex flex-col md:flex-row h-[550px]">
        
        {/* Left Side - Form (smaller width) */}
        <div className="md:w-2/5 p-3 md:p-8 ">
          <div className="text-center mb-5">
            <h1 className="text-[28px] font-bold text-gray-800 md:text-3xl">Create Your New Account</h1>
            <p className="text-gray-600 mt-2">Join Pakistan's premier wholesale marketplace</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  name="name"
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  name="password"
                  type="password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Register As</label>
              <div className="relative">
                <select
                  name="role"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="buyer">Buyer (I want to purchase products)</option>
                  <option value="seller">Seller (I want to sell products)</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {formData.role === 'buyer' ? (
                    <FaShoppingCart className="text-gray-400" />
                  ) : (
                    <FaStore className="text-gray-400" />
                  )}
                </div>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaChevronDown className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>


        {/* Right Side - Image (larger width) */}
        <div className="hidden md:block md:w-3/5 ml-20 relative">
          <img 
            src="./Images/RegisterImg.jpg"
            alt="NexTrade Registration" 
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Register;