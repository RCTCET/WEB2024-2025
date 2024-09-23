import { useState } from 'react';
import MonsoonMatch from '../assets/images/carousel_1.png';
import Ganpati from '../assets/images/carousel_2.png';

const EndeavorsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: MonsoonMatch,
            title: 'Monsoon Match Day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: Ganpati,
            title: 'Ganpati Sculpture',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
    return (
        <div className=" bg-white flex flex-col items-center justify-center my-10">
            <div className=" w-full max-w-5xl flex max-sm:flex-col justify-center items-center gap-x-4 gap-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#98430A] to-[#FDD24C]  ">Our Latest Endaveours</h1>
                <div className="flex ">
                    <button onClick={prevSlide} className="bg-[#FFEDD4] text-black p-1 md:p-3 rounded-full  ">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={nextSlide} className="bg-[#FFEDD4] text-black p-1 md:p-3 rounded-full ">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative  max-w-5xl overflow-hidden rounded-md shadow-lg m-4">
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}>
                        </span>
                    ))}
                </div>

                <div className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[20rem] md:h-[32rem] object-cover"
                            />
                            
                            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                                <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
                                <p className="text-sm text-white">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    );
};

export default EndeavorsCarousel;
