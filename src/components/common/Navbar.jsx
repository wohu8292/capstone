import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/capstone" },
  {
    name: "Design",
    path: "/design",
    dropdown: [
      { name: "Quiz", path: "/design/option1" },
      { name: "Option 2", path: "/design/option2" },
    ],
  },
  { name: "Take an Oath", path: "/take-an-oath" },
  { name: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-green-500 py-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 max-w-6xl">
        <button
          className="md:hidden text-green-500 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex space-x-10 text-sm uppercase">
          {navLinks.slice(0, 2).map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <>
                  <button className="flex items-center gap-1 hover:text-green-300">
                    {link.name} <FaChevronDown size={12} />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 bg-black text-green-500 shadow-md rounded-md w-40 border border-green-500 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 delay-75">
                    {link.dropdown.map((item, i) => (
                      <NavLink
                        key={i}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-green-800 rounded"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-green-300 font-semibold" : "hover:text-green-300"
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <div className="flex-shrink-0">
          <img src={logo} alt="Reduce by Reuse" className="w-32 h-auto" />
        </div>

        <div className="hidden md:flex space-x-10 text-sm uppercase">
          {navLinks.slice(2).map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-green-300 font-semibold" : "hover:text-green-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-green-500 py-4 shadow-md">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-center gap-1 w-full py-2 hover:text-green-300"
                    >
                      {link.name} <FaChevronDown size={12} />
                    </button>
                    {/* Mobile Dropdown */}
                    <div className="bg-black text-green-500 py-2 border border-green-500">
                      {link.dropdown.map((item, i) => (
                        <NavLink
                          key={i}
                          to={item.path}
                          className="block px-4 py-2 hover:bg-green-800 rounded"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className="block py-2 hover:text-green-300"
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
