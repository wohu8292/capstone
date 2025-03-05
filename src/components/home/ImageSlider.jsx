import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exampleImg from "../assets/e.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const sliderRef = useRef(null); // Reference for Slider component

  const slides = [
    { image: exampleImg, title: "Slide 1 Title", description: "This is the description for Slide 1." },
    { image: exampleImg, title: "Slide 2 Title", description: "This is the description for Slide 2." },
    { image: exampleImg, title: "Slide 3 Title", description: "This is the description for Slide 3." }
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-4 text-center relative">
      <h2 className="text-xl font-bold mb-3">What’s going on in the world?</h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button 
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-800"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="w-full">
          <Slider
            ref={sliderRef} // Assign ref to Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={false} // 🔹 DISABLE DEFAULT SLICK ARROWS!
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative">
                <img src={slide.image} alt={slide.title} className="w-full rounded-md" />
                <p className="mt-2 text-base font-semibold">{slide.title}</p>
                <p className="text-sm">{slide.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Button */}
        <button 
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-800"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
