import React from "react";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="max-w-screen-lg mx-auto font-arimo px-4 sm:px-6 lg:px-8 pt-8">
      {/* Banner Container */}
      <div className="p-6 sm:p-8 text-center">
        {/* Logo Image */}
        <div className="mb-6">
          <img
            src={logo} // Replace with your image path
            alt="Banner Logo"
            className="w-32 h-32 sm:w-96 sm:h-96 mx-auto object-contain "
          />
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg mb-6">
            Reduce by reuse is a resource for sustainable projects. this is the place to learn more about eco-friendly, sustainable physical Projects.        </p>

        {/* Button */}
        <button className="px-6 py-2 bg-third_color text-black font-bold rounded-md transition hover:bg-yellow-400">
          Resources
        </button>
      </div>
    </div>
  );
};

export default Banner;
