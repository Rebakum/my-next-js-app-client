"use client";
import { Menu, X } from "lucide-react"; // using lucide icons
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-indigo-600">
            BasaFinder
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="./" className="hover:text-indigo-600">
              Home
            </a>
            <Link href="./about" className="hover:text-indigo-600">
              About
            </Link>
            <a href="./service" className="hover:text-indigo-600">
              Services
            </a>
            <a href="./contact" className="hover:text-indigo-600">
              Contact
            </a>
            <a href="./login" className="hover:text-indigo-600">
              Login
            </a>
            <a href="./register" className="hover:text-indigo-600">
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a href="#" className="block hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="block hover:text-indigo-600">
            About
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Services
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
