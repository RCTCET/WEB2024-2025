

const RotaractClubLayout = () => {
    return (
        <div className=" w-full bg-black overflow-hidden relative max-h-[65vh] md:max-h-[90vh]">
            {/* Logo Section */}
            <div className='flex relative '>
            <div className=" w-[50%] md:w-1/4 bg-white transform skew-x-12 origin-top-left md:flex items-center justify-center z-10">
                <div className="w-32 h-32 md:w-80 md:h-80 flex items-center justify-center  transform md:-skew-x-12  mt-40 md:mr-8">
                    <img src='/home/logo.svg' alt="Logo" className="w-32 h-32 md:w-full md:h-full object-cover" loading={"lazy"} />
                </div>
            </div>
            <div className="absolute -inset-10 left-[20rem] z-10 flex items-center justify-center max-md:hidden">
                <div className="text-center">
                    <h1 className="text-5xl xl:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent" style={{textShadow: " 1px 1px 0px rgba(0, 0, 0, 0.1)"}}>Rotaract Club of</h1>
                    <h1 className="text-5xl xl:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent mt-2" style={{textShadow: " 1px 1px 0px rgba(0, 0, 0, 0.1)"}}>TCET</h1>
                </div>
            </div>
            
            {/* Images Section */}
            <div className=" w-full md:w-3/4 flex flex-col  md:pl-20">
                <div className="flex-1 flex ">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="flex-1 p-2 ">
                            <div className="relative w-52 h-52 md:w-64 md:h-72 overflow-hidden transform skew-x-12">
                                <img
              src={`/home/hero/img${index + 1}.avif`} alt={`Image ${index + 1}`} loading={"lazy"}
              className={`absolute top-0 left-0 w-48 h-48  md:w-full md:h-full object-cover -skew-x-12 scale-150  ${index%2!=0 ? "opacity-100":"opacity-40"}` }
            />

                            </div>
                        </div>

                    ))}
                </div>
                <div className="flex-1 flex">
                    {[5, 6, 7, 8].map((_, index) => (
                        <div key={index} className="flex-1 p-2 ">
                            <div className="relative w-52 h-52 md:w-64 md:h-72 overflow-hidden transform skew-x-12" >
                           < img
              src={`/home/hero/img${index + 5}.avif`} alt={`Image ${index + 5}`} loading={"lazy"}
              className={`absolute top-0 left-0  w-48 h-48  md:w-full md:h-full object-cover -skew-x-12 scale-150  ${index%2==0 ? "opacity-100":"opacity-40"}`}
            />
                                
                            </div>
                        </div>
                    ))}
                </div>
                <img src="/home/WeCarry.svg" className=' max-md:hidden z-20 absolute bottom-10 right-10' alt="" loading={"lazy"}/>
            </div>
            </div>



            {/*  */}
        </div>
    );
};

export default RotaractClubLayout;