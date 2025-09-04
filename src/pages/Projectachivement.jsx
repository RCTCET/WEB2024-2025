import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const Projectachivement = () => {
  return (
    <>
      {/* Project Achievement */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center my-[20px]">
        Project Achievement
      </h2>

      <div className="w-full mt-[20px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6 flex justify-center mb-[40px]">
        <div className="grid grid-cols-1 gap-6 max-w-4xl w-full place-items-center">
          <div className="bg-[#FFEFD9] p-4 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center text-center max-w-sm w-full">
            {/* Image */}
            <div className="w-full h-[250px] flex items-center justify-center rounded-lg mb-4 overflow-hidden bg-white">
              <img
                src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756821844/DSC02741_oocb84.jpg"
                alt="Project Acer"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-orange-600">Project Acer</h3>

            {/* Description */}
            <p className="text-gray-700 mt-2">
              Outstanding Social Media Campaign – Young Entrepreneurs
            </p>
          </div>
        </div>
      </div>

      {/* Crowns of Quarter */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center my-[20px]">
        Crowns of Quarter
      </h2>

      <div className="w-full mt-[20px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6 flex justify-center mb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 max-w-5xl w-full place-items-center">
          {Crown.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFEFD9] p-4 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center text-center max-w-sm w-full"
            >
              <div className="w-full h-[250px] flex items-center justify-center rounded-lg mb-4 overflow-hidden bg-white">
                <img
                  src={item.image}
                  alt={`Crown ${item.id}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Achievement */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center my-[20px]">
        Individual Achievement
      </h2>

      <div className="w-full mt-[20px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6 flex justify-center mb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 max-w-5xl w-full place-items-center">
          {individual.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFEFD9] p-4 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center text-center max-w-sm w-full"
            >
              <div className="w-full h-[250px] flex items-center justify-center rounded-lg mb-4 overflow-hidden ">
                <img
                  src={item.image}
                  alt={`Individual ${item.id}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Club Nomination */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center my-[20px]">
        Club Nomination
      </h2>

      <div className="w-full mt-[20px] bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center p-6 flex justify-center mb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl w-full place-items-center">
          {projectNomination.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFEFD9] p-4 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex flex-col items-center text-center max-w-sm w-full"
            >
              <div className="w-full h-[250px] flex items-center justify-center rounded-lg mb-4 overflow-hidden ">
                <img
                  src={item.image}
                  alt={`Nomination ${item.id}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Slider */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center my-[20px]">
        Achievement Moments
      </h2>

      <div className="w-full py-10 bg-[url('https://www.rc.tcetmumbai.in/Achievement/Baseline%20grid%20bg.svg')] bg-cover bg-center">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {achivemnetslider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-center justify-center h-[250px] bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={`Achievement ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

// Data
const Crown = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756825813/5_sdtayu.png",
  },
];

const individual = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756825838/10_ypwthh.png",
  },
];

const projectNomination = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756825823/7_ewcflx.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756825827/8_b5u9mo.png",
  },
];

const achivemnetslider = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756996211/IMG_7333_tqqivm_nhpwrj.jpg",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756996210/Copy_of_IMG_2045_ovdcd4_pn8vqx.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756996209/IMG_7404_bc1gjb_udmstq_godqvw.jpg",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756996208/IMG_7329_qffgwb_lvl2yg.jpg",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756996208/Copy_of_IMG_2049_oglzrf_wuqkxo.jpg",
  },
];

