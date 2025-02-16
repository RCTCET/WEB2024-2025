import React, { useState } from 'react';

const teamMembers = [
<<<<<<< HEAD
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
=======
    // 2024-2025
    { id: 1, name: 'Rtr. Tanisha Kumar', role: 'President', image: '/team/2024-2025/Rtr. Tanisha Kumar.webp', year: '2024-2025' },
    { id: 2, name: 'Rtr. Prabhat Maurya', role: 'Secretary', image: '/team/2024-2025/Rtr. Prabhat Maurya.webp', year: '2024-2025' },
    { id: 3, name: 'Rtr. Amar Singh', role: 'Immediate Past President', image: '/team/2024-2025/Rtr. Amar Singh.webp', year: '2024-2025' },
    { id: 4, name: 'Rtr. Aizab Khan', role: 'Vice President', image: '/team/2024-2025/Rtr. Aizab Khan.webp', year: '2024-2025' },
    { id: 5, name: 'Rtr. Tushar Mishra', role: 'Vice President', image: '/team/2024-2025/Rtr. Tushar Mishra.webp', year: '2024-2025' },
    { id: 6, name: 'Rtr. Sudiksha Kapoor', role: 'Vice President', image: '/team/2024-2025/Rtr. Sudiksha Kapoor.webp', year: '2024-2025' },
    { id: 7, name: 'Rtr. Disha Rathod', role: 'Chairperson Finance', image: '/team/2024-2025/Rtr. Disha Rathod.webp', year: '2024-2025' },
    { id: 8, name: 'Rtr. Tanisha Sawalkar', role: 'Sergeant At Arms', image: '/team/2024-2025/Rtr. Tanisha Sawalkar.webp', year: '2024-2025' },
    { id: 9, name: 'Rtr. Saumya Mishra', role: 'Chairperson Human Resource Development', image: '/team/2024-2025/Rtr. Saumya Mishra.webp', year: '2024-2025' },
    { id: 10, name: 'Rtr. Aniska Bachar', role: 'Joint Secretary', image: '/team/2024-2025/Rtr. Aniska Bachar.webp', year: '2024-2025' },
    { id: 11, name: 'Rtr. Aaditya Yadav', role: 'Joint Secretary', image: '/team/2024-2025/Rtr. Aaditya Yadav.webp', year: '2024-2025' },
    { id: 12, name: 'Rtr. Yohaan Khan', role: 'Chairperson Publications', image: '/team/2024-2025/Rtr. Yohaan Khan.webp', year: '2024-2025' },

    // 2023-2024
    { id: 35, name: 'Rtr. Amar Singh', role: 'President', image: '/team/2023-2024/Amar Singh.webp', year: '2023-2024' },
    { id: 58, name: 'Rtr. Sumit Sharma', role: 'Secretary', image: '/team/2023-2024/Sumit Sharma.webp', year: '2023-2024' },
    { id: 48, name: 'Rtr. Muskan Sinha', role: 'Immediate Past President', image: '/team/2023-2024/Muskan Sinha.webp', year: '2023-2024' },
    { id: 34, name: 'Rtr. Akshay Sharma', role: 'Vice President Main Avenue', image: '/team/2023-2024/Akshay Sharma.webp', year: '2023-2024' },
    { id: 55, name: 'Rtr. Shah Alam Khan', role: 'Vice President Support Function', image: '/team/2023-2024/Shah Alam Khan.webp', year: '2023-2024' },
    { id: 43, name: 'Rtr. Esha Mehra', role: 'Chairperson Finance', image: '/team/2023-2024/Esha Mehra.webp', year: '2023-2024' },
    { id: 54, name: 'Rtr. Sejal Dubey', role: 'Sergeant At Arms', image: '/team/2023-2024/Sejal Dubey.webp', year: '2023-2024' },
    { id: 38, name: 'Rtr. Arudra Sahib', role: 'Chairperson Human Resource Development', image: '/team/2023-2024/Arudra Sahib.webp', year: '2023-2024' },
    { id: 42, name: 'Rtr. Disha Rathod', role: 'Joint Secretary', image: '/team/2023-2024/Disha Rathod.webp', year: '2023-2024' },
    { id: 60, name: 'Rtr. Tanisha Kumar', role: 'Joint Secretary & Chairperson Publication', image: '/team/2023-2024/Tanisha Kumar.webp', year: '2023-2024' },
    //2022-2023
    { id: 161, name: 'Rtr. Muskan Sinha', role: 'President', image: '/team/2022-2023/Rtr. Muskan Sinha - President__18_IMGCentury_8_IMGCentury.jpeg', year: '2022-2023' },
    { id: 162, name: 'Rtr. Nipesh Dubey', role: 'Secretary', image: '/team/2022-2023/Rtr. Nipesh Dubey - Secretary__21_IMGCentury_12_IMGCentury.jpeg', year: '2022-2023' },
    { id: 163, name: 'Rtr. Kunal Miskin', role: 'Immediate Past President', image: '/team/2022-2023/Rtr. Kunal Miskin - Immediate Past President__29_IMGCentury_6_IMGCentury.jpeg', year: '2022-2023' },
    { id: 164, name: 'Rtr. Ishika Sharma', role: 'Vice President Main Avenues', image: '/team/2022-2023/Rtr. Ishika Sharma - Vice President (Main Avenues)_13_IMGCentury_2_IMGCentury.jpeg', year: '2022-2023' },
    { id: 165, name: 'Rtr. Maitali Mandge', role: 'Vice President Support Function', image: '/team/2022-2023/Rtr. Mitali Mandge - Vice President (Support Function)_17_IMGCentury_7_IMGCentury.jpeg', year: '2022-2023' },
    { id: 166, name: 'Rtr. Dhruvi Jagani', role: 'Sergeant At Arms', image: '/team/2022-2023/Rtr. Dhruvi Jagnani - Seargent-At-Arms_27_IMGCentury_28_IMGCentury.jpeg', year: '2022-2023' },
    { id: 167, name: 'Rtr. Nikita Shukla', role: 'Chairperson HRD', image: '/team/2022-2023/Rtr. Nikita Shukla - Chairperson HRD_1_IMGCentury_11_IMGCentury.jpeg', year: '2022-2023' },
    { id: 168, name: 'Rtr. Ambresh Shukla', role: 'Chairperson Finance', image: '/team/2022-2023/Rtr. Ambresh Shukla - Chairperson Finance__9_IMGCentury_24_IMGCentury.jpeg', year: '2022-2023' },
    { id: 169, name: 'Rtr. Jay Agrawal', role: 'Chairperson Promo', image: '/team/2022-2023/Rtr. Jai Agrawal - Chairperson Promo_15_IMGCentury_4_IMGCentury.jpeg', year: '2022-2023' },
    { id: 170, name: 'Rtr. Atharva Dhanorkar', role: 'Joint Secretary', image: '/team/2022-2023/Rtr. Atharva Dhanorkar - Joint Secretary__10_IMGCentury_25_IMGCentury.jpeg', year: '2022-2023' },
    { id: 171, name: 'Rtr. Vaibhav Singh', role: 'Joint Secretary', image: '/team/2022-2023/Rtr. Vaibhav Singh - Joint Secretary__5_IMGCentury_19_IMGCentury.jpeg', year: '2022-2023' },
    { id: 172, name: 'Rtr. Ishita Pawar', role: 'Chairperson Publication', image: '/team/2022-2023/Rtr. Ishita Pawar - Chairperson Publications__14_IMGCentury_3_IMGCentury.jpeg', year: '2022-2023' },
    //2021-2022
    { id: 173, name: 'Rtr. Kunal Miskin', role: 'President', image: '/team/2021-2022/Rtr. Kunal Miskin - President__2_IMGCentury_14_IMGCentury.jpeg', year: '2021-2022' },
    { id: 174, name: 'Rtr. Bhushan Nehete', role: 'Secretary', image: '/team/2021-2022/Rtr. Bhushan Nehete - Secretary__23_IMGCentury_10_IMGCentury.jpeg', year: '2021-2022' },
    { id: 175, name: 'Rtr. Prince Pandey', role: 'Immediate Past President', image: '/team/2021-2022/Rtr. Prince Pandey - Immediate Past President__16_IMGCentury_24_IMGCentury.jpeg', year: '2021-2022' },
    { id: 176, name: 'Rtr. Janhavi Mishra', role: 'Vice President', image: '/team/2021-2022/Rtrm Jahnavi Mishra - Vice President__9_IMGCentury_8_IMGCentury.jpeg', year: '2021-2022' },
    { id: 179, name: 'Rtr. Nishank Shetty', role: 'Sergeant At Arms', image: '/team/2021-2022/Rtr. Nishank Shetty - Seargent-At-Arms__4_IMGCentury_23_IMGCentury.jpeg', year: '2021-2022' },
    { id: 178, name: 'Rtr. Sachet Engineer', role: 'Treasurer', image: '/team/2021-2022/Rtr. Sachet Engineer - Treasurer_18_IMGCentury_3_IMGCentury.jpeg', year: '2021-2022' },
    { id: 177, name: 'Rtr. Shruti Dubey', role: 'Chairperson HRD', image: '/team/2021-2022/Rtr. Shruti Dubey - Chairperson HRD__6_IMGCentury_5_IMGCentury.jpeg', year: '2021-2022' },
    { id: 180, name: 'Rtr. Aaditya Jaiswal', role: 'Joint Secretary', image: '/team/2021-2022/Rtr. Aaditya Jaiswal - Joint Secretary__20_IMGCentury_18_IMGCentury.jpeg', year: '2021-2022' },
    { id: 181, name: 'Rtr. Muskan Sinha', role: 'Joint Secretary', image: '/team/2021-2022/Rtr. Muskan Sinha - Joint Secretary__3_IMGCentury_17_IMGCentury.jpeg', year: '2021-2022' },
    { id: 182, name: 'Rtr. Mitali Mandge', role: 'Chairperson Publications', image: '/team/2021-2022/Rtr. Mitali Mandge - Chairperson Publications__14_IMGCentury_16_IMGCentury.jpeg', year: '2021-2022' },
    //2020-2021
    { id: 186, name: 'Rtr. Prince Pandey', role: 'President', image: '/team/2020-2021/Rtr. Prince Pandey _ President_9_IMGCentury_14_IMGCentury.jpeg', year: '2020-2021' },
    { id: 185, name: 'Rtr. Shubham Gawade', role: 'Secretary', image: '/team/2020-2021/Rtr. Shubham Gawade _ Secretary_11_IMGCentury_1_IMGCentury.jpeg', year: '2020-2021' },
    { id: 184, name: 'Rtr. Suraj Naidu', role: 'Vice President', image: '/team/2020-2021/Rtr. Suraj Naidu _ Vice President_12_IMGCentury_2_IMGCentury.jpeg', year: '2020-2021' },
    { id: 188, name: 'Rtr. Abhishek Mishra', role: 'Sergeant At Arms', image: '/team/2020-2021/Rtr. Abhishek Mishra _ Seargent-At-Arms_15_IMGCentury_11_IMGCentury.jpeg', year: '2020-2021' },
    { id: 183, name: 'Rtr. Urvi Shukla', role: 'Treasurer', image: '/team/2020-2021/Rtr. Urvi Shukla _ Treasurer_13_IMGCentury_3_IMGCentury.jpeg', year: '2020-2021' },
    { id: 187, name: 'Rtr. Bhushan Nete', role: 'Joint Secretary', image: '/team/2020-2021/Rtr. Bhushan Nete _ Joint Secretary_3_IMGCentury_5_IMGCentury.jpeg', year: '2020-2021' },
    { id: 189, name: 'Rtr. Anuja Somthankar', role: 'Chairperson HRD', image: '/team/2020-2021/Rtr. Anuja Somthankar _ Chairperson HRD_1_IMGCentury_12_IMGCentury.jpeg', year: '2020-2021' },
    //2019-2020
    { id: 193, name: 'Rtr. Harshali Yeram', role: 'President', image: '/team/2019-2020/Rtr. Harshali Yeram _ President_2_IMGCentury_8_IMGCentury.jpeg', year: '2019-2020' },
    { id: 191, name: 'Rtr. Mansi Singh', role: 'Secretary', image: '/team/2019-2020/Rtr. Mansi Singh - Secretary_4_IMGCentury_10_IMGCentury.jpeg', year: '2019-2020' },
    { id: 192, name: 'Rtr. Jemit Shah', role: 'Vice President (Supporting Functions)', image: '/team/2019-2020/Rtr. Jemit Shah _ Vice President (Supporting Functions)_3_IMGCentury_9_IMGCentury.jpeg', year: '2019-2020' },
    { id: 195, name: 'Rtr. Dhruv Shah', role: 'Vice President (Main Avenues)', image: '/team/2019-2020/Rtr. Dhruv Shah - Vice President(Main Avenues)_16_IMGCentury_1_IMGCentury.jpeg', year: '2019-2020' },
    { id: 197, name: 'Rtr. Aditya Salvi', role: 'Sergeant At Arms', image: '/team/2019-2020/Rtr. Aaditya Salvi _ Sergeant-At-Arms_13_IMGCentury_13_IMGCentury.jpeg', year: '2019-2020' },
    { id: 194, name: 'Rtr. Harsh Chaurasia', role: 'Treasurer', image: '/team/2019-2020/Rtr. Harsh Chaurasia _ Treasurer_1_IMGCentury_2_IMGCentury.jpeg', year: '2019-2020' },
    { id: 190, name: 'Rtr. Shreya Patil', role: 'Chairperson HRD', image: '/team/2019-2020/Rtr. Shreya Patil _ Chairwoman HRD_9_IMGCentury_6_IMGCentury.jpeg', year: '2019-2020' },
    { id: 196, name: 'Rtr. Aishwarya Sattigeri', role: 'Joint Secretary', image: '/team/2019-2020/Rtr. Aishwarya Sattigeri _ Jt. Secretary_14_IMGCentury_14_IMGCentury.jpeg', year: '2019-2020' },
    //2018-2019
    { id: 192, name: 'Rtr. Yash Bohra', role: 'President', image: '/team/2018-2019/Rtr. Yash Bohra _ President_17_IMGCentury_15_IMGCentury.jpeg', year: '2018-2019' },
    { id: 195, name: 'Rtr. Ruchi Pourana', role: 'Secretary', image: '/team/2018-2019/Rtr. Ruchi Pourana _ Secretary_11_IMGCentury_9_IMGCentury.jpeg', year: '2018-2019' },
    { id: 198, name: 'Rtr. Mansi Singh', role: 'Secretary', image: '/team/2018-2019/Rtr. Mansi Singh - Secretary_4_IMGCentury_10_IMGCentury.jpeg', year: '2018-2019' },
    { id: 194, name: 'Rtr. Sanjana Singh', role: 'Vice President', image: '/team/2018-2019/Rtr. Sanjana Singh _ Vice President_12_IMGCentury_10_IMGCentury.jpeg', year: '2018-2019' },
    { id: 193, name: 'Rtr. Tushar Balande', role: 'Treasurer', image: '/team/2018-2019/Rtr. Tushar Balande_ Treasurer_16_IMGCentury_14_IMGCentury.jpeg', year: '2018-2019' },
    { id: 196, name: 'Rtr. Neerja Rajeev', role: 'Chairwoman HRD', image: '/team/2018-2019/Rtr. Neerja Rajeev _ Chairwoman HRD_9_IMGCentury_7_IMGCentury.jpeg', year: '2018-2019' },
    { id: 197, name: 'Rtr. Harshali Yerm', role: 'Joint Secretary', image: '/team/2018-2019/Rtr. Harshali Yeram _ Joint Secretary_6_IMGCentury_4_IMGCentury.jpeg', year: '2018-2019' },
    
    //2017-18
    { id: 200, name: 'Rtr. Anisha Pandya', role: 'President', image: '/team/2017-2018/Rtr. Anisha Pandya _ President_1_IMGCentury_1_IMGCentury.jpeg', year: '2017-2018' },
    { id: 201, name: 'Rtr. Binal Patel', role: 'Secretary', image: '/team/2017-2018/Rtr. Binal Patel _ Secretary_3_IMGCentury_3_IMGCentury.jpeg', year: '2017-2018' },
    { id: 199, name: 'Rtr. Viral Haria', role: 'Vice President', image: '/team/2017-2018/Rtr. Viral Haria _ Vice President_14_IMGCentury_13_IMGCentury.jpeg', year: '2017-2018' },
    { id: 202, name: 'Rtr. Harsh Kothari', role: 'Seargent-At-Arms', image: '/team/2017-2018/Rtr. Harsh Kothari _ Seargent-At-Arms_4_IMGCentury_4_IMGCentury.jpeg', year: '2017-2018' },
    { id: 203, name: 'Rtr. Pandey Sawant', role: 'Treasurer', image: '/team/2017-2018/Rtr. Pandey Sawant _ Treasurer_8_IMGCentury_7_IMGCentury.jpeg', year: '2017-2018' },
    { id: 204, name: 'Rtr. Saloni Jain', role: 'Chairman HR', image: '/team/2017-2018/Rtr. Saloni Jain _ Chairman HR_9_IMGCentury_8_IMGCentury.jpeg', year: '2017-2018' },
>>>>>>> a21baa0ec5442703f04de9db3d6a67af7dead9fa
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
<<<<<<< HEAD
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
=======
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
    { id: 73, name: 'Rtr. Amar Singh', role: 'Club Service Director', image: '/team/2022-2023/Rtr. Amar Singh - Club Service director__8_IMGCentury_23_IMGCentury.jpeg', year: '2022-2023' },
    { id: 74, name: 'Rtr. Tanya Shah', role: 'Joint Club Service Director', image: '/team/2022-2023/Rtr. Tanya Shah - Joint Club Service director__4_IMGCentury_18_IMGCentury.jpeg', year: '2022-2023' },
    { id: 75, name: 'Rtr. Gaurav Bhavdane', role: 'Community Service Director', image: '/team/2022-2023/Rtr. Gaurav Bavdhane - Community Service director__28_IMGCentury_1_IMGCentury.jpeg', year: '2022-2023' },
    { id: 76, name: 'Rtr. Abhishek Maurya', role: 'Community Service Director', image: '/team/2022-2023/Rtr. Abhishek Maurya - Joint Community Service director__25_IMGCentury_21_IMGCentury.jpeg', year: '2022-2023' },
    { id: 77, name: 'Rtr. Nidhi Singh', role: 'Community Service and Shiksha Director', image: '/team/2022-2023/Rtr. Nidhi Singh - Joint Community Service and Joint Shiksha Director__19_IMGCentury_9_IMGCentury.jpeg', year: '2022-2023' },
    { id: 79, name: 'Rtr. Tanay Agarwal', role: 'Professional Development Director', image: '/team/2022-2023/Rtr. Tanay Agarwal - Professional development director__3_IMGCentury_16_IMGCentury.jpeg', year: '2022-2023' },
    { id: 80, name: 'Rtr. Akshay Sharma', role: 'International Service Director', image: '/team/2022-2023/Rtr. Akshay Sharma - International Service director__7_IMGCentury_22_IMGCentury.jpeg', year: '2022-2023' },
    { id: 81, name: 'Rtr. Esha Mehra', role: 'Joint International Service Director', image: '/team/2022-2023/Rtr. Esha Mehra - Jt. International Service director__12_IMGCentury_29_IMGCentury.jpeg', year: '2022-2023' },
    { id: 78, name: 'Rtr. Kirtika Srivastava', role: 'Shiksha Director', image: '/team/2022-2023/Rtr. Kirtika Shrivastava - Shiksha Director__16_IMGCentury_5_IMGCentury.jpeg', year: '2022-2023' },
    { id: 83, name: 'Rtr. Nilay Zaveri', role: 'Sports Director', image: '/team/2022-2023/Rtr. Nikay Zaveri - Sports Director__20_IMGCentury_10_IMGCentury.jpeg', year: '2022-2023' },
    { id: 84, name: 'Rtr. Ayush Lahoti', role: 'Entrepreneurship Development Director', image: '/team/2022-2023/Rtr. Ayush Lahoti - Entrepreneurship development__11_IMGCentury_26_IMGCentury.jpeg', year: '2022-2023' },
    { id: 88, name: 'Rtr. Chetan Mahnot', role: 'Joint Digital Communications Director', image: '/team/2022-2023/Rtr. Chetan Mohnut - Joint Digital Communication Director__26_IMGCentury_27_IMGCentury.jpeg', year: '2022-2023' },
    { id: 89, name: 'Rtr. Tanishq Suryavanshi', role: 'Media Production Director', image: '/team/2022-2023/Rtr. Tanishq Suryavanshi - Media Production Director__24_IMGCentury_17_IMGCentury.jpeg', year: '2022-2023' },
    { id: 86, name: 'Rtr. Sumit Sharma', role: 'Editorial Director', image: '/team/2022-2023/Rtr. Sumit Sharma - Editorial Service__23_IMGCentury_15_IMGCentury.jpeg', year: '2022-2023' },
    { id: 87, name: 'Rtr. Sudha Shukla', role: 'Joint Editorial Director', image: '/team/2022-2023/Rtr. Sudha Shukla - Joint Editorial Service__2_IMGCentury_14_IMGCentury.jpeg', year: '2022-2023' },
    { id: 85, name: 'Rtr. Yash Patil', role: 'Partners in Service Director', image: '/team/2022-2023/Rtr. Yash Patil - Partner-in-service_6_IMGCentury_20_IMGCentury.jpeg', year: '2022-2023' },
    { id: 82, name: 'Rtr. Sejal Dubey', role: 'Joint Public Relations and Marketing Director', image: '/team/2022-2023/Rtr. Sejal Dubey - Joint Public Relations and Marketing__22_IMGCentury_13_IMGCentury.jpeg', year: '2022-2023' },
    // 2021-2022
    { id: 95, name: 'Rtr. Nipesh Dubey', role: 'Club Service and Sports Director', image: '/team/2021-2022/Rtr. Nipesh Dubey- Club service and sports director__15_IMGCentury_22_IMGCentury.jpeg', year: '2021-2022' },
    { id: 101, name: 'Rtr. Allan Fernandes', role: 'Community Service Director', image: '/team/2021-2022/Rtr. Allan Fernandes - Community Service director__11_IMGCentury_20_IMGCentury.jpeg', year: '2021-2022' },
    { id: 98, name: 'Rtr. Eashen Bhale', role: 'Joint Community Service Director', image: '/team/2021-2022/Rtr. Eashan bhale - Joint Community Service director__12_IMGCentury_12_IMGCentury.jpeg', year: '2021-2022' },
    { id: 102, name: 'Rtr. Adityavikaram', role: 'Professional and entrepreneurship Development Director', image: '/team/2021-2022/Rtr. Adityavikaram - Professional and Entrepreneurship development director__21_IMGCentury_19_IMGCentury.jpeg', year: '2021-2022' },
    { id: 93, name: 'Rtr. Rutu Shah', role: 'International Service Director', image: '/team/2021-2022/Rtr. Rutu Shah - International Service director__5_IMGCentury_2_IMGCentury.jpeg', year: '2021-2022' },
    { id: 90, name: 'Rtr. Yash Lad', role: 'Shiksha Director', image: '/team/2021-2022/Rtr. Yash lad - Shiksha Director__8_IMGCentury_7_IMGCentury.jpeg', year: '2021-2022' },
    { id: 92, name: 'Rtr. Shivam Dubey', role: 'Shiksha Director', image: '/team/2021-2022/Rtr. Shivam Dubey - Shiksha Director__19_IMGCentury_4_IMGCentury.jpeg', year: '2021-2022' },
    { id: 99, name: 'Rtr. Dhruvi Jagnani', role: 'Digitial Communication Director', image: '/team/2021-2022/Rtr. Dhruvi Jagnani - Digital Communication Director__24_IMGCentury_11_IMGCentury.jpeg', year: '2021-2022' },
    { id: 97, name: 'Rtr. Hardik Chemburkar', role: 'Joint Digital Communication and Social Media Director', image: '/team/2021-2022/Rtr. Hardik Chemburkar - Joint Digital Communication & Social Media Director__1_IMGCentury_13_IMGCentury.jpeg', year: '2021-2022' },
    { id: 96, name: 'Rtr. Malcolm Cardoza', role: 'Editorial Service Director', image: '/team/2021-2022/Rtr. Malcolm Cardoza - Editorial Service director__13_IMGCentury_15_IMGCentury.jpeg', year: '2021-2022' },
    { id: 94, name: 'Rtr. Priyanshu Pandey', role: 'Partner in Service & Joint Professional and Entrepreneurship Development Director', image: '/team/2021-2022/Rtr. Priyanshu Pandey - Partner-in-service & Joint Professional and Entrepreneurship development director__17_IMGCentury_1_IMGCentury.jpeg', year: '2021-2022' },
    { id: 103, name: 'Rtr. Jay Agarwal', role: 'Public Relations and Marketing Development Director', image: '/team/2021-2022/', year: '2021-2022' },
    { id: 100, name: 'Rtr. Ananya Shetty', role: 'Social Media Director', image: '/team/2021-2022/Rtr. Ananya Shetty - Social Media Director__22_IMGCentury_9_IMGCentury.jpeg', year: '2021-2022' },
    { id: 91, name: 'Rtr. Suraj Naidu', role: 'Club Trainer', image: '/team/2021-2022/Rtr. Suraj Naidu - Club Trainer_7_IMGCentury_6_IMGCentury.jpeg', year: '2021-2022' },
    // 2020-2021
    { id: 106, name: 'Rtr. Nishant Verma', role: 'Club Service and Sports Director', image: '/team/2020-2021/Rtr. Nishant Verma _ Club Service and Sports Director_8_IMGCentury_10_IMGCentury.jpeg', year: '2020-2021' },
    { id: 107, name: 'Rtr. Kunal Miskin', role: 'Community Service Director', image: '/team/2020-2021/Rtr. Kunal Miskin _ Community Service Director_7_IMGCentury_9_IMGCentury.jpeg', year: '2020-2021' },
    { id: 108, name: 'Rtr. Janhavi Mishra', role: 'Joint Community Service Director', image: '/team/2020-2021/Rtr. Janhavi Mishra _ Joint Community Service Director_6_IMGCentury_8_IMGCentury.jpeg', year: '2020-2021' },
    { id: 104, name: 'Rtr. Zoya Ansari', role: 'Professional and Entrepreneurship Development', image: '/team/2020-2021/Rtr. Zoya Ansari _ Professional and Entrepreneurship Development_14_IMGCentury_4_IMGCentury.jpeg', year: '2020-2021' },
    { id: 105, name: 'Rtr. Samiksha Bedkar', role: 'International Service Director', image: '/team/2020-2021/Rtr. Samiksha Bedkar _ International Service Director_10_IMGCentury_15_IMGCentury.jpeg', year: '2020-2021' },
    { id: 109, name: 'Rtr. Eesha Pandit', role: 'Digital Communication and Social Media Director', image: '/team/2020-2021/Rtr. Eesha Pandit _ Digital Communication and Social Media Director_5_IMGCentury_7_IMGCentury.jpeg', year: '2020-2021' },
    { id: 110, name: 'Rtr. Dhruv Shelke', role: 'Joint Digital Communication and Social Media Director', image: '/team/2020-2021/Rtr. Dhruv Shelke _ Joint Digital Communication and Social Media and Director_4_IMGCentury_6_IMGCentury.jpeg', year: '2020-2021' },
    { id: 111, name: 'Rtr. Ayush Gupta', role: 'Editorial Service Director', image: '/team/2020-2021/Rtr. Ayush Gupta _ Editorial Service Director_2_IMGCentury_13_IMGCentury.jpeg', year: '2020-2021' },
    // 2019-2020
    { id: 112, name: 'Rtr. Snehal Raj Verma', role: 'Club Service and Sports Director', image: '/team/2019-2020/Rtr. Snehal Raj Verma _ Club Service and Sports Director_10_IMGCentury_7_IMGCentury.jpeg', year: '2019-2020' },
    { id: 114, name: 'Rtr. Ritesh Shinde', role: 'Community Service Director', image: '/team/2019-2020/Rtr. Ritesh Shinde _ Community Service Director_7_IMGCentury_4_IMGCentury.jpeg', year: '2019-2020' },
    { id: 116, name: 'Rtr. Pratiksha Shrivastava', role: 'Joint Community Service Director', image: '/team/2019-2020/Rtr. Pratiksha Shrivastava _ Jt. Community Service Director_6_IMGCentury_12_IMGCentury.jpeg', year: '2019-2020' },
    { id: 118, name: 'Rtr. Dharna Singh', role: 'Professional and Entrepreneurship Director', image: '/team/2019-2020/Rtr. Dharna Singh _ Professional and Entrepreneurship Development Director_15_IMGCentury_16_IMGCentury.jpeg', year: '2019-2020' },
    { id: 113, name: 'Rtr. Saneel Gaikwad', role: 'International Service Director', image: '/team/2019-2020/Rtr. Saneel Gaikwad _ International Service Director_8_IMGCentury_5_IMGCentury.jpeg', year: '2019-2020' },
    { id: 115, name: 'Rtr. Prince Pandey', role: 'Shiksha Director', image: '/team/2019-2020/Rtr. Prince Pandey _ Shiksha Director_12_IMGCentury_3_IMGCentury.jpeg', year: '2019-2020' },
    { id: 117, name: 'Rtr. Pratik Halurkar', role: 'Digital Communication and Social Media Director', image: '/team/2019-2020/Rtr. Pratik Halurkar _ Digital communication and Social media Director_5_IMGCentury_11_IMGCentury.jpeg', year: '2019-2020' },
    { id: 119, name: 'Rtr. Chirag Bangera', role: 'Editorial Director', image: '/team/2019-2020/Rtr. Chirag Bangera _ Editorial Director_11_IMGCentury_15_IMGCentury.jpeg', year: '2019-2020' },
    // 2018-2019
    { id: 127, name: 'Rtr. Darpan Jain', role: 'Club Service Director', image: '/team/2018-2019/Rtr. Darpan Jain _ Club Service Director_4_IMGCentury_1_IMGCentury.jpeg', year: '2018-2019' },
    { id: 126, name: 'Rtr. Dhrumit Rajput', role: 'Community Service Director', image: '/team/2018-2019/Rtr. Dhrumit Rajput _ Community Service Director_18_IMGCentury_2_IMGCentury.jpeg', year: '2018-2019' },
    { id: 129, name: 'Rtr. Ankit Sharma', role: 'Personality and Professional Development Director', image: '/team/2018-2019/Rtr. Ankit Sharma _ Personality and Professional Development Director_2_IMGCentury_17_IMGCentury.jpeg', year: '2018-2019' },
    { id: 123, name: 'Rtr. Mahima Gandhi', role: 'International Service Director', image: '/team/2018-2019/Rtr. Mahima Gandhi _ International Service Director_8_IMGCentury_6_IMGCentury.jpeg', year: '2018-2019' },
    { id: 120, name: 'Rtr. Swaraj Tendulkar', role: 'Sports Director', image: '/team/2018-2019/Rtr. Swaraj Tendulkar _ Sports Director_15_IMGCentury_13_IMGCentury.jpeg', year: '2018-2019' },
    { id: 125, name: 'Rtr. Dhruv Shah', role: 'Digital Communication Director', image: '/team/2018-2019/Rtr. Dhruv Shah _ Digital Communication Director _5_IMGCentury_3_IMGCentury.jpeg', year: '2018-2019' },
    { id: 121, name: 'Rtr. Sumit Joshi', role: 'Editorial Service Director', image: '/team/2018-2019/Rtr. Sumit Joshi _ Editor Service Director_14_IMGCentury_12_IMGCentury.jpeg', year: '2018-2019' },
    { id: 124, name: 'Rtr. Jemit Shah', role: 'Partner in Service', image: '/team/2018-2019/Rtr. Jemit Shah _ Partner-in-Service_7_IMGCentury_5_IMGCentury.jpeg', year: '2018-2019' },
    { id: 122, name: 'Rtr. Piyush Singh', role: 'Public Relations and Marketing Director', image: '/team/2018-2019/Rtr. Piyush Singh _ Public Relations and Marketing Director_10_IMGCentury_8_IMGCentury.jpeg', year: '2018-2019' },
    { id: 130, name: 'Rtr. Aayushi Singh', role: 'Social Media Director', image: '/team/2018-2019/Rtr. Aayushi Singh _ Social Media Director_1_IMGCentury_16_IMGCentury.jpeg', year: '2018-2019' },
    { id: 128, name: 'Rtr. Bharatkumar Suthar', role: 'Finance Director', image: '/team/2018-2019/Rtr. Bharatkumar Suthar _ Finance Director_3_IMGCentury_18_IMGCentury.jpeg', year: '2018-2019' },
    //2017-18
    { id: 130, name: 'Rtr. Het Shah', role: 'Club Service Director', image: '/team/2017-2018/Rtr. Het Shah _ Club Service Director_5_IMGCentury_5_IMGCentury.jpeg', year: '2017-2018' },
    { id: 133, name: 'Rtr. Swapnil Arya', role: 'Community Service Director', image: '/team/2017-2018/Rtr. Swapnil Arya _ Community Service Director_13_IMGCentury_12_IMGCentury.jpeg', year: '2017-2018' },
    { id: 134, name: 'Rtr. Ashutosh Tiwari', role: 'Professional and Entrepreneurship Development Director', image: '/team/2017-2018/Rtr. Ashutosh Tiwari _ Professional and Entrepreneurship Development Director_2_IMGCentury_2_IMGCentury.jpeg', year: '2017-2018' },
    { id: 136, name: 'Rtr. Keval Chavda', role: 'International Service Director', image: '/team/2017-2018/Rtr. Keval Chavda _ International Service Director.webp', year: '2017-2018' },
    { id: 137, name: 'Rtr. Keyur Pandey', role: 'Sports Director', image: '/team/2017-2018/Rtr. Keyur Pandey _ Sports_7_IMGCentury_14_IMGCentury.jpeg', year: '2017-2018' },
    { id: 130, name: 'Rtr. Shreya Patil', role: 'Digital Communication Director', image: '/team/2017-2018/Rtr. Shreya Patil _ Digital Communication_10_IMGCentury_9_IMGCentury.jpeg', year: '2017-2018' },
    { id: 132, name: 'Rtr. Sumer Patel', role: 'Partner-In-Service', image: '/team/2017-2018/Rtr. Sumer Patel _ Partner-In-Service_12_IMGCentury_11_IMGCentury.jpeg', year: '2017-2018' },
    { id: 131, name: 'Rtr. Somaiyan Guchait', role: 'Public Relations and Marketing Director', image: '/team/2017-2018/Rtr. Somaiyan Guchait _ Public Relations and Marketing Director_11_IMGCentury_10_IMGCentury.jpeg', year: '2017-2018' }
>>>>>>> a21baa0ec5442703f04de9db3d6a67af7dead9fa

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
<<<<<<< HEAD
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
=======
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
>>>>>>> a21baa0ec5442703f04de9db3d6a67af7dead9fa
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        );
    };
    
    export default TeamPage;
    
=======

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
>>>>>>> a21baa0ec5442703f04de9db3d6a67af7dead9fa
