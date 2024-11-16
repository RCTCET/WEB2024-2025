import React from 'react';
const Objectives = () => {
  return (
    <div className="bg-[#FFEDD4] py-8 px-4 lg:px-16 w-full">
      <div className="w-full flex flex-col lg:flex-row lg:items-center  ">
        {/* Logo Section */}
        <div className="flex justify-center  basis-[40%] place-items-center  mb-4 lg:mb-0 lg:mr-8 xl:mr-10 2xl:mr-10 2xl:ml-10 ">
          <img 
            src="/objective/logo.svg" 
            alt="RC TCET Logo" 
            className=""
          />
        </div>

        {/* Objectives Section */}
        <div className="bg-white basis-[60%] rounded-lg p-4 sm:p-6 lg:p-8 xl:p-10 shadow-md w-full lg:w-3/4 mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-4">
            Our Objectives
          </h2>
          <ol className="list-decimal list-inside space-y-2 sm:space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-10 text-base sm:text-lg lg:text-xl  ">
            <li>
              <strong>Focus Areas:</strong> Projects and initiatives in Community Service, International Service, Professional Service, and other avenues like Sports, Editorial, Digital Communications.
            </li>
            <li>
              <strong>Organization Goals:</strong> A service, leadership, professional, and community service organization dedicated to fostering leadership, skill development, and impactful service.
            </li>
            <li>
              <strong>Mission:</strong> Develop young adults as leaders, respect others' rights, promote ethical standards, and address community needs.
            </li>
            <li>
              <strong>Opportunities:</strong> Exchange ideas with community leaders, develop leadership skills, and collaborate with Rotary clubs.
            </li>
            <li>
              <strong>Role:</strong> Facilitate the sharing of ventures and act as a catalyst for responsible youth development.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
