import React, { useState } from 'react';

const teamMembers = [
    { id: 1, name: 'Rtr. Tanisha Kumar', role: 'President', image: '/team/Rtr. Tanisha Kumar.png', year: '2024-2025' },
    { id: 2, name: 'Rtr. Prabhat Maurya', role: 'Secretary', image: '/team/Rtr. Prabhat Maurya.png', year: '2024-2025' },
    { id: 3, name: 'Rtr. Amar Singh', role: 'Immediate Past President', image: '/team/Rtr. Amar Singh.png', year: '2024-2025' },
    { id: 4, name: 'Rtr. Aizab Khan', role: 'Vice President', image: '/team/Rtr. Aizab Khan.png', year: '2024-2025' },
    { id: 5, name: 'Rtr. Tushar Mishra', role: 'Vice President', image: '/team/Rtr. Tushar Mishra.png', year: '2024-2025' },
    { id: 6, name: 'Rtr. Sudiksha Kapoor', role: 'Vice President', image: '/team/Rtr. Sudiksha Kapoor.png', year: '2024-2025' },
    { id: 7, name: 'Rtr. Disha Rathod', role: 'Chairperson Finance', image: '/team/Rtr. Disha Rathod.png', year: '2024-2025' },
    { id: 8, name: 'Rtr. Tanisha Sawalkar', role: 'Sergeant At Arms', image: '/team/Rtr. Tanisha Sawalkar.png', year: '2024-2025' },
    { id: 9, name: 'Rtr. Saumya Mishra', role: 'Chairperson Human Resource Development', image: '/team/Rtr. Saumya Mishra.png', year: '2024-2025' },
    { id: 10, name: 'Rtr. Aniska Bachar', role: 'Joint Secretary', image: '/team/Rtr. Aniska Bachar.png', year: '2024-2025' },
    { id: 11, name: 'Rtr. Aaditya Yadav', role: 'Joint Secretary', image: '/team/Rtr. Aaditya Yadav.png', year: '2024-2025' },
    { id: 12, name: 'Rtr. Yohaan Khan', role: 'Chairperson Publications', image: '/team/Rtr. Yohaan Khan.png', year: '2024-2025' },

    //2023-2024
    { id: 35, name: 'Rtr. Amar Singh', role: 'President', image: '/2023-2024/Amar Singh.jpg', year: '2023-2024' },
    { id: 58, name: 'Rtr. Sumit Sharma', role: 'Secretary', image: '/2023-2024/Sumit Sharma.jpg', year: '2023-2024' },
    { id: 48, name: 'Rtr. Muskan Sinha', role: 'Immediate Past President', image: '/2023-2024/Muskan Sinha.jpg', year: '2023-2024' },
    { id: 34, name: 'Rtr. Akshay Sharma', role: 'Vice President Main Avenue', image: '/2023-2024/Akshay Sharma.jpg', year: '2023-2024' },
    { id: 55, name: 'Rtr. Shah Alam Khan', role: 'Vice President Support Function', image: '/2023-2024/Shah Alam Khan.jpg', year: '2023-2024' },
    { id: 43, name: 'Rtr. Esha Mehra', role: 'Chairperson Finance', image: '/2023-2024/Esha Mehra.jpg', year: '2023-2024' },
    { id: 54, name: 'Rtr. Sejal Dubey', role: 'Sergeant At Arms', image: '/2023-2024/Sejal Dubey.jpg', year: '2023-2024' },
    { id: 38, name: 'Rtr. Arudra Sahib', role: 'Chairperson Human Resource Development', image: '/2023-2024/Arudra Sahib.jpg', year: '2023-2024' },
    { id: 42, name: 'Rtr. Disha Rathod', role: 'Joint Secretary', image: '/2023-2024/Disha Rathod.jpg', year: '2023-2024' },
    { id: 60, name: 'Rtr. Tanisha Kumar', role: 'Joint Secretary & Chairperson Publication', image: '/2023-2024/Tanisha Kumar.jpg', year: '2023-2024' },
    //2022-2023
    { id: 161, name: 'Rtr. Muskan Sinha', role: 'President', image: '/2022-2023/Muskan Sinha.jpg', year: '2022-2023' },
    { id: 162, name: 'Rtr. Nipesh Dubey', role: 'Secretary', image: '/2022-2023/Nipesh Dubey.jpg', year: '2022-2023' },
    { id: 163, name: 'Rtr. Kunal Miskin', role: 'Immediate Past President', image: '/2022-2023/Kunal Miskin.jpg', year: '2022-2023' },
    { id: 164, name: 'Rtr. Ishika Sharma', role: 'Vice President Main Avenues', image: '/2022-2023/Ishika Sharma.jpg', year: '2022-2023' },
    { id: 165, name: 'Rtr. Maitali Mandge', role: 'Vice President Support Function', image: '/2022-2023/Maitali Mandge.jpg', year: '2022-2023' },
    { id: 166, name: 'Rtr. Dhruvi Jagani', role: 'Sergeant At Arms', image: '/2022-2023/Dhruvi Jagani.jpg', year: '2022-2023' },
    { id: 167, name: 'Rtr. Nikita Shukla', role: 'Chairperson Human Resource Development', image: '/2022-2023/Nikita Shukla.jpg', year: '2022-2023' },
    { id: 168, name: 'Rtr. Ambresh Shukla', role: 'Chairperson Finance', image: '/2022-2023/Ambresh Shukla.jpg', year: '2022-2023' },
    { id: 169, name: 'Rtr. Jay Agrawal', role: 'Chairperson Promo', image: '/2022-2023/Jay Agrawal.jpg', year: '2022-2023' },
    { id: 170, name: 'Rtr. Atharva Dhanorkar', role: 'Joint Secretary', image: '/2022-2023/Atharva Dhanorkar.jpg', year: '2022-2023' },
    { id: 171, name: 'Rtr. Vaibhav Singh', role: 'Joint Secretary', image: '/2022-2023/Vaibhav Singh.jpg', year: '2022-2023' },
    { id: 172, name: 'Rtr. Ishita Pawar', role: 'Chairperson Publication', image: '/2022-2023/Ishita Pawar.jpg', year: '2022-2023' },   
];

const boardOfDirectors = [
    { id: 1, name: 'Rtr. Shreya Jadhav', role: 'Club Service', image: '/team/Rtr. Shreya Jadhav.png', year: '2024-2025' },
    { id: 2, name: 'Rtr. Dhairya Doshi', role: 'Club Service', image: '/team/Rtr. Dhairya Doshi.png', year: '2024-2025' },
    { id: 3, name: 'Rtr. Aaryan Gupta', role: 'Community Service', image: '/team/Rtr. Aaryan Gupta.png', year: '2024-2025' },
    { id: 4, name: 'Rtr. Suryansh Rai', role: 'Community Service', image: '/team/Rtr. Suryansh Rai.png', year: '2024-2025' },
    { id: 5, name: 'Rtr. Anushka Thakur', role: 'Community Service', image: '/team/Rtr. Anushka Thakur.png', year: '2024-2025' },
    { id: 6, name: 'Rtr. Jaidan Maity', role: 'Professional Development', image: '/team/Rtr. Jaidan Maity.png', year: '2024-2025' },
    { id: 7, name: 'Rtr. Vaishnavi Ranjan', role: 'Professional Development', image: '/team/Rtr. Vaishnavi Ranjan.png', year: '2024-2025' },
    { id: 8, name: 'Rtr. Rashi Bedse', role: 'International Service', image: '/team/Rtr. Rashi Bedse.png', year: '2024-2025' },
    { id: 9, name: 'Rtr. Shweta Varma', role: 'International Service', image: '/team/Rtr. Shweta Varma.png', year: '2024-2025' },
    { id: 10, name: 'Rtr. Vivek Rai', role: 'Shiksha', image: '/team/Rtr. Vivek Rai.png', year: '2024-2025' },
    { id: 11, name: 'Rtr. Palak Upadhyay', role: 'Shiksha', image: '/team/Rtr. Palak Upadhyay.png', year: '2024-2025' },
    { id: 12, name: 'Rtr. Ayaan Shaikh', role: 'Sports', image: '/team/Rtr. Ayaan Shaikh.png', year: '2024-2025' },
    { id: 13, name: 'Rtr. Fuzail Khan', role: 'Sports', image: '/team/Rtr. Fuzail Khan.png', year: '2024-2025' },
    { id: 14, name: 'Rtr. Kriti Saxena', role: 'Entrepreneurship Development', image: '/team/Rtr. Kriti Saxena.png', year: '2024-2025' },
    { id: 15, name: 'Rtr. Atharva Nayak', role: 'Entrepreneurship Development', image: '/team/Rtr. Atharva Nayak.png', year: '2024-2025' },
    { id: 16, name: 'Rtr. Ansh Mishra', role: 'Social Media and Relation', image: '/team/Rtr. Ansh Mishra.png', year: '2024-2025' },
    { id: 17, name: 'Rtr. Jai Anjaria', role: 'Social Media and Relation', image: '/team/Rtr. Jai Anjaria.png', year: '2024-2025' },
    { id: 18, name: 'Rtr. Srishti Srivastava', role: 'Social Media and Relation', image: '/team/Rtr. Srishti Srivastava.png', year: '2024-2025' },
    { id: 19, name: 'Rtr. Pranjal Chavan', role: 'Digital Communication', image: '/team/Rtr. Pranjal Chavan.png', year: '2024-2025' },
    { id: 20, name: 'Rtr. Janhvi Kushwaha', role: 'Digital Communication', image: '/team/Rtr. Janhvi Kushwaha.png', year: '2024-2025' },
    { id: 21, name: 'Rtr. Krish Agrawal', role: 'Digital Communication', image: '/team/Rtr. Krish Agarwal.png', year: '2024-2025' },
    { id: 22, name: 'Rtr. Reeba Diwan', role: 'Editorial', image: '/team/Rtr. Reeba Diwan.png', year: '2024-2025' },
    { id: 23, name: 'Rtr. Rudra Sharma', role: 'Editorial', image: '/team/Rtr. Rudra Sharma.png', year: '2024-2025' },
    { id: 24, name: 'Rtr. Chandranshu Dharmik', role: 'Partner-in-Service', image: '/team/Rtr. Chandranshu Dharmik.png', year: '2024-2025' },
    { id: 25, name: 'Rtr. Farhan Shaikh', role: 'Public Relation', image: '/team/Rtr. Farhan Shaikh.png', year: '2024-2025' },
    { id: 26, name: 'Rtr. Jeneesh Joshi', role: 'Public Relation', image: '/team/Rtr. Jeenesh Joshi.png', year: '2024-2025' },
    { id: 27, name: 'Rtr. Shivangi Pandey', role: 'Public Relation', image: '/team/Rtr. Shivangi Pandey.png', year: '2024-2025' },
    { id: 28, name: 'Rtr. Utsav Yadav', role: 'Marketing', image: '/team/Rtr. Utsav Yadav.png', year: '2024-2025' },
    { id: 29, name: 'Rtr. Sakshi Singh', role: 'Marketing', image: '/team/Rtr. Sakshi Singh.png', year: '2024-2025' },

    //2023-24
    { id: 56, name: 'Rtr. Shreya Pandey', role: 'Club Service', image: '/2023-2024/Shreya Pandey.jpg', year: '2023-2024' },
    { id: 31, name: 'Rtr. Aditi Pandey', role: 'Community Service', image: '/2023-2024/Aditi Pandey.jpg', year: '2023-2024' },
    { id: 59, name: 'Rtr. Swati Singh', role: 'Community Service', image: '/2023-2024/Swati Singh.jpg', year: '2023-2024' },
    { id: 61, name: 'Rtr. Tushar Mishra', role: 'Community Service', image: '/2023-2024/Tushar Mishra .JPEG', year: '2023-2024' },
    { id: 37, name: 'Rtr. Anshul Khadatkar', role: 'Professional Development', image: '/2023-2024/Anshul Khadatkar.jpg', year: '2023-2024' },
    { id: 51, name: 'Rtr. Riddhi Joshi', role: 'Professional Development', image: '/2023-2024/Riddhi Joshi.jpg', year: '2023-2024' },
    { id: 63, name: 'Rtr. Yuvraj Desai', role: 'International Service', image: '/2023-2024/Yuvraj Desai.jpg', year: '2023-2024' },
    { id: 41, name: 'Rtr. Deval Saliya', role: 'International Service', image: '/2023-2024/Deval Saliya.jpg', year: '2023-2024' },
    { id: 49, name: 'Rtr. Neeharika Jha', role: 'Shiksha', image: '/2023-2024/Neeharika Jha.jpg', year: '2023-2024' },
    { id: 30, name: 'Rtr. Abhishek Yadav', role: 'Shiksha', image: '/2023-2024/Abhishek Yadav.jpg', year: '2023-2024' },
    { id: 44, name: 'Rtr. Gaurav Warke', role: 'Sports', image: '/2023-2024/Gaurav Warke.jpg', year: '2023-2024' },
    { id: 57, name: 'Rtr. Soham Shinde', role: 'Sports', image: '/2023-2024/Soham Shinde.jpg', year: '2023-2024' },
    { id: 46, name: 'Rtr. Labdhi Doshi', role: 'Entrepreneurship Development', image: '/2023-2024/Labdhi Doshi.jpg', year: '2023-2024' },
    { id: 32, name: 'Rtr. Aditya Rajbhar', role: 'Social Media and Relation', image: '/2023-2024/Aditya Rajbhar.jpg', year: '2023-2024' },
    { id: 47, name: 'Rtr. Mukesh Kadali', role: 'Social Media and Relation', image: '/2023-2024/Mukesh Kadali.jpg', year: '2023-2024' },
    { id: 39, name: 'Rtr. Atulya Sawant', role: 'Social Media and Relation', image: '/2023-2024/Atulya Sawant.jpg', year: '2023-2024' },
    { id: 45, name: 'Rtr. Himanshu Jangid', role: 'Digital Communicaiton', image: '/2023-2024/Himanshu Jangid.jpg', year: '2023-2024' },
    { id: 53, name: 'Rtr. Saumya Mishra', role: 'Digital Communicaiton', image: '/2023-2024/Saumya Mishra.jpg', year: '2023-2024' },
    { id: 50, name: 'Rtr. Prabhat Maurya', role: 'Editorial Service', image: '/2023-2024/Prabhat Maurya.jpg', year: '2023-2024' },
    { id: 62, name: 'Rtr. Vartika Upadhyay', role: 'Editorial Service', image: '/2023-2024/Vartika Upadhyay.jpg', year: '2023-2024' },
    { id: 40, name: 'Rtr. Bhargav Nadiyana', role: 'Partner-in-Service', image: '/2023-2024/Bhargav Nadiyana.jpg', year: '2023-2024' },
    { id: 33, name: 'Rtr. Aizab Khan', role: 'Public Relation', image: '/2023-2024/Aizab Khan.jpg', year: '2023-2024' },
    { id: 36, name: 'Rtr. Anjali Patel', role: 'Public Relation', image: '/2023-2024/Anjali Patel.jpg', year: '2023-2024' },
    { id: 52, name: 'Rtr. Samyak Waghmare', role: 'Public Relations', image: '/2023-2024/Samyak Waghmare.jpg', year: '2023-2024' },
    //2022-2023
    { id: 73, name: 'Rtr. Amar Singh', role: 'Club Service Director', image: '/2022-2023/Amar Singh.jpg', year: '2022-2023' },
    { id: 74, name: 'Rtr. Tanya Shah', role: 'Joint Club Service Director', image: '/2022-2023/Tanya Shah.jpg', year: '2022-2023' },
    { id: 75, name: 'Rtr. Gaurav Bhavdane', role: 'Community Service Director', image: '/2022-2023/Gaurav Bhavdane.jpg', year: '2022-2023' },
    { id: 76, name: 'Rtr. Abhishek Maurya', role: 'Community Service Director', image: '/2022-2023/Abhishek Maurya.jpg', year: '2022-2023' },
    { id: 77, name: 'Rtr. Nidhi Singh', role: 'Community Service and Shiksha Director', image: '/2022-2023/Nidhi Singh.jpg', year: '2022-2023' },
    { id: 78, name: 'Rtr. Kirtika Srivastava', role: 'Shiksha Director', image: '/2022-2023/Kirtika Srivastava.jpg', year: '2022-2023' },
    { id: 79, name: 'Rtr. Tanay Agarwal', role: 'Professional Development Director', image: '/2022-2023/Tanay Agarwal.jpg', year: '2022-2023' },
    { id: 80, name: 'Rtr. Akshay Sharma', role: 'International Service Director', image: '/2022-2023/Akshay Sharma.jpg', year: '2022-2023' },
    { id: 81, name: 'Rtr. Esha Mehra', role: 'Joint International Service Director', image: '/2022-2023/Esha Mehra.jpg', year: '2022-2023' },
    { id: 82, name: 'Rtr. Sejal Dubey', role: 'Joint Public Relations and Marketing Director', image: '/2022-2023/Sejal Dubey.jpg', year: '2022-2023' },
    { id: 83, name: 'Rtr. Nilay Zaveri', role: 'Sports Director', image: '/2022-2023/Nilay Zaveri.jpg', year: '2022-2023' },
    { id: 84, name: 'Rtr. Ayush Lahoti', role: 'Entrepreneur Development Director', image: '/2022-2023/Ayush Lahoti.jpg', year: '2022-2023' },
    { id: 85, name: 'Rtr. Yash Patil', role: 'Partners in Service Director', image: '/2022-2023/Yash Patil.jpg', year: '2022-2023' },
    { id: 86, name: 'Rtr. Sumit Sharma', role: 'Editorial Director', image: '/2022-2023/Sumit Sharma.jpg', year: '2022-2023' },
    { id: 87, name: 'Rtr. Sudha Shukla', role: 'Joint Editorial Director', image: '/2022-2023/Sudha Shukla.jpg', year: '2022-2023' },
    { id: 88, name: 'Rtr. Chetan Mahnot', role: 'Joint Digital Communications Director', image: '/2022-2023/Chetan Mahnot.jpg', year: '2022-2023' },
    { id: 89, name: 'Rtr. Tanishq Suryavanshi', role: 'Media Production Director', image: '/2022-2023/Tanishq Suryavanshi.jpg', year: '2022-2023' },

];


const TeamPage = () => {
    const [selectedYear, setSelectedYear] = useState('2024-2025');

    const filteredMembers = teamMembers.filter(member => member.year === selectedYear);
    const filteredBoDs = boardOfDirectors.filter(bod => bod.year === selectedYear);

    const academicYearOptions = Array.from({ length: 2025 - 2017 }, (_, i) => {
        const startYear = 2017 + i;
        const endYear = startYear + 1;
        return `${startYear}-${endYear}`;
    });

    return (
        <div className="p-8 bg-white">
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="flex flex-col sm:flex-row justify-center items-center text-center mb-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent mb-0 sm:mb-0 sm:mr-4">
                        CORE TEAM
                    </h1>
                    <select
                        id="year"
                        className="p-2 border border-gray-300 rounded-md bg-white text-orange-700 font-bold mt-2 sm:mt-0"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        {academicYearOptions.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className="max-w-[80%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
                        {filteredMembers.map((member) => (
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

            <div className="mt-32 mb-24">
                <h1 className="text-center text-4xl font-bold my-8 bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
                    Board of Directors
                </h1>
                <div className="max-w-[80%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        {filteredBoDs.map(bod => (
                            <div
                                key={bod.id}
                                className="bg-[#faebd7] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                                    <img
                                        src={bod.image}
                                        alt={bod.name}
                                        className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <h2 className="mt-4 text-xl font-bold text-center">{bod.role}</h2>
                                <p className="text-center">{bod.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;