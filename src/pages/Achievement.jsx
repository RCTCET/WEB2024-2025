import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import Projectachievement from "./Projectachivement";

export const Achievement = () => {
  return (
    <section className="mx-[10px] mt-20">
      {/* Heading */}
      <div className="flex items-center justify-center mt-[20px]">
        <img
          src="https://www.rc.tcetmumbai.in/Achievement/ACHIEVEMENTS.svg"
          alt="achievement"
        />
      </div>

      {/* Highlight box */}
      <div className="flex justify-center my-[20px]">
        <div className="p-5 lg:p-10 rounded-[20px] bg-[#FFEFD9] flex justify-center items-center">
          <p className="font-poppins italic text-[rgba(254,112,17,1)] font-bold text-[28px]">
            8<sup>th</sup> Best Club in Rotaract District R.I.D 3141
          </p>

        </div>
      </div>

      <h2 className="text-4xl mt-[10vh] font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center ">
        CLUB ACHIEVEMENT
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center justify-around h-auto lg:h-[600px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6">
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] flex items-center mb-6 lg:mb-0 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full h-full rounded-lg shadow-lg"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />

                  {/* Overlay text */}
                  <div className="absolute bottom-[-3px] bg-black w-full  ">

                    <p className="text-base mt-2 text-center text-white py-2 font-bold text-[20px]">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right div: Text / Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
          <h2 className="text-3xl font-bold mb-4 text-black-600 text-center">
            Dashak
          </h2>

          <hr className="w-16 border-t-4 border-orange-600 rounded mb-6" />

          <div className="flex flex-col items-center">
            <p className="text-lg text-orange-600 mb-6  md:text-[25px] text-center">
              The 10th District Assembly & Aara night
              <br />
              26th July 2025 by
              <br />
              Rotract district 3141 Dashak


            </p>
          </div>
        </div>


      </div>

      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center ">
        Personal Achivement
      </h2>


      <div className="w-full mt-[30px] h-auto   bg-cover bg-center p-6 flex justify-center">
        <div className="grid grid-cols-1  items-center mx-auto md:grid-cols-2 gap-6">
          {Personal.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFEFD9] p-4 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center text-center"
            >
              <div className="w-full h-[250px] flex items-center justify-center bg-white rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-600">{item.name}</h3>
              <p className="text-gray-700 mt-2">{item.title}</p>
            </div>
          ))}
        </div>

      </div>


      <div className="my-[10px]">

        <Projectachievement />


      </div>




    </section>
  );
};


const slides = [
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827418/8THBEST_nhwai3.png",
    desc: "8TH BEST CLUB IN DISTRICT 3141 "

  },
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827419/RUBY_CITATION_kbnanz.png",

    desc: "Ruby spotlight citation "
  },
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827419/CLUB_SITE_up0tpu.png",

    desc: " Best Club Website"
  },
  {
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756827421/RESPONSIBLE_PRESIDENT_azc0pj.png",

    desc: " Responsible President Citation"
  }
];


const Personal = [

  {
    "id": 1,
    "title": "Outstanding Vice President at district 3141",
    "name": "Rtr. Aizab Khan",
    "image": "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756789422/DSC03051_fg0pak.jpg"
  },
  {
    "id": 2,
    "title": "Unstoppable Council Member at district 3141",
    "name": "Rtr. Sumit Sharma",
    "image": "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756821756/DSC02604_jmaoow.jpg"
  }
];