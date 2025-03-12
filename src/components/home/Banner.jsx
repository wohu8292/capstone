import React from "react";
import animatedLogo from "../assets/animatedLogo.mp4"; // Import your video file

const Banner = () => {
  return (
    <div className="max-w-screen-lg mx-auto font-arimo px-4 sm:px-6 lg:px-8 pt-8">
      {/* Banner Container */}
      <div className="p-6 sm:p-8 text-center">
        {/* Video */}
        <div className="mb-6">
          <video
            src={animatedLogo} // Replace with your video path
            alt="Banner Video"
            className="w-full sm:w-128 sm:h-128 mx-auto object-contain" // Increased size
            autoPlay
            loop
            muted
          />
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg mb-6">
          Reduce by reuse is a resource for sustainable projects. This is the place to learn more about eco-friendly, sustainable physical projects.
        </p>

        {/* Button */}
        <button className="px-6 py-2 bg-third_color text-black font-bold rounded-md transition hover:bg-yellow-400">
          Resources
        </button>
      </div>
    </div>
  );
};

export default Banner;
