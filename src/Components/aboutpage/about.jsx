import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative overflow-hidden mb-5">
      {/* Background Image */}
      <img
        src="/About us/Baseline grid bg.svg"
        alt="Baseline Grid Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content over the background */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Image Above the Rectangle */}
        <img
          src="/About us/About us.svg"
          alt="Top Image"
          className="mt-8 mb-4 md:mt-6 min-w-[0.5rem] sm:min-w-[2rem] md:min-w-[3.125rem] lg:min-w-[3.75rem] 2xl:min-w-[13rem]"
        />

        {/* Top Image */}
        <div className="flex items-center mb-2">

        <img
          src="/About us/download 1.svg" 
          alt="Top Image"
          className="xs:hidden max-w-[5rem]"
        />
        </div>
        <div className="flex items-center">

        <img
          src="/About us/download 2.svg" 
          alt="Top Image"
          className="xs:hidden max-w-[5rem] mr-7"
        />
          <img
          src="/About us/image 13.svg" 
          alt="Top Image"
          className="xs:hidden max-w-[5rem] ml-7"
        />
        </div>
        {/* Flex Layout for Side-by-Side Images and Rectangle */}
        <div className="relative flex items-center justify-center w-full px-0.5 gap-0.5 2xl:px-5 2xl:gap-5 mt-[0.1rem]">
          {/* Left-most Image */}
          <img
            src="/About us/download 1.svg"
            alt="Left Most"
            className="hidden xs:block xs:min-w-[5rem] sm:min-w-[3.125rem] lg:min-w-[3.75rem] 2xl:min-w-[13rem]"
          />

          {/* Column for Left Images */}
          <div className="flex flex-col items-center gap-2">
            {/* Second Image from the Left */}
            <img
              src="/About us/download 2.svg"
              alt="Left Image 2"
              className="hidden xs:block mb-5 xs:mb-0 min-w-[4rem] sm:min-w-[6rem] md:min-w-[4.375rem] lg:min-w-[5rem] 2xl:min-w-[17rem]"
            />
            {/* Image Below Left Image 2 */}
            <img
              src="/About us/people-cliff-giving-himself-handshake_1160-629 1.svg"
              alt="Left Image 3"
              className="hidden xs:block mt-5 xs:mt-0 min-w-[4rem] sm:min-w-[6rem] md:min-w-[4.375rem] lg:min-w-[5rem] 2xl:min-w-[17rem]"
            />
          </div>

          {/* Center Rectangle */}
          <div className="relative flex flex-col items-center justify-center bg-[#FFD6A8] border border-[#9D320F] shadow-lg rounded-lg p-4 min-h-[18rem] min-w-[18rem] max-w-[18rem] sm:min-h-[20rem] sm:min-w-[18rem] sm:max-w-[22rem] md:min-h-[20rem] md:min-w-[20rem] md:max-w-[20rem] lg:min-h-[25rem] lg:min-w-[25rem] lg:max-w-[27rem] 2xl:min-h-[40rem] 2xl:min-w-[40rem] 2xl:max-w-[40rem] overflow-hidden mb-[2rem]">
            {/* Background Image behind Rectangle */}
            <img
              src="/About us/png 2 1.svg"
              alt="Background Behind Rectangle"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
            />

            <p className="relative text-center font-arial align-top text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-[2.1rem] font-bold text-[#9D320F] underline whitespace-nowrap z-10">
            Illuminate: Carry a Legacy,<br/> Ignite a Change
            </p>
            <br />
            {/* Additional Text Below the Main Text */}
            <p className="relative text-[0.7rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.2rem] 2xl:text-[1.8rem] text-black whitespace-normal overflow-hidden z-10">
            The theme emphasizes honoring the values and achievements of the past while embracing the responsibility to inspire and lead new transformations. It highlights the dual purpose of preserving wisdom and using it as a beacon for meaningful change, illustrating the balance between being a steward of history and a catalyst for progress. True illumination arises from valuing the past while daring to innovate.            </p>
          </div>

          {/* Column for Right Images */}
          <div className="flex flex-col items-center gap-2">
            {/* Second Image from the Right */}
            <img
              src="/About us/images 5.svg"
              alt="Right Image 2"
              className="hidden xs:block mb-5 xs:mb-0 min-w-[4rem] sm:min-w-[6rem] md:min-w-[4.375rem] lg:min-w-[5rem] 2xl:min-w-[17rem]"
            />
            {/* Image Below Right Image 2 */}
            <img
              src="/About us/image 13.svg"
              alt="Right Image 3"
              className="hidden xs:block mt-5 xs:mt-0 min-w-[4rem] sm:min-w-[6rem] md:min-w-[4.375rem] lg:min-w-[5rem] 2xl:min-w-[17rem]"
            />
          </div>

          {/* Right-most Image */}
          <img
            src="/About us/image 14.svg"
            alt="Right Most"
            className="hidden xs:block xs:min-w-[5rem] sm:min-w-[3.125rem] lg:min-w-[3.75rem] 2xl:min-w-[13rem]"
          />
        </div>
        <div className="flex items-center mb-2">

        <img
          src="/About us/images 5.svg" 
          alt="Top Image"
          className="xs:hidden max-w-[5rem] mr-7"
        />
          <img
          src="/About us/people-cliff-giving-himself-handshake_1160-629 1.svg" 
          alt="Top Image"
          className="xs:hidden max-w-[5rem] ml-7"
        />
        </div>

        {/* Image Below the Rectangle */}
        <div className="flex items-center">

        <img
          src="/About us/image 14.svg" 
          alt="Bottom Image"
          className="xs:hidden max-w-[5rem]"
        />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
