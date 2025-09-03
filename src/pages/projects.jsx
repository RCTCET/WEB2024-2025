import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <div className="scroll-smooth">
      {/* Hero */}
      <div className="flex min-h-[60vh] justify-center items-center p-6 sm:p-8 relative">
        <div className="relative w-full h-[80%]">
          <img
            src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756821756/DSC02604_jmaoow.jpg"
            alt="Projects"
            className="h-full w-full object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              EXPLORE OUR <span className="text-orange-500">PROJECTS</span>
            </h2>
            <p className="mt-2 text-sm md:text-base max-w-lg">
              Discover the transformative initiatives that define our commitment to positive change in the community.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition">
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/* Links (sticky, horizontal) */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="flex overflow-x-auto text-sm sm:text-md space-x-6 p-3 sm:p-4 font-bold underline">
          <a href="#Club-Service" className="whitespace-nowrap">Club Service</a>
          <a href="#Community-Service" className="whitespace-nowrap">Community Service</a>
          <a href="#International-Service" className="whitespace-nowrap">International Service</a>
          <a href="#Professional-Development" className="whitespace-nowrap">Professional Development</a>
          <a href="#Sports" className="whitespace-nowrap">Sports</a>
          <a href="#Entrepreneurship-Development" className="whitespace-nowrap">Entrepreneurship Development</a>
          <a href="#Digital-Communication" className="whitespace-nowrap">Digital Communication</a>
          <a href="#Partner-In-Service" className="whitespace-nowrap">Partner In Service</a>
        </div>
      </div>

      {/* Sections */}
      <div className="p-4 sm:p-6 space-y-16">
        {/* Club Service */}
        <section id="Club-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Club Service</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785685/Copy_of_IMG_0433_ppl19y.jpg"
                title="Rotaract’s Day Out"
                objective="Rotaract Club of TCET organised Rotaract’s Day Out at Bandstand, Bandra, as the first club service event of the year to build stronger bonds among members through fun games, laughter, and fellowship."
                impact={[
                  "Engaged 80+ members in games like Dodgeball, Footloose, and Cricket — unforgettable moments of joy.",
                  "Strengthened friendships and club spirit; members left motivated and connected."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Community Service */}
        <section id="Community-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Community Service</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929229/Copy_of_IMG_3439_ww2w3f_x6zmwz.jpg"
                title="Kalakriti 2.0"
                objective="Celebrate Ganesh Chaturthi in an eco-friendly and creative way with underprivileged children, cancer patients, and elderly residents."
                impact={[
                  "Benefited 120+ participants (60+ students, 40+ seniors, 20+ cancer patients).",
                  "Promoted sustainable celebrations while fostering happiness, creativity, and togetherness."
                ]}
              />
            </div>

            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785650/Copy_of_IMG-20250713-WA0085_1_l2cmv5.jpg"
                title="Kindness Kart"
                objective="Donation drive collecting stationery, clothes, food, and sports items to support underprivileged children by fulfilling basic needs."
                impact={[
                  "Collected 100+ stationery items, 70+ clothes, sports equipment, and food — benefitting 170+ children.",
                  "Inspired students and faculty to give back; brought smiles and hope at Girija Welfare Association."
                ]}
              />
            </div>

            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929414/Copy_of_IMG_7989_nqrzgv_g4cxxc.jpg"
                title="Tails and Tales"
                objective="Awareness session on animal communication with Ms. Shrutika Kubal to understand animals’ emotional and psychological needs."
                impact={[
                  "Engaged 100+ students with real stories and interactive activities; built lasting empathy for animals.",
                  "Prompted reflection on bonds with pets and nature — lessons in love, patience, and understanding."
                ]}
              />
            </div>
          </div>
        </section>

        {/* International Service */}
        <section id="International-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">International Service</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929547/nin_1_zbdr1g_bscfwg.png"
                title="Nations In Numbers"
                objective="World Population Day event raising awareness about global demographics, culture, and challenges through pitches, quizzes, and interactive rounds."
                impact={[
                  "Linked numbers to real human stories; encouraged critical thinking about global issues.",
                  "Sparked cultural curiosity and responsibility toward global diversity."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Professional Development */}
        <section id="Professional-Development" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Professional Development</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929985/Copy_of_IMG_1157_hwmidu_1_gxv8rz.jpg"
                title="Prerana"
                objective="A 5-day learning fest to spark curiosity and holistic development via hands-on sessions, creativity, and competitions."
                impact={[
                  "Covered solar robotics, Arduino, photography, Tableau, breadboard circuits, and quizzes.",
                  "Wrapped with reel-making + prizes; students left motivated and inspired to keep exploring."
                ]}
              />
            </div>
            
          </div>
        </section>

        {/* Sports */}
        <section id="Sports" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Sports</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785680/Copy_of_IMG_1343_1_yhxbmv.jpg"
                title="Monsoon Matchday 2.0"
                objective="Football tournament fostering teamwork, sportsmanship, and healthy competition with a professional matchday feel."
                impact={[
                  "14 teams; high-energy matches and fair play.",
                  "Rainy-finals vibes, live updates, and celebrations strengthened camaraderie."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Entrepreneurship Development */}
        <section id="Entrepreneurship-Development" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Entrepreneurship Development</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929847/Copy_of_IMG_3339_ywe8ha_bpbh6t.jpg"
                title="Rebrand Rumble"
                objective="Challenge students to reimagine popular brands — creativity, teamwork, and entrepreneurial thinking."
                impact={[
                  "Two-round contest mixing rebranding pitches with a high-energy entrepreneurship quiz.",
                  "Boosted creativity, teamwork, and pitching skills in a fun, memorable format."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Digital Communication */}
        <section id="Digital-Communication" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Digital Communication</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756930068/Copy_of_IMG_7586_1_orzro8_fv1ew2.jpg"
                title="Visual Velocity 2.0"
                objective="Digital design competition + live Canva workshop to enhance creativity and teamwork under real-time challenges."
                impact={[
                  "80+ participants across three interactive rounds with hands-on learning.",
                  "Boosted confidence, teamwork, and design skills; inspired exploration of digital tools."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Partner In Service */}
        <section id="Partner-In-Service" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Partner In Service</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            <div className="snap-center shrink-0 w-[90vw] sm:w-[85%] md:w-[70%]">
              <ProjectCard
                imageUrl="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785682/Copy_of_PXL_20250718_050534581_o5vjmu.jpg"
                title="Panache"
                objective="Interschool fest at Ramniwas Bajaj English High School to help students showcase talents, build confidence, and celebrate teamwork."
                impact={[
                  "14 diverse events engaging 300+ students (grades 1–9) with support from parents and teachers.",
                  "Created an inspiring environment of growth, joy, and friendship; unforgettable memories."
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
