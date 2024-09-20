import { useState } from 'react';

const slides = [
    { id: 1, title: "Slide 1", description: "Description for slide 1", imageUrl: "https://via.placeholder.com/300" },
    { id: 2, title: "Slide 2", description: "Description for slide 2", imageUrl: "https://via.placeholder.com/300" },
    { id: 3, title: "Slide 3", description: "Description for slide 3", imageUrl: "https://via.placeholder.com/300" },
];

const AvenuesofService = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
    return (
        <div className="relative flex items-center flex-col my-10 lg:my-20">
            <div className=" w-full max-w-5xl">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#98430A] to-[#FDD24C] right-[50px] ">Avenues of Service</h1>
                <div className="flex">
                    <button onClick={prevSlide} className="bg-[#FFEDD4] text-black p-3 rounded-full relative bottom-10 left-[99%]">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={nextSlide} className="bg-[#FFEDD4] relative text-black p-3 rounded-full bottom-10 left-[100%]">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="relative w-full max-w-5xl bg-gray-200 rounded-lg overflow-hidden ">
                <div className="flex items-center">
                    <img src={slides[currentIndex].imageUrl} alt={slides[currentIndex].title} className="w-1/2 h-full object-cover rounded-lg" />
                    <div className="p-4 w-1/2">
                        <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
                        <p>{slides[currentIndex].description}</p>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                    {slides.map((slide, index) => (
                        <button key={slide.id} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#FE7011]' : 'bg-black'}`}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvenuesofService;