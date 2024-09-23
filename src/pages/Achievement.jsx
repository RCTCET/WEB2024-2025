import React, { useState, useEffect } from 'react'

function Achievement() {
    return(
        <>
            <AchievementText/>
            <BestClub/>
            <Invicta/>
            <Acer/>
            <ProjectNomimationText/>
            <ProjectSection/>
        </>
    )
}


function AchievementText() {
  return(
      <div className="flex justify-center mt-16 mb-14 mx-9">
          <img src="./Achievement/ACHIEVEMENTS.svg" alt="Achievement"/>
      </div>
  )
}

function BestClub() {
  return(
      <div className="flex justify-center my-12">
          <div className="p-10 lg:px-24 rounded-[20px] bg-HealthCardColor flex justify-center items-center">
              <p className="font-poppins italic text-[rgba(254,112,17,1)] font-bold text-[28px]">"3rd" Best Club in Rotaract District R.I.D 3141</p>
          </div>
      </div>
  )
}


// ---------------------------- Invicta -----------------------------
const Carousel = () => {
  const slides = [
    "./Achievement/Invicta svg.svg",
    "./Achievement/Invicta svg.svg",
    "./Achievement/Invicta svg.svg",
    "./Achievement/Invicta svg.svg",
  ];

  const captions = [
    "Invicta,The 9th District Assembly & AARA Nigam,7th July 2024,By Rotaract District 3141,INVICTA",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
  <div className="sm:max-w-sm md:max-w-md xl:max-w-2xl mx-auto">
    <div className="flex justify-center w-full items-center flex-wrap lg:flex-nowrap lg:gap-x-10">
      <div className="overflow-hidden relative lg:w-full lg:flex-shrink-0">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="xxl:w-4xl object-cover" />
          ))}
        </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      </div>

      {/* Caption Display */}
      <div className="text-center my-2 font-poppins text-xs sm:text-sm xl:text-3xl w-full">
        {captions[0].split(',').map((line, i) => (
          <p key={i} 
            className={`font-poppins font-bold text-center whitespace-nowrap ${i === 0 ? 'text-black xl:text-3xl' : 'xl:text-[22px] text-[rgba(254,112,17,1)]'}`}>{line}</p>
        ))}
      </div>
    </div>
  </div>
  );
};

function Invicta() {
    return(
      <div className="flex justify-center flex-col items-center border-y-2 relative overflow-hidden">
          <img src="./Achievement/Baseline grid bg.svg" alt="bgImg" className="w-full absolute -z-10 -top-3 lg:top-auto"/>
        <div className="xxl:justify-evenly space-y-2 w-screen p-4">
              <Carousel/>
        </div>
      </div>
    )
}


// --------------------------- Acer (img with text Carousel) -------------------------

const AcerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
  const captions = [
    "Best Outstanding President,Rtr.Amar Singh", // use comma (,) for the next line
    "Best Outstanding Pres-Sec Relations,Rtr.Amar Singh and Rtr.Sumit Sharma",
    "Highest Membership,in Rotaract District Mumbai,in R.I.D 3141",
    "Rtr.Bhargav Nadiyana,Best Outstanding PIS Director,in R.I.D 3141",
    "Rtr.Shreya Pandey,Best Outstanding Club Service Director in R.I.D 3141",
    "Rtr.Prabhat Maurya,Best Outstanding Editor in R.I.D 3141",
    "Best Council Newcomer,Rtr.Ambresh Shukla in R.I.D 3141",
    '"The Big Three",Best Joint Project in R.I.D 3141',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
  <div className="sm:max-w-sm md:max-w-md xl:max-w-xl mx-auto">
    <div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="xxl:w-4xl object-cover" />
          ))}
        </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      </div>
    </div>

      {/* Caption Display */}
      <div className="text-center my-2 font-poppins text-xs sm:text-sm xl:text-3xl w-full">
        {captions[currentIndex].split(',').map((line, i) => (
          <p key={i} className="text-lg md:text-xl font-bold">{line}</p>
        ))}
      </div>
  </div>
  );
};

function Acer() {
  return(
    <div className="flex justify-center flex-col items-center relative overflow-hidden my-14">
        <img src="./Achievement/Baseline grid bg.svg" alt="bgImg" className="w-full absolute -z-10 -top-0 lg:top-auto xxl:-top-0"/>
      <div className="flex justify-center px-20 lg:justify-start xxl:justify-center w-full lg:pl-20">
        <p className="font-poppins font-bold text-5xl lg:text-[52px] text-[rgba(219,117,4,1)]">ACER'S</p>
      </div>
      <div className="flex justify-evenly flex-wrap xxl:justify-evenly space-y-2 w-full px-4">
        <div className="mt-10">
          <AcerCarousel/>
        </div>
      </div>
    </div>
  )
}


function ProjectNomimationText() {
  return(
    <div className="lg:mt-28 mt-20 lg:mb-14 mb-8 flex justify-center px-10">
      <img src="./Achievement/PROJECT NOMINATIONS.svg" alt="" />
    </div>
  )
}

const ProjectCarousel = ({slides, captions}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[rgba(255,214,168,1)] xl:w-[386px] h-fit w-auto sm:w-72 md:w-60 lg:w-[300px] rounded-[30px] box-border p-6 xl:p-12 mb-10 mx-2 flex justify-center items-center flex-col">
      <div className="xl:w-[282px] w-fit overflow-hidden object-fill mb-5">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="xxl:w-4xl object-cover" />
          ))}
        </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      </div>
    </div>

      {/* Caption Display */}
      <div className="font-montserrat font-bold xl:text-xl text-sm">
        {captions[currentIndex].split(',').map((line, i) => (
          <p key={i} className="text-center text-[rgba(255,134,39,1)]">{line}</p>
        ))}
      </div>
  </div>
  );
};

function ProjectSection() {
const slides1 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions1 = [
    '"Herambh",Nominated for Best Project,project in Digital Communications Q1',
    '"D.E.A.R",Won Crown Joint Project,in Quarter 3',
    '"Cultural Lit",Nominated for Best Project,in Editorials in Q2',
    '"Dadaist Poem",Nominated for Best Project,in Editorials in Q3',
    '"Project Muskaan",Won Best Crown Joint Project,in Q4',
  ];

const slides2 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions2 = [
    '"Field Visit: National Burns Centre",Nominated for Best Project,in PIS for Q1',
    '"Field Visit 2.O : National Burns Centre",Nominated for Best Project,in PIS for Q2',
    '"Indian Youth Parliament",Nominated for Best Project,in Professional Development in Q3',
    '"Hackers Week",Nominated for Best Project,in Professional Development in Q2',
    '"Rotary Multilingual Elocution Competition",Won Best Crown Project,in PIS in Q3',
  ];

  const slides3 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions3 = [
    '"Festival Fusion:Saath 7 Special",Nominated for Best Project,in SMR for Q2',
    '"Techworld",Nominated for Best Flagship Project,in R.I.D 3141',
    '"Arena of Gamers",Won Crown Best Project,in Sports for Q3',
    '"Kick Off",Nominated for Best Project,in Sports for Q4',
    '"Sunday Funday 2.O",Nominated for Best Project,in Club Service for Q1',
  ];

  const slides4 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions4 = [
    '"Khoj Go Get Em 2.O",Nominated for Best Project,in Club Service for Q2',
    '"Beach Battle Royale",Nominated for Best Project,in Club Service for Q4',
    '"World AIDS Day",Nominated for Best Project,in International Service for Q2',
    '"PRospect Mastery",Nominated for Best Project,in Public Relations for Q3',
    '"Idea Ignite:Ideathon Rally",Nominated for Best Project,in Entrepreneurship for Q4',
  ];

  const slides5 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions5 = [
    '"Clash Of MNCs",Nominated for Best Project,in Entrepreneurship for Q1',
    '"Constructing Diwali Memories",Nominated for Best Project,in Public Relations for Q2',
    '"LogoRewamp Challenge",Nominated for Best Project,in Digital Communications for Q3',
    '"Hearts for Humanity",Nominated for Best Project,in International Service  for Q1',
    '"Little Sculptures",Nominated for Best Project,in Community Service for Q1',
  ];


  return(
    <div className="flex flex-row justify-evenly flex-wrap xxl:justify-evenly mb-12">
      <div className="flex flex-col">
        <ProjectCarousel slides={slides1} captions={captions1}/>
        <ProjectCarousel slides={slides2} captions={captions2}/>
      </div>

      <div className="flex flex-col md:justify-center">
        <ProjectCarousel slides={slides3} captions={captions3}/>
      </div>

      <div className="flex flex-col">
        <ProjectCarousel slides={slides4} captions={captions4}/>
        <ProjectCarousel slides={slides5} captions={captions5}/>
      </div>
    </div>
  )
}


export {Achievement}