import React from 'react';

const RotaractClubLayout = () => {
    return (
        <div className=" w-full bg-black overflow-hidden relative max-h-[90vh]">
            {/* Logo Section */}
            <div className='flex relative '>
            <div className=" w-full md:w-1/4 bg-white transform skew-x-12 origin-top-left flex items-center justify-center z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center  transform -skew-x-12 mr-8">
                    <img src='/home/logo.png' alt="Logo" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="absolute -inset-10 left-[20rem] z-10 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl xl:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent" style={{textShadow: " 1px 1px 0px rgba(0, 0, 0, 0.1)"}}>Rotaract Club of</h1>
                    <h1 className="text-5xl xl:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent mt-2" style={{textShadow: " 1px 1px 0px rgba(0, 0, 0, 0.1)"}}>TCET</h1>
                </div>
            </div>
            
            {/* Images Section */}
            <div className=" w-full md:w-3/4 flex flex-col pl-10 md:pl-20">
                <div className="flex-1 flex flex-col md:flex-row">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="flex-1 p-2 ">
                            <div className="relative w-64 h-72 overflow-hidden transform skew-x-12">
                                <img
              src={`/home/img${index + 1}.svg`} alt={`Image ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover -skew-x-12 scale-150  ${index%2!=0 ? "opacity-100":"opacity-40"}`}
            />
                                
                            </div>
                        </div>
                        
                    ))}
                </div>
                <div className="flex-1 flex flex-col md:flex-row">
                    {[5, 6, 7, 8].map((_, index) => (
                        <div key={index} className="flex-1 p-2 ">
                            <div className="relative w-64 h-72 overflow-hidden transform skew-x-12" >
                           < img
              src={`/home/img${index + 4}.svg`} alt={`Image ${index + 4}`}
              className={`absolute top-0 left-0 w-full h-full object-cover -skew-x-12 scale-150  ${index%2==0 ? "opacity-100":"opacity-40"}`}
            />
                                
                            </div>
                        </div>
                    ))}
                </div>
                <img src="/home/WeCarry.svg" className='z-20 absolute bottom-10 right-10' alt="" />
            </div>
            </div>
            

            
            {/*  */}
        </div>
    );
};

export default RotaractClubLayout;
