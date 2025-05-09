import React from 'react'
import { useState, useEffect } from 'react';
import member from '/Member.svg'
import zone from '/Zone.svg'
import district from '/District.svg'
import totalProjects from '/TotalProjects.svg'

const AnimatedCounter300 = () => {
    const [count, setCount] = useState(0);
    const speed = 5;

    useEffect(() => {
        let timer;
        if (count < 400) {
            timer = setTimeout(() => {
                setCount(prevCount => prevCount + 1);
            }, speed);
        }
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className="text-3xl font-medium text-black w-20 text-center md:mb-2 lg:text-5xl ">
            {count}+
        </div>
    );
};

const AnimatedCounter100 = () => {
    const [count2, setCount2] = useState(0);
    const speed = 22;

    useEffect(() => {
        let timer;
        if (count2 < 100) {
            timer = setTimeout(() => {
                setCount2(prevCount => prevCount + 1);
            }, speed);
        }
        return () => clearTimeout(timer);
    }, [count2]);

    return (
        <div className="text-3xl font-medium text-black w-20 text-center lg:mb-2 lg:ml-1 lg:text-5xl ">
            {count2}+
        </div>
    );
};

function StatsBar() {
    return(
        <div className="font-poppins flex flex-wrap gap-x-4 gap-y-9 content-center justify-around h-fit p-2 lg:flex lg:flex-row lg:items-center lg:h-40 lg:space-y-0 lg:space-x-0 bg-statsBar">  {/* statsBar Color : #f5f5f5 */}
            <Members name="Members" image={member} alt="Members"/>

            <Zone name="Zone" data="2B" image={zone} alt="Zone"/>

            <District name="District" data="3141" image={district} alt="District"/>

            <TotalProjects name="Total Projects" image={totalProjects} alt="TotalProject"/>
        </div>
    )
}

function Members({name, image, alt}) {
    return(
        <div className="flex justify-center items-center w-32 md:w-fit">
            <img src={image} alt={alt} className="w-12 lg:mr-3 lg:w-20" loading={"lazy"}/>
            <div className="flex flex-col">
                <AnimatedCounter300/>
                <p className="text-center text-gray-500 text-sm lg:text-base lg:ml-3">{name}</p>
            </div>
        </div>
    )
}

function Zone({name, image, alt, data}) {
    return(
        <div className="flex justify-start items-center w-32 md:w-fit">
            <img src={image} alt={alt} className="w-11 mr-2 lg:mr-4 lg:w-16" loading={"lazy"}/>
            <div className="flex flex-col">
                <p className="text-3xl font-medium text-black text-center lg:mb-2 lg:text-5xl">{data}</p>
                <p className="text-center text-gray-500 text-sm lg:text-base">{name}</p>
            </div>
        </div>
    )
}

function District({name, image, alt, data}) {
    return(
        <div className="flex justify-center items-center w-32 md:w-fit">
            <img src={image} alt={alt} className="w-12 mr-2 lg:mr-3 lg:w-20" loading={"lazy"}/>
            <div className="flex flex-col">
                <p className="text-3xl font-medium text-black text-center lg:mb-2 lg:text-5xl">{data}</p>
                <p className="text-center text-gray-500 text-sm lg:text-base">{name}</p>
            </div>
        </div>
    )
}

function TotalProjects({name, image, alt}) {
    return(
        <div className="flex justify-center items-center lg:w-fit">
            <img src={image} alt={alt} className="w-12 lg:mr-3 lg:w-20" loading={"lazy"}/>
            <div className="flex flex-col">
                <AnimatedCounter100/>
                <p className="text-center text-gray-500 text-sm lg:text-base">{name}</p>
            </div>
        </div>
    )
}

export {StatsBar};