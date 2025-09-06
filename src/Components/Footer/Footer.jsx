function Footer() {
  return (
    <footer className="bg-[#fae5d3] dark:bg-[#2D241C] w-full py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="flex py-3">
            <img src="/RcTcetLogo.svg" alt="RCTCET Logo" className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-[#F7F0E1]">RCTCET</h1>
            </div>
          </div>
          <div className="flex">
            <p className="text-md mt-1 text-gray-800 dark:text-[#EBD7C1]">
              Thakur College of Engineering and Technology <br />
              A Block, Thakur Educational Campus, Thakur Village, <br />
              Kandivali East, Mumbai 400101, MH-IN <br />
              <a href="mailto:tcetrotaract@gmail.com" className="text-[#6c6c6c] dark:text-[#B8860B] underline hover:text-[#555] dark:hover:text-[#D4A829] transition-colors duration-200">
                tcetrotaract@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex space-x-4 object-right-bottom">
          <a href="https://x.com/rc_tcet" className='w-14 hover:opacity-80 transition-opacity duration-200'>
            <img
              src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756746683/xIcon_xn4fbb.png"
              alt="Twitter Icon" 
              className="filter dark:invert dark:brightness-0 dark:sepia dark:hue-rotate-[35deg] dark:saturate-[0.8] dark:brightness-[1.2]"
            />
          </a>
          <a href="https://www.linkedin.com/in/rotaract-club-tcet-1158811b4/" className='w-14 hover:opacity-80 transition-opacity duration-200'>
            <img
              src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756746683/linkedinIcon_cyydqx.png"
              alt="LinkedIn Icon" 
              className="filter dark:invert dark:brightness-0 dark:sepia dark:hue-rotate-[35deg] dark:saturate-[0.8] dark:brightness-[1.2]"
            />
          </a>
          
          <a href="https://www.instagram.com/rc_tcet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='w-14 hover:opacity-80 transition-opacity duration-200'>
            <img
              src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757119301/47bd8384-8446-479d-9a42-485a28b09c09_zsozfe.png"
              alt="Instagram Icon" 
              className="filter dark:invert dark:brightness-0 dark:sepia dark:hue-rotate-[35deg] dark:saturate-[0.8] dark:brightness-[1.2]"
            />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center w-full px-8 flex flex-col">
        <hr className="border-black dark:border-[#4A3B2F] mb-4" />
        <p className="text-gray-600 dark:text-[#C4A575]">
          Copyright © {new Date().getFullYear()} by Rotaract Club of TCET
        </p>
      </div>
    </footer>
  );
}

export default Footer;