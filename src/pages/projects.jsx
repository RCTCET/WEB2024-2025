import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const EndeavorsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const avenues = [
        {
            avenue: 'Community Service',
            slides: [
                {
                    image: '/projects/comserv_Kalakriti(5)_compressed.avif',
                    title: 'KALAKRITI',
                    description: 'An initiative where we taught underprivileged children the art of making Ganpati idols using clay. This heartwarming event not only nurtured creativity but also created lasting memories with the kids, fostering joy and learning.',
                },
                {
                    image: '/projects/comserv_mudit_compressed.avif',
                    title: 'MUDITA',
                    description: 'A heartfelt visit to an old age home, where we donated gently used clothes, conducted a medical camp, and spent quality time interacting with the elderly. This event was all about sharing joy and spreading warmth among the senior citizens',
                },
                {
                    image: '/projects/Comserv_Cup of comfort_compressed.avif',
                    title: 'CUP OF COMFORT',
                    description: 'The "Cups of Comfort" project, led by the Community Service Directors, was a heartfelt initiative aimed at supporting the underprivileged by distributing hot tea and biscuits. On July 20th, volunteers gathered at TCET and divided into three teams, covering locations like Thakur Village, Sai Dham Road, and Poisar Depot. They engaged warmly with delivery workers, beggars, and hawkers, providing refreshments and comfort.The project successfully fostered a sense of community and care among all involved.',
                },
                {
                    image: '/projects/comserv_cloth_donation _drive_compressed.avif',
                    title: 'Threads of Kindness',
                    description: 'A compassionate cloth donation drive aimed at collecting gently used clothing for those in need. This initiative encouraged community members to contribute, fostering a spirit of generosity and care, and ensuring that the donated items could bring warmth and comfort to individuals facing difficult circumstances.',
                },
            ],
        },
        {
            avenue: 'Professional',
            slides: [
                {
                    image: '/projects/budget_under_lens_compressed.avif',
                    title: 'Budget 2024: Under the Lens',
                    description: 'This event aimed to enhance professional skills and deepen understanding of the 2024 Union Budget through engaging debates and interactive activities. Members analyzed key financial policies, fostering critical thinking and informed discussions on current economic trends.',
                },
                {
                    image: '/projects/LinkedIn Launchpad _compressed.avif',
                    title: 'LinkedIn Launchpad',
                    description: 'This event featured an expert trainer guiding participants through the essentials and advanced features of LinkedIn. Attendees learned how to effectively optimize their profiles, network strategically, and leverage the platform for professional growth, empowering them to enhance their online presence and career opportunities.',
                },
            ],
        },
        {
            avenue: 'Shiksha',
            slides: [
                {
                    image: '/projects/shiksha_techworld(2)_compressed.avif',
                    title: 'TechWorld',
                    description: 'An engaging initiative designed to teach 9th and 10th-grade students the fundamentals of electronics and digital circuits. Through hands-on activities and interactive sessions, participants gained practical knowledge and skills, sparking their interest in technology and innovation.',
                },
            ],
        },
        {
            avenue: 'Sports',
            slides: [
                {
                    image: '/projects/hall_of_fame.webp',
                    title: 'Hall of Games',
                    description: 'An exciting online game tournament that brought together gaming enthusiasts to compete in a variety of thrilling online games. This event provided a platform for friendly competition and camaraderie, allowing participants to showcase their skills while enjoying a fun and engaging gaming experience.',
                },
                {
                    image: '/projects/sports_monsoon_matchday(3)_compressed.avif',
                    title: 'Monsoon Matchday',
                    description: 'A thrilling football tournament that brought together players and enthusiasts for some exciting matches in the midst of the monsoon. The event was filled with competitive spirit, teamwork, and unforgettable moments on the field.',
                },
            ],
        },
        {
            avenue: 'Club Service',
            slides: [
                {
                    image: '/projects/Club service_Crewmate conspiracy_compressed.avif',
                    title: 'CREWMATE CONSPIRACY',
                    description: 'A real-life adaptation of the popular online game Among Us, where participants were split into crewmates and impostors, each with their own secret objectives. Through a series of tasks, challenges, and detective work, the event encouraged teamwork, strategy, and social interaction. It offered a unique and engaging experience, fostering bonding among members while attracting new participants to the club.',
                },
                {
                    image: '/projects/Club service_Sunday Funday_compressed.avif',
                    title: 'SUNDAY FUNDAY',
                    description: 'Sunday Funday 2.0" was a vibrant and engaging event organised by the RCTCET to provide a fun-filled break for its members. Held at Band Stand, the event featured a series of exciting games like Red Light, Green Light, Kho-Kho, and a cricket match, fostering teamwork and camaraderie. The day concluded with a garba dance, instrumental performances.',
                },
            ],
        },
        {
            avenue: 'Editorial',
            slides: [
                {
                    image: '/projects/editorial_teachersday celebration(3)_compressed.avif',
                    title: 'TEACHERS DAY',
                    description: 'To honour and appreciate the hard work and dedication of the teachers and gurus in our college, we created heartfelt thank you notes and personalised greeting cards. This gesture of gratitude was a small way to acknowledge their invaluable contributions to shaping our lives and education.',
                },
                {
                    image: '/projects/Editorial service - language mash up.avif',
                    title: 'Words a Day',
                    description: 'An engaging editorial initiative aimed at enhancing vocabulary among members. Throughout September, participants were introduced to a new word each day, featuring a different alphabet, encouraging daily learning and enriching their linguistic skills in a fun and interactive way.',
                },
            ],
        },
        {
            avenue: 'Entrepreneurship Development',
            slides: [
                {
                    image: '/projects/Brand Revival series.avif',
                    title: 'Brand Revival Series',
                    description: 'Aimed at enhancing the Entrepreneurial Skills of our members, this event featured a series of fun and competitive games. Participants demonstrated their entrepreneurial knowledge by tackling challenges like understanding profit models and analysing brand ideologies, making it both an educational and engaging experience.',
                },
            ],
        },
        {
            avenue: 'Partner in Service',
            slides: [
                {
                    image: '/projects/comserv_Rotary Medical Camp(1)_compressed.avif',
                    title: 'Rotary Medical Camp',
                    description: 'Organized in collaboration with the Rotary Club of Mumbai Borivali East, this free medical camp aimed to provide essential health services to the community. With a team of dedicated volunteers and medical professionals, we offered check-ups, consultations, and health education, making healthcare accessible to those in need.',
                },
            ],
        },
        {
            avenue: 'Social Media Relations',
            slides: [
                {
                    image: '/projects/comserv_Kalakriti(5)_compressed.avif',
                    title: 'Vighna harta Vibes',
                    description: 'An initiative by the Social Media Relations team, encouraging members to share their magical experiences of Ganpati celebrations. This platform allows everyone to recount the joyous moments, vibrant festivities, and the unique traditions that make this time of year truly special, fostering a sense of community and celebration.',
                },
                {
                    image: '/projects/Social media and relation_Snap and Stroll_compressed.avif',
                    title: 'Snap and Stroll',
                    description: 'A captivating photowalk set in the picturesque surroundings of South Bombay, this event encouraged participants to embrace their creativity while adhering to specific rules for capturing stunning images. The journey concluded with a breathtaking sunset, providing the perfect backdrop for sharing memories and showcasing the beauty of the location.',
                },
            ],
        },
        {
            avenue: 'International Service',
            slides: [
                {
                    image: '/projects/International Service_Drowning prevention day_compressed.avif',
                    title: 'DROWNING PREVENTION DAY',
                    description: 'We honoured the lifeguards of Drishti Marines at Juhu Beach. The event aimed to recognize the crucial role of lifeguards and raise awareness about drowning prevention. The team engaged the lifeguards in heartfelt conversations, learning about their challenges and experiences, while also providing them with thoughtful gifts and food boxes as tokens of appreciation.',
                },
                {
                    image: '/projects/International-Service_World-Democracy-day.avif',
                    title: 'World Literacy Day',
                    description: 'A vibrant natak (play) organized to highlight the significance of literacy and learning in today′s world. Through engaging performances, children were educated on the importance of reading and education, inspiring them to embrace knowledge and pursue their academic goals.',
                },
                {
                    image: '/projects/International Service_World Democracy day(1)_compressed.avif',
                    title: 'World Democracy Day',
                    description: 'An enlightening event where we conducted a demonstration of the current voting system, allowing school students to experience the democratic process firsthand. This initiative aimed to educate young minds about the importance of voting and civic engagement, fostering a sense of responsibility and awareness in the next generation.',
                },
            ],
        },
        {
            avenue: 'Digital Communication',
            slides: [
                {
                    image: '/projects/Digi comm-Visual Velocity.avif',
                    title: 'Canvacation',
                    description: 'An interactive offline workshop dedicated to teaching the art of design using Canva. Participants learned essential design principles and tools, empowering them to create visually appealing graphics and presentations while enhancing their creative skills in a collaborative environment.',
                },
            ],
        },
        // {
        //     avenue: 'Public Relations',
        //     slides: [
        //         {
        //             image: 'https://via.placeholder.com/800x400?text=Coming+soon',
        //         },
        //     ],
        // },
        // {
        //     avenue: 'Marketing',
        //     slides: [
        //         {
        //             image: 'https://via.placeholder.com/800x400?text=Coming+soon',
        //         },
        //     ],
        // },
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
        <div className="bg-white flex flex-col items-center justify-center my-10 md:mx-6">
            <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-5xl flex max-sm:flex-col justify-center items-center gap-x-4 gap-y-4 sm:justify-between sm:items-between">
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

            <div className="relative max-w-fit overflow-hidden rounded-md shadow-lg m-4">
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                    {currentAvenue.slides.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${selectedImageIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}>
                        </span>
                    ))}
                </div>

                <div className="flex transition-transform duration-500 w-full lg:w-[80vw]" style={{ transform: `translateX(-${selectedImageIndex * 100}%)` }}>
                    {currentAvenue.slides.map((slide, index) => (
                        <div key={index} className="max-sm:h-[80vh] min-w-full relative">
                            <LazyLoadImage
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[20rem] md:h-[32rem] object-cover object-[40%_40%]"
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
