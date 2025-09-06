import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = () => {
  useEffect(() => {
    const images = [
      "https://www.rc.tcetmumbai.in/About%20us/Baseline%20grid%20bg.webp",
      "https://www.rc.tcetmumbai.in/About%20us/About%20us.webp",
      "https://www.rc.tcetmumbai.in/About%20us/download%201.webp",
      "https://www.rc.tcetmumbai.in/About%20us/download%202.webp",
      "https://www.rc.tcetmumbai.in/About%20us/image%2013.webp",
      "https://www.rc.tcetmumbai.in/About%20us/image%2014.webp",
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756759766/theme_logo_anantya_bebpcc.png",
      "https://www.rc.tcetmumbai.in/About%20us/people-cliff-giving-himself-handshake_1160-629%201.webp",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
  <div className="relative overflow-hidden mb-5 bg-white dark:bg-stone-900">
    {/* Background Image */}
    <LazyLoadImage
      src="https://www.rc.tcetmumbai.in/About%20us/Baseline%20grid%20bg.webp"
      alt="Baseline Grid Background"
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 dark:opacity-30"
    />

      {/* Foreground */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start md:justify-center">
        {/* Top Logo */}
        <LazyLoadImage
          src="https://www.rc.tcetmumbai.in/About%20us/About%20us.webp"
          alt="About Us Logo"
          className="mt-8 mb-4 w-20 sm:w-24 md:w-28 lg:w-36 2xl:w-52"
        />


        {/* Center area */}
        <div className="w-full mt-1 px-3 md:px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
            {/* Left-most (visible on mobile too) */}
            <LazyLoadImage
              src="https://www.rc.tcetmumbai.in/About%20us/download%201.webp"
              alt="Side Logo Left"
              className="w-14 md:w-16 2xl:w-48"
            />

            {/* Left stack */}
            <div className="flex flex-row md:flex-col items-center gap-3">
              <LazyLoadImage
                src="https://www.rc.tcetmumbai.in/About%20us/download%202.webp"
                alt="Side Logo Left 2"
                className="w-16 md:w-20 2xl:w-64"
              />
              <LazyLoadImage
                src="https://www.rc.tcetmumbai.in/About%20us/image%2013.webp"
                alt="Side Logo Left 3"
                className="w-16 md:w-20 2xl:w-64"
              />
            </div>

            {/* Center square */}
            <div className="relative rounded-lg p-3 aspect-square w-56 md:w-72 lg:w-96 2xl:w-[40rem] overflow-hidden">
              <LazyLoadImage
                src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756759766/theme_logo_anantya_bebpcc.png"
                alt="Theme Logo Anantya"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            {/* Right stack */}
            <div className="flex flex-row md:flex-col items-center gap-3">
              <LazyLoadImage
                src="https://www.rc.tcetmumbai.in/About%20us/image%2013.webp"
                alt="Side Logo Right 2"
                className="w-16 md:w-20 2xl:w-64"
              />
              <LazyLoadImage
                src="https://www.rc.tcetmumbai.in/About%20us/people-cliff-giving-himself-handshake_1160-629%201.webp"
                alt="Handshake Graphic"
                className="w-16 md:w-20 2xl:w-64"
              />
            </div>

            {/* Right-most */}
            <LazyLoadImage
              src="https://www.rc.tcetmumbai.in/About%20us/image%2014.webp"
              alt="Side Logo Right"
              className="w-14 md:w-16 2xl:w-48"
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutSection;
