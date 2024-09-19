import React from 'react'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"

function HobbyClub() {
    return(
        <div className="overflow-x-hidden relative flex flex-col justify-center">
            <div className="h-fit">
                <HealthText/>
                <HealthClubIntro/>
                <InitiativeText/>
                <HealthClubCardSection/>
            </div>
        </div>
    )
}

function HealthText() {
    return(
        <div className="md:w-[528px] xl:w-full mt-10 mx-10 mb-8 lg:mt-16 lg:mb-12 xl:ml-24">
            <img src="/HobbyClub_svg/WELCOME TO HEALTH CLUB.svg" alt="Welcome to HEALTH CLUB" />
        </div>
    )
}

function HealthClubIntro() {
    return(
    <div className="lg:w-screen md:w-screen md:p-0 relative xl:pt-4 xxl:pt-16">
        <div className="w-screen absolute -z-10 md:top-[-14px] lg:top-[-22px]"><img src="/HobbyClub_svg/Frame.svg" alt="bgFrame" className="w-screen object-cover"/></div>
            <div className="md:px-7 md:flex md:justify-center p-4 md:w-screen">
                <img src="/HobbyClub_svg/Head Logo.svg" alt="HeadLogo" className="lg:w-1/2 xl:w-1/2 xxl:w-1/3 w-full md:w-1/3 md:mb-0 mb-3 xl:ml-14 xl:mr-8"/>
                <p className="font-poppins md:w-fit font-[500] lg:leading-[34px] lg:text-xl text-sm xl:text-[24px] xl:pr-12 md:pl-5 xxl:text-3xl xxl:leading-[50px] xxl:pr-20 xxl2:text-6xl xxl2:leading-[100px] xxl2:pr-30 xxl2:mx-12">Our mission is to empower TCET students and staff with the knowledge and resources to lead healthier lives, both physically and mentally. We focus on four key areas: Substance Abuse Awareness & Prevention, Health Awareness, Counseling and Support, and Promoting Healthy Habits. Through seminars, workshops, and personalized counseling, we strive to create a supportive campus environment where health and wellness are prioritized. Join us in making TCET a healthier, happier place for everyone!</p>
            </div>
    </div>
    )    
}

function InitiativeText() {
    return(
        <div className="flex justify-center items-center mt-12 mb-8 lg:mt-20 xl:my-24 xxl:my-36 xxl:mt-44">
            <img src="/HobbyClub_svg/OUR INITIATIVES.svg" alt="Initiative" className="xl:w-[367px] md:w-[300px] w-[200px]"/>
        </div>
    )
}

function HealthClubCardSection() {
    return(
        <div className="flex justify-evenly w-full flex-wrap">
            <HealthClubCard link="/HobbyClub_svg/svg1.svg" alt="svg1"/>
            <HealthClubCard link="/HobbyClub_svg/svg2.svg" alt="svg2"/>
            <HealthClubCard link="/HobbyClub_svg/svg3.svg" alt="svg3"/>
            <HealthClubCard link="/HobbyClub_svg/svg4.svg" alt="svg4"/>
        </div>
    )
}

function HealthClubCard({link, alt}) {
    return(
            <div className="w-fit md:h-fit bg-HealthCardColor rounded-[30px] md:flex md:items-center md:justify-evenly mb-12 md:py-5 md:pr-5 xl:p-16 xl:mb-20 xl:mx-12 md:mx-8">
                <img src={link} alt={alt} className="md:w-[300px] lg:w-[350px] xl:w-1/2 w-full p-5 lg:mr-6 xxl:w-2/5"/>
                <div className="md:w-fit box-border bg-white rounded-[30px] flex justify-center items-center">
                    <CardText/>
                </div>
            </div>
    )
}

function CardText() {
    return(
        <div className="font-montserrat flex flex-col justify-center h-full p-5 md:p-5 md:text-sm lg:text-base xl:text-xl xl:p-12 lg:p-8 xxl:text-2xl xxl:py-20 xxl:space-y-4">
            <h1 className="font-[650] mb-2">Awareness and Prevention</h1>
        
            <h1 className="font-[500]">Objective:</h1>
            <ul className="list-outside list-disc ml-8 mb-2">
                <li className="font-[400] ">To create awareness about health issues among staff and students on the campus.</li>
            </ul>

            <h1 className="font-[500]">Proposed Activity:</h1>
            <ul className="list-outside list-disc ml-8">
                <li className="font-[400]  list-outside">Organize seminars, workshops, and awareness camps focused on substance abuse prevention.</li>
                <li className="font-[400]  list-outside">Conduct activities that provide guidance related to the dangers of substance abuse.</li>
            </ul>
        </div>
    )
}





export {HobbyClub}