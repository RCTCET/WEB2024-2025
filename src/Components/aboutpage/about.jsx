import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Preload images function
const preloadImages = (srcArray) => {
  srcArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const AboutSection = () => {
  useEffect(() => {
    const images = [
      "/About us/Baseline grid bg.webp",
      "/About us/About us.webp",
      "/About us/download 1.webp",
      "/About us/download 2.webp",
      "/About us/image 13.webp",
      "/About us/people-cliff-giving-himself-handshake_1160-629 1.webp",
      "/About us/png 2 1.webp",
      "/About us/images 5.webp",
      "/About us/image 14.webp"
    ];
    preloadImages(images);
  }, []);

  return (
    <div className="relative overflow-hidden mb-10">
      {/* Background Image */}
      <LazyLoadImage
        src="https://www.rc.tcetmumbai.in/About%20us/Baseline%20grid%20bg.webp"
        alt="Baseline Grid Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative w-full h-auto md:h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Center Logo */}
        <div className="relative flex items-center justify-center w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem] rounded-lg overflow-hidden mb-6">
          <LazyLoadImage
            src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756759766/theme_logo_anantya_bebpcc.png"
            alt="Theme Logo"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        {/* Side Images (Grid on mobile, Flex on desktop) */}
        <div className="grid grid-cols-2 gap-4 md:flex md:gap-6 md:items-center md:justify-center mb-8">
          <LazyLoadImage
            src="https://www.rc.tcetmumbai.in/About%20us/download%201.webp"
            alt="Side Image 1"
            className="w-20 sm:w-28 md:w-32 lg:w-40 object-contain"
          />
          <LazyLoadImage
            src="https://www.rc.tcetmumbai.in/About%20us/image%2013.webp"
            alt="Side Image 2"
            className="w-20 sm:w-28 md:w-32 lg:w-40 object-contain"
          />
          <LazyLoadImage
            src="https://www.rc.tcetmumbai.in/About%20us/download%202.webp"
            alt="Side Image 3"
            className="w-20 sm:w-28 md:w-32 lg:w-40 object-contain"
          />
          <LazyLoadImage
            src="https://www.rc.tcetmumbai.in/About%20us/image%2014.webp"
            alt="Side Image 4"
            className="w-20 sm:w-28 md:w-32 lg:w-40 object-contain"
          />
        </div>

        {/* Heading + Paragraph */}
        <div className="text-center max-w-screen-lg px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-yellow-400 to-yellow-800 bg-clip-text text-transparent mb-4">
            ANANTYA: A LEGACY THAT LASTS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
            The theme embodies the timeless pursuit of creating something that transcends
            the present and endures for generations to come. <strong>Anantya</strong>,
            meaning infinity, reflects the boundless impact of actions, values, and memories
            that continue to live long after moments have passed. It emphasizes the idea
            that true legacy is not confined to a single year or achievement, but is built
            through every effort, every bond, and every milestone that shapes the journey of
            Rotaract.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
            This theme calls on us to leave behind imprints of compassion, leadership, and
            service — memories that inspire, traditions that strengthen, and values that
            outlast time itself. <em>“A Legacy That Lasts”</em> is a reminder that our
            journey today becomes the foundation for tomorrow, ensuring that what we create
            together resonates infinitely, becoming a guiding force for those who follow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
