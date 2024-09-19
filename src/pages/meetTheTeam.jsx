import React from 'react';

const teamMembers = [
    { id: 1, name: 'Rtr. Tanisha Kumar', role: 'President', image: 'public/HobbyClub_svg/svg4.svg' },
    { id: 2, name: 'Rtr. Tanisha Kumar', role: 'President', image: 'public/HobbyClub_svg/svg4.svg' },
    { id: 3, name: 'Rtr. Tanisha Kumar', role: 'President', image: 'public/HobbyClub_svg/svg4.svg' },
    { id: 4, name: 'Rtr. Tanisha Kumar', role: 'President', image: 'public/HobbyClub_svg/svg4.svg' },
    { id: 5, name: 'Rtr. Tanisha Kumar', role: 'President', image: 'public/HobbyClub_svg/svg4.svg' },
    { id: 6, name: 'Rtr. Tanisha Kumar', role: 'President', image: 'public/HobbyClub_svg/svg4.svg' }
];

const TeamPage = () => {
    return (
        <div className="p-8 bg-white">
            <h1 className="text-center text-4xl font-bold my-8 bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
                CORE TEAM
            </h1>
            <div className="max-w-[80%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {teamMembers.map(member => (
                        <div
                            key={member.id}
                            className="bg-[#faebd7] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <h2 className="mt-4 text-xl font-bold text-center">{member.role}</h2>
                            <p className="text-center">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default TeamPage;
