import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "1. Brainstorming",
      description: "To make a sustainable project first you need to know what you are going to build, why you are going to build it, what your professor is looking for you to learn, and what is your project's end of life. To benign take an oath to help be sustainable while you build. ",
    },
    {
      title: "2. Prototyping",
      description: "Prototyping is how you learn the method to build your project by creating cheap fast versions of your final project. It is a messy method that is unavoidable and will create lots of electronic and regular waste. Don’t worry about being destructive and focus on learning by reading the most effective ways to prototype here.",
    },
    {
      title: "3. Iteration",
      description: "Having to restart sucks and feels like a waste of time but all successful projects do it. You learn as you go but here is how you can not waste materials and money.",
    },
    {
      title: "4. Deliverables",
      description: "This is what the professor expects from you, or more explicitly this is what you will be graded on. Knowing what the class is about will make sure you don’t make any avoidable mistakes in the future.",
    },
  ];

  const settings = {
    dots: false, // Disable default dots rendering
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 text-center relative">
      <h2 className="text-2xl font-extrabold text-third_color mb-6">STEPS FOR DOING PROJECTS</h2>
      <div className="relative bg-white p-6 rounded-md border border-third_color shadow-lg">
        <button
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-lime-400 hover:text-lime-500 transition"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={20} />
        </button>

        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <h3 className="text-lg font-extrabold mb-2 text-gray-800">{slide.title}</h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">{slide.description}</p>
              {index === 0 && (
                <button className="bg-third_color text-black px-5 py-2 rounded-md font-bold hover:bg-lime-500 transition">
                  TAKE AN OATH
                </button>
              )}
            </div>
          ))}
        </Slider>

        <button
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-lime-400 hover:text-lime-500 transition"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Render dots outside the box manually */}
      <div className="w-full mt-4">
        <ul className="flex justify-center gap-5"> {/* Increased gap for space between dots */}
          {slides.map((_, index) => (
            <li key={index}>
              <div
                className="w-1.5 h-1.5 bg-lime-400 rounded-full hover:bg-lime-500 transition cursor-pointer"
                onClick={() => sliderRef.current.slickGoTo(index)} // Handle the click event to go to the slide
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;
