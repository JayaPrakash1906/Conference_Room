import React from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import img1 from "../Assest/Meeting room Login.jpg";

const Signup = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="w-11/12 sm:w-5/12  rounded-lg shadow-lg p-6 backdrop-blur-lg bg-opacity-50">
        <div className="w-full text-center mb-5">
          <h2 className="text-2xl text-black font-bold">Login</h2>
        </div>
        <form>
          

          {/* Email Field */}
          <div className="flex items-center border-b-2 border-gray-300 mx-5 mb-6 py-2">
            <input
              type="email"
              className="flex-1 bg-transparent outline-none placeholder-gray-500 text-black"
              placeholder="Your Email Address"
            />
            <FaEnvelope className="text-xl text-gray-500" />
          </div>

          {/* Password Field */}
          <div className="flex items-center border-b-2 border-gray-300 mx-5 mb-6 py-2">
            <input
              type="password"
              className="flex-1 bg-transparent outline-none placeholder-gray-500 text-black"
              placeholder="Enter Your Password"
            />
            <FaLock className="text-xl text-gray-500" />
          </div>

          {/* Signup Button */}
          <div className="mx-5 mb-6">
            <button className="bg-black w-full h-10 rounded-sm text-white hover:bg-gray-800 transition duration-300">
              Login
            </button>
          </div>

          {/* Login Link */}
          <div className="mx-5 text-center cursor-pointer">
            <p className="text-sm text-gray-600">
              Don't have an account? <span className="text-blue-500 hover:underline">Sign Up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
