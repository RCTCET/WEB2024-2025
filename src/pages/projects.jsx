
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <div className="scroll-smooth bg-white dark:bg-stone-900 min-h-screen">
      {/* Hero */}
      <div className="flex md:min-h-[60vh] justify-center items-center p-6 sm:p-8 relative">
        <div className="relative w-full h-[80%]">
          <img
            src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756821756/DSC02604_jmaoow.jpg"
            alt="Projects"
            className="h-full w-full object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 rounded-xl" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              EXPLORE OUR{" "}
              <span className="text-orange-500 dark:text-yellow-400">
                PROJECTS
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-base max-w-lg">
              Discover the transformative initiatives that define our commitment
              to positive change in the community.
            </p>
            <a href="/"><button className="mt-6 bg-orange-500 dark:bg-yellow-600 hover:bg-orange-600 dark:hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition">
              Get Involved
            </button></a>
          </div>
        </div>
      </div>

      {/* Links */}
      {/* <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur border-b dark:border-stone-700">
        <div className="flex overflow-x-auto text-sm sm:text-md space-x-6 p-3 sm:p-4 font-bold underline">
          <a href="#Club-Service" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Club Service</a>
          <a href="#Community-Service" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Community Service</a>
          <a href="#International-Service" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">International Service</a>
          <a href="#Professional-Development" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Professional Development</a>
          <a href="#Sports" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Sports</a>
          <a href="#Entrepreneurship-Development" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Entrepreneurship Development</a>
          <a href="#Digital-Communication" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Digital Communication</a>
          <a href="#Partner-In-Service" className="whitespace-nowrap text-gray-800 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400">Partner In Service</a>
        </div>
      </div> */}
      <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b dark:border-stone-700 sticky top-0 z-20">
        <nav className="flex overflow-x-auto scrollbar-hide text-sm sm:text-base font-semibold p-3 sm:p-4 gap-3 sm:gap-4">
          {[
            { id: "Club-Service", label: "Club Service" },
            { id: "Community-Service", label: "Community Service" },
            { id: "International-Service", label: "International Service" },
            { id: "Professional-Development", label: "Professional Development" },
            { id: "Sports", label: "Sports" },
            { id: "Entrepreneurship-Development", label: "Entrepreneurship Development" },
            { id: "Digital-Communication", label: "Digital Communication" },
            { id: "Partner-In-Service", label: "Partner In Service" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-4 py-2 rounded-xl whitespace-nowrap
          bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-stone-800 dark:to-stone-900
          text-stone-700 dark:text-stone-200
          border border-amber-200 dark:border-stone-700
          hover:from-orange-100 hover:to-yellow-100 hover:text-orange-700
          dark:hover:from-yellow-100/10 dark:hover:to-yellow-200/10 dark:hover:text-yellow-400
          transition-all shadow-sm hover:shadow-md"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>




      {/* Sections */}
      <div className="p-4 sm:p-6 space-y-16">
        {/* Club Service */}
        <section id="Club-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Club Service</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785685/Copy_of_IMG_0433_ppl19y.jpg"
                title="Rotaract's Day Out"
                objective="Rotaract Club of TCET organised Rotaract's Day Out at Bandstand, Bandra, as the first club service event of the year to build stronger bonds among members through fun games, laughter, and fellowship."
                impact={[
                  "Engaged 80+ members in games like Dodgeball, Footloose, and Cricket — unforgettable moments of joy.",
                  "Strengthened friendships and club spirit; members left motivated and connected.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Community Service */}
        <section id="Community-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Community Service</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929229/Copy_of_IMG_3439_ww2w3f_x6zmwz.jpg"
                title="Kalakriti 2.0"
                objective="Celebrate Ganesh Chaturthi in an eco-friendly and creative way with underprivileged children, cancer patients, and elderly residents."
                impact={[
                  "Benefited 120+ participants (60+ students, 40+ seniors, 20+ cancer patients).",
                  "Promoted sustainable celebrations while fostering happiness, creativity, and togetherness.",
                ]}
              />
            </div>
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785650/Copy_of_IMG-20250713-WA0085_1_l2cmv5.jpg"
                title="Kindness Kart"
                objective="Donation drive collecting stationery, clothes, food, and sports items to support underprivileged children by fulfilling basic needs."
                impact={[
                  "Collected 100+ stationery items, 70+ clothes, sports equipment, and food — benefitting 170+ children.",
                  "Inspired students and faculty to give back; brought smiles and hope at Girija Welfare Association.",
                ]}
              />
            </div>
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929414/Copy_of_IMG_7989_nqrzgv_g4cxxc.jpg"
                title="Tails and Tales"
                objective="Awareness session on animal communication with Ms. Shrutika Kubal to understand animals' emotional and psychological needs."
                impact={[
                  "Engaged 100+ students with real stories and interactive activities; built lasting empathy for animals.",
                  "Prompted reflection on bonds with pets and nature — lessons in love, patience, and understanding.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* International Service */}
        <section id="International-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">International Service</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785653/nin_4_vghiwb.jpg"
                title="Nations In Numbers"
                objective="Rotaract Club of TCET organised Nations In Numbers on World Population Day to raise awareness about global demographics, culture, and challenges through creative pitches, quizzes, and interactive rounds."
                impact={[
                  "Encouraged participants to think critically about real-world issues, linking numbers with stories of people and nations.",
                  "Sparked cultural curiosity, empathy, and awareness, leaving students more mindful of global diversity and responsibility.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Professional Development */}
        <section id="Professional-Development" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Professional Development</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785657/Copy_of_IMG20250627144703_cxmlno.jpg"
                title="Prerana"
                objective="Rotaract Club of TCET organised Prena, a 5-day learning fest, to spark curiosity and holistic development among students through hands-on sessions, creativity, and competitions."
                impact={[
                  "Covered diverse skills including solar robotics, Arduino, photography, Tableau, and breadboard circuits, along with engaging quiz contests.",
                  "Concluded with a reel-making competition and prize distribution, leaving students motivated, skilled, and inspired to keep exploring.",
                ]}
              />
            </div>
          </div>
        </section>

        {/*  */}
        {/* Sports */}
        <section id="Sports" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Sports</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785672/Copy_of_IMG_1577_1_qflxxv.jpg"
                title="Monsoon Matchday 2.0"
                objective="Rotaract Club of TCET organised Monsoon Matchday 2.0, a football tournament, to foster teamwork, sportsmanship, and healthy competition while providing members a professional matchday experience."
                impact={[
                  "Brought together 14 enthusiastic teams in an electrifying series of matches, filled with energy, passion, and fair play.",
                  "Created unforgettable memories with thrilling finals under the rain, live updates, and vibrant celebrations, strengthening camaraderie among players and spectators.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Entrepreneurship Development */}
        <section id="Entrepreneurship-Development" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Entrepreneurship Development</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757610346/Copy_of_IMG_3287_dp5hcc_bt1ngw.jpg"
                title="Rebrand Rumble"
                objective="Rotaract Club of TCET organised Rebrand Rumble to spark creativity, teamwork, and entrepreneurial thinking by challenging students to reimagine popular brands in fun and innovative ways."
                impact={[
                  "Engaged participants in a two-round contest blending rebranding pitches and a high-energy entrepreneurship quiz.",
                  "Enhanced creativity, teamwork, and pitching skills while creating a lively, laughter-filled atmosphere that made learning fun and memorable.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Digital Communication */}
        <section id="Digital-Communication" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Digital Communication</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785674/Copy_of_IMG20250804161128_1_apwyjd.jpg"
                title="Visual Velocity 2.0"
                objective="Rotaract Club of TCET organised Visual Velocity 2.0, a digital design competition with a live Canva workshop, to enhance creativity, sharpen design skills, and foster teamwork under real-time challenges."
                impact={[
                  "Engaged 80+ participants in three interactive rounds, blending learning with competition and hands-on creativity.",
                  "Boosted confidence, teamwork, and design skills while leaving participants inspired to innovate and explore digital tools.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Partner In Service */}
        <section id="Partner-In-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 text-orange-600 dark:text-yellow-400">Partner In Service</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757611079/Copy_of_IMG_6452_mzgv8i_ofksln.jpg"
                title="Panache"
                objective="Rotaract Club of TCET organised Panache, an interschool fest at Ramniwas Bajaj English High School, to provide a joyful platform for students to showcase their talents, build confidence, and celebrate creativity and teamwork."
                impact={[
                  "Hosted 14 diverse events engaging 300+ students across grades 1–9, with enthusiastic participation from parents and teachers.",
                  "Created an inspiring environment of growth, joy, and friendship, leaving children with pride, smiles, and unforgettable memories.",
                ]}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;
