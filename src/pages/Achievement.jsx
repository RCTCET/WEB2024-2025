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
    <div className="relative sm:max-w-sm md:max-w-md xl:max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="xxl:w-4xl object-cover" />
          ))}
        </div>
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
  );
};

function Invicta() {
    return(
      <div className="flex justify-center flex-col items-center border-y-2 relative overflow-hidden">
          <img src="./Achievement/Baseline grid bg.svg" alt="bgImg" className="w-full absolute -z-10 -top-3 lg:top-auto"/>
        <div className="flex justify-evenly flex-wrap xxl:justify-evenly space-y-2 w-full p-4">
            <div>
              <Carousel/>
            </div>
            <div className="flex justify-center">
              <img src="./Achievement/Invicta text.svg" alt="InvictaText" className="xxl:max-w-2xl" />
            </div>
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
  ];
  const captions = [
    "Rtr.Prabhat Maurya,Best Outstanding Editor,in R.I.D 3141", // use comma (,) for the next line
    "Slide 2,o,-",
    "Caption about Slide 3,-,-",
    "This is slide 4,.,.",
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
      <div className="text-center my-2 md:px-20 font-poppins">
        {captions[currentIndex].split(',').map((line, i) => (
          <p key={i} className="text-xl font-bold">{line}</p>
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
  ];
const captions1 = [
    "D.E.A.R,Won Crown Joint Project,in Quarter 3", // use comma (,) for the next line
    "Slide 2,-,o",
    "Caption about Slide 3,-,-",
    "This is slide 4,.,.",
  ];

const slides2 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions2 = [
    "D.E.A.R,Won Crown Joint Project,in Quarter 3", // use comma (,) for the next line
    "Slide 2,-,o",
    "Caption about Slide 3,-,-",
    "This is slide 4,.,.",
  ];

  const slides3 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions3 = [
    "D.E.A.R,Won Crown Joint Project,in Quarter 3", // use comma (,) for the next line
    "Slide 2,-,o",
    "Caption about Slide 3,-,-",
    "This is slide 4,.,.",
  ];

  const slides4 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions4 = [
    "D.E.A.R,Won Crown Joint Project,in Quarter 3", // use comma (,) for the next line
    "Slide 2,-,o",
    "Caption about Slide 3,-,-",
    "This is slide 4,.,.",
  ];

  const slides5 = [
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
    "./Achievement/Acer svg.svg",
  ];
const captions5 = [
    "D.E.A.R,Won Crown Joint Project,in Quarter 3", // use comma (,) for the next line
    "Slide 2,-,o",
    "Caption about Slide 3,-,-",
    "This is slide 4,.,.",
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