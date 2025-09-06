import React from 'react';

const Anantya = () => {
  return (
    <>
<div className="w-full flex justify-center mt-10 mb-10">
  <div className="relative w-full lg:h-[400px] overflow-hidden">
    {/* Background image */}
    <div 
      className="absolute inset-0 bg-cover bg-[center_40%] opacity-10"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756840156/IMG_3032_2_ibiefc.jpg')",
      }}
    ></div>
    
    {/* Centered Content */}
    <div className="relative z-10 flex flex-col md:flex-row h-full p-6 lg:mx-24 justify-center items-center text-justify gap-8">
      <div className="flex-grow md:pr-4">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Rotaract Club of TCET</h2>
        <p className="text-gray-800 mb-4">
          At Rotaract Club of TCET, wellbeing is at the forefront of what we're 
          working together towards. Our programs and activities are designed to 
          be a catalyst that helps community members reach their goals and fulfill 
          their potential. Learn more about the positive impact we have and join us 
          in bringing about positive change.
        </p>
        <p className="text-sm text-gray-600">
          Chartered on 15th September 2017
        </p>
      </div>
      
      <div className="lg:flex-shrink-0 lg:w-1/3 md:w-full">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <video autoPlay muted loop preload='none'
            src="https://res.cloudinary.com/dtc2xaeaf/video/upload/v1756700557/flame_am46ja.mp4"             
            type="video/mp4"
            className="lg:w-full lg:h-[300px] md:h-[200px] w-full h-[300px] object-cover">
          </video>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto p-4 text-justify mt-10 mb-16">
  <div className="md:w-1/3 flex items-center justify-center">
    <img 
      src='https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756759766/theme_logo_anantya_bebpcc.png'
      alt="Anantya" 
      className="w-full h-50 object-cover"
      loading="lazy" 
    />
  </div>
  <div className="md:w-2/3 md:ml-8">
    <h2 className="text-2xl font-bold text-orange-500 mb-4">ANANTYA: A LEGACY THAT LASTS</h2>
    <p className="text-gray-700">
      The theme embodies the timeless pursuit of creating something that transcends the present and endures for generations to come. Anantya, meaning infinity, reflects the boundless impact of actions, values, and memories that continue to live long after moments have passed. It emphasizes the idea that true legacy is not confined to a single year or achievement, but is built through every effort, every bond, and every milestone that shapes the journey of Rotaract. This theme calls on us to leave behind imprints of compassion, leadership, and service. Memories that inspire, traditions that strengthen, and values that outlast time itself. “A Legacy That Lasts” is a reminder that our journey today becomes the foundation for tomorrow, ensuring that what we create together resonates infinitely, becoming a guiding force for those who follow.
    </p>
  </div>
</div>

    </>
  );
};

export default Anantya;