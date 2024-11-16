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
    { id: 161, name: 'Rtr. Muskan Sinha', role: 'President', image: '/team/Rtr. Muskan Sinha - President .jpg', year: '2022-2023' },
    { id: 162, name: 'Rtr. Nipesh Dubey', role: 'Secretary', image: '/team/Rtr. Nipesh Dubey - Secretary .jpg', year: '2022-2023' },
    { id: 163, name: 'Rtr. Kunal Miskin', role: 'Immediate Past President', image: '/team/Rtr. Kunal Miskin - Immediate Past President .jpg', year: '2022-2023' },
    { id: 164, name: 'Rtr. Ishika Sharma', role: 'Vice President Main Avenues', image: '/team/Rtr. Ishika Sharma - Vice President (Main Avenues).jpg', year: '2022-2023' },
    { id: 165, name: 'Rtr. Maitali Mandge', role: 'Vice President Support Function', image: '/team/Rtr. Mitali Mandge - Vice President (Support Function).jpg', year: '2022-2023' },
    { id: 166, name: 'Rtr. Dhruvi Jagani', role: 'Sergeant At Arms', image: '/team/Rtr. Dhruvi Jagnani - Seargent-At-Arms.jpg', year: '2022-2023' },
    { id: 167, name: 'Rtr. Nikita Shukla', role: 'Chairperson Human Resource Development', image: '/team/Rtr. Nikita Shukla - Chairperson HRD.jpg', year: '2022-2023' },
    { id: 168, name: 'Rtr. Ambresh Shukla', role: 'Chairperson Finance', image: '/team/Rtr. Ambresh Shukla - Chairperson Finance .jpg', year: '2022-2023' },
    { id: 169, name: 'Rtr. Jay Agrawal', role: 'Chairperson Promo', image: '/team/Rtr. Jai Agrawal - Chairperson Promo.jpg', year: '2022-2023' },
    { id: 170, name: 'Rtr. Atharva Dhanorkar', role: 'Joint Secretary', image: '/team/Rtr. Atharva Dhanorkar - Joint Secretary .jpg', year: '2022-2023' },
    { id: 171, name: 'Rtr. Vaibhav Singh', role: 'Joint Secretary', image: '/team/Rtr. Vaibhav Singh - Joint Secretary .jpg', year: '2022-2023' },
    { id: 172, name: 'Rtr. Ishita Pawar', role: 'Chairperson Publication', image: '/team/Rtr. Ishita Pawar - Chairperson Publications .jpg', year: '2022-2023' },  
    //2021-2022
    { id: 173, name: 'Rtr. Kunal Miskin', role: 'President', image: '/team/2021-2022/Rtr. Kunal Miskin-President_.webp', year: '2021-2022' },
    { id: 174, name: 'Rtr. Bhushan Nehete', role: 'Secretary', image: '/team/2021-2022/Rtr. Bhushan Nehete-Secretary_.webp', year: '2021-2022' },
    { id: 175, name: 'Rtr. Prince Pandey', role: 'Immediate Past President', image: '/team/2021-2022/Rtr. Prince Pandey-Immediate Past President_.webp', year: '2021-2022' },
    { id: 176, name: 'Rtr. Janhavi Mishra', role: 'Vice President', image: '/team/2021-2022/Rtr. Janhavi Mishra-Vice President_.webp', year: '2021-2022' },
    { id: 179, name: 'Rtr. Nishank Shetty', role: 'Sergeant At Arms', image: '/team/2021-2022/Rtr. Nishank Shetty-Sergeant At Arms_.webp', year: '2021-2022' },
    { id: 178, name: 'Rtr. Sachet Engineer', role: 'Treasurer', image: '/team/2021-2022/Rtr. Sachet Engineer-Treasurer_.webp', year: '2021-2022' },
    { id: 177, name: 'Rtr. Shruti Dubey', role: 'Chairperson HRD', image: '/team/2021-2022/Rtr. Shruti Dubey-Chairperson HRD_.webp', year: '2021-2022' },
    { id: 180, name: 'Rtr. Aaditya Jaiswal', role: 'Joint Secretary', image: '/team/2021-2022/Rtr. Aaditya Jaiswal-Joint Secretary_.webp', year: '2021-2022' },
    { id: 181, name: 'Rtr. Muskan Sinha', role: 'Joint Secretary', image: '/team/2021-2022/Rtr. Muskan Sinha-Joint Secretary_.webp', year: '2021-2022' },
    { id: 182, name: 'Rtr. Mitali Mandge', role: 'Chairperson Publications', image: '/team/2021-2022/Rtr. Mitali Mandge-Chairperson Publications_.webp', year: '2021-2022' },
    //2020-2021
    { id: 186, name: 'Rtr. Prince Pandey', role: 'President', image: '/team/2020-2021/Rtr. Prince Pandey_President.webp', year: '2020-2021' },
    { id: 185, name: 'Rtr. Shubham Gawade', role: 'Secretary', image: '/team/2020-2021/Rtr. Shubham Gawade_Secretary.webp', year: '2020-2021' },
    { id: 184, name: 'Rtr. Suraj Naidu', role: 'Vice President', image: '/team/2020-2021/Rtr. Suraj Naidu_Vice President.webp', year: '2020-2021' },
    { id: 188, name: 'Rtr. Abhishek Mishra', role: 'Sergeant At Arms', image: '/team/2020-2021/Rtr. Abhishek Mishra_Seargeant At Arms.webp', year: '2020-2021' },
    { id: 183, name: 'Rtr. Urvi Shukla', role: 'Treasurer', image: '/team/2020-2021/Rtr. Urvi Shukla_Treasurer.webp', year: '2020-2021' },
    { id: 187, name: 'Rtr. Bhushan Nete', role: 'Joint Secretary', image: '/team/2020-2021/Rtr. Bhushan Nete_Joint Secretary.webp', year: '2020-2021' },
    { id: 189, name: 'Rtr. Anuja Somthankar', role: 'Chairperson HRD', image: '/team/2020-2021/Rtr. Anuja Somthankar_Chairperson HRD.webp', year: '2020-2021' },
    //2019-2020
    { id: 193, name: 'Rtr. Harshali Yeram', role: 'President', image: '/team/2019-2020/Rtr. Harshali Yeram_President.webp', year: '2019-2020' },
    { id: 191, name: 'Rtr. Mansi Singh', role: 'Secretary', image: '/team/2019-2020/Rtr. Mansi Singh_Secretary.webp', year: '2019-2020' },
    { id: 192, name: 'Rtr. Jemit Shah', role: 'Vice President (Supporting Functions)', image: '/team/2019-2020/Rtr. Jemit Shah_Vice President (Supporting Functions).webp', year: '2019-2020' },
    { id: 195, name: 'Rtr. Dhruv Shah', role: 'Vice President (Main Avenues)', image: '/team/2019-2020/Rtr. Dhruv Shah_Vice President (Main Avenues).webp', year: '2019-2020' },
    { id: 197, name: 'Rtr. Aditya Salvi', role: 'Sergeant At Arms', image: '/team/2019-2020/Rtr. Aditya Salvi_Sergeant At Arms.webp', year: '2019-2020' },
    { id: 194, name: 'Rtr. Harsh Chaurasia', role: 'Treasurer', image: '/team/2019-2020/Rtr. Harsh Chaurasia_Treasurer.webp', year: '2019-2020' },
    { id: 190, name: 'Rtr. Shreya Patil', role: 'Chairperson HRD', image: '/team/2019-2020/Rtr. Shreya Patil_Chairperson HRD.webp', year: '2019-2020' },
    { id: 196, name: 'Rtr. Aishwarya Sattigeri', role: 'Joint Secretary', image: '/team/2019-2020/Rtr. Aishwarya Sattigeri_Joint Secretary.webp', year: '2019-2020' },
    //2018-2019
    { id: 192, name: 'Rtr. Yash Bohra', role: 'President', image: '/team/2018-2019/Rtr. Yash Bohra_President.webp', year: '2018-2019' },
    { id: 195, name: 'Rtr. Ruchi Pourana', role: 'Secretary', image: '/team/2018-2019/Rtr. Ruchi Pourana_Secretary.webp', year: '2018-2019' },
    { id: 198, name: 'Rtr. Mansi Singh', role: 'Secretary', image: '/team/2018-2019/Rtr. Mansi Singh_Secretary.webp', year: '2018-2019' },
    { id: 194, name: 'Rtr. Sanjana Singh', role: 'Vice President', image: '/team/2018-2019/Rtr. Sanjana Singh_Vice President.webp', year: '2018-2019' },
    { id: 193, name: 'Rtr. Tushar Balande', role: 'Treasurer', image: '/team/2018-2019/Rtr. Tushar Balande_Treasurer.webp', year: '2018-2019' },
    { id: 196, name: 'Rtr. Neerja Rajeev', role: 'Chairwoman HRD', image: '/team/2018-2019/Rtr. Neerja Rajeev_Chairwoman HRD.webp', year: '2018-2019' },
    { id: 197, name: 'Rtr. Harshali Yerm', role: 'Joint Secretary', image: '/team/2018-2019/Rtr. Harshali Yerm_Joint Secretary.webp', year: '2018-2019' },
    //2017-18
    { id: 200, name: 'Rtr. Anisha Pandya', role: 'President', image: '/team/2017-18/Rtr. Anisha Pandya_President.webp', year: '2017-2018' },
    { id: 201, name: 'Rtr. Binal Patel', role: 'Secretary', image: '/team/2017-18/Rtr. Binal Patel_Secretary.webp', year: '2017-2018' },
    { id: 199, name: 'Rtr. Viral Haria', role: 'Vice President', image: '/team/2017-18/Rtr. Viral Haria_Vice President.webp', year: '2017-2018' },
    { id: 202, name: 'Rtr. Harsh Kothari', role: 'Seargent-At-Arms', image: '/team/2017-18/Rtr. Harsh Kothari_Seargent-At-Arms.webp', year: '2017-2018' },
    { id: 203, name: 'Rtr. Pandey Sawant', role: 'Treasurer', image: '/team/2017-18/Rtr. Pandey Sawant_Treasurer.webp', year: '2017-2018' },
    { id: 204, name: 'Rtr. Saloni Jain', role: 'Chairman HR', image: '/team/2017-18/Rtr. Saloni Jain_Chairman HR.webp', year: '2017-2018' },
];

const boardOfDirectors = [
    { id: 1, name: 'Rtr. Shreya Jadhav', role: 'Club Service', image: '/team/Rtr. Shreya Jadhav.webp', year: '2024-2025' },
    { id: 2, name: 'Rtr. Dhairya Doshi', role: 'Club Service', image: '/team/Rtr. Dhairya Doshi.webp', year: '2024-2025' },
    { id: 3, name: 'Rtr. Aaryan Gupta', role: 'Community Service', image: '/team/Rtr. Aaryan Gupta.webp', year: '2024-2025' },
    { id: 4, name: 'Rtr. Suryansh Rai', role: 'Community Service', image: '/team/Rtr. Suryansh Rai.webp', year: '2024-2025' },
    { id: 5, name: 'Rtr. Anushka Thakur', role: 'Community Service', image: '/team/Rtr. Anushka Thakur.webp', year: '2024-2025' },
    { id: 6, name: 'Rtr. Jaidan Maity', role: 'Professional Development', image: '/team/Rtr. Jaidan Maity.webp', year: '2024-2025' },
    { id: 7, name: 'Rtr. Vaishnavi Ranjan', role: 'Professional Development', image: '/team/Rtr. Vaishnavi Ranjan.webp', year: '2024-2025' },
    { id: 8, name: 'Rtr. Rashi Bedse', role: 'International Service', image: '/team/Rtr. Rashi Bedse.webp', year: '2024-2025' },
    { id: 9, name: 'Rtr. Shweta Varma', role: 'International Service', image: '/team/Rtr. Shweta Varma.webp', year: '2024-2025' },
    { id: 10, name: 'Rtr. Vivek Rai', role: 'Shiksha', image: '/team/Rtr. Vivek Rai.webp', year: '2024-2025' },
    { id: 11, name: 'Rtr. Palak Upadhyay', role: 'Shiksha', image: '/team/Rtr. Palak Upadhyay.webp', year: '2024-2025' },
    { id: 12, name: 'Rtr. Ayaan Shaikh', role: 'Sports', image: '/team/Rtr. Ayaan Shaikh.webp', year: '2024-2025' },
    { id: 13, name: 'Rtr. Fuzail Khan', role: 'Sports', image: '/team/Rtr. Fuzail Khan.webp', year: '2024-2025' },
    { id: 14, name: 'Rtr. Kriti Saxena', role: 'Entrepreneurship Development', image: '/team/Rtr. Kriti Saxena.webp', year: '2024-2025' },
    { id: 15, name: 'Rtr. Atharva Nayak', role: 'Entrepreneurship Development', image: '/team/Rtr. Atharva Nayak.webp', year: '2024-2025' },
    { id: 16, name: 'Rtr. Ansh Mishra', role: 'Social Media and Relation', image: '/team/Rtr. Ansh Mishra.webp', year: '2024-2025' },
    { id: 17, name: 'Rtr. Jai Anjaria', role: 'Social Media and Relation', image: '/team/Rtr. Jai Anjaria.webp', year: '2024-2025' },
    { id: 18, name: 'Rtr. Srishti Srivastava', role: 'Social Media and Relation', image: '/team/Rtr. Srishti Srivastava.webp', year: '2024-2025' },
    { id: 19, name: 'Rtr. Pranjal Chavan', role: 'Digital Communication', image: '/team/Rtr. Pranjal Chavan.webp', year: '2024-2025' },
    { id: 20, name: 'Rtr. Janhvi Kushwaha', role: 'Digital Communication', image: '/team/Rtr. Janhvi Kushwaha.webp', year: '2024-2025' },
    { id: 21, name: 'Rtr. Krish Agrawal', role: 'Digital Communication', image: '/team/Rtr. Krish Agarwal.webp', year: '2024-2025' },
    { id: 22, name: 'Rtr. Reeba Diwan', role: 'Editorial', image: '/team/Rtr. Reeba Diwan.webp', year: '2024-2025' },
    { id: 23, name: 'Rtr. Rudra Sharma', role: 'Editorial', image: '/team/Rtr. Rudra Sharma.webp', year: '2024-2025' },
    { id: 24, name: 'Rtr. Chandranshu Dharmik', role: 'Partner-in-Service', image: '/team/Rtr. Chandranshu Dharmik.webp', year: '2024-2025' },
    { id: 25, name: 'Rtr. Farhan Shaikh', role: 'Public Relation', image: '/team/Rtr. Farhan Shaikh.webp', year: '2024-2025' },
    { id: 26, name: 'Rtr. Jeneesh Joshi', role: 'Public Relation', image: '/team/Rtr. Jeenesh Joshi.webp', year: '2024-2025' },
    { id: 27, name: 'Rtr. Shivangi Pandey', role: 'Public Relation', image: '/team/Rtr. Shivangi Pandey.webp', year: '2024-2025' },
    { id: 28, name: 'Rtr. Utsav Yadav', role: 'Marketing', image: '/team/Rtr. Utsav Yadav.webp', year: '2024-2025' },
    { id: 29, name: 'Rtr. Sakshi Singh', role: 'Marketing', image: '/team/Rtr. Sakshi Singh.webp', year: '2024-2025' },

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
    // 2022-2023
    { id: 73, name: 'Rtr. Amar Singh', role: 'Club Service Director', image: '/2022-2023/Amar Singh.jpg', year: '2022-2023' },
    { id: 74, name: 'Rtr. Tanya Shah', role: 'Joint Club Service Director', image: '/2022-2023/Tanya Shah.jpg', year: '2022-2023' },
    { id: 75, name: 'Rtr. Gaurav Bhavdane', role: 'Community Service Director', image: '/2022-2023/Gaurav Bhavdane.jpg', year: '2022-2023' },
    { id: 76, name: 'Rtr. Abhishek Maurya', role: 'Community Service Director', image: '/2022-2023/Abhishek Maurya.jpg', year: '2022-2023' },
    { id: 77, name: 'Rtr. Nidhi Singh', role: 'Community Service and Shiksha Director', image: '/2022-2023/Nidhi Singh.jpg', year: '2022-2023' },
    { id: 79, name: 'Rtr. Tanay Agarwal', role: 'Professional Development Director', image: '/2022-2023/Tanay Agarwal.jpg', year: '2022-2023' },
    { id: 80, name: 'Rtr. Akshay Sharma', role: 'International Service Director', image: '/2022-2023/Akshay Sharma.jpg', year: '2022-2023' },
    { id: 81, name: 'Rtr. Esha Mehra', role: 'Joint International Service Director', image: '/2022-2023/Esha Mehra.jpg', year: '2022-2023' },
    { id: 78, name: 'Rtr. Kirtika Srivastava', role: 'Shiksha Director', image: '/2022-2023/Kirtika Srivastava.jpg', year: '2022-2023' },
    { id: 83, name: 'Rtr. Nilay Zaveri', role: 'Sports Director', image: '/2022-2023/Nilay Zaveri.jpg', year: '2022-2023' },
    { id: 84, name: 'Rtr. Ayush Lahoti', role: 'Entrepreneurship Development Director', image: '/2022-2023/Ayush Lahoti.jpg', year: '2022-2023' },
    { id: 88, name: 'Rtr. Chetan Mahnot', role: 'Joint Digital Communications Director', image: '/2022-2023/Chetan Mahnot.jpg', year: '2022-2023' },
    { id: 89, name: 'Rtr. Tanishq Suryavanshi', role: 'Media Production Director', image: '/2022-2023/Tanishq Suryavanshi.jpg', year: '2022-2023' },
    { id: 86, name: 'Rtr. Sumit Sharma', role: 'Editorial Director', image: '/2022-2023/Sumit Sharma.jpg', year: '2022-2023' },
    { id: 87, name: 'Rtr. Sudha Shukla', role: 'Joint Editorial Director', image: '/2022-2023/Sudha Shukla.jpg', year: '2022-2023' },
    { id: 85, name: 'Rtr. Yash Patil', role: 'Partners in Service Director', image: '/2022-2023/Yash Patil.jpg', year: '2022-2023' },
    { id: 82, name: 'Rtr. Sejal Dubey', role: 'Joint Public Relations and Marketing Director', image: '/2022-2023/Sejal Dubey.jpg', year: '2022-2023' },
    // 2021-2022
    { id: 95, name: 'Rtr. Nipesh Dubey', role: 'Club Service and Sports Director', image: '/team/2021-2022/Rtr. Nipesh Dubey-Club Service and Sports Director_.webp', year: '2021-2022' },
    { id: 101, name: 'Rtr. Allan Fernandes', role: 'Community Service Director', image: '/team/2021-2022/Rtr. Allan Fernandes-Community Service Director_.webp', year: '2021-2022' },
    { id: 98, name: 'Rtr. Eashen Bhale', role: 'Joint Community Service Director', image: '/team/2021-2022/Rtr. Eashen Bhale-Joint Community Service Director_.webp', year: '2021-2022' },
    { id: 102, name: 'Rtr. Adityavikaram', role: 'Professional and entrepreneurship Development Director', image: '/team/2021-2022/Rtr. Adityavikaram-Professional and entrepreneurship Development Director_.webp', year: '2021-2022' },
    { id: 93, name: 'Rtr. Rutu Shah', role: 'International Service Director', image: '/team/2021-2022/Rtr. Rutu Shah-International Service Director_.webp', year: '2021-2022' },
    { id: 90, name: 'Rtr. Yash Lad', role: 'Shiksha Director', image: '/team/2021-2022/Rtr. Yash Lad-Shiksha Director_.webp', year: '2021-2022' },
    { id: 92, name: 'Rtr. Shivam Dubey', role: 'Shiksha Director', image: '/team/2021-2022/Rtr. Shivam Dubey-Shiksha Director_.webp', year: '2021-2022' },
    { id: 99, name: 'Rtr. Dhruvi Jagnani', role: 'Digitial Communication Director', image: '/team/2021-2022/Rtr. Dhruvi Jagnani-Digital Communication Director_.webp', year: '2021-2022' },
    { id: 97, name: 'Rtr. Hardik Chemburkar', role: 'Joint Digital Communication and Social Media Director', image: '/team/2021-2022/Rtr. Hardik Chemburkar-Joint Digital Communication and Social Media Director_.webp', year: '2021-2022' },
    { id: 96, name: 'Rtr. Malcolm Cardoza', role: 'Editorial Service Director', image: '/team/2021-2022/Rtr. Malcolm Cardoza-Editorial Service Director_.webp', year: '2021-2022' },
    { id: 94, name: 'Rtr. Priyanshu Pandey', role: 'Partner in Service & Joint Professional and Entrepreneurship Development Director', image: '/team/2021-2022/Rtr. Priyanshu Pandey-Partner in Service & Joint Professional and Entrepreneurship Development Director_.webp', year: '2021-2022' },
    { id: 103, name: 'Rtr. Jay Agarwal', role: 'Public Relations and Marketing Development Director', image: '/team/2021-2022/Rtr. Jay Agarwal-Public Relations and Marketing Development Director_.webp', year: '2021-2022' },
    { id: 100, name: 'Rtr. Ananya Shetty', role: 'Social Media Director', image: '/team/2021-2022/Rtr. Ananya Shetty-Social Media Director_.webp', year: '2021-2022' },
    { id: 91, name: 'Rtr. Suraj Naidu', role: 'Club Trainer', image: '/team/2021-2022/Rtr. Suraj Naidu-Club Trainer.webp', year: '2021-2022' },
    // 2020-2021
    { id: 106, name: 'Rtr. Nishant Verma', role: 'Club Service and Sports Director', image: '/team/2020-2021/Rtr. Nishant Verma_Club Service and Sports Director.webp', year: '2020-2021' },
    { id: 107, name: 'Rtr. Kunal Miskin', role: 'Community Service Director', image: '/team/2020-2021/Rtr. Kunal Miskin_Community Service Director.webp', year: '2020-2021' },
    { id: 108, name: 'Rtr. Janhavi Mishra', role: 'Joint Community Service Director', image: '/team/2020-2021/Rtr. Janhavi Mishra_Joint Community Service Director.webp', year: '2020-2021' },
    { id: 104, name: 'Rtr. Zoya Ansari', role: 'Professional and Entrepreneurship Development', image: '/team/2020-2021/Rtr. Zoya Ansari_Professional and Entrepreneurship Development.webp', year: '2020-2021' },
    { id: 105, name: 'Rtr. Samiksha Bedkar', role: 'International Service Director', image: '/team/2020-2021/Rtr. Samiksha Bedkar_International Service Director.webp', year: '2020-2021' },
    { id: 109, name: 'Rtr. Eesha Pandit', role: 'Digital Communication and Social Media Director', image: '/team/2020-2021/Rtr. Eesha Pandit_Digital Communication and Social Media Director.webp', year: '2020-2021' },
    { id: 110, name: 'Rtr. Dhruv Shelke', role: 'Joint Digital Communication and Social Media Director', image: '/team/2020-2021/Rtr. Dhruv Shelke_Joint Digital Communication and Social Media Director.webp', year: '2020-2021' },
    { id: 111, name: 'Rtr. Ayush Gupta', role: 'Editorial Service Director', image: '/team/2020-2021/Rtr. Ayush Gupta_Editorial Service Director.webp', year: '2020-2021' },
    // 2019-2020
    { id: 112, name: 'Rtr. Snehal Raj Verma', role: 'Club Service and Sports Director', image: '/team/2019-2020/Rtr. Snehal Raj Verma_Club Service and Sports Director.webp', year: '2019-2020' },
    { id: 114, name: 'Rtr. Ritesh Shinde', role: 'Community Service Director', image: '/team/2019-2020/Rtr. Ritesh Shinde_Community Service Director.webp', year: '2019-2020' },
    { id: 116, name: 'Rtr. Pratiksha Shrivastava', role: 'Joint Community Service Director', image: '/team/2019-2020/Rtr. Pratiksha Shrivastava_Joint Community Service Director.webp', year: '2019-2020' },
    { id: 118, name: 'Rtr. Dharna Singh', role: 'Professional and Entrepreneurship Director', image: '/team/2019-2020/Rtr. Dharna Singh_Professional and Entrepreneurship Director.webp', year: '2019-2020' },
    { id: 113, name: 'Rtr. Saneel Gaikwad', role: 'International Service Director', image: '/team/2019-2020/Rtr. Saneel Gaikwad_International Service Director.webp', year: '2019-2020' },
    { id: 115, name: 'Rtr. Prince Pandey', role: 'Shiksha Director', image: '/team/2019-2020/Rtr. Prince Pandey_Shiksha Director.webp', year: '2019-2020' },
    { id: 117, name: 'Rtr. Pratik Halurkar', role: 'Digital Communication and Social Media Director', image: '/team/2019-2020/Rtr. Pratik Halurkar_Digital Communication and Social Media Director.webp', year: '2019-2020' },
    { id: 119, name: 'Rtr. Chirag Bangera', role: 'Editorial Director', image: '/team/2019-2020/Rtr. Chirag Bangera_Editorial Director.webp', year: '2019-2020' },
    // 2018-2019
    { id: 127, name: 'Rtr. Darpan Jain', role: 'Club Service Director', image: '/team/2018-2019/Rtr. Darpan Jain_Club Service Director.webp', year: '2018-2019' },
    { id: 126, name: 'Rtr. Dhrumit Rajput', role: 'Community Service Director', image: '/team/2018-2019/Rtr. Dhrumit Rajput_Community Service Director.webp', year: '2018-2019' },
    { id: 129, name: 'Rtr. Ankit Sharma', role: 'Personality and Professional Development Director', image: '/team/2018-2019/Rtr. Ankit Sharma_Personality and Professional Development Director.webp', year: '2018-2019' },
    { id: 123, name: 'Rtr. Mahima Gandhi', role: 'International Service Director', image: '/team/2018-2019/Rtr. Mahima Gandhi_International Service Director.webp', year: '2018-2019' },
    { id: 120, name: 'Rtr. Swaraj Tendulkar', role: 'Sports Director', image: '/team/2018-2019/Rtr. Swaraj Tendulkar_Sports Director.webp', year: '2018-2019' },
    { id: 125, name: 'Rtr. Dhruv Shah', role: 'Digital Communication Director', image: '/team/2018-2019/Rtr. Dhruv Shah_Digital Communication Director.webp', year: '2018-2019' },
    { id: 121, name: 'Rtr. Sumit Joshi', role: 'Editorial Service Director', image: '/team/2018-2019/Rtr. Sumit Joshi_Editorial Service Director.webp', year: '2018-2019' },
    { id: 124, name: 'Rtr. Jemit Shah', role: 'Partner in Service', image: '/team/2018-2019/Rtr. Jemit Shah_Partner-in-Service.webp', year: '2018-2019' },
    { id: 122, name: 'Rtr. Piyush Singh', role: 'Public Relations and Marketing Director', image: '/team/2018-2019/Rtr. Piyush Singh_Public Relations and Marketing Director.webp', year: '2018-2019' },
    { id: 130, name: 'Rtr. Ayushi Singh', role: 'Social Media Director', image: '/team/2018-2019/Rtr. Ayushi Singh_Social Media Director.webp', year: '2018-2019' },
    { id: 128, name: 'Rtr. Bharatkumar Suthar', role: 'Finance Director', image: '/team/2018-2019/Rtr. Bharatkumar Suthar_Finance Director.webp', year: '2018-2019' },
    //2017-18
    { id: 130, name: 'Rtr. Het Shah', role: 'Club Service Director', image: '/team/2017-2018/Rtr. Het Shah_Club Service Director.webp', year: '2017-2018' },
    { id: 133, name: 'Rtr. Swapnil Arya', role: 'Community Service Director', image: '/team/2017-2018/Rtr. Swapnil Arya_Community Service Director.webp', year: '2017-2018' },
    { id: 134, name: 'Rtr. Ashutosh Tiwari', role: 'Professional and Entrepreneurship Director', image: '/team/2017-2018/Rtr. Ashutosh Tiwari_Professional and Entrepreneurship Director.webp', year: '2017-2018' },
    { id: 136, name: 'Rtr. Keval Chavda', role: 'International Service Director', image: '/team/2017-2018/Rtr. Keval Chavda_International Service Director.webp', year: '2017-2018' },
    { id: 137, name: 'Rtr. Keyur Pandey', role: 'Sports Director', image: '/team/2017-2018/Rtr. Keyur Pandey_Sports.webp', year: '2017-2018' },
    { id: 130, name: 'Rtr. Shreya Patil', role: 'Digital Communication Director', image: '/team/2017-2018/Rtr. Shreya Patil_Digital Communication.webp', year: '2017-2018' },
    { id: 132, name: 'Rtr. Sumer Singh', role: 'Partner-In-Service', image: '/team/2017-2018/Rtr. Sumer Singh_Partner-In-Service.webp', year: '2017-2018' },
    { id: 131, name: 'Rtr. Somaiyan Guchait', role: 'Public Relations and Marketing Director', image: '/team/2017-2018/Rtr. Somaiyan Guchait_Public Relations and Marketing Director.webp', year: '2017-2018' }
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
                                        loading='lazy'
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
                                        loading='lazy'
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