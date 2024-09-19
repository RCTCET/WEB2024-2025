import React from 'react';

function SocialIcon({ href, src, alt }) {
  return (
    <a href={href} className="rounded-full border border-gray-500 p-2">
      <img src={src} alt={alt} className="h-[2em] w-[2em]" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[#fae5d3] w-full py-8">

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="flex py-3">
            <img src="src/assets/RcTcetLogo.png" alt="RCTCET Logo" className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-xl font-bold">RCTCET</h1>
            </div>
          </div>
          <div className="flex">
            <p className="text-md mt-1">
              Thakur College of Engineering and Technology <br />
              A Block, Thakur Educational Campus, Thakur Village, <br />
              Kandivali East, Mumbai 400101, MH-IN <br />
              <a href="mailto:tcetrotaract@gmail.com" className="text-[#6c6c6c] underline">tcetrotaract@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex space-x-4 object-right-bottom">
          <a href="mailto:tcetrotaract@gmail.com" className='w-14' >
            <img

              src="src/Components/Footer/mailIcon.png"
              alt="Email Icon" />
          </a><a href="https://x.com/rc_tcet" className='w-14'>
            <img

              src="src/Components/Footer/xIcon.png"
              alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/in/rotaract-club-tcet-1158811b4/" className='w-14'>
            <img

              src="src/Components/Footer/linkedinIcon.png"
              alt="LinkedIn Icon" />
          </a>

        </div>
      </div>

      <div className="mt-8 text-center w-full px-8 flex flex-col">

        <hr className="border-black mb-4  " />

        <p className="text-gray-600">Copyright © 2024 by Rotaract Club of TCET</p>

      </div>
    </footer>
  );
}

export default Footer;