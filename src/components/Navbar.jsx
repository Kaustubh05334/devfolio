import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl pl-2">KB</a>
            </div>
          </div>
          <div className="flex sm:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={toggleNavbar}
            >
                {isOpen ? (
                    <img src="/threebar.png" alt="Close" className="h-8 w-8 mr-2" />
                ) : (
                    <img src="/threebar.png" alt="Menu" className="h-8 w-8 mr-2" />
                )}
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-4 flex space-x-4">
              <a
                href="#skills"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Experience
              </a>
              <a
                href="#project"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1">
            
            <a
              href="#skills"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
