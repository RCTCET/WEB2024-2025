import PropTypes from "prop-types";

function FounderCard() {
  return (
    <div className="relative bg-[url('/bg-fcard.svg')] bg-cover bg-no-repeat  h-full p-4 bg-white shadow-lg rounded-lg">
      <img
        src="/founders.svg"
        alt="Founder and early members of Rotary International"
        className="w-full mb-4 rounded-xl"
        loading={"lazy"}
      />
      <h2 className="text-lg font-bold">FOUNDER</h2>
      <p className="text-md text-[#9D320F] font-bold mt-2">
        Personality has power to uplift, power to depress, power to curse, and
        power to bless.
      </p>
      <p className="mt-2 text-gray-600">- Paul P. Harris, Founder</p>
    </div>
  );
}

function Card({ title, image, description, isBig }) {
  return (
    <div className={`relative w-full rounded-lg shadow-lg  overflow-hidden`}>
      <img src={image} alt={title} className="w-full lg:h-72 object-cover object-center" loading={"lazy"} />
      <div className="hover:opacity-0 duration-500 flex">
                        <div className="absolute top-[66%] p-0 left-0 w-full h-1/2 flex blur-[2px] items-baseline text-left bg-black/30 "></div>
                        <div className="text-white absolute bottom-[7%] sm:bottom-[20%] md:bottom-[5%] lg:bottom-[10%] blur-none pl-2 hover:opacity-0 px-4 py-2">
                            <h2 className="font-bold text-md">{title}</h2>
                            <p className="text-xs ">{description}</p>
                        </div>
                    </div>
    </div>
  );
}



Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
};



function Legacy() {
  return (
    <div className="p-8 bg-[#FFEDD4] flex justify-center items-center relative  ">
        <img className="absolute top-0 left-0" src="/gear.svg" alt="" loading={"lazy"}/>
        <div className="max-w-7xl ">
        <h1 className="text-center text-xl md:text-4xl font-bold mb-6 bg-gradient-to-b from-[#98430A] via-[#FE7011] to-[#FDD24C] bg-clip-text text-transparent">Our Legacy & Impact</h1>
      <div className="flex max-sm:flex-col gap-y-4 gap-x-6  ">
        <div className="basis-[40%] lg:basis-1/3">
          <FounderCard />
        </div>
        <div className="basis-[60%] lg:basis-2/3 flex flex-col gap-y-6">
        <Card
          title="Community Service"
          image="../Legacy_Impact/Community_Img.avif"
          // description="Description for Community Service"
          isBig
        />
        <div className="flex max-sm:flex-col gap-y-4 gap-x-6">
        <Card
          title="Shiksha"
          image="../Legacy_Impact/Shiksha_Img.avif"
          // description="Description for Shiksha"
        />
        <Card
          title="Club Service"
          image="../Legacy_Impact/ClubService_Img.avif"
          // description="Description for Club Service"
        />
        </div>
        
        </div>
        
      </div>
    
        </div>
</div>
  );
}

export default Legacy;
