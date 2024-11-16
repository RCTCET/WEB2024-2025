import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('Home');
    } else if (path === '/about') {
      setActiveLink('About us');
    } else if (path === '/projects') {
      setActiveLink('Projects');
    } else if (['/meet-the-team', '/achievement', '/hobbyclub', '/club-insight', '/get-involved'].includes(path)) {
      setActiveLink('Club hub');
    } else {
      setActiveLink(''); // default for unmatched paths
    }
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleClubDropdown = () => {
    setIsClubDropdownOpen(!isClubDropdownOpen);
  };

  return (
      <div>
        <header className="bg-white w-full py-4 shadow">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/RcTcetLogo.svg" alt="Logo" className="h-10 w-10 rounded-full" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a
                  href="/"
                  className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Home' ? 'text-orange-600' : 'text-black'}`}
              >
                Home
              </a>
              <a
                  href="/about"
                  className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'About us' ? 'text-orange-600' : 'text-black'}`}
              >
                About us
              </a>
              <a
                  href="/projects"
                  className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Projects' ? 'text-orange-600' : 'text-black'}`}
              >
                Projects
              </a>
              {/* Dropdown for Club Hub */}
              <div className="relative">
                <button
                    onClick={toggleClubDropdown}
                    className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Club hub' ? 'text-orange-600' : 'text-black'}`}
                >
                  Club Hub
                </button>
                {isClubDropdownOpen && (
                    <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-40">
                      <a href="/meet-the-team" className="block px-4 py-2 text-black hover:bg-gray-100">Meet The Team</a>
                      <a href="/achievement" className="block px-4 py-2 text-black hover:bg-gray-100">Achievement</a>
                      <a href="/hobbyclub" className="block px-4 py-2 text-black hover:bg-gray-100">Hobby Club</a>
                      <a href="/club-insight" className="block px-4 py-2 text-black hover:bg-gray-100">Club Insight</a>
                      <a href="/get-involved" className="block px-4 py-2 text-black hover:bg-gray-100">Get Involved</a>
                    </div>
                )}
              </div>
            </nav>

            {/* Login & Contact Buttons */}
            <div className="hidden md:flex space-x-4 items-center justify-end">
              <a href="/contact" className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]">Contact us</a>
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
                      href="/"
                      className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Home' ? 'text-orange-600' : 'text-black'}`}
                  >
                    Home
                  </a>
                  <a
                      href="/about"
                      className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'About us' ? 'text-orange-600' : 'text-black'}`}
                  >
                    About us
                  </a>
                  <a
                      href="/projects"
                      className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Projects' ? 'text-orange-600' : 'text-black'}`}
                  >
                    Projects
                  </a>
                  {/* Dropdown for Club Hub in Mobile View */}
                  <div className="relative">
                    <button
                        onClick={toggleClubDropdown}
                        className={`text-lg font-medium hover:text-orange-600 ${activeLink === 'Club hub' ? 'text-orange-600' : 'text-black'}`}
                    >
                      Club Hub
                    </button>
                    {isClubDropdownOpen && (
                        <div className="mt-2 bg-white shadow-lg rounded-lg">
                          <a href="/meet-the-team" className="block px-4 py-2 text-black hover:bg-gray-100">Meet The Team</a>
                          <a href="/achievement" className="block px-4 py-2 text-black hover:bg-gray-100">Achievement</a>
                          <a href="/hobbyclub" className="block px-4 py-2 text-black hover:bg-gray-100">Hobby Club</a>
                          <a href="/club-insight" className="block px-4 py-2 text-black hover:bg-gray-100">Club Insight</a>
                          <a href="/get-involved" className="block px-4 py-2 text-black hover:bg-gray-100">Get Involved</a>
                        </div>
                    )}
                  </div>

                  <button
                      className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]"
                      onClick={() => window.location.href = "/contact"}
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
