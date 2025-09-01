
import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {
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
                {
                    image: '/projects/Comm-serv_healing minds.avif',
                    title: 'Healing Minds',
                    description: 'On the occasion of World Mental Health Day, we organized a mega mental health check-up camp for the faculty and students of our college. Professional doctors provided consultations, offering guidance and support for mental well-being. In addition to the check-ups, we distributed cards with positive quotes throughout the campus to spread smiles and encourage positivity.',
                },
                {
                    image: '/projects/Comm-Serv-Diwali on duty.avif',
                    title: 'Diwali On Duty',
                    description: 'We visited various police stations and bus depots to show appreciation for the hard work and dedication of police officers and depot staff during Diwali. Recognizing their commitment to duty, we shared heartfelt letters and poetry written by our members, expressing gratitude for their service. Alongside these messages, we also distributed sweets to bring a festive touch to their day.',
                },

                {
                    image: '/projects/Comm-serv-empower her.avif',
                    title: 'Herspark: A Stem Workshop',
                    description: 'This event aimed to inspire underprivileged students, especially girls, by blending STEM education with hands-on learning. With engaging sessions on space sciences, solar energy, and VR experiences, the event fostered curiosity and innovation. Interactive demonstrations, expert guidance, and scholarship awareness empowered students, making learning fun and impactful.',
                },
            ],
        },
        {
            avenue: 'Professional Development',
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
                {
                    image: '/projects/Professional development - Art of networking.avif',
                    title: 'Beyond the Basics: Mastering Financial Literacy',
                    description: 'The financial literacy seminar provided members with valuable insights into the benefits of early investment and a range of investment options for future financial security. Participants explored practical money management tips and techniques, gaining skills to make informed financial decisions.',
                },
                {
                    image: '/projects/Professional development - Around the world.avif',
                    title: 'Around the World',
                    description: 'The event aimed to blend learning with fun, providing participants with insights into global cultures, geography, and teamwork. Creative elements like boarding passes, fake currencies, and hands-on activities added a realistic and interactive touch. With vibrant participation, competitive spirit, and shared laughter, the event successfully celebrated cultural exchange.',
                },
                {
                    image: '/projects/Future Skills Conclave_Professional Development.avif',
                    title: 'Future Skills Conclave',
                    description: 'The Future Skills Conclave empowered students with industry insights through expert-led discussions on AI, freelancing, financial literacy, and leadership. Engaging panel sessions explored essential skills, career strategies, and networking, fostering learning and professional growth.',
                },
                {
                    image: '/projects/Professional development - Art of networki.avif',
                    title: 'Art of Networking',
                    description: 'The "Art of Networking" blended learning with fun, equipping participants with essential networking skills through interactive activities. It had segments like Elevator Pitch, Networking Bingo, and Business Card Exchange that fostered confidence, communication, and meaningful connections.',
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
                {
                    image: '/projects/Shikha-digital.avif',
                    title: 'Digital Discovery',
                    description: 'We taught students digital literacy, online safety, and how to effectively use educational websites and tools for personal growth. Through interactive sessions and hands-on activities, the students gained valuable skills for navigating the digital world.',
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
                {
                    image: '/projects/sports shuttle striker.avif',
                    title: 'Shuttle Strikers',
                    description: 'The event blended competition with camaraderie, promoting sportsmanship and teamwork. With exciting matches across multiple categories, seamless coordination, and vibrant participation, the event fostered a spirit of unity and enthusiasm. The thrilling finals, heartfelt awards, and a fun post-event badminton session made it a memorable experience for all involved.',
                },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'PeakFit Challenge',
                //     description: 'The "PeakFit Challenge" was an engaging week-long fitness event designed to inspire members to adopt a healthier lifestyle. The challenge included diverse activities such as cardio, strength training, flexibility exercises, and nutrition awareness, ensuring inclusivity for all fitness levels.',
                // },
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
                {
                    image: '/projects/Club Service-Total Dhamaal.avif',
                    title: 'Total Dhamaal',
                    description: 'The event was a collaborative initiative with the Rotaract Clubs of Ghanshyamdas Saraf College, and Mumbai Sky City, focused on fostering bonding through a series of fun, interactive games. Participants engaged in team-building activities that encouraged communication, trust, and collaboration among members from different organizations.',
                },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'Bring Your Own Binge - BYOB',
                //     description: 'Bring Your Own Binge is a unique and interactive event where participants visit a cozy café to enjoy movies and bond with new people through engaging conversations and fun games. The event aims to create a relaxed and vibrant atmosphere, fostering connections among attendees while sharing the joy of cinema and exciting activities.',
                // },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'The Three Amigos',
                //     description: 'The Three Amigos united the Rotaract Clubs of TCET, Ghanshyamdas Saraf College, and Mumbai Jewels for three Sundays of interactive games and social initiatives. With over 28 engaging activities, the event promoted teamwork, inclusivity, and community engagement, embodying the true Rotaract spirit.',
                // },
                {
                    image: '/projects/Club Service-Khoj.avif',
                    title: 'Khoj-Go Get em\'3.0',
                    description: 'Khoj - Go Get Em \'3.0 was an electrifying two-day treasure hunt filled with adventure, teamwork, and creativity. Participants, divided into themed teams, navigated a series of engaging challenges inspired by pop culture, including puzzles, interactive tasks, and mystery-solving elements.',
                },
            ],
        },
        {
            avenue: 'Editorial Service',
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
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'Ek Chitthi Khakhi Ko',
                //     description: 'Members wrote heartfelt poetry and letters to express appreciation for the dedication and service of police officers and traffic police. Through these messages, we acknowledged their tireless efforts in maintaining safety and order in the community. The poems and letters were a sincere tribute to their commitment, highlighting the importance of their work.',
                // },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'The Hustle Reset – 2025',
                //     description: 'This event encouraged reflection and goal-setting, inspiring participants to revisit 2024 and set bold aspirations for 2025. Engaging prompts and a vibrant digital campaign sparked meaningful conversations, fostering motivation, connection, and a renewed sense of purpose for the year ahead.',
                // },
                {
                    image: '/projects/Editorial service - language mash u.avif',
                    title: 'Language Mash-Up',
                    description: 'The event aimed to blend learning with fun, providing participants with insights into global cultures, geography, and teamwork. Creative elements like boarding passes, fake currencies, and hands-on activities added a realistic and interactive touch.',
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
                {
                    image: '/projects/Entrepreneurship development - kaun banega entrepreneur.avif',
                    title: 'Kaun Banega Entreprenuers',
                    description: 'It was an interactive event inspired by the format of Kaun Banega Crorepati, designed to nurture and challenge budding entrepreneurs. The event featured multiple engaging rounds, including a quiz testing participants\' knowledge of entrepreneurship, business strategies, and real-world scenarios.',
                },
                
                {
                    image: '/projects/Entrepreneurship development - entrepreneur_s got latent.avif',
                    title: 'Entrepreneurs Got Latent',
                    description: 'The entrepreneurial pitch event challenged participants to present innovative business ideas and engage in critical market analysis. The event fostered creativity, strategic thinking, and engagement, culminating in a spirited competition.',
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
                {
                    image: '/projects/pis-Abilities unbound.avif',
                    title: 'Abilities Unbound',
                    description: 'We visited specially-abled children to engage with them and understand their unique learning processes. The event included activities like coloring and origami, aimed at fostering creativity and fine motor skills among the children.',
                },
                {
                    image: '/projects/pis-Christmas Chronicles.avif',
                    title: 'Christmas Chronicles',
                    description: 'We celebrated Christmas with underprivileged children, bringing joy through games, gifts, and festive treats. Volunteers and partners created a lively atmosphere, leaving everyone with smiles and cherished memories.',
                },
                {
                    image: '/projects/pis-NBC.avif',
                    title: 'SkinShield',
                    description: 'We visited the National Burn Centre to raise awareness about burn prevention and skin donation. The visit included interactive sessions with medical professionals, a guided tour of treatment facilities, and real-life survivor stories.',
                },
                {
                    image: '/projects/pis-Multilingual elocution competition.avif',
                    title: 'Voice of Diversity',
                    description: 'The multilingual elocution competition encouraged linguistic diversity and public speaking in English, Hindi, Marathi, and Gujarati. Participants showcased creativity and critical thinking, judged on content, delivery, and confidence.',
                },
            ],
        },
        {
            avenue: 'Social Media Relations',
            slides: [

                {
                    image: '/projects/Social media and relation_Snap and Stroll_compressed.avif',
                    title: 'Snap and Stroll',
                    description: 'A captivating photowalk set in the picturesque surroundings of South Bombay, this event encouraged participants to embrace their creativity while adhering to specific rules for capturing stunning images. The journey concluded with a breathtaking sunset, providing the perfect backdrop for sharing memories and showcasing the beauty of the location.',
                },
                {
                    image: '/projects/comserv_Kalakriti(5)_compressed.avif',
                    title: 'Vighna harta Vibes',
                    description: 'An initiative by the Social Media Relations team, encouraging members to share their magical experiences of Ganpati celebrations. This platform allows everyone to recount the joyous moments, vibrant festivities, and the unique traditions that make this time of year truly special, fostering a sense of community and celebration.',
                },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'Wrapped24',
                //     description: 'It was a week-long Instagram event where members reflected on 2024 through daily prompts, fostering community and introspection. It ended with New Year resolutions, inspiring everyone for 2025.',
                // },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'Treasure Trails',
                //     description: 'This event combined adventure and digital storytelling, challenging participants to document their experiences through vlogging. Teams navigated various locations, capturing moments creatively while honing skills in filming, narration, and cinematography.',
                // },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: '100 reasons to love Rotaract',
                //     description: 'The Valentine\'s Week campaign creatively celebrated Rotaract through engaging social media posts. It linked Valentine\'s themes with club values, fostering connection and fun. Each day featured interactive posts, humor, and heartfelt reflections, strengthening the club\'s bond while showcasing Rotaract\'s spirit of friendship and service.',
                // },
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
                {
                    image: '/projects/Silent Rhythms, Global Voices_International Service.avif',
                    title: 'Silent Rhythms, Global Voices',
                    description: 'An seminar on spreading awarness about the importance of sign language and it\'s importance of learning to make the disable person feel inclusive in the community.',
                },
                {
                    image: '/projects/International service - space week.avif',
                    title: 'Cosmic Classroom',
                    description: 'In celebration of World Space Week, we collaborated with the Astronomy Club of TCET to conduct engaging sessions on space and stars for two different schools. Additionally, we extended this learning opportunity to the underprivileged children of Junoon Foundation, where we utilized AR/VR technology to bring the wonders of space to life.',
                },
                {
                    image: '/projects/Freedom Through Education_International Service.avif',
                    title: 'Freedom Through Education',
                    description: 'The event celebrated International Day of Education by engaging children in India\'s freedom struggle through storytelling, art, and discussions. Volunteers narrated inspiring stories of national heroes, followed by creative activities like drawing national symbols and a collaborative thumbprint flag, fostering patriotism and creativity.',
                },
                {
                    image: '/projects/International Service - Vision beyond Sight.avif',
                    title: 'Vision Beyond Sight',
                    description: 'On the occasion of World Braille Day, This event aimed to raise awareness about the challenges faced by the visually impaired through an interactive Braille experience. Participants engaged in hands-on activities, decoding Braille letters and words to foster understanding and empathy.',
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
                {
                    image: '/projects/T-Frame_Digital Communication.avif',
                    title: 'Tframe: A short Film Festival',
                    description: 'We organized a short film competition where participants submitted their entries via Google Forms. The selected films were screened on campus, offering an exciting platform for creativity to be showcased. The winning short film received a cash prize, recognizing the talent and effort of the participants.',
                },
                {
                    image: '/projects/Digi Comm-Recreate & Re.avif',
                    title: 'Recreate and rewind',
                    description: 'The event celebrated Rotaractors\' journey through shared memories and reflections, fostering gratitude, unity, and personal growth. With overwhelming participation, the initiative encouraged appreciation of past experiences, strengthening bonds and leaving members inspired for the year ahead.',
                },
                {
                    image: '/projects/Digi Comm-Visual Veloci.avif',
                    title: 'Visual Velocity: Battle of the Designers',
                    description: 'The event featured three engaging rounds that tested creativity, adaptability, and teamwork. Participants designed under time constraints, tackled unexpected twists, and collaborated through a design relay, leading to unique and innovative outcomes.',
                },
            ],
        },
        {
            avenue: 'Public Relation',
            slides: [
                {
                    image: '/projects/Miles for Impact_ TATA Run_Public Relations.avif',
                    title: 'Miles for Impact: TATA Run',
                    description: 'We collaborated with Suryoday Trust to support specially-abled children participating in the Tata Mumbai Marathon 2025. Volunteers set up a cheering corridor with banners and slogans, creating an uplifting atmosphere. Members enthusiastically encouraged runners, interacted with participants, and promoted the club\'s initiatives.',
                },
                // {
                //     image: '/projects/placeholder.avif',
                //     title: 'SGNP Clean up drive',
                //     description: 'The SGNP Clean-Up Drive was a dynamic environmental initiative promoting conservation, teamwork, and social responsibility. Volunteers worked in designated teams to clear litter across Sanjay Gandhi National Park, ensuring efficient waste disposal.',
                // },
                {
                    image: '/projects/Constructing Diwali Memories_Public Relations.avif',
                    title: 'Constructing Diwali Memories',
                    description: 'We visited construction sites to celebrate Diwali with workers and street children, bringing festive joy to those who often miss out on celebrations. We shared sweets and dry fruits, creating a lively atmosphere and connecting through memorable moments.',
                },
            ],
        },    
    ];
    const currentAvenue = avenues[currentIndex];


    // Automatic scrolling between images within the current avenue
    useEffect(() => {
        const slideInterval = setInterval(() => {
            // Move to the next image in the current avenue
            setSelectedImageIndex((prevIndex) => 
                (prevIndex + 1) % currentAvenue.slides.length
            );
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(slideInterval);
    }, [currentAvenue]);

    // Automatic scrolling between avenues
    useEffect(() => {
        const avenueInterval = setInterval(() => {
            // Move to the next avenue
            setCurrentIndex((prevIndex) => (prevIndex + 1) % avenues.length);
            // Reset image index when changing avenue
            setSelectedImageIndex(0);
        }, 15000); // Change avenue every 15 seconds

        return () => clearInterval(avenueInterval);
    }, []);

    const nextAvenue = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % avenues.length);
        setSelectedImageIndex(0); 
    };

    const prevAvenue = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + avenues.length) % avenues.length);
        setSelectedImageIndex(0); 
    };


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

export default Projects;