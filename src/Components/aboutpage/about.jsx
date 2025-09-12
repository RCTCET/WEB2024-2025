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
    <div className="relative bg-white dark:bg-stone-900">
      {/* Background Image */}
      <LazyLoadImage
        src="https://www.rc.tcetmumbai.in/About%20us/Baseline%20grid%20bg.webp"
        alt="Baseline Grid Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 dark:opacity-30"
      />

      {/* Foreground */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Top Logo */}
        <LazyLoadImage
          src="https://www.rc.tcetmumbai.in/About%20us/About%20us.webp"
          alt="About Us Logo"
          className="w-[20vw] mt-14 mb-6"
        />

        {/* Center area */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          {/* Left-most */}
<LazyLoadImage
  src="https://www.rc.tcetmumbai.in/About%20us/download%201.webp"
  alt="Side Logo Left"
  className="hidden md:block w-[15vw] h-auto flex-shrink-0"
/>

{/* Left stack */}
<div className="hidden md:flex flex-row md:flex-col items-center gap-6">
  <LazyLoadImage
    src="https://www.rc.tcetmumbai.in/About%20us/download%202.webp"
    alt="Side Logo Left 2"
    className="w-[22vw] flex-shrink-0 h-[40%]"
  />
  <LazyLoadImage
    src="https://www.rc.tcetmumbai.in/About%20us/image%2013.webp"
    alt="Side Logo Left 3"
    className="w-[22vw] flex-shrink-0 h-[40%]"
  />
</div>

{/* Center square */}
<div className="relative rounded-lg p-3 aspect-square w-full md:w-[25vw] overflow-visible flex-shrink-0">
  <LazyLoadImage
    src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756759766/theme_logo_anantya_bebpcc.png"
    alt="Theme Logo Anantya"
    className="absolute inset-0 w-full h-full object-contain"
  />
</div>

{/* Right stack */}
<div className="hidden md:flex flex-row md:flex-col items-center gap-6">
  <LazyLoadImage
    src="https://www.rc.tcetmumbai.in/About%20us/image%2013.webp"
    alt="Side Logo Right 2"
    className="w-[22vw] h-[40%] flex-shrink-0"
  />
  <LazyLoadImage
    src="https://www.rc.tcetmumbai.in/About%20us/people-cliff-giving-himself-handshake_1160-629%201.webp"
    alt="Handshake Graphic"
    className="w-[22vw] max-h-[30%] flex-shrink-0"
  />
</div>

{/* Right-most */}
<LazyLoadImage
  src="https://www.rc.tcetmumbai.in/About%20us/image%2014.webp"
  alt="Side Logo Right"
  className="hidden md:block w-[15vw] h-auto flex-shrink-0"
/>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
