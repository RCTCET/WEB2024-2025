// import React, { useState, useEffect } from 'react';
// import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

// function Achievement() {
//     return(
//         <>
//           <LazyLoadComponent><AchievementText/></LazyLoadComponent>
//           <LazyLoadComponent><BestClub/></LazyLoadComponent>
//           <LazyLoadComponent><Invicta/></LazyLoadComponent>
//           <LazyLoadComponent><Acer/></LazyLoadComponent>
//           <LazyLoadComponent><ProjectNomimationText/></LazyLoadComponent>
//           <LazyLoadComponent><ProjectSection/></LazyLoadComponent>
//         </>
//     )
// }


// function AchievementText() {
//   return(
//       <div className="flex justify-center mt-16 mb-14 mx-9">
//           <img src={"./Achievement/ACHIEVEMENTS.svg"} alt="Achievement" rel='preload' loading='lazy'/>
//       </div>
//   )
// }

// function BestClub() {
//   return(
//       <div className="flex justify-center my-12">
//           <div className="p-10 lg:px-24 rounded-[20px] bg-HealthCardColor flex justify-center items-center">
//               <p className="font-poppins italic text-[rgba(254,112,17,1)] font-bold text-[28px]">"3rd" Best Club in Rotaract District R.I.D 3141</p>
//           </div>
//       </div>
//   )
// }


// // ---------------------------- Invicta -----------------------------
// const Carousel = () => {
//   const slides = [
//     "./Achievement/Invicta imgs/invicta1.webp",
//     "./Achievement/Invicta imgs/invicta2.webp",
//     "./Achievement/Invicta imgs/invicta3.webp",
//     "./Achievement/Invicta imgs/invicta4.webp",
//   ];

//   const captions = [
//     "Invicta,The 9th District Assembly & AARA Nigam,7th July 2024,By Rotaract District 3141,INVICTA",
//   ];
  
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//   <div className="sm:max-w-sm md:max-w-md xl:max-w-2xl mx-auto">
//     <div className="flex justify-center w-full items-center flex-wrap lg:flex-nowrap lg:gap-x-10">
//       <div className="overflow-hidden relative lg:w-full lg:flex-shrink-0">
//       <div 
//         className="flex transition-transform ease-in-out duration-1000 rounded-xl"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
//         >
//         {slides.map((slide, index) => (
//           <LazyLoadImage key={index} src={slide} alt={`Slide ${index + 1}`}
//           className="xxl:w-4xl object-cover rounded-xl"/>
//         ))}
//       </div>

//       {/* dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//       </div>

//       {/* Caption Display */}
//       <div className="text-center my-2 font-poppins text-xs sm:text-sm xl:text-3xl w-full">
//         {captions[0].split(',').map((line, i) => (
//           <p key={i} 
//             className={`font-poppins font-bold text-center whitespace-nowrap ${i === 0 ? 'text-black xl:text-3xl' : 'xl:text-[22px] text-[rgba(254,112,17,1)]'}`}>{line}</p>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// };

// function Invicta() {
//     return(
//       <div className="flex justify-center flex-col items-center border-y-2 relative overflow-hidden">
//           <LazyLoadImage src="./Achievement/Baseline grid bg.svg" alt="bgImg" className="w-full absolute -z-10 -top-3 lg:top-auto"/>
//         <div className="xxl:justify-evenly space-y-2 w-screen p-4">
//           <LazyLoadComponent>
//             <Carousel />
//           </LazyLoadComponent>
//         </div>
//       </div>
//     )
// }


// // --------------------------- Acer (img with text Carousel) -------------------------

// const AcerCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     "./Achievement/Acer imgs/acer1.webp",
//     "./Achievement/Acer imgs/acer2.webp",
//     "./Achievement/Acer imgs/acer3.webp",
//     "./Achievement/Acer imgs/acer4.webp",
//     "./Achievement/Acer imgs/acer5.webp",
//     "./Achievement/Acer imgs/acer6.webp",
//     "./Achievement/Acer imgs/acer7.webp",
//     "./Achievement/Acer imgs/acer8.webp",
//   ];
//   const captions = [
//     "Best Outstanding President,Rtr.Amar Singh", // use comma (,) for the next line
//     "Best Outstanding Pres-Sec Relations,Rtr.Amar Singh and Rtr.Sumit Sharma",
//     "Highest Membership,in Rotaract District Mumbai,in R.I.D 3141",
//     "Rtr.Bhargav Nadiyana,Best Outstanding PIS Director,in R.I.D 3141",
//     "Rtr.Shreya Pandey,Best Outstanding Club Service Director,in R.I.D 3141",
//     "Rtr.Prabhat Maurya,Best Outstanding Editor,in R.I.D 3141",
//     "Best Council Newcomer,Rtr.Ambresh Shukla,in R.I.D 3141",
//     '"The Big Three",Best Joint Project,in R.I.D 3141',
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//   <div className="sm:max-w-sm md:max-w-md xl:max-w-xl mx-auto">
//     <div>
//       <div className="overflow-hidden relative rounded-xl">
//         <div
//           className="flex transition-transform ease-in-out duration-1000 rounded-xl"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <LazyLoadImage key={index} src={slide} alt={`Slide ${index + 1}`} className="xxl:w-4xl object-cover rounded-xl" />
//           ))}
//         </div>

//       {/* dots */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>

//       </div>
//     </div>

//       {/* Caption Display */}
//       <div className="text-center my-2 font-poppins text-xs sm:text-sm xl:text-3xl w-full">
//         {captions[currentIndex].split(',').map((line, i) => (
//           <p key={i} className="text-lg md:text-xl font-bold">{line}</p>
//         ))}
//       </div>
//   </div>
//   );
// };

// function Acer() {
//   return(
//     <div className="flex justify-center flex-col items-center relative overflow-hidden my-14">
//         <LazyLoadImage src="./Achievement/Baseline grid bg.svg" alt="bgImg" className="w-full absolute -z-10 -top-0 lg:top-auto xxl:-top-0"/>
//       <div className="flex justify-center px-20 lg:justify-start xxl:justify-center w-full lg:pl-20">
//         <p className="font-poppins font-bold text-5xl lg:text-[52px] text-[rgba(219,117,4,1)]">ACER'S</p>
//       </div>
//       <div className="flex justify-evenly flex-wrap xxl:justify-evenly space-y-2 w-full px-4">
//         <div className="mt-10">
//           <LazyLoadComponent><AcerCarousel/></LazyLoadComponent>
//         </div>
//       </div>
//     </div>
//   )
// }


// function ProjectNomimationText() {
//   return(
//     <div className="lg:mt-28 mt-20 lg:mb-14 mb-8 flex justify-center px-10">
//       <LazyLoadImage src="./Achievement/PROJECT NOMINATIONS.svg" alt="project" />
//     </div>
//   )
// }

// const ProjectCarousel = ({slides, captions}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="bg-[rgba(255,214,168,1)] xl:w-[386px] h-fit w-auto sm:w-72 md:w-60 lg:w-[300px] rounded-[30px] box-border p-6 xl:p-12 mb-10 mx-2 flex justify-center items-center flex-col">
//       <div className="xl:w-[282px] w-fit overflow-hidden object-fill mb-5">
//       <div className="overflow-hidden relative rounded-xl">
//         <div
//           className="flex transition-transform ease-in-out duration-1000 rounded-xl"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <LazyLoadImage key={index} src={slide} alt={`Slide ${index + 1}`} className="xxl:w-4xl object-cover rounded-xl" />
//           ))}
//         </div>

//       {/* dots */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>

//       </div>
//     </div>

//       {/* Caption Display */}
//       <div className="font-montserrat font-bold xl:text-xl text-sm">
//         {captions[currentIndex].split(',').map((line, i) => (
//           <p key={i} className="text-center text-[rgba(255,134,39,1)]">{line}</p>
//         ))}
//       </div>
//   </div>
//   );
// };

// function ProjectSection() {
// const slides1 = [
//     "./Achievement/Nominations/Nom1.webp",
//     "./Achievement/Nominations/Nom2.webp",
//     "./Achievement/Nominations/Nom3.webp",
//     "./Achievement/Nominations/Nom1.webp",
//     "./Achievement/Nominations/Nom2.webp",
//   ];
// const captions1 = [
//     '"Herambh",Nominated for Best Project,project in Digital Communications Q1',
//     '"D.E.A.R",Won Crown Joint Project,in Quarter 3',
//     '"Cultural Lit",Nominated for Best Project,in Editorials in Q2',
//     '"Dadaist Poem",Nominated for Best Project,in Editorials in Q3',
//     '"Project Muskaan",Won Best Crown Joint Project,in Q4',
//   ];

// const slides2 = [
//   "./Achievement/Nominations/Nom4.webp",
//   "./Achievement/Nominations/Nom5.webp",
//   "./Achievement/Nominations/Nom6.webp",
//   "./Achievement/Nominations/Nom4.webp",
//   "./Achievement/Nominations/Nom5.webp",
//   ];
// const captions2 = [
//     '"Field Visit: National Burns Centre",Nominated for Best Project,in PIS for Q1',
//     '"Field Visit 2.O : National Burns Centre",Nominated for Best Project,in PIS for Q2',
//     '"Indian Youth Parliament",Nominated for Best Project,in Professional Development in Q3',
//     '"Hackers Week",Nominated for Best Project,in Professional Development in Q2',
//     '"Rotary Multilingual Elocution Competition",Won Best Crown Project,in PIS in Q3',
//   ];

//   const slides3 = [
//     "./Achievement/Nominations/Nom7.webp",
//     "./Achievement/Nominations/Nom8.webp",
//     "./Achievement/Nominations/Nom9.webp",
//     "./Achievement/Nominations/Nom7.webp",
//     "./Achievement/Nominations/Nom8.webp",
//   ];
// const captions3 = [
//     '"Festival Fusion:Saath 7 Special",Nominated for Best Project,in SMR for Q2',
//     '"Techworld",Nominated for Best Flagship Project,in R.I.D 3141',
//     '"Arena of Gamers",Won Crown Best Project,in Sports for Q3',
//     '"Kick Off",Nominated for Best Project,in Sports for Q4',
//     '"Sunday Funday 2.O",Nominated for Best Project,in Club Service for Q1',
//   ];

//   const slides4 = [
//     "./Achievement/Nominations/Nom10.webp",
//     "./Achievement/Nominations/Nom11.webp",
//     "./Achievement/Nominations/Nom1.webp",
//     "./Achievement/Nominations/Nom2.webp",
//     "./Achievement/Nominations/Nom3.webp",
//   ];
// const captions4 = [
//     '"Khoj Go Get Em 2.O",Nominated for Best Project,in Club Service for Q2',
//     '"Beach Battle Royale",Nominated for Best Project,in Club Service for Q4',
//     '"World AIDS Day",Nominated for Best Project,in International Service for Q2',
//     '"PRospect Mastery",Nominated for Best Project,in Public Relations for Q3',
//     '"Idea Ignite:Ideathon Rally",Nominated for Best Project,in Entrepreneurship for Q4',
//   ];

//   const slides5 = [
//     "./Achievement/Nominations/Nom1.webp",
//     "./Achievement/Nominations/Nom2.webp",
//     "./Achievement/Nominations/Nom3.webp",
//     "./Achievement/Nominations/Nom4.webp",
//     "./Achievement/Nominations/Nom5.webp",
//   ];
// const captions5 = [
//     '"Clash Of MNCs",Nominated for Best Project,in Entrepreneurship for Q1',
//     '"Constructing Diwali Memories",Nominated for Best Project,in Public Relations for Q2',
//     '"LogoRewamp Challenge",Nominated for Best Project,in Digital Communications for Q3',
//     '"Hearts for Humanity",Nominated for Best Project,in International Service  for Q1',
//     '"Little Sculptures",Nominated for Best Project,in Community Service for Q1',
//   ];


//   return(
//     <div className="flex flex-row justify-evenly flex-wrap xxl:justify-evenly mb-12">
//       <div className="flex flex-col">
//       <LazyLoadComponent><ProjectCarousel slides={slides1} captions={captions1}/></LazyLoadComponent>
//       <LazyLoadComponent><ProjectCarousel slides={slides2} captions={captions2}/></LazyLoadComponent>
//       </div>

//       <div className="flex flex-col md:justify-center">
//       <LazyLoadComponent><ProjectCarousel slides={slides3} captions={captions3}/></LazyLoadComponent>
//       </div>

//       <div className="flex flex-col">
//       <LazyLoadComponent><ProjectCarousel slides={slides4} captions={captions4}/></LazyLoadComponent>
//       <LazyLoadComponent><ProjectCarousel slides={slides5} captions={captions5}/></LazyLoadComponent>
//       </div>
//     </div>
//   )
// }


// export {Achievement}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";

export const Achievement = () => {
  return (
    <section className="mx-[10px]">
      {/* Heading */}
      <div className="flex items-center justify-center mt-[20px]">
        <img
          src="https://www.rc.tcetmumbai.in/Achievement/ACHIEVEMENTS.svg"
          alt="achievement"
        />
      </div>

      {/* Highlight box */}
      <div className="flex justify-center my-[20px]">
        <div className="p-5 lg:p-10 rounded-[20px] bg-[#FFEFD9] flex justify-center items-center">
         <p className="font-poppins italic text-[rgba(254,112,17,1)] font-bold text-[28px]">
  8<sup>th</sup> Best Club in Rotaract District R.I.D 3141
</p>

        </div>
      </div>

        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center ">
  CLUB ACHIEVEMENT
</h2>
      <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-[30px] h-auto lg:h-[600px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6">
        
        
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] flex items-center mb-6 lg:mb-0 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full h-full rounded-lg shadow-lg"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                 <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />

                  {/* Overlay text */}
                  <div className="absolute bottom-[-3px] bg-black w-full  ">
                    
                    <p className="text-base mt-2 text-center text-white py-2 font-bold text-[20px]">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right div: Text / Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
  <h2 className="text-3xl font-bold mb-4 text-black-600 text-center">
    Dashak
  </h2>

  <hr className="w-16 border-t-4 border-orange-600 rounded mb-6" />

  <div className="flex flex-col items-center">
    <p className="text-lg text-orange-600 mb-6  md:text-[25px] text-center">
    The 10th District Assembly & Aara night
      <br />
      26th July 2025 by
      <br />
      Rotract district 3141 Dashak
      
      
    </p>
  </div>
</div>


      </div>
  
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center ">
  Personal Achivement
</h2>

   
<div className="w-full mt-[30px] h-auto  bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6 flex justify-center">
 <div className="grid grid-cols-1 items-center mx-auto md:grid-cols-2 gap-6">
  {Personal.map((item, index) => (
    <div
      key={index}
      className="bg-[#FFEFD9] p-4 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center text-center"
    >
      <div className="w-full h-[250px] flex items-center justify-center bg-white rounded-lg mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-orange-600">{item.name}</h3>
      <p className="text-gray-700 mt-2">{item.title}</p>
    </div>
  ))}
</div>

</div>
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center my-[10px] ">
  Project Achivement
</h2>
<div className="w-full mt-[30px] h-[400px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6 flex justify-center">






</div>

    </section>
  );
};


const slides = [
  {
    img:"https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827418/8THBEST_nhwai3.png",
    desc:"8TH BEST CLUB IN DISTRICT 3141 "

  },
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827419/RUBY_CITATION_kbnanz.png",
    
    desc: "Ruby spotlight citation "
  },
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827419/CLUB_SITE_up0tpu.png",
   
    desc: " Best Club Website"
  },
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827421/RESPONSIBLE_PRESIDENT_azc0pj.png",
    
    desc: " Responsible President Citation"
  }
];


const Personal=[
  
  {
    "id": 1,
    "title": "Outstanding Vice President at district 3141",
    "name": "Rtr. Aizab Khan",
    "image": "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756789422/DSC03051_fg0pak.jpg"
  },
  {
    "id": 2,
    "title": "Unstoppable Council Member at district 3141",
    "name": "Rtr. Sumit Sharma",
    "image": "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756821756/DSC02604_jmaoow.jpg"
  }
]

  
