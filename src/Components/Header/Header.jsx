import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/"; // check if on home page

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("Home");
    else if (path === "/about") setActiveLink("About us");
    else if (path === "/projects") setActiveLink("Projects");
    else if (
      ["/meet-the-team", "/achievement", "/club-insight", "/get-involved", "/avenue"].includes(path)
    ) {
      setActiveLink("Club hub");
    } else setActiveLink("");
  }, [location]);

  // scroll listener only for home
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true); // default solid bg if not home
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
    { name: "Projects", to: "/projects" },
  ];

  const clubLinks = [
    { name: "Meet The Team", to: "/meet-the-team" },
    { name: "Avenues", to: "/avenue" },
    { name: "Achievement", to: "/achievement" },
    { name: "Saa Fine", to: "/saa-fine" },
    { name: "Get Involved", to: "/get-involved" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/RcTcetLogo.svg" alt="Logo" className="h-10 w-10 rounded-full" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-lg font-medium transition-colors ${
                activeLink === link.name
                  ? "text-orange-600"
                  : isScrolled
                  ? "text-black"
                  : "text-white"
              } hover:text-orange-600`}
            >
              {link.name}
            </Link>
          ))}

          {/* Club Hub Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsClubDropdownOpen(!isClubDropdownOpen)}
              aria-expanded={isClubDropdownOpen}
              className={`text-lg font-medium transition-colors ${
                activeLink === "Club hub"
                  ? "text-orange-600"
                  : isScrolled
                  ? "text-black"
                  : "text-white"
              } hover:text-orange-600`}
            >
              Club Hub
            </button>
            {isClubDropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-40">
                {clubLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex space-x-4 items-center justify-end">
          <Link
            to="/contact"
            className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 py-4 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-lg font-medium hover:text-orange-600 ${
                  activeLink === link.name ? "text-orange-600" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Club Hub in Mobile */}
            <div>
              <button
                onClick={() => setIsClubDropdownOpen(!isClubDropdownOpen)}
                className={`text-lg font-medium hover:text-orange-600 ${
                  activeLink === "Club hub" ? "text-orange-600" : "text-black"
                }`}
                aria-expanded={isClubDropdownOpen}
              >
                Club Hub
              </button>
              {isClubDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-lg">
                  {clubLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]"
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;


// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// function Header() {
//   const [activeLink, setActiveLink] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     const path = location.pathname;
//     if (path === "/") setActiveLink("Home");
//     else if (path === "/about") setActiveLink("About us");
//     else if (path === "/projects") setActiveLink("Projects");
//     else if (
//       ["/meet-the-team", "/achievement", "/club-insight", "/get-involved", "/avenue"].includes(path)
//     ) {
//       setActiveLink("Club hub");
//     } else setActiveLink("");
//   }, [location]);

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "About us", to: "/about" },
//     { name: "Projects", to: "/projects" },
//   ];

//   const clubLinks = [
//     { name: "Meet The Team", to: "/meet-the-team" },
//     { name: "Avenues", to: "/avenue" },
//     { name: "Achievement", to: "/achievement" },
//     { name: "Saa Fine", to: "/saa-fine" },
//     { name: "Get Involved", to: "/get-involved" },
//   ];

//   return (
//     <header className="bg-white w-full py-4 shadow">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src="/RcTcetLogo.svg" alt="Logo" className="h-10 w-10 rounded-full" />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.to}
//               className={`text-lg font-medium hover:text-orange-600 ${
//                 activeLink === link.name ? "text-orange-600" : "text-black"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Club Hub Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setIsClubDropdownOpen(!isClubDropdownOpen)}
//               aria-expanded={isClubDropdownOpen}
//               className={`text-lg font-medium hover:text-orange-600 ${
//                 activeLink === "Club hub" ? "text-orange-600" : "text-black"
//               }`}
//             >
//               Club Hub
//             </button>
//             {isClubDropdownOpen && (
//               <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-40">
//                 {clubLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.to}
//                     className="block px-4 py-2 text-black hover:bg-gray-100"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Desktop Contact */}
//         <div className="hidden md:flex space-x-4 items-center justify-end">
//           <Link
//             to="/contact"
//             className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]"
//           >
//             Contact us
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden text-black focus:outline-none"
//           aria-expanded={isMenuOpen}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={
//                 isMenuOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M4 6h16M4 12h16m-7 6h7"
//               }
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <nav className="flex flex-col space-y-4 py-4 px-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.to}
//                 className={`text-lg font-medium hover:text-orange-600 ${
//                   activeLink === link.name ? "text-orange-600" : "text-black"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Club Hub in Mobile */}
//             <div>
//               <button
//                 onClick={() => setIsClubDropdownOpen(!isClubDropdownOpen)}
//                 className={`text-lg font-medium hover:text-orange-600 ${
//                   activeLink === "Club hub" ? "text-orange-600" : "text-black"
//                 }`}
//                 aria-expanded={isClubDropdownOpen}
//               >
//                 Club Hub
//               </button>
//               {isClubDropdownOpen && (
//                 <div className="mt-2 bg-white shadow-lg rounded-lg">
//                   {clubLinks.map((link) => (
//                     <Link
//                       key={link.name}
//                       to={link.to}
//                       className="block px-4 py-2 text-black hover:bg-gray-100"
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/contact"
//               className="bg-[#fae5d3] text-black font-medium py-2 px-4 rounded-xl hover:bg-[#f9d3b5]"
//             >
//               Contact us
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
