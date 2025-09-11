
function MomentsFrame() {
    return(
        <div className="h-auto w-full my-3 overflow-hidden -translate-y-10 sm:-translate-y-20 md:-translate-y-28 bg-white dark:bg-stone-900">
                <BgImg/>
                <MomentSection/>
        </div>
    )
}

function BgImg() {
    return(
        <div className="flex justify-center flex-col items-center relative top-10 sm:top-24 lg:top-36 h-fit">
            <img src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756826078/International-Day-of-Friendship-Puzzle-Colouring-Poster-black-and-white-RGB_ver_3_1_bfs140.png" alt="friendsBg" loading={"lazy"}/>
            <HeadText/>
        </div>
    )
}

function HeadText() {
    return(
        <div className="absolute lg:top-[165px] px-8">
            <h1 className="text-center text-xl md:text-4xl font-bold mb-6 bg-gradient-to-b from-amber-800 via-orange-500 to-yellow-400 dark:from-yellow-600 dark:via-yellow-400 dark:to-yellow-200 bg-clip-text text-transparent">Moments to Remember</h1>
        </div>
    )
}

function ImgSet() {
    return(
        <>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/f_auto,q_auto/v1756762284/IMG_0449_xpm5xd.heic" alt="img11"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785690/Copy_of_IMG_1579_1_cllu8u.jpg" alt="img1"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756974490/_DSC7394_apr72u.jpg" alt="img3"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756974506/IMG_8196_m0x3cw.jpg" alt="img4"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/f_auto,q_auto/v1756974538/IMG_1943_bswadu.heic" alt="img6"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756974878/IMG_3102_kjthpm.jpg" alt="img7"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756974888/IMG-20250617-WA0034_qeztwp.jpg" alt="img8"/>
            <MomentBox image="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756974860/IMG20250320115025_afbtrp.jpg" alt="img10"/>
            
        </>
    )
}

function MomentSection() {
    return(
        <div className="flex justify-between items-center w-full px-2">
        <div className="z-10 lg:h-[319px] bg-gradient-to-r from-orange-100 dark:from-stone-700 rounded-l-[12px] h-[200px] w-[20px] lg:w-[35px]"></div>
            <div className="w-full overflow-hidden whitespace-nowrap box-content drop-shadow-[2px_2px_4px_rgba(0,0,0,0.40)]">
                <div className="lg:animate-slider animate-slider_mobile hover:pause-animation">
                    <ImgSet/>
                    <ImgSet/>
                    <ImgSet/>
                    <ImgSet/>
                </div>
            </div>
        <div className="z-10 lg:h-[319px] bg-gradient-to-l from-orange-100 dark:from-stone-700 rounded-r-[12px] h-[200px] w-[20px] lg:w-[35px]"></div>
        </div>
    )
}

function MomentBox({image, alt}) {
    return(
        <img src={image} alt={alt} className="h-[200px] w-[250px] inline-block ml-4 mr-4 rounded-[12px] object-cover lg:w-[286px] lg:h-[319px] border-[1px] border-black dark:border-stone-600 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.40)]" loading={"lazy"}/>
    )
}

export {MomentsFrame}