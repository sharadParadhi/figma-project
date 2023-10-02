
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold">
            Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-14">
          <Link to="/" className="text-white hover:text-red-500">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-red-500">
            About
          </Link>
          <Link to="/service" className="text-white hover:text-red-500">
            Service
          </Link>
          <Link to="/contact" className="text-white hover:text-red-500">
            Contact
          </Link>
          <button className="text-white hover:text-red-500" >Sign in</button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen?<FaTimes/>:<FaBars/>}
            {/* <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg> */}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg--800">
          <Link to="/home" className="block text-white p-2 hover:text-red-500">
            Home
          </Link>
          <Link to="/" className="block text-white p-2 hover:text-red-500">
            About
          </Link>
          <Link to="/service" className="block text-white p-2 hover:text-red-500">
            Service
          </Link>
          <Link to="/contact" className="block text-white p-2 hover:text-red-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






