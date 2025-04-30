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
                        src={animatedLogo}
                        alt="Banner Video"
                        className="w-full sm:w-128 sm:h-128 mx-auto object-contain"
                        autoPlay="autoPlay"
                        loop="loop"
                        muted="muted"/>
                </div>

                {/* Paragraph */}
                <p className="text-base sm:text-lg mb-6">
                    Welcome to Reduce by Reuse! We're helping CU Boulder students make their
                    projects more sustainable by reducing electronic waste. 
                    
                    <br/>
                    <br/>
                    Thanks for taking the first step toward a healthier planet

                </p>

                {/* Button */}
                <button
                    className="px-6 py-2 bg-third_color text-black font-bold rounded-md transition hover:bg-lime-500">
                    Resources
                </button>
            </div>
        </div>
    );
};

export default Banner;
