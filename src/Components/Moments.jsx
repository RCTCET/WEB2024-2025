import React from 'react'

function MomentsFrame() {
    return(
        <div className="h-auto w-full my-3 overflow-hidden -translate-y-10 sm:-translate-y-20 md:-translate-y-28">
                <BgImg/>
                <MomentSection/>
        </div>
    )
}

function BgImg() {
    return(
        <div className="flex justify-center flex-col items-center relative top-10 sm:top-24 lg:top-36 h-fit">
            <img src="/home/friendsBg.svg" alt="friendsBg" loading={"lazy"}/>
            <HeadText/>
        </div>
    )
}

function HeadText() {
    return(
        <div className="absolute lg:top-[165px] px-8">
            <img src="/home/Moments to Remember.svg" alt="Moments to Remember" loading={"lazy"}/>
        </div>
    )
}

function ImgSet() {
    return(
        <>
        <MomentBox image="/Moments/img11.avif" alt="img11"/>
            <MomentBox image="/Moments/img1.jpg" alt="img1"/>
            <MomentBox image="/Moments/img2.jpg" alt="img2"/>
            <MomentBox image="/Moments/img9.avif" alt="img9"/>
            <MomentBox image="/Moments/img3.jpg" alt="img3"/>
            <MomentBox image="/Moments/img4.jpg" alt="img4"/>
            <MomentBox image="/Moments/img5.jpg" alt="img5"/>
            <MomentBox image="/Moments/img6.jpg" alt="img6"/>
            <MomentBox image="/Moments/img7.jpg" alt="img7"/>
            <MomentBox image="/Moments/img8.avif" alt="img8"/>
           
            <MomentBox image="/Moments/img10.avif" alt="img10"/>
            
        </>
    )
}

function MomentSection() {
    return(
        <div className="flex justify-between items-center w-full px-2">
        <div className="z-10 lg:h-[319px] bg-gradient-to-r from-orange-200 rounded-l-[12px] h-[200px] w-[20px] lg:w-[35px]"></div>
            <div className="w-full overflow-hidden whitespace-nowrap box-content drop-shadow-[2px_2px_4px_rgba(0,0,0,0.40)]">
                <div className="lg:animate-slider animate-slider_mobile hover:pause-animation">
                    <ImgSet/>
                    <ImgSet/>
                    <ImgSet/>
                    <ImgSet/>
                </div>
            </div>
        <div className="z-10 lg:h-[319px] bg-gradient-to-l from-orange-200 rounded-r-[12px] h-[200px] w-[20px] lg:w-[35px]"></div>
        </div>
    )
}

function MomentBox({image, alt}) {
    return(
        <img src={image} alt={alt} className="h-[200px] w-[250px] inline-block ml-4 mr-4 rounded-[12px] object-cover lg:w-[286px] lg:h-[319px] border-[1px] border-black drop-shadow-[2px_2px_4px_rgba(0,0,0,0.40)]" loading={"lazy"}/>
    )
}

export {MomentsFrame}