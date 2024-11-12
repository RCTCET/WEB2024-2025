import React, { useState } from 'react';

const teamMembers = [
    { id: 1, name: 'Rtr. Tanisha Kumar', role: 'President', image: '/2024-2025/Rtr. Tanisha Kumar.webp', year: '2024-2025' },
    { id: 2, name: 'Rtr. Prabhat Maurya', role: 'Secretary', image: '/2024-2025/Rtr. Prabhat Maurya.webp', year: '2024-2025' },
    { id: 3, name: 'Rtr. Amar Singh', role: 'Immediate Past President', image: '/2024-2025/Rtr. Amar Singh.webp', year: '2024-2025' },
    { id: 4, name: 'Rtr. Aizab Khan', role: 'Vice President', image: '/2024-2025/Rtr. Aizab Khan.webp', year: '2024-2025' },
    { id: 5, name: 'Rtr. Tushar Mishra', role: 'Vice President', image: '/2024-2025/Rtr. Tushar Mishra.webp', year: '2024-2025' },
    { id: 6, name: 'Rtr. Sudiksha Kapoor', role: 'Vice President', image: '/2024-2025/Rtr. Sudiksha Kapoor.webp', year: '2024-2025' },
    { id: 7, name: 'Rtr. Disha Rathod', role: 'Chairperson Finance', image: '/2024-2025/Rtr. Disha Rathod.webp', year: '2024-2025' },
    { id: 8, name: 'Rtr. Tanisha Sawalkar', role: 'Sergeant At Arms', image: '/2024-2025/Rtr. Tanisha Sawalkar.webp', year: '2024-2025' },
    { id: 9, name: 'Rtr. Saumya Mishra', role: 'Chairperson Human Resource Development', image: '/2024-2025/Rtr. Saumya Mishra.webp', year: '2024-2025' },
    { id: 10, name: 'Rtr. Aniska Bachar', role: 'Joint Secretary', image: '/2024-2025/Rtr. Aniska Bachar.webp', year: '2024-2025' },
    { id: 11, name: 'Rtr. Aaditya Yadav', role: 'Joint Secretary', image: '/2024-2025/Rtr. Aaditya Yadav.webp', year: '2024-2025' },
    { id: 12, name: 'Rtr. Yohaan Khan', role: 'Chairperson Publications', image: '/2024-2025/Rtr. Yohaan Khan.webp', year: '2024-2025' },
    // 2023-2024
    { id: 35, name: 'Rtr. Amar Singh', role: 'President', image: '/2023-2024/Amar Singh.webp', year: '2023-2024' },
    { id: 58, name: 'Rtr. Sumit Sharma', role: 'Secretary', image: '/2023-2024/Sumit Sharma.webp', year: '2023-2024' },
    { id: 48, name: 'Rtr. Muskan Sinha', role: 'Immediate Past President', image: '/2023-2024/Muskan Sinha.webp', year: '2023-2024' },
    { id: 34, name: 'Rtr. Akshay Sharma', role: 'Vice President Main Avenue', image: '/2023-2024/Akshay Sharma.webp', year: '2023-2024' },
    { id: 55, name: 'Rtr. Shah Alam Khan', role: 'Vice President Support Function', image: '/2023-2024/Shah Alam Khan.webp', year: '2023-2024' },
    { id: 43, name: 'Rtr. Esha Mehra', role: 'Chairperson Finance', image: '/2023-2024/Esha Mehra.webp', year: '2023-2024' },
    { id: 54, name: 'Rtr. Sejal Dubey', role: 'Sergeant At Arms', image: '/2023-2024/Sejal Dubey.webp', year: '2023-2024' },
    { id: 38, name: 'Rtr. Arudra Sahib', role: 'Chairperson Human Resource Development', image: '/2023-2024/Arudra Sahib.webp', year: '2023-2024' },
    { id: 42, name: 'Rtr. Disha Rathod', role: 'Joint Secretary', image: '/2023-2024/Disha Rathod.webp', year: '2023-2024' },
    { id: 60, name: 'Rtr. Tanisha Kumar', role: 'Joint Secretary & Chairperson Publication', image: '/2023-2024/Tanisha Kumar.webp', year: '2023-2024' },
    // 2022-2023
    { id: 161, name: 'Rtr. Muskan Sinha', role: 'President', image: '/2022-2023/Muskan Sinha.webp', year: '2022-2023' },
    { id: 162, name: 'Rtr. Nipesh Dubey', role: 'Secretary', image: '/2022-2023/Nipesh Dubey.webp', year: '2022-2023' },
    { id: 163, name: 'Rtr. Kunal Miskin', role: 'Immediate Past President', image: '/2022-2023/Kunal Miskin.webp', year: '2022-2023' },
    { id: 164, name: 'Rtr. Ishika Sharma', role: 'Vice President Main Avenues', image: '/2022-2023/Ishika Sharma.webp', year: '2022-2023' },
    { id: 165, name: 'Rtr. Maitali Mandge', role: 'Vice President Support Function', image: '/2022-2023/Mitali Mandge.webp', year: '2022-2023' },
    { id: 166, name: 'Rtr. Dhruvi Jagani', role: 'Sergeant At Arms', image: '/2022-2023/Dhruvi Jagnani.webp', year: '2022-2023' },
    { id: 167, name: 'Rtr. Nikita Shukla', role: 'Chairperson Human Resource Development', image: '/2022-2023/Nikita Shukla.webp', year: '2022-2023' },
    { id: 168, name: 'Rtr. Ambresh Shukla', role: 'Chairperson Finance', image: '/2022-2023/Ambresh Shukla.webp', year: '2022-2023' },
    { id: 169, name: 'Rtr. Jay Agrawal', role: 'Chairperson Promo', image: '/2022-2023/Jai Agrawal.webp', year: '2022-2023' },
    { id: 170, name: 'Rtr. Atharva Dhanorkar', role: 'Joint Secretary', image: '/2022-2023/Atharva Dhanorkar.webp', year: '2022-2023' },
    { id: 171, name: 'Rtr. Vaibhav Singh', role: 'Joint Secretary', image: '/2022-2023/Vaibhav Singh.webp', year: '2022-2023' },
    { id: 172, name: 'Rtr. Ishita Pawar', role: 'Chairperson Publication', image: '/2022-2023/Ishita Pawar.webp', year: '2022-2023' },
    //2021-2022
    { id: 8, name: 'Rtr. Prince Pandey', role: 'Immediate Past President', image: '/2021-2022/Rtr. Prince Pandey - Immediate Past President_.webp', year: '2021-2022' },
    { id: 11, name: 'Rtr. Bhushan Nehete', role: 'Secretary', image: '/2021-2022/Rtr. Bhushan Nehete - Secretary_.webp', year: '2021-2022' },
    { id: 2, name: 'Rtr. Muskan Sinha', role: 'Joint Secretary', image: '/2021-2022/Rtr. Muskan Sinha - Joint Secretary_.webp', year: '2021-2022' },
    { id: 3, name: 'Rtr. Aaditya Jaiswal', role: 'Joint Secretary', image: '/2021-2022/Rtr. Aaditya Jaiswal - Joint Secretary_.webp', year: '2021-2022' },
    { id: 23, name: 'Rtr. Mitali Mandge', role: 'Chairperson Publications', image: '/2021-2022/Rtr. Mitali Mandge - Chairperson Publications_.webp', year: '2021-2022' },
    { id: 24, name: 'Rtr. Jahnavi Mishra', role: 'Vice President', image: '/2021-2022/Rtrm Jahnavi Mishra - Vice President .webp', year: '2021-2022' },
    { id: 6, name: 'Rtr. Nishank Shetty', role: 'Sergeant-At-Arms', image: '/2021-2022/Rtr. Nishank Shetty - Seargent-At-Arms_.webp', year: '2021-2022' },
    { id: 14, name: 'Rtr. Sachet Engineer', role: 'Treasurer', image: '/2021-2022/Rtr. Sachet Engineer - Treasurer.webp', year: '2021-2022' },
    { id: 18, name: 'Rtr. Shruti Dubey', role: 'Chairperson HRD', image: '/2021-2022/Rtr. Shruti Dubey - Chairperson HRD_.webp', year: '2021-2022' },
    { id: 19, name: 'Rtr. Kunal Miskin', role: 'President', image: '/2021-2022/Rtr. Kunal Miskin - President_.webp', year: '2021-2022' },
    { id: 20, name: 'Rtr. Suraj Naidu', role: 'Club Trainer', image: '/2021-2022/Rtr. Suraj Naidu - Club Trainer.webp', year: '2021-2022' },    
];

const boardOfDirectors = [
    { id: 2, name: 'Rtr. Dhairya Doshi', role: 'Club Service', image: '/2024-2025/Rtr. Dhairya Doshi.webp', year: '2024-2025' },
    { id: 3, name: 'Rtr. Aaryan Gupta', role: 'Community Service', image: '/2024-2025/Rtr. Aaryan Gupta.webp', year: '2024-2025' },
    { id: 4, name: 'Rtr. Suryansh Rai', role: 'Community Service', image: '/2024-2025/Rtr. Suryansh Rai.webp', year: '2024-2025' },
    { id: 1, name: 'Rtr. Shreya Jadhav', role: 'Club Service', image: '/2024-2025/Rtr. Shreya Jadhav.webp', year: '2024-2025' },
    { id: 5, name: 'Rtr. Anushka Thakur', role: 'Community Service', image: '/2024-2025/Rtr. Anushka Thakur.webp', year: '2024-2025' },
    { id: 6, name: 'Rtr. Jaidan Maity', role: 'Professional Development', image: '/2024-2025/Rtr. Jaidan Maity.webp', year: '2024-2025' },
    { id: 7, name: 'Rtr. Vaishnavi Ranjan', role: 'Professional Development', image: '/2024-2025/Rtr. Vaishnavi Ranjan.webp', year: '2024-2025' },
    { id: 8, name: 'Rtr. Rashi Bedse', role: 'International Service', image: '/2024-2025/Rtr. Rashi Bedse.webp', year: '2024-2025' },
    { id: 9, name: 'Rtr. Shweta Varma', role: 'International Service', image: '/2024-2025/Rtr. Shweta Varma.webp', year: '2024-2025' },
    { id: 10, name: 'Rtr. Vivek Rai', role: 'Shiksha', image: '/2024-2025/Rtr. Vivek Rai.webp', year: '2024-2025' },
    { id: 11, name: 'Rtr. Palak Upadhyay', role: 'Shiksha', image: '/2024-2025/Rtr. Palak Upadhyay.webp', year: '2024-2025' },
    { id: 12, name: 'Rtr. Ayaan Shaikh', role: 'Sports', image: '/2024-2025/Rtr. Ayaan Shaikh.webp', year: '2024-2025' },
    { id: 13, name: 'Rtr. Fuzail Khan', role: 'Sports', image: '/2024-2025/Rtr. Fuzail Khan.webp', year: '2024-2025' },
    { id: 14, name: 'Rtr. Kriti Saxena', role: 'Entrepreneurship Development', image: '/2024-2025/Rtr. Kriti Saxena.webp', year: '2024-2025' },
    { id: 15, name: 'Rtr. Atharva Nayak', role: 'Entrepreneurship Development', image: '/2024-2025/Rtr. Atharva Nayak.webp', year: '2024-2025' },
    { id: 16, name: 'Rtr. Ansh Mishra', role: 'Social Media and Relation', image: '/2024-2025/Rtr. Ansh Mishra.webp', year: '2024-2025' },
    { id: 17, name: 'Rtr. Jai Anjaria', role: 'Social Media and Relation', image: '/2024-2025/Rtr. Jai Anjaria.webp', year: '2024-2025' },
    { id: 18, name: 'Rtr. Srishti Srivastava', role: 'Social Media and Relation', image: '/2024-2025/Rtr. Srishti Srivastava.webp', year: '2024-2025' },
    { id: 19, name: 'Rtr. Pranjal Chavan', role: 'Digital Communication', image: '/2024-2025/Rtr. Pranjal Chavan.webp', year: '2024-2025' },
    { id: 20, name: 'Rtr. Janhvi Kushwaha', role: 'Digital Communication', image: '/2024-2025/Rtr. Janhvi Kushwaha.webp', year: '2024-2025' },
    { id: 21, name: 'Rtr. Krish Agrawal', role: 'Digital Communication', image: '/2024-2025/Rtr. Krish Agarwal.webp', year: '2024-2025' },
    { id: 22, name: 'Rtr. Reeba Diwan', role: 'Editorial', image: '/2024-2025/Rtr. Reeba Diwan.webp', year: '2024-2025' },
    { id: 23, name: 'Rtr. Rudra Sharma', role: 'Editorial', image: '/2024-2025/Rtr. Rudra Sharma.webp', year: '2024-2025' },
    { id: 24, name: 'Rtr. Chandranshu Dharmik', role: 'Partner-in-Service', image: '/2024-2025/Rtr. Chandranshu Dharmik.webp', year: '2024-2025' },
    { id: 25, name: 'Rtr. Farhan Shaikh', role: 'Public Relation', image: '/2024-2025/Rtr. Farhan Shaikh.webp', year: '2024-2025' },
    { id: 26, name: 'Rtr. Jeneesh Joshi', role: 'Public Relation', image: '/2024-2025/Rtr. Jeenesh Joshi.webp', year: '2024-2025' },
    { id: 27, name: 'Rtr. Shivangi Pandey', role: 'Public Relation', image: '/2024-2025/Rtr. Shivangi Pandey.webp', year: '2024-2025' },
    { id: 28, name: 'Rtr. Utsav Yadav', role: 'Marketing', image: '/2024-2025/Rtr. Utsav Yadav.webp', year: '2024-2025' },
    { id: 29, name: 'Rtr. Sakshi Singh', role: 'Marketing', image: '/2024-2025/Rtr. Sakshi Singh.webp', year: '2024-2025' },
    //2023-24
    { id: 56, name: 'Rtr. Shreya Pandey', role: 'Club Service', image: '/2023-2024/Shreya Pandey.webp', year: '2023-2024' },
    { id: 31, name: 'Rtr. Aditi Pandey', role: 'Community Service', image: '/2023-2024/Aditi Pandey.webp', year: '2023-2024' },
    { id: 59, name: 'Rtr. Swati Singh', role: 'Community Service', image: '/2023-2024/Swati Singh.webp', year: '2023-2024' },
    { id: 61, name: 'Rtr. Tushar Mishra', role: 'Community Service', image: '/2023-2024/Tushar Mishra .webp', year: '2023-2024' },
    { id: 37, name: 'Rtr. Anshul Khadatkar', role: 'Professional Development', image: '/2023-2024/Anshul Khadatkar.webp', year: '2023-2024' },
    { id: 51, name: 'Rtr. Riddhi Joshi', role: 'Professional Development', image: '/2023-2024/Riddhi Joshi.webp', year: '2023-2024' },
    { id: 63, name: 'Rtr. Yuvraj Desai', role: 'International Service', image: '/2023-2024/Yuvraj Desai.webp', year: '2023-2024' },
    { id: 41, name: 'Rtr. Deval Saliya', role: 'International Service', image: '/2023-2024/Deval Saliya.webp', year: '2023-2024' },
    { id: 49, name: 'Rtr. Neeharika Jha', role: 'Shiksha', image: '/2023-2024/Neeharika Jha.webp', year: '2023-2024' },
    { id: 30, name: 'Rtr. Abhishek Yadav', role: 'Shiksha', image: '/2023-2024/Abhishek Yadav.webp', year: '2023-2024' },
    { id: 44, name: 'Rtr. Gaurav Warke', role: 'Sports', image: '/2023-2024/Gaurav Warke.webp', year: '2023-2024' },
    { id: 57, name: 'Rtr. Soham Shinde', role: 'Sports', image: '/2023-2024/Soham Shinde.webp', year: '2023-2024' },
    { id: 46, name: 'Rtr. Labdhi Doshi', role: 'Entrepreneurship Development', image: '/2023-2024/Labdhi Doshi.webp', year: '2023-2024' },
    { id: 32, name: 'Rtr. Aditya Rajbhar', role: 'Social Media and Relation', image: '/2023-2024/Aditya Rajbhar.webp', year: '2023-2024' },
    { id: 47, name: 'Rtr. Mukesh Kadali', role: 'Social Media and Relation', image: '/2023-2024/Mukesh Kadali.webp', year: '2023-2024' },
    { id: 39, name: 'Rtr. Atulya Sawant', role: 'Social Media and Relation', image: '/2023-2024/Atulya Sawant.webp', year: '2023-2024' },
    { id: 45, name: 'Rtr. Himanshu Jangid', role: 'Digital Communication', image: '/2023-2024/Himanshu Jangid.webp', year: '2023-2024' },
    { id: 53, name: 'Rtr. Saumya Mishra', role: 'Digital Communication', image: '/2023-2024/Saumya Mishra.webp', year: '2023-2024' },
    { id: 50, name: 'Rtr. Prabhat Maurya', role: 'Editorial Service', image: '/2023-2024/Prabhat Maurya.webp', year: '2023-2024' },
    { id: 62, name: 'Rtr. Vartika Upadhyay', role: 'Editorial Service', image: '/2023-2024/Vartika Upadhyay.webp', year: '2023-2024' },
    { id: 40, name: 'Rtr. Bhargav Nadiyana', role: 'Partner-in-Service', image: '/2023-2024/Bhargav Nadiyana.webp', year: '2023-2024' },
    { id: 33, name: 'Rtr. Aizab Khan', role: 'Public Relation', image: '/2023-2024/Aizab Khan.webp', year: '2023-2024' },
    { id: 36, name: 'Rtr. Anjali Patel', role: 'Public Relation', image: '/2023-2024/Anjali Patel.webp', year: '2023-2024' },
    { id: 52, name: 'Rtr. Samyak Waghmare', role: 'Public Relations', image: '/2023-2024/Samyak Waghmare.webp', year: '2023-2024' },
    //2022-2023
    { id: 73, name: 'Rtr. Amar Singh', role: 'Club Service Director', image: '/2022-2023/Amar Singh.webp', year: '2022-2023' },
    { id: 74, name: 'Rtr. Tanya Shah', role: 'Joint Club Service Director', image: '/2022-2023/Tanya Shah.webp', year: '2022-2023' },
    { id: 75, name: 'Rtr. Gaurav Bhavdane', role: 'Community Service Director', image: '/2022-2023/Gaurav Bavdhane.webp', year: '2022-2023' },
    { id: 76, name: 'Rtr. Abhishek Maurya', role: 'Community Service Director', image: '/2022-2023/Abhishek Maurya.webp', year: '2022-2023' },
    { id: 77, name: 'Rtr. Nidhi Singh', role: 'Community Service and Shiksha Director', image: '/2022-2023/Nidhi Singh.webp', year: '2022-2023' },
    { id: 78, name: 'Rtr. Kirtika Srivastava', role: 'Shiksha Director', image: '/2022-2023/Kirtika Shrivastava.webp', year: '2022-2023' },
    { id: 79, name: 'Rtr. Tanay Agarwal', role: 'Professional Development Director', image: '/2022-2023/Tanay Agarwal.webp', year: '2022-2023' },
    { id: 80, name: 'Rtr. Akshay Sharma', role: 'International Service Director', image: '/2022-2023/Akshay Sharma.webp', year: '2022-2023' },
    { id: 81, name: 'Rtr. Esha Mehra', role: 'Joint International Service Director', image: '/2022-2023/Esha Mehra.webp', year: '2022-2023' },
    { id: 82, name: 'Rtr. Sejal Dubey', role: 'Joint Public Relations and Marketing Director', image: '/2022-2023/Sejal Dubey.webp', year: '2022-2023' },
    { id: 83, name: 'Rtr. Nilay Zaveri', role: 'Sports Director', image: '/2022-2023/Nilay Zaveri.webp', year: '2022-2023' },
    { id: 84, name: 'Rtr. Ayush Lahoti', role: 'Entrepreneur Development Director', image: '/2022-2023/Ayush Lahoti.webp', year: '2022-2023' },
    { id: 85, name: 'Rtr. Yash Patil', role: 'Partners in Service Director', image: '/2022-2023/Yash Patil.webp', year: '2022-2023' },
    { id: 86, name: 'Rtr. Sumit Sharma', role: 'Editorial Director', image: '/2022-2023/Sumit Sharma.webp', year: '2022-2023' },
    { id: 87, name: 'Rtr. Sudha Shukla', role: 'Joint Editorial Director', image: '/2022-2023/Sudha Shukla.webp', year: '2022-2023' },
    { id: 88, name: 'Rtr. Chetan Mahnot', role: 'Joint Digital Communications Director', image: '/2022-2023/Chetan Mahnot.webp', year: '2022-2023' },
    { id: 89, name: 'Rtr. Tanishq Suryavanshi', role: 'Media Production Director', image: '/2022-2023/Tanishq Suryavanshi.webp', year: '2022-2023' },
    //2021-2022
    { id: 1, name: 'Rtr. Jay Agarwal', role: 'Public Relations and Marketing Director', image: '/2021-2022/Jay Agarwal - Public Relations and Marketing director .webp', year: '2021-2022' },
    { id: 4, name: 'Rtr. Nipesh Dubey', role: 'Club Service and Sports Director', image: '/2021-2022/Rtr. Nipesh Dubey- Club service and  sports director_.webp', year: '2021-2022' },
    { id: 5, name: 'Rtr. Adityavikaram', role: 'Professional and Entrepreneurship Development Director', image: '/2021-2022/Rtr. Adityavikaram -  Professional and Entrepreneurship development director_.webp', year: '2021-2022' },
    { id: 7, name: 'Rtr. Allan Fernandes', role: 'Community Service Director', image: '/2021-2022/Rtr. Allan Fernandes - Community Service director_.webp', year: '2021-2022' },
    { id: 9, name: 'Rtr. Ananya Shetty', role: 'Social Media Director', image: '/2021-2022/Rtr. Ananya Shetty - Social Media Director_.webp', year: '2021-2022' },
    { id: 10, name: 'Rtr. Priyanshu Pandey', role: 'Partner-in-Service & Joint Professional and Entrepreneurship Development Director', image: '/2021-2022/Rtr. Priyanshu Pandey - Partner-in-service & Joint Professional and Entrepreneurship development director_.webp', year: '2021-2022' },
    { id: 12, name: 'Rtr. Rutu Shah', role: 'International Service Director', image: '/2021-2022/Rtr. Rutu Shah - International Service director_.webp', year: '2021-2022' },
    { id: 13, name: 'Rtr. Dhruvi Jagnani', role: 'Digital Communication Director', image: '/2021-2022/Rtr. Dhruvi Jagnani - Digital Communication Director_.webp', year: '2021-2022' },
    { id: 15, name: 'Rtr. Eashan Bhale', role: 'Joint Community Service Director', image: '/2021-2022/Rtr. Eashan bhale - Joint Community Service director_.webp', year: '2021-2022' },
    { id: 16, name: 'Rtr. Shivam Dubey', role: 'Shiksha Director', image: '/2021-2022/Rtr. Shivam Dubey - Shiksha Director_.webp', year: '2021-2022' },
    { id: 17, name: 'Rtr. Hardik Chemburkar', role: 'Joint Digital Communication & Social Media Director', image: '/2021-2022/Rtr. Hardik Chemburkar - Joint Digital Communication & Social Media Director_.webp', year: '2021-2022' },
    { id: 21, name: 'Rtr. Malcolm Cardoza', role: 'Editorial Service Director', image: '/2021-2022/Rtr. Malcolm Cardoza - Editorial Service director_.webp', year: '2021-2022' },
    { id: 22, name: 'Rtr. Yash Lad', role: 'Shiksha Director', image: '/2021-2022/Rtr. Yash lad - Shiksha Director_.webp', year: '2021-2022' },
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
                                            loading="lazy"
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
                                            loading="lazy"
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
    