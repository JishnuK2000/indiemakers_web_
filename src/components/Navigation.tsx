import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/LogoGreen.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Labs", path: "/Labs" },
    { name: "Services", path: "/services" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Responsive padding: pt-4 mobile, px-4 mobile, px-6 sm, px-8 md */}
      <div className="max-w-[90rem] mx-auto font-sans font-semibold text-[18px] pt-4 px-4 sm:px-6 md:px-8">

        {/* Responsive navbar height: h-[140px] large screens, h-[100px] medium, h-[80px] small */}
        <div className="flex justify-between items-center h-[80px] sm:h-[100px] lg:h-[140px]">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Graan Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 border-2 border-gray-800 rounded-full text-[18px] font-semibold">
              Partner With Us
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full px-4 py-2 border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
              Partner With Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
