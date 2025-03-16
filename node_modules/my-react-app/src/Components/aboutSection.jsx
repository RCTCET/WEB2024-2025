import React from 'react';

const Illuminate = () => {
  return (
    <>
<div className="w-full flex justify-center mt-10 mb-10">
  <div className="relative w-full lg:h-[400px] overflow-hidden">
    {/* Background image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('./about.webp')",
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
          <video autoPlay muted loop
            src="./flame.mp4"             
            type="video/mp4"
            className="lg:w-full lg:h-[300px] md:h-[200px] w-full h-[300px] object-cover">
          </video>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto p-4 text-justify mt-10 mb-16">
  <div className="md:w-1/3 flex items-center justify-center">
    <img 
      src='/illuminate.svg'
      alt="Illuminate" 
      className="w-full h-80 object-cover"
      loading={"lazy"}
    />
  </div>
  <div className="md:w-2/3 md:ml-8">
    <h2 className="text-2xl font-bold text-orange-500 mb-4">ILLUMINATE: CARRY A LEGACY, IGNITE A CHANGE</h2>
    <p className="text-gray-700">
      The theme encapsulates the powerful idea of honoring and continuing the values, traditions, and achievements of those who came before us, while also embracing the responsibility to inspire and lead new transformations. It suggests a dual purpose: to shed light on the wisdom and strengths of the past, ensuring they are not forgotten, and to use that light as a beacon to guide and fuel meaningful change for the future. This theme emphasizes the importance of being both a steward of history and a catalyst for progress, recognizing that true illumination comes from the balance between preserving what is valuable and daring to innovate.
    </p>
  </div>
</div>

    </>
  );
};

export default Illuminate;