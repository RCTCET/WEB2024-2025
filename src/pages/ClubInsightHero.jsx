// Components/ClubInsight/ClubInsightHero.jsx
import React from 'react';

const ClubInsightHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-[#fffff]">
      {/* Header Buttons */}
      <div className="flex justify-between w-full max-w-lg text-lg font-semibold text-black mb-4">
        <div className='pr-2'>New Master Attendance</div>
        <div>Grievance Form</div>
      </div>

      {/* Titles above buttons */}
      <div className="flex justify-between w-full max-w-lg mb-12">
        <button className="bg-[#ffedd4] text-black py-3 px-6 rounded-lg hover:bg-[#fcd9a3] transition-all">
          Click Here
        </button>
        <button className="bg-[#ffedd4] text-black py-3 px-6 rounded-lg hover:bg-[#fcd9a3] transition-all">
          Click Here
        </button>
      </div>

      {/* Fine Payment Details Heading */}
      <h2 className="text-2xl font-bold bg-gradient-to-b from-[#98430A] via-[#FE7011] to-[#FDD24C] bg-clip-text text-transparent mb-8">
  Fine Payment Details
</h2>



      {/* Form */}
      <form className="bg-[#fff7ed] p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col gap-4 mb-6">
          <div className='flex flex-row space-x-5'>
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[45%]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[45%]"
            required
          />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[95%]"
            required
          />
        </div>
        {/* Last part */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder=""
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[45%] mb-4"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all w-[35%]"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default ClubInsightHero;
