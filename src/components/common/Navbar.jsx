import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/capstone" },
  {
    name: "Design",
    path: "/design",
    dropdown: [
      { name: "Option 1", path: "/design/option1" },
      { name: "Option 2", path: "/design/option2" },
    ],
  },
  { name: "Take an Oath", path: "/take-an-oath" },
  { name: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-900 text-white py-4 w-full fixed top-0 left-0 z-50 transition-all ${
        isScrolled ? "shadow-md bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-6xl">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Left side navigation (Desktop) */}
        <div className="hidden md:flex space-x-10">
          {navLinks.slice(0, 2).map((link, index) => (
            <div key={index} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setIsDropdownOpen(isDropdownOpen === index ? null : index)
                    }
                    className="flex items-center gap-1 hover:text-gray-400"
                  >
                    {link.name} <FaChevronDown size={12} />
                  </button>
                  {isDropdownOpen === index && (
                    <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md w-40">
                      {link.dropdown.map((item, i) => (
                        <NavLink
                          key={i}
                          to={item.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => setIsDropdownOpen(null)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-500 flex items-center justify-center rounded-full">
            {/* Insert Logo Here */}
          </div>
        </div>

        {/* Right side navigation (Desktop) */}
        <div className="hidden md:flex space-x-10">
          {navLinks.slice(2).map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 text-white py-4 shadow-md">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setIsDropdownOpen(isDropdownOpen === index ? null : index)
                      }
                      className="flex items-center justify-center gap-1 w-full py-2 hover:text-gray-400"
                    >
                      {link.name} <FaChevronDown size={12} />
                    </button>
                    {isDropdownOpen === index && (
                      <div className="bg-gray-700 text-white py-2">
                        {link.dropdown.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.path}
                            className="block px-4 py-2 hover:bg-gray-600"
                            onClick={() => {
                              setIsDropdownOpen(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className="block py-2 hover:text-gray-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
