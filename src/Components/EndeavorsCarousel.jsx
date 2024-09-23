import { useState } from 'react';
import MonsoonMatch from '../assets/images/carousel_1.png';
import Ganpati from '../assets/images/carousel_2.png';

const EndeavorsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
          "title": "KALAKRITI",
          "description": "An initiative where we taught underprivileged children the art of making Ganpati idols using clay. This heartwarming event not only nurtured creativity but also created lasting memories with the kids, fostering joy and learning.",
          "image": "/home/kalakriti.jpg"
        },
        {
          "title": "DROWNING PREVENTION DAY",
          "description": "We honoured the lifeguards of Drishti Marines at Juhu Beach. The event aimed to recognize the crucial role of lifeguards and raise awareness about drowning prevention. The team engaged the lifeguards in heartfelt conversations, learning about their challenges and experiences, while also providing them with thoughtful gifts and food boxes as tokens of appreciation.",
          "image": "/home/Drowning.jpg"
        },
        {
          "title": "MUDITA",
          "description": "A heartfelt visit to an old age home, where we donated gently used clothes, conducted a medical camp, and spent quality time interacting with the elderly. This event was all about sharing joy and spreading warmth among the senior citizens.",
          "image": "/home/mudita.jpg"
        }
      ]
      


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
                <div className="flex gap-x-2">
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

            <div className="relative max-w-5xl overflow-hidden rounded-md shadow-lg m-4 ">
                <div className="absolute top-4 right-4 z-10 flex space-x-2 ">
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
                                className="w-full h-[32rem] object-cover"
                            />
                            
                            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                                <h3 className="text-md md:text-2xl xl:text-3xl font-bold text-white">{slide.title}</h3>
                                <p className="text-xs md:text-sm xl:text-lg text-white">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    );
};

export default EndeavorsCarousel;
