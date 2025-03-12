import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black border border-yellow-500 p-12 mt-0"> {/* Removed margin-top */}
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Reduce by Reuse Logo" width={120} height={60} />
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4 text-white text-sm font-semibold">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#take-an-oath" className="hover:text-yellow-500">Take an Oath</a>
          <a href="#design" className="hover:text-yellow-500">Design</a>
          <a href="#resources" className="hover:text-yellow-500">Resources</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
