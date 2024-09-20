import React from 'react';

const Illuminate = () => {
  return (
    <>
<div className="w-full bg-gray-100 flex justify-center mt-10 mb-10">
  <div className="relative w-4/5 h-[400px] overflow-hidden">
    {/* Background image */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage: "url('/about.png')",
      }}
    ></div>
    
    {/* Centered Content */}
    <div className="relative z-10 flex flex-col md:flex-row h-full p-6 justify-center items-center text-justify">
      <div className="flex-grow pr-4">
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
      
      <div className="flex-shrink-0 w-1/3">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img 
            src="/flame.png" 
            alt="Flame silhouette" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto p-4 text-justify mt-10 mb-16">
  <div className="md:w-1/3 flex items-center justify-center">
    <img 
      src='/illuminate.png' 
      alt="Illuminate" 
      className="w-full h-80 object-cover"
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