import React, { useState } from 'react';

function Header() {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to set active link when clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <header className="bg-white w-full py-4 shadow">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8">

          {/* Logo */}
          <div className="flex items-center">
            <img src="/RcTcetLogo.png" alt="Logo" className="h-10 w-10 rounded-full" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Home' ? 'text-orange-600' : 'text-black'}`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'About us' ? 'text-orange-600' : 'text-black'}`}
              onClick={() => handleLinkClick('About us')}
            >
              About us
            </a>
            <a
              href="/projects"
              className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Projects' ? 'text-orange-600' : 'text-black'}`}
              onClick={() => handleLinkClick('Projects')}
            >
              Projects
            </a>
            <a
              href="/hobbyclub"
              className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Club hub' ? 'text-orange-600' : 'text-black'}`}
              onClick={() => handleLinkClick('Club hub')}
            >
              Club hub
            </a>
          </nav>

          {/* Login & Contact Buttons */}
          <div className="hidden md:flex space-x-4 items-center justify-end">
            <a href="#" className="text-black font-medium hover:text-gray-600">Log in</a>
            <a href="#" className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]">Contact us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-4 py-4 px-8">
              <a
                href="#"
                className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Home' ? 'text-orange-600' : 'text-black'}`}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </a>
              <a
                href="#"
                className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'About us' ? 'text-orange-600' : 'text-black'}`}
                onClick={() => handleLinkClick('About us')}
              >
                About us
              </a>
              <a
                href="#"
                className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Projects' ? 'text-orange-600' : 'text-black'}`}
                onClick={() => handleLinkClick('Projects')}
              >
                Projects
              </a>
              <a
                href="#"
                className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Club hub' ? 'text-orange-600' : 'text-black'}`}
                onClick={() => handleLinkClick('Club hub')}
              >
                Club hub
              </a>
              <a href="#" className="text-black font-medium hover:text-gray-600">Log in</a>
              <button
  className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]"
  onClick={() => window.location.href = "#"}
  >
  Contact us
</button>


            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
