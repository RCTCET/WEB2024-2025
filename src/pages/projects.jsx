import { useState } from 'react';

const EndeavorsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const avenues = [
        {
            avenue: 'Community Service',
            slides: [
                {
                    image: '/projects/IMG_0145.webp',
                    title: 'KALAKRITI',
                    description: 'An initiative where we taught underprivileged children the art of making Ganpati idols using clay. This heartwarming event not only nurtured creativity but also created lasting memories with the kids, fostering joy and learning.',
                },
                {
                    image: '/projects/IMG_9256.webp',
                    title: 'MUDITA',
                    description: 'A heartfelt visit to an old age home, where we donated gently used clothes, conducted a medical camp, and spent quality time interacting with the elderly.',
                },
                {
                    image: '/projects/COF.webp',
                    title: 'CUP OF COMFORT',
                    description: 'A project aimed at supporting the underprivileged by distributing hot tea and biscuits, fostering a sense of community and care among all involved.',
                },
                {
                    image: '/projects/comserv_cloth_donation__drive.webp',
                    title: 'Threads of Kindness',
                    description: 'A compassionate cloth donation drive aimed at collecting gently used clothing for those in need, fostering generosity and care.',
                },
            ],
        },
        {
            avenue: 'Professional',
            slides: [
                {
                    image: '/projects/IMG_7218.webp',
                    title: 'Budget 2024: Under the Lens',
                    description: 'An event that enhanced professional skills through engaging debates and discussions on the 2024 Union Budget and key financial policies.',
                },
                {
                    image: '/projects/Awareness and Prevention .webp',
                    title: 'LinkedIn Launchpad',
                    description: 'A training session where participants learned to optimize their LinkedIn profiles and network strategically for professional growth.',
                },
            ],
        },
        {
            avenue: 'Shiksha',
            slides: [
                {
                    image: '/projects/IMG20240719115356.webp',
                    title: 'TechWorld',
                    description: 'An engaging initiative designed to teach 9th and 10th-grade students the fundamentals of electronics and digital circuits. Through hands-on activities and interactive sessions, participants gained practical knowledge and skills, sparking their interest in technology and innovation.',
                },
            ],
        },
        {
            avenue: 'Sports',
            slides: [
                {
                    image: '/projects/WhatsApp Image 2024-09-24 at 2.31.57 AM.jpeg',
                    title: 'Hall of Games',
                    description: 'An exciting online gaming tournament where participants competed in a variety of thrilling games.',
                },
                {
                    image: '/projects/IMG_6620.webp',
                    title: 'Monsoon Matchday',
                    description: 'A thrilling football tournament held during the monsoon, filled with competitive spirit and teamwork.',
                },
            ],
        },
        {
            avenue: 'Club Service',
            slides: [
                {
                    image: '/projects/IMG_8238.webp',
                    title: 'CREWMATE CONSPIRACY',
                    description: 'A real-life adaptation of the popular online game Among Us, where participants were split into crewmates and impostors, each with their own secret objectives. Through a series of tasks, challenges, and detective work, the event encouraged teamwork, strategy, and social interaction. It offered a unique and engaging experience, fostering bonding among members while attracting new participants to the club.',
                },
                {
                    image: '/projects/IMG_7522.HEIC (1).webp',
                    title: 'SUNDAY FUNDAY',
                    description: 'Sunday Funday 2.0" was a vibrant and engaging event organised by the RCTCET to provide a fun-filled break for its members. Held at Band Stand, the event featured a series of exciting games like Red Light, Green Light, Kho-Kho, and a cricket match, fostering teamwork and camaraderie. The day concluded with a garba dance, instrumental performances.',
                },
            ],
        },
        {
            avenue: 'Editorial',
            slides: [
                {
                    image: '/projects/IMG20240906131827.webp',
                    title: 'TEACHERS DAY',
                    description: 'To honour and appreciate the hard work and dedication of the teachers and gurus in our college, we created heartfelt thank you notes and personalised greeting cards. This gesture of gratitude was a small way to acknowledge their invaluable contributions to shaping our lives and education.',
                },
            ],
        },
        {
            avenue: 'Entrepreneurship Development',
            slides: [
                {
                    image: '/projects/IMG_9948.webp',
                    title: 'Brand Revival Series',
                    description: 'Aimed at enhancing the Entrepreneurial Skills of our members, this event featured a series of fun and competitive games. Participants demonstrated their entrepreneurial knowledge by tackling challenges like understanding profit models and analysing brand ideologies, making it both an educational and engaging experience.',
                },
            ],
        },
        {
            avenue: 'Partner in Service',
            slides: [
                {
                    image: '/projects/IMG_0107.webp',
                    title: 'Rotary Medical Camp',
                    description: 'Organized in collaboration with the Rotary Club of Mumbai Borivali East, this free medical camp aimed to provide essential health services to the community. With a team of dedicated volunteers and medical professionals, we offered check-ups, consultations, and health education, making healthcare accessible to those in need.',
                },
            ],
        },
        {
            avenue: 'Social Media Relations',
            slides: [
                {
                    image: '/projects/IMG_1526.webp',
                    title: 'Snap and Stroll',
                    description: 'A captivating photowalk set in the picturesque surroundings of South Bombay, this event encouraged participants to embrace their creativity while adhering to specific rules for capturing stunning images. The journey concluded with a breathtaking sunset, providing the perfect backdrop for sharing memories and showcasing the beauty of the location.',
                },
            ],
        },
        {
            avenue: 'International Service',
            slides: [
                {
                    image: '/projects/International Service_Drowning prevention day.webp',
                    title: 'DROWNING PREVENTION DAY',
                    description: 'We honoured the lifeguards of Drishti Marines at Juhu Beach. The event aimed to recognize the crucial role of lifeguards and raise awareness about drowning prevention. The team engaged the lifeguards in heartfelt conversations, learning about their challenges and experiences, while also providing them with thoughtful gifts and food boxes as tokens of appreciation.',
                },
                {
                    image: '/projects/IMG_9419.webp',
                    title: 'World Democracy Day',
                    description: 'An enlightening event where we conducted a demonstration of the current voting system, allowing school students to experience the democratic process firsthand. This initiative aimed to educate young minds about the importance of voting and civic engagement, fostering a sense of responsibility and awareness in the next generation.',
                },
            ],
        },
        {
            avenue: 'Digital Communication',
            slides: [
                {
                    image: 'https://via.placeholder.com/800x400?text=Coming+soon',
                },
            ],
        },
        {
            avenue: 'Public Relations',
            slides: [
                {
                    image: 'https://via.placeholder.com/800x400?text=Coming+soon',
                },
            ],
        },
        {
            avenue: 'Marketing',
            slides: [
                {
                    image: 'https://via.placeholder.com/800x400?text=Coming+soon',
                },
            ],
        },
    ];

    const nextAvenue = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % avenues.length);
        setSelectedImageIndex(0); 
    };

    const prevAvenue = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + avenues.length) % avenues.length);
        setSelectedImageIndex(0); 
    };

    const currentAvenue = avenues[currentIndex];

    return (
        <div className="bg-white flex flex-col items-center justify-center my-10">
            <div className="w-full max-w-5xl flex max-sm:flex-col justify-center items-center gap-x-4 gap-y-4 sm:justify-between sm:items-between">
                <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#98430A] to-[#FDD24C]">
                    {currentAvenue.avenue}
                </h1>
                <div className="flex gap-x-2">
                    <button onClick={prevAvenue} className="bg-[#FFEDD4] text-black p-1 md:p-3 rounded-full">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={nextAvenue} className="bg-[#FFEDD4] text-black p-1 md:p-3 rounded-full">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative max-w-5xl overflow-hidden rounded-md shadow-lg m-4">
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                    {currentAvenue.slides.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${selectedImageIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}>
                        </span>
                    ))}
                </div>

                <div className="flex transition-transform duration-500 w-full  " style={{ transform: `translateX(-${selectedImageIndex * 100}%)` }}>
                    {currentAvenue.slides.map((slide, index) => (
                        <div key={index} className="max-sm:h-[80vh] min-w-full  relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[20rem] md:h-[32rem] object-cover"
                                loading="lazy"
                            />
                            
                            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                                <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                                <p className="text-xs text-justify sm:text-sm text-white">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EndeavorsCarousel;
