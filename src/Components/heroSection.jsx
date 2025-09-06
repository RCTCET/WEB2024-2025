

// const RotaractClubLayout = () => {
//     return (
//         <div className=" w-full bg-black overflow-hidden relative max-h-[65vh] md:max-h-[90vh]">
//             {/* Logo Section */}
//             <div className='flex relative '>
//             <div className=" w-[50%] md:w-1/4 bg-white transform skew-x-12 origin-top-left md:flex items-center justify-center z-10">
//                 <div className="w-32 h-32 md:w-80 md:h-80 flex items-center justify-center  transform md:-skew-x-12  mt-40 md:mr-8">
//                     <img src='/home/logo.svg' alt="Logo" className="w-32 h-32 md:w-full md:h-full object-cover" loading={"lazy"} />
//                 </div>
//             </div>
//             <div className="absolute -inset-10 left-[20rem] z-10 flex items-center justify-center max-md:hidden">
//                 <div className="text-center">
//                     <h1 className="text-5xl xl:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent" style={{textShadow: " 1px 1px 0px rgba(0, 0, 0, 0.1)"}}>Rotaract Club of</h1>
//                     <h1 className="text-5xl xl:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent mt-2" style={{textShadow: " 1px 1px 0px rgba(0, 0, 0, 0.1)"}}>TCET</h1>
//                 </div>
//             </div>
            
//             {/* Images Section */}
//             <div className=" w-full md:w-3/4 flex flex-col  md:pl-20">
//                 <div className="flex-1 flex ">
//                     {[1, 2, 3, 4].map((_, index) => (
//                         <div key={index} className="flex-1 p-2 ">
//                             <div className="relative w-52 h-52 md:w-64 md:h-72 overflow-hidden transform skew-x-12">
//                                 <img
//               src={`/home/hero/img${index + 1}.avif`} alt={`Image ${index + 1}`} loading={"lazy"}
//               className={`absolute top-0 left-0 w-48 h-48  md:w-full md:h-full object-cover -skew-x-12 scale-150  ${index%2!=0 ? "opacity-100":"opacity-40"}` }
//             />

//                             </div>
//                         </div>

//                     ))}
//                 </div>
//                 <div className="flex-1 flex">
//                     {[5, 6, 7, 8].map((_, index) => (
//                         <div key={index} className="flex-1 p-2 ">
//                             <div className="relative w-52 h-52 md:w-64 md:h-72 overflow-hidden transform skew-x-12" >
//                            < img
//               src={`/home/hero/img${index + 5}.avif`} alt={`Image ${index + 5}`} loading={"lazy"}
//               className={`absolute top-0 left-0  w-48 h-48  md:w-full md:h-full object-cover -skew-x-12 scale-150  ${index%2==0 ? "opacity-100":"opacity-40"}`}
//             />
                                
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <img src="/home/WeCarry.svg" className=' max-md:hidden z-20 absolute bottom-10 right-10' alt="" loading={"lazy"}/>
//             </div>
//             </div>



//             {/*  */}
//         </div>
//     );
// };

// export default RotaractClubLayout;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


export default function RotaractClubLayout() {
  const images = [
    { title: "hero img1", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757084449/Copy_of_IMG_4190_ayzbil_lplixh.png" },
    { title: "hero img2", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757084443/IMG_7581_xlm8wx_lnj4jq.png" },
    { title: "hero img3", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757084443/IMG_2044_h3kady_vbe8iv.png" },
    { title: "hero img4", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757084449/Copy_of_IMG_4190_ayzbil_lplixh.png" },
    { title: "hero img5", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756761949/Copy_of_IMG_0420_wdpng4.jpg" },
    { title: "hero img6", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756761965/Copy_of_IMG_1446_1_zwesqm.jpg" },
    { title: "hero img7", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756761959/Copy_of_IMG20250825165248_kvd3wk.jpg" },
    { title: "hero img8", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756761623/PXL_20250718_060353784_i7fthn.jpg" },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Adjust how many cards to show based on screen size
  const getVisibleImages = () => {
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    if (window.innerWidth < 1280) return 3; // Small desktop
    return 4; // Large screens
  };

  const visible = getVisibleImages();

return (
  <div className="relative h-screen max-h-screen rounded-b-3xl w-full overflow-hidden">
    {/* Dynamic Background */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[index].src})` }}
    />
    <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

    {/* Layout Wrapper */}
    <div className="relative z-10 flex flex-col lg:flex-row h-full w-full items-center justify-center px-6 gap-8">
      
      {/* Logo + Text (Top on mobile, Left on desktop) */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center order-1 lg:order-1">
        <img
          src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756746594/logo_pdqctw.svg"
          alt="club logo"
          className="h-24 w-24 sm:h-32 sm:w-32 mb-4 drop-shadow-2xl"
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-2xl">
          Rotaract Club Of TCET
        </h1>
      </div>

      {/* Slider (Bottom on mobile, Right on desktop) */}
      <div className="w-full lg:w-2/3 flex items-center justify-center order-2 lg:order-2">
        <div className="flex items-center gap-4 w-full">
          <IconButton onClick={prevSlide}>
            <ChevronLeft className="h-7 w-7 text-white" />
          </IconButton>

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-4 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
          >
            {images.slice(index, index + visible).map((img, i) => (
              <Card key={i} className="bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-600">
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-32 sm:h-40 w-full object-cover rounded-t-2xl"
                />
                <CardContent>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-stone-100">{img.title}</h3>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <IconButton onClick={nextSlide}>
            <ChevronRight className="h-7 w-7 text-white" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
);
}

// Button Component
function IconButton({ className = "", ...props }) {
  return (
    <button
      className={`h-12 w-12 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm ${className}`}
      {...props}
    />
  );
}

// Card Component
function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/90 text-black shadow-lg backdrop-blur-md ${className}`}
      {...props}
    />
  );
}

// CardContent Component
function CardContent({ className = "", ...props }) {
  return <div className={`p-3 ${className}`} {...props} />;
}
