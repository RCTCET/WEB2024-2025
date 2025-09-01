import { useState } from 'react';

const EndeavorsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            "image": '/projects/Future Skills Conclave_Professional Development.avif',
            "title": 'Future Skills Conclave',
            "description": 'The Future Skills Conclave empowered students with industry insights through expert-led discussions on AI, freelancing, financial literacy, and leadership. Engaging panel sessions explored essential skills, career strategies, and networking, fostering learning and professional growth.',
        },
        {
            "image": '/projects/Entrepreneurship development - entrepreneur_s got latent.avif',
            "title": 'Entrepreneurs Got Latent',
            "description": 'The entrepreneurial pitch event challenged participants to present innovative business ideas and engage in critical market analysis. The event fostered creativity, strategic thinking, and engagement, culminating in a spirited competition.',
        },
        {
            "image": '/projects/sports shuttle striker.avif',
            "title": 'Shuttle Strikers',
            "description": 'The event blended competition with camaraderie, promoting sportsmanship and teamwork. With exciting matches across multiple categories, seamless coordination, and vibrant participation, the event fostered a spirit of unity and enthusiasm. The thrilling finals, heartfelt awards, and a fun post-event badminton session made it a memorable experience for all involved.',
        },
        {
            "image": '/projects/pis-Multilingual elocution competition.avif',
            "title": 'Voice of Diversity',
            "description": 'The multilingual elocution competition encouraged linguistic diversity and public speaking in English, Hindi, Marathi, and Gujarati. Participants showcased creativity and critical thinking, judged on content, delivery, and confidence.',
        },
        {
            "image": '/projects/International Service - Vision beyond Sight.avif',
            "title": 'Vision Beyond Sight',
            "description": 'On the occasion of World Braille Day, This event aimed to raise awareness about the challenges faced by the visually impaired through an interactive Braille experience. Participants engaged in hands-on activities, decoding Braille letters and words to foster understanding and empathy.',
        },
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
                                loading={"lazy"}
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
