import React from 'react';

function GetInvolvedHero() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Partner With Us Card */}
        <div className="bg-orange-50 rounded-lg p-8 text-center shadow-lg flex-1 lg:mr-20">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">PARTNER WITH US</h2>
          <p className="text-sm text-gray-700 mb-8 leading-relaxed">
            The fellow Rotaract Clubs can reach out to us as we are always ready
            and up for Joint Projects. We at Rotaract Club of TCET pay more emphasis
            on teamwork and smooth functioning of events. If you want to plan some
            joint project with us, give us a heads up right here!
          </p>
          <a href='https://www.instagram.com/rc_tcet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
          <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition duration-300">
            CONNECT
          </button>
          </a>
          
        </div>

        {/* Volunteer Your Time Card */}
        <div className="bg-orange-50 rounded-lg p-8 text-center shadow-lg flex-1 lg:ml-20">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">VOLUNTEER YOUR TIME</h2>
          <p className="text-sm text-gray-700 mb-8 leading-relaxed">
            WANT TO BE A PART OF ROTARACT?<br />
            CLICK HERE TO KNOW &gt;&gt;&gt;
          </p>
          <a href='/about'>
          <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition duration-300">
            JOIN
          </button>
          </a>

        </div>
      </div>

      {/* Our Institute Card */}
      <div className="mt-12 flex justify-center">
        <div className="bg-orange-50 rounded-lg p-8 text-center shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">OUR INSTITUTE</h2>
          <div className="mb-6">
            {/* Placeholder for image */}
            <div className="bg-gray-300 w-32 h-32 mx-auto flex items-center justify-center text-gray-600">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5l_wr6ryMS15d0K4FFoy2jayU2tOSlCUpw&s" className="h-full w-full" alt="" />
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-6">
            THAKUR COLLEGE OF ENGINEERING AND TECHNOLOGY
          </p>
          <a href="https://www.tcetmumbai.in">
          <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition duration-300">
            VISIT
          </button>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default GetInvolvedHero;
