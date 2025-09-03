"use client"

import { useState } from "react"

const teamMembers = [
  //2025-26
  {
  id: 217,
  name: "Rtr. Vaishnavi Ranjan",
  role: "President",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701828/Rtr._Vaishnavi_Ranjan_President_tkcxhn.png",
  year: "2025-2026",
},
{
  id: 218,
  name: "Rtr. Aaditya Yadav",
  role: "Secretary",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701836/Rtr._Aaditya_Yadav_Secretary_pbtdkn.png",
  year: "2025-2026",
},
{
  id: 219,
  name: "Rtr. Tanisha Kumar",
  role: "Immediate Past President",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701868/Rtr._Tanisha_Desai_IPP_joc9dm.png",
  year: "2025-2026",
},
{
  id: 220,
  name: "Rtr. Aaryan Gupta",
  role: "Vice President",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701883/Rtr._Aryan_Gupta_Vice_President_fagank.png",
  year: "2025-2026",
},
{
  id: 221,
  name: "Rtr. Dhairya Doshi",
  role: "Vice President",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701871/Rtr._Dhairya_Doshi_Vice_President_ybdxhs.png",
  year: "2025-2026",
},
{
  id: 222,
  name: "Rtr. Prathmesh Singh",
  role: "Vice President",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701825/Rtr._Prathamesh_Singh_Vice_President_krlgue.png",
  year: "2025-2026",
},
{
  id: 223,
  name: "Rtr. Shreya Jadhav",
  role: "Sergeant At Arms",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701830/Rtr._Shreya_Jadhav_SAA_ugnoub.png",
  year: "2025-2026",
},
{
  id: 224,
  name: "Rtr. Utsav Yadav",
  role: "Chairperson Finance",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701888/Rtr._Utsav_Yadav_Chairperson_Finance_rhvg6r.png",
  year: "2025-2026",
},
{
  id: 225,
  name: "Rtr. Sudiksha Kapoor",
  role: "Chairwoman Partner-in-Service",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701882/Rtr._Sudiksha_Kapoor_Chairwoman_PIS_s3biyo.png",
  year: "2025-2026",
},
{
  id: 226,
  name: "Rtr. Shaziya Naz",
  role: "Chairperson Human Resource Development",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701876/Rtr._Shaziya_Naz_Chairperson_HRD_dz2ash.png",
  year: "2025-2026",
},
{
  id: 227,
  name: "Rtr. Aachal Sharma",
  role: "Joint Secretary",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701826/Rtr._Aachal_Sharma_Joint_Secretary_ebdh4p.png",
  year: "2025-2026",
},
{
  id: 228,
  name: "Rtr. Aditya Pandey",
  role: "Joint Secretary",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701858/Rtr._Aditya_Pandey_Joint_Secretary_iyem15.png",
  year: "2025-2026",
},
{
  id: 229,
  name: "Rtr. Nidhi Gupta",
  role: "Chairperson Publications",
  image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701846/Rtr._Nidhi_Gupta_Chairperson_Publications_esdz6w.png",
  year: "2025-2026",
},

  // 2024-2025
  {
    id: 1,
    name: "Rtr. Tanisha Kumar",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744388/Rtr._Tanisha_Kumar_homz1l.webp",
    year: "2024-2025",
  },
  {
    id: 2,
    name: "Rtr. Prabhat Maurya",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756936570/Rtr._Prabhat_Maurya_euzcsc.webp",
    year: "2024-2025",
  },
  {
    id: 3,
    name: "Rtr. Amar Singh",
    role: "Immediate Past President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744394/Rtr._Amar_Singh_uczx88.webp",
    year: "2024-2025",
  },
  {
    id: 4,
    name: "Rtr. Aizab Khan",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744390/Rtr._Aizab_Khan_jhlezz.webp",
    year: "2024-2025",
  },
  {
    id: 5,
    name: "Rtr. Tushar Mishra",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744386/Rtr._Tushar_Mishra_sazauj.webp",
    year: "2024-2025",
  },
  {
    id: 6,
    name: "Rtr. Sudiksha Kapoor",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744381/Rtr._Sudiksha_Kapoor_swfv55.webp",
    year: "2024-2025",
  },
  {
    id: 7,
    name: "Rtr. Disha Rathod",
    role: "Chairperson Finance",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744388/Rtr._Disha_Rathod_tarzzd.webp",
    year: "2024-2025",
  },
  {
    id: 8,
    name: "Rtr. Tanisha Sawalkar",
    role: "Sergeant At Arms",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744383/Rtr._Tanisha_Sawalkar_n8dmfw.webp",
    year: "2024-2025",
  },
  {
    id: 9,
    name: "Rtr. Saumya Mishra",
    role: "Chairperson Human Resource Development",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744377/Rtr._Saumya_Mishra_ayyvke.webp",
    year: "2024-2025",
  },
  {
    id: 10,
    name: "Rtr. Aniska Bachar",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744396/Rtr._Aniska_Bachar_oewg4o.webp",
    year: "2024-2025",
  },
  {
    id: 11,
    name: "Rtr. Aaditya Yadav",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744391/Rtr._Aaditya_Yadav_pzl2us.webp",
    year: "2024-2025",
  },
  {
    id: 12,
    name: "Rtr. Yohaan Khan",
    role: "Chairperson Publications",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744391/Rtr._Yohaan_Khan_jo26rs.webp",
    year: "2024-2025",
  },

  // 2023-2024
  {
    id: 35,
    name: "Rtr. Amar Singh",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744441/Rtr.Amar_SIngh-_President_27_IMGCentury_osayo8.avif",
    year: "2023-2024",
  },
  {
    id: 58,
    name: "Rtr. Sumit Sharma",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934115/Rtr.Sumit_Sharma-_Secretary_14_IMGCentury_pacuxp.avif",
    year: "2023-2024",
  },
  {
    id: 48,
    name: "Rtr. Muskan Sinha",
    role: "Immediate Past President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744439/Rtr.Muskan_Sinha-_Immediate_past_President_6_IMGCentury_ghlgpz.avif",
    year: "2023-2024",
  },
  {
    id: 34,
    name: "Rtr. Akshay Sharma",
    role: "Vice President Main Avenue",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744435/Rtr.Akshay_Sharma-_Vice_President_main_Avenue_26_IMGCentury_nontnk.avif",
    year: "2023-2024",
  },
  {
    id: 55,
    name: "Rtr. Shah Alam Khan",
    role: "Vice President Support Function",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744440/Rtr.Shah_Alam_Khan-_Vice_President_Support_function_12_IMGCentury_umrlf9.avif",
    year: "2023-2024",
  },
  {
    id: 43,
    name: "Rtr. Esha Mehra",
    role: "Chairperson Finance",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744434/Rtr.Esha_Mehra-_chairperson_finance_1_IMGCentury_ueclhw.avif",
    year: "2023-2024",
  },
  {
    id: 38,
    name: "Rtr. Arudra sahib",
    role: "Human resource development officer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756933986/Rtr.Arudra_sahib-_Human_resource_development_officer_30_IMGCentury_r89nnk.avif",
    year: "2023-2024",
  },
  {
    id: 42,
    name: "Rtr. Disha Rathod",
    role: "Jt. Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756933948/Rtr.Disha_Rathod-_Jt._Secretary__34_IMGCentury_pmjmro.avif",
    year: "2023-2024",
  },
  {
    id: 60,
    name: "Rtr. Tanisha Kumar",
    role: "Jt. Secretary and chairperson publications",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756933860/Rtr.Tanisha_Kumar-_Jt._Secretary_and_chairperson_publications_15_IMGCentury_ex6ecy.avif",
    year: "2023-2024",
  },
  //2022-2023
  {
    id: 161,
    name: "Rtr. Muskan Sinha",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744411/Rtr._Muskan_Sinha_-_President__18_IMGCentury_8_IMGCentury_ax5jbu.jpg",
    year: "2022-2023",
  },
  {
    id: 162,
    name: "Rtr. Nipesh Dubey",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744411/Rtr._Nipesh_Dubey_-_Secretary__21_IMGCentury_12_IMGCentury_mtzxsa.jpg",
    year: "2022-2023",
  },
  {
    id: 163,
    name: "Rtr. Kunal Miskin",
    role: "Immediate Past President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744410/Rtr._Kunal_Miskin_-_Immediate_Past_President__29_IMGCentury_6_IMGCentury_gw2bbc.jpg",
    year: "2022-2023",
  },
  {
    id: 164,
    name: "Rtr. Ishika Sharma",
    role: "Vice President Main Avenues",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744412/Rtr._Ishika_Sharma_-_Vice_President_Main_Avenues__13_IMGCentury_2_IMGCentury_wbjj6z.jpg",
    year: "2022-2023",
  },
  {
    id: 165,
    name: "Rtr. Maitali Mandge",
    role: "Vice President Support Function",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744418/Rtr._Mitali_Mandge_-_Vice_President_Support_Function__17_IMGCentury_7_IMGCentury_k5eymt.jpg",
    year: "2022-2023",
  },
  {
    id: 166,
    name: "Rtr. Dhruvi Jagani",
    role: "Sergeant At Arms",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744417/Rtr._Dhruvi_Jagnani_-_Seargent-At-Arms_27_IMGCentury_28_IMGCentury_bmruin.jpg",
    year: "2022-2023",
  },
  {
    id: 167,
    name: "Rtr. Nikita Shukla",
    role: "Chairperson HRD",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744419/Rtr._Nikita_Shukla_-_Chairperson_HRD_1_IMGCentury_11_IMGCentury_qupilp.jpg",
    year: "2022-2023",
  },
  {
    id: 168,
    name: "Rtr. Ambresh Shukla",
    role: "Chairperson Finance",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744408/Rtr._Ambresh_Shukla_-_Chairperson_Finance__9_IMGCentury_24_IMGCentury_ebiwjl.jpg",
    year: "2022-2023",
  },
  {
    id: 169,
    name: "Rtr. Jay Agrawal",
    role: "Chairperson Promo",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744423/Rtr._Jai_Agrawal_-_Chairperson_Promo_15_IMGCentury_4_IMGCentury_fuk6de.jpg",
    year: "2022-2023",
  },
  {
    id: 170,
    name: "Rtr. Atharva Dhanorkar",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744408/Rtr._Atharva_Dhanorkar_-_Joint_Secretary__10_IMGCentury_25_IMGCentury_e74tiw.jpg",
    year: "2022-2023",
  },
  {
    id: 171,
    name: "Rtr. Vaibhav Singh",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744410/Rtr._Vaibhav_Singh_-_Joint_Secretary__5_IMGCentury_19_IMGCentury_ld2pnm.jpg",
    year: "2022-2023",
  },
  {
    id: 172,
    name: "Rtr. Ishita Pawar",
    role: "Chairperson Publication",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744410/Rtr._Ishita_Pawar_-_Chairperson_Publications__14_IMGCentury_3_IMGCentury_hscka9.jpg",
    year: "2022-2023",
  },
  //2021-2022
  {
    id: 173,
    name: "Rtr. Kunal Miskin",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744364/Rtr._Kunal_Miskin_-_President__2_IMGCentury_14_IMGCentury_cybzwh.jpg",
    year: "2021-2022",
  },
  {
    id: 174,
    name: "Rtr. Bhushan Nehete",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744352/Rtr._Bhushan_Nehete_-_Secretary__23_IMGCentury_10_IMGCentury_wj6rpg.jpg",
    year: "2021-2022",
  },
  {
    id: 175,
    name: "Rtr. Prince Pandey",
    role: "Immediate Past President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744348/Rtr._Prince_Pandey_-_Immediate_Past_President__16_IMGCentury_24_IMGCentury_efqhgm.jpg",
    year: "2021-2022",
  },
  {
    id: 176,
    name: "Rtr. Janhavi Mishra",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744362/Rtrm_Jahnavi_Mishra_-_Vice_President__9_IMGCentury_8_IMGCentury_ga3tyw.jpg",
    year: "2021-2022",
  },
  {
    id: 179,
    name: "Rtr. Nishank Shetty",
    role: "Sergeant At Arms",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744363/Rtr._Nishank_Shetty_-_Seargent-At-Arms__4_IMGCentury_23_IMGCentury_sbvz1l.jpg",
    year: "2021-2022",
  },
  {
    id: 178,
    name: "Rtr. Sachet Engineer",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744362/Rtr._Sachet_Engineer_-_Treasurer_18_IMGCentury_3_IMGCentury_njnnyb.jpg",
    year: "2021-2022",
  },
  {
    id: 177,
    name: "Rtr. Shruti Dubey",
    role: "Chairperson HRD",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744365/Rtr._Shruti_Dubey_-_Chairperson_HRD__6_IMGCentury_5_IMGCentury_w6w2rn.jpg",
    year: "2021-2022",
  },
  {
    id: 180,
    name: "Rtr. Aaditya Jaiswal",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744366/Rtr._Aaditya_Jaiswal_-_Joint_Secretary__20_IMGCentury_18_IMGCentury_ncybbt.jpg",
    year: "2021-2022",
  },
  {
    id: 181,
    name: "Rtr. Muskan Sinha",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744363/Rtr._Muskan_Sinha_-_Joint_Secretary__3_IMGCentury_17_IMGCentury_yswg6e.jpg",
    year: "2021-2022",
  },
  {
    id: 182,
    name: "Rtr. Mitali Mandge",
    role: "Chairperson Publications",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744361/Rtr._Mitali_Mandge_-_Chairperson_Publications__14_IMGCentury_16_IMGCentury_ajab1a.jpg",
    year: "2021-2022",
  },
  //2020-2021
  {
    id: 186,
    name: "Rtr. Prince Pandey",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744337/Rtr._Prince_Pandey___President_9_IMGCentury_14_IMGCentury_e8qskx.jpg",
    year: "2020-2021",
  },
  {
    id: 185,
    name: "Rtr. Shubham Gawade",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744339/Rtr._Shubham_Gawade___Secretary_11_IMGCentury_1_IMGCentury_piraqo.jpg",
    year: "2020-2021",
  },
  {
    id: 184,
    name: "Rtr. Suraj Naidu",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744337/Rtr._Suraj_Naidu___Vice_President_12_IMGCentury_2_IMGCentury_ucrxac.jpg",
    year: "2020-2021",
  },
  {
    id: 188,
    name: "Rtr. Abhishek Mishra",
    role: "Sergeant At Arms",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744338/Rtr._Abhishek_Mishra___Seargent-At-Arms_15_IMGCentury_11_IMGCentury_zui1ch.jpg",
    year: "2020-2021",
  },
  {
    id: 183,
    name: "Rtr. Urvi Shukla",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744344/Rtr._Urvi_Shukla___Treasurer_13_IMGCentury_3_IMGCentury_kxx0jl.jpg",
    year: "2020-2021",
  },
  {
    id: 187,
    name: "Rtr. Bhushan Nete",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744338/Rtr._Bhushan_Nete___Joint_Secretary_3_IMGCentury_5_IMGCentury_xf1gue.jpg",
    year: "2020-2021",
  },
  {
    id: 189,
    name: "Rtr. Anuja Somthankar",
    role: "Chairperson HRD",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744344/Rtr._Anuja_Somthankar___Chairperson_HRD_1_IMGCentury_12_IMGCentury_g9himf.jpg",
    year: "2020-2021",
  },
  //2019-2020
  {
    id: 193,
    name: "Rtr. Harshali Yeram",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744428/Rtr._Harshali_Yeram___President_2_IMGCentury_8_IMGCentury_ksypwa.jpg",
    year: "2019-2020",
  },
  {
    id: 191,
    name: "Rtr. Mansi Singh",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744430/Rtr._Mansi_Singh_-_Secretary_4_IMGCentury_10_IMGCentury_fgk8fo.jpg",
    year: "2019-2020",
  },
  {
    id: 192,
    name: "Rtr. Jemit Shah",
    role: "Vice President (Supporting Functions)",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744424/Rtr._Jemit_Shah___Vice_President_Supporting_Functions__3_IMGCentury_9_IMGCentury_akteag.jpg",
    year: "2019-2020",
  },
  {
    id: 195,
    name: "Rtr. Dhruv Shah",
    role: "Vice President (Main Avenues)",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744426/Rtr._Dhruv_Shah_-_Vice_President_Main_Avenues__16_IMGCentury_1_IMGCentury_p4xuzb.jpg",
    year: "2019-2020",
  },
  {
    id: 197,
    name: "Rtr. Aditya Salvi",
    role: "Sergeant At Arms",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744430/Rtr._Aaditya_Salvi___Sergeant-At-Arms_13_IMGCentury_13_IMGCentury_h8zqp5.jpg",
    year: "2019-2020",
  },
  {
    id: 194,
    name: "Rtr. Harsh Chaurasia",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744431/Rtr._Harsh_Chaurasia___Treasurer_1_IMGCentury_2_IMGCentury_tcvcan.jpg",
    year: "2019-2020",
  },
  {
    id: 190,
    name: "Rtr. Shreya Patil",
    role: "Chairperson HRD",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744431/Rtr._Shreya_Patil___Chairwoman_HRD_9_IMGCentury_6_IMGCentury_lvjnib.jpg",
    year: "2019-2020",
  },
  {
    id: 196,
    name: "Rtr. Aishwarya Sattigeri",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744427/Rtr._Aishwarya_Sattigeri___Jt._Secretary_14_IMGCentury_14_IMGCentury_ol73au.jpg",
    year: "2019-2020",
  },
  //2018-2019
  {
    id: 192,
    name: "Rtr. Yash Bohra",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931924/Rtr._Yash_Bohra___President_17_IMGCentury_15_IMGCentury_cbtetz.jpg",
    year: "2018-2019",
  },
  {
    id: 195,
    name: "Rtr. Ruchi Pourana",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931921/Rtr._Ruchi_Pourana___Secretary_11_IMGCentury_9_IMGCentury_bdboak.jpg",
    year: "2018-2019",
  },
  {
    id: 198,
    name: "Rtr. Mansi Singh",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756936984/Rtr._Mansi_Singh_-_Secretary_4_IMGCentury_10_IMGCentury_nbj5ij.jpg",
    year: "2018-2019",
  },
  {
    id: 194,
    name: "Rtr. Sanjana Singh",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931921/Rtr._Sanjana_Singh___Vice_President_12_IMGCentury_10_IMGCentury_w62ltc.jpg",
    year: "2018-2019",
  },
  {
    id: 193,
    name: "Rtr. Tushar Balande",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931923/Rtr._Tushar_Balande__Treasurer_16_IMGCentury_14_IMGCentury_ae1vrx.jpg",
    year: "2018-2019",
  },
  {
    id: 196,
    name: "Rtr. Neerja Rajeev",
    role: "Chairwoman HRD",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931920/Rtr._Neerja_Rajeev___Chairwoman_HRD_9_IMGCentury_7_IMGCentury_lrivlh.jpg",
    year: "2018-2019",
  },
  {
    id: 197,
    name: "Rtr. Harshali Yerm",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931918/Rtr._Harshali_Yeram___Joint_Secretary_6_IMGCentury_4_IMGCentury_jzefhm.jpg",
    year: "2018-2019",
  },

  //2017-18
  {
    id: 200,
    name: "Rtr. Anisha Pandya",
    role: "President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744407/Rtr._Anisha_Pandya___President_1_IMGCentury_1_IMGCentury_jyek6s.jpg",
    year: "2017-2018",
  },
  {
    id: 201,
    name: "Rtr. Binal Patel",
    role: "Secretary",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744402/Rtr._Binal_Patel___Secretary_3_IMGCentury_3_IMGCentury_fq8k7u.jpg",
    year: "2017-2018",
  },
  {
    id: 199,
    name: "Rtr. Viral Haria",
    role: "Vice President",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744403/Rtr._Viral_Haria___Vice_President_14_IMGCentury_13_IMGCentury_abmxxo.jpg",
    year: "2017-2018",
  },
  {
    id: 202,
    name: "Rtr. Harsh Kothari",
    role: "Seargent-At-Arms",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744405/Rtr._Harsh_Kothari___Seargent-At-Arms_4_IMGCentury_4_IMGCentury_e8y2pz.jpg",
    year: "2017-2018",
  },
  {
    id: 203,
    name: "Rtr. Pandey Sawant",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744403/Rtr._Pandey_Sawant___Treasurer_8_IMGCentury_7_IMGCentury_eeh2nl.jpg",
    year: "2017-2018",
  },
  {
    id: 204,
    name: "Rtr. Saloni Jain",
    role: "Chairman HR",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744402/Rtr._Saloni_Jain___Chairman_HR_9_IMGCentury_8_IMGCentury_xhkcxc.jpg",
    year: "2017-2018",
  },

    
]

const boardOfDirectors = [
    // 2025-26
  {
    id: 160,
    name: "Rtr. Smaiha dadarkar",
    role: "Club Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701840/Rtr._Samiha_Dadarkar_BOD_Club_Service_api4cf.png",
    year: "2025-2026",
  },
    {
    id: 153,
    name: "Rtr.Aditi Pawar",
    role: "Community Service ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701842/Rtr._Aditi_Pawar_Community_Service_Director_zhyzzn.png",
    year: "2025-2026",
  },
    {
    id: 161,
    name: "Rtr. Om tailor",
    role: "Community Service ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701863/Om_Tailor_Community_Service_Director_wtcviu.png",
    year: "2025-2026",
  },
    {
    id: 162,
    name: "Rtr. Tiya Agarwal",
    role: "Community Service ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701862/Rtr._Tiya_Agarwal_BOD_Comm_Serve_zxm6ox.png",
    year: "2025-2026",
  },
  {
    id: 154,
    name: "Rtr. Enakshi Das",
    role: "Professional Development ",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701836/Rtr._Enakshi_Das_BOD_PD_cj5jco.png",
    year: "2025-2026",
  },
    {
    id: 163,
    name: "Rtr.Tanmaya Deshapande",
    role: "Professional Development ",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701878/Rtr._Tanmaya_Deshpande_BOD_PD_helhmx.png",
    year: "2025-2026",
  },
    {
    id: 164,
    name: "Rtr.Mihir Sonawane",
    role: "International Service ",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701816/Rtr._Mihir_Sonawane_International_Service_Director_daxtzd.png",
    year: "2025-2026",
  },
    {
    id: 165,
    name: "Rtr.Siddarth Bajpai",
    role: "International Service",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701843/Rtr._Siddharth_Bajpayee_BOD_IS_qqwtff.png",
    year: "2025-2026",
  },
  {
    id: 156,
    name: "Rtr.Saisha Batulwar",
    role: "Shiksha",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701864/Rtr._Saisha_Batulwar_BOD_Shiksha_bozekp.png",
    year: "2025-2026",
  },
  {
    id: 166,
    name: "Rtr .Tanishka Jakhmola",
    role: "Shiksha",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701818/Rtr._Tanishka_Jakhmola_BOD_Shiksha_o3pbx8.png",
    year: "2025-2026",
  },
  {
    id: 157,
    name: "Rtr. Shubham Jagtap",
    role: "Sports ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701868/Rtr._Shubham_Jagtap_BOD_sports_jeiijb.png",
    year: "2025-2026",
  },
  {
    id: 167,
    name: "Rtr. Preet Jain",
    role: "Sports ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701853/Rtr._Preet_Jain_BOD_sports_tybksn.png",
    year: "2025-2026",
  },
  {
    id: 168,
    name: "Rtr. Ashrit Bhang",
    role: "Entrepreneurship Development ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701859/Rtr._Ashrit_Bang_BOD_ED_xozjip.png",
    year: "2025-2026",
  },

  {
    id: 169,
    name: "Rtr. Ritu Dubey",
    role: "Social Media Relations ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701876/Rtr._Ritu_Dubey_BOD_SMR_icqegz.png",
    year: "2025-2026",
  },
  {
    id: 170,
    name: "Rtr. Atharva Girdhar",
    role: "Social Media Relations ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701817/Rtr._Atharva_Girdhar_BOD_SMR_ddpwqb.png",
    year: "2025-2026",
  },
  {
    id: 171,
    name: "Rtr. Mishti Parekh",
    role: "Social Media Relations ",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701838/Rtr._Mishti_Parekh_BOD_SMR_pseah6.png",
    year: "2025-2026",
  },
  {
    id: 172,
    name: "Rtr. Mayank Jaiswal",
    role: "Digital Communication",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701817/Rtr._Mayank_Jaiswal_BOD_digicomm_inmwit.png",
    year: "2025-2026",
  },
  {
    id: 185,
    name: "Rtr. Sania More",
    role: "Digital Communication",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701886/Rtr._Sania_More_BOD_digicomm_h3xqa5.png",
    year: "2025-2026",
  },
  {
    id: 174,
    name: "Rtr. Parth Nalavde",
    role: "Digital Communication",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701847/Rtr._Parth_Nalavade_BOD_digicomm_evtizo.png",
    year: "2025-2026",
  },
  {
    id: 175,
    name: "Rtr. Shreya Shirvatsav",
    role: "Editorial",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701834/Rtr._Shreya_Shrivastav_BOD_Editorial_vv2sqv.png",
    year: "2025-2026",
  },
  {
    id: 176,
    name: "Rtr. Suhani Kambli",
    role: "Editorial",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701819/Rtr._Suhani_Kambli_BOD_Editorial_nn8lnd.png",
    year: "2025-2026",
  },
  {
    id: 177,
    name: "Rtr. Diya Tailor",
    role: "Partner in Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701854/Rtr._Diya_Tailor_BOD_PIS_krq6t8.png",
    year: "2025-2026",
  },
  {
    id: 178,
    name: "Rtr. Prastuth Shetty",
    role: "Public Relations",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701851/Rtr._Prastuth_Shetty_BOD_PR_gwlhmw.png",
    year: "2025-2026",
  },
  {
    id: 179,
    name: "Rtr. Siddarth Gupta",
    role: "Public Relations",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701884/Rtr._Siddharth_Gupta_BOD_PR_l0rkrx.png",
    year: "2025-2026",
  },
  {
    id: 180,
    name: "Rtr. Vaibhavi Tiwari",
    role: "Public Relations",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701824/Rtr._Vaibhavi_Tiwari_BOD_PR_etxako.png",
    year: "2025-2026",
  },
  {
    id: 181,
    name: "Rtr. Siddhi Sharma",
    role: "Marketing",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701869/Rtr._Siddhi_Sharma_BOD_Marketing_kttvvj.png",
    year: "2025-2026",
  },
  {
    id: 182,
    name: "Rtr. Aarsh Dubey",
    role: "Marketing",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701875/Rtr._Aarsh_Dubey_BOD_Marketing_oykh8o.png",
    year: "2025-2026",
  },

  //2024-2025
  {
    id: 1,
    name: "Rtr. Shreya Jadhav",
    role: "Club Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744382/Rtr._Shreya_Jadhav_i5z0a1.webp",
    year: "2024-2025",
  },
  {
    id: 2,
    name: "Rtr. Dhairya Doshi",
    role: "Club Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744389/Rtr._Dhairya_Doshi_ozdthn.webp",
    year: "2024-2025",
  },
  {
    id: 3,
    name: "Rtr. Aaryan Gupta",
    role: "Community Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744400/Rtr._Aaryan_Gupta_z1puro.webp",
    year: "2024-2025",
  },
  {
    id: 4,
    name: "Rtr. Suryansh Rai",
    role: "Community Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744393/Rtr._Suryansh_Rai_g4z0yu.webp",
    year: "2024-2025",
  },
  {
    id: 5,
    name: "Rtr. Anushka Thakur",
    role: "Community Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744387/Rtr._Anushka_Thakur_poikkv.webp",
    year: "2024-2025",
  },
  {
    id: 6,
    name: "Rtr. Jaidan Maity",
    role: "Professional Development",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744386/Rtr._Jaidan_Maity_pzfjfn.webp",
    year: "2024-2025",
  },
  {
    id: 7,
    name: "Rtr. Vaishnavi Ranjan",
    role: "Professional Development",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744375/Rtr._Vaishnavi_Ranjan_w4qsa1.webp",
    year: "2024-2025",
  },
  {
    id: 8,
    name: "Rtr. Rashi Bedse",
    role: "International Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744377/Rtr._Rashi_Bedse_dnmsld.webp",
    year: "2024-2025",
  },
  {
    id: 9,
    name: "Rtr. Shweta Varma",
    role: "International Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744373/Rtr._Shweta_Varma_rwy8bc.webp",
    year: "2024-2025",
  },
  { id: 10, name: "Rtr. Vivek Rai", role: "Shiksha", image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744397/Rtr._Vivek_Rai_q6fkxf.webp", year: "2024-2025" },
  {
    id: 11,
    name: "Rtr. Palak Upadhyay",
    role: "Shiksha",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744381/Rtr._Palak_Upadhyay_iaooti.webp",
    year: "2024-2025",
  },
  {
    id: 12,
    name: "Rtr. Ayaan Shaikh",
    role: "Sports",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744398/Rtr._Ayaan_Shaikh_omb3lx.webp",
    year: "2024-2025",
  },
  {
    id: 13,
    name: "Rtr. Fuzail Khan",
    role: "Sports",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744392/Rtr._Fuzail_Khan_iseikk.webp",
    year: "2024-2025",
  },
  {
    id: 15,
    name: "Rtr. Atharva Nayak",
    role: "Entrepreneurship Development",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744372/Rtr._Atharva_Nayak_triayy.webp",
    year: "2024-2025",
  },
  {
    id: 16,
    name: "Rtr. Ansh Mishra",
    role: "Social Media and Relation",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744393/Rtr._Ansh_Mishra_jpchde.webp",
    year: "2024-2025",
  },
  {
    id: 17,
    name: "Rtr. Jai Anjaria",
    role: "Social Media and Relation",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744396/Rtr._Jai_Anjaria_jhctsb.webp",
    year: "2024-2025",
  },
  {
    id: 18,
    name: "Rtr. Srishti Srivastava",
    role: "Social Media and Relation",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744389/Rtr._Srishti_Srivastava_ohwbzn.webp",
    year: "2024-2025",
  },
  {
    id: 19,
    name: "Rtr. Pranjal Chavan",
    role: "Digital Communication",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744380/Rtr._Pranjal_Chavan_fgurze.webp",
    year: "2024-2025",
  },

  {
    id: 21,
    name: "Rtr. Krish Agrawal",
    role: "Digital Communication",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744371/Rtr._Krish_Agrawal_todpuw.webp",
    year: "2024-2025",
  },
  {
    id: 22,
    name: "Rtr. Reeba Diwan",
    role: "Editorial",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744380/Rtr._Reeba_Diwan_w3u1cf.webp",
    year: "2024-2025",
  },
  {
    id: 23,
    name: "Rtr. Rudra Sharma",
    role: "Editorial",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744378/Rtr._Rudra_Sharma_vg7lzk.webp",
    year: "2024-2025",
  },
  {
    id: 24,
    name: "Rtr. Chandranshu Dharmik",
    role: "Partner-in-Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744376/Rtr._Chandranshu_Dharmik_bkxm0j.webp",
    year: "2024-2025",
  },
  {
    id: 25,
    name: "Rtr. Farhan Shaikh",
    role: "Public Relation",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744398/Rtr._Farhan_Shaikh_xsckwv.webp",
    year: "2024-2025",
  },
  {
    id: 26,
    name: "Rtr. Jeneesh Joshi",
    role: "Public Relation",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744386/Rtr._Jeenesh_Joshi_uv57wr.webp",
    year: "2024-2025",
  },
  {
    id: 27,
    name: "Rtr. Shivangi Pandey",
    role: "Public Relation",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744400/Rtr._Shivangi_Pandey_tkn32a.webp",
    year: "2024-2025",
  },
  {
    id: 28,
    name: "Rtr. Utsav Yadav",
    role: "Marketing",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744399/Rtr._Utsav_Yadav_j3vhr2.webp",
    year: "2024-2025",
  },
  {
    id: 29,
    name: "Rtr. Sakshi Singh",
    role: "Marketing",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744390/Rtr._Sakshi_Singh_ezpp9r.webp",
    year: "2024-2025",
  },

  //2023-24
  {
    id: 49,
    name: "Rtr. Neeharika Jha",
    role: "Jt. Shiksha director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934671/Rtr._Neeharika_Jha-_Jt._Shiksha_director_19_IMGCentury_lavppf.avif",
    year: "2023-2024",
  },
  {
    id: 44,
    name: "Rtr. Gaurav Warke",
    role: "Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744433/Rtr.Gaurav_Warke-_Sports_Director_2_IMGCentury_m6k36o.avif",
    year: "2023-2024",
  },
  {
    id: 56,
    name: "Rtr. Shreya Pandey",
    role: "club service director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934632/Rtr._Shreya_Pandey-_club_service_director_20_IMGCentury_ronx2a.avif",
    year: "2023-2024",
  },
  {
    id: 45,
    name: "Rtr. Himanshu Jangid",
    role: "Jt. Digital communication director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934601/Rtr.Himanshu_Jangid_-_Jt._Digital_communication_director_3_IMGCentury_j7bi9m.avif",
    year: "2023-2024",
  },
  {
    id: 63,
    name: "Rtr. Swati Singh",
    role: "Jt. Community service director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744443/Rtr._Swati_Singh-_Jt._Community_service_director_21_IMGCentury_llabza.avif",
    year: "2023-2024",
  },
  {
    id: 46,
    name: "Rtr. Labdhi doshi",
    role: "Entrepreneurship development director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744442/Rtr.Labdhi_doshi-_Entrepreneurship_development_director_4_IMGCentury_pnq6nf.avif",
    year: "2023-2024",
  },
  {
    id: 30,
    name: "Rtr. Abhishek Yadav",
    role: "Shiksha director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744438/Rtr.Abhishek_Yadav-_Shiksha_director_22_IMGCentury_k9xqgo.avif",
    year: "2023-2024",
  },
  {
    id: 47,
    name: "Rtr. Mukesh Kadali",
    role: "smr & media production director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934493/Rtr.Mukesh_Kadali-_smr_media_production_director_5_IMGCentury_qeo9lk.avif",
    year: "2023-2024",
  },
  {
    id: 31,
    name: "Rtr. Aditi Pandey",
    role: "Jt. Community service director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744434/Rtr.Aditi_Pandey_-_Jt._Community_service_director_23_IMGCentury_drpzu9.avif",
    year: "2023-2024",
  },
  {
    id: 32,
    name: "Rtr. Aditya Rajbhar",
    role: "Smr director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934442/Rtr.Aditya_Rajbhar_-_Smr_director_24_IMGCentury_lm303o.avif",
    year: "2023-2024",
  },
  {
    id: 33,
    name: "Rtr. Aizab Khan",
    role: "public relations and marketing director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934394/Rtr.Aizab_Khan-_public_relations_and_marketing_director_25_IMGCentury_pdbj7s.avif",
    year: "2023-2024",
  },
  {
    id: 51,
    name: "Rtr. Riddhi Joshi",
    role: "Jt. Professional development director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744439/Rtr.Riddhi_Joshi-_Jt._Professional_development_director_8_IMGCentury_zd2yqf.avif",
    year: "2023-2024",
  },
  {
    id: 52,
    name: "Rtr. Samyak Waghmare",
    role: "Jt. Public relations and marketing director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744433/Rtr.Samyak_Waghmare-_Jt._Public_relations_and_marketing_director_9_IMGCentury_umbh3l.avif",
    year: "2023-2024",
  },
  {
    id: 53,
    name: "Rtr. Saumya mishra",
    role: "Digital communication director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744435/Rtr.Saumya_mishra-_Digital_communication_director_10_IMGCentury_g3fcah.avif",
    year: "2023-2024",
  },
  {
    id: 36,
    name: "Rtr. Anjali Patel",
    role: "Jt. Public relations and marketing director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744441/Rtr.Anjali_Patel-_Jt._Public_relations_and_marketing_director_28_IMGCentury_oubzqy.avif",
    year: "2023-2024",
  },
  {
    id: 37,
    name: "Rtr. Anshul Khadatkar",
    role: "professional development director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934324/Rtr.Anshul_Khadatkar-_professional_development_director_29_IMGCentury_w1qe7l.avif",
    year: "2023-2024",
  },
  {
    id: 64,
    name: "Rtr. Soham Shinde",
    role: "Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744437/Rtr.Soham_Shinde-_Sports_Director_13_IMGCentury_qrfwek.avif",
    year: "2023-2024",
  },
  {
    id: 59,
    name: "Rtr. Tushar Mishra",
    role: "Community service director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934276/Rtr.Tushar_Mishra-_Community_service_director_16_IMGCentury_buwkky.avif",
    year: "2023-2024",
  },
  {
    id: 61,
    name: "Rtr. Vartika upadhyay",
    role: "Editorial service director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744436/Rtr.Vartika_upadhyay-_Editorial_service_director_17_IMGCentury_xhalbe.avif",
    year: "2023-2024",
  },
  {
    id: 62,
    name: "Rtr. Yuvraj Desai",
    role: "jt. Club service and jt. International service director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744438/Rtr.Yuvraj_Desai-_jt._Club_service_and_jt._International_service_director_18_IMGCentury_gxiarr.avif",
    year: "2023-2024",
  },
  {
    id: 50,
    name: "Rtr. Prabhat Maurya",
    role: "Editorial director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744437/Rtr.Prabhat_Maurya_-_Editorial_director_7_IMGCentury_droepv.avif",
    year: "2023-2024",
  },
  {
    id: 39,
    name: "Rtr. Atulya Sawant",
    role: "Jt. Smr director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756934198/Rtr.Atulya_Sawant-_Jt._Smr_director_31_IMGCentury_xcwcag.avif",
    year: "2023-2024",
  },
  {
    id: 40,
    name: "Rtr. Bhargav Nadiyana",
    role: "partner in service director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744433/Rtr.Bhargav_Nadiyana-_partner_in_service_director_32_IMGCentury_kclybb.avif",
    year: "2023-2024",
  },

  // 2022-2023
  {
    id: 73,
    name: "Rtr. Amar Singh",
    role: "Club Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744418/Rtr._Amar_Singh_-_Club_Service_director__8_IMGCentury_23_IMGCentury_svcjxe.jpg",
  },
  {
    id: 74,
    name: "Rtr. Tanya Shah",
    role: "Joint Club Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744420/Rtr._Tanya_Shah_-_Joint_Club_Service_director__4_IMGCentury_18_IMGCentury_go6afg.jpg",
    year: "2022-2023",
  },
  {
    id: 75,
    name: "Rtr. Gaurav Bhavdane",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744411/Rtr._Gaurav_Bavdhane_-_Community_Service_director__28_IMGCentury_1_IMGCentury_efeo3p.jpg",
    year: "2022-2023",
  },
  {
    id: 76,
    name: "Rtr. Abhishek Maurya",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744414/Rtr._Abhishek_Maurya_-_Joint_Community_Service_director__25_IMGCentury_21_IMGCentury_l6zrmj.jpg",
    year: "2022-2023",
  },
  {
    id: 77,
    name: "Rtr. Nidhi Singh",
    role: "Community Service and Shiksha Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744420/Rtr._Nidhi_Singh_-_Joint_Community_Service_and_Joint_Shiksha_Director__19_IMGCentury_9_IMGCentury_klthxd.jpg",
    year: "2022-2023",
  },
  {
    id: 79,
    name: "Rtr. Tanay Agarwal",
    role: "Professional Development Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744420/Rtr._Tanay_Agarwal_-_Professional_development_director__3_IMGCentury_16_IMGCentury_dlw1hn.jpg",
    year: "2022-2023",
  },
  {
    id: 80,
    name: "Rtr. Akshay Sharma",
    role: "International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744413/Rtr._Akshay_Sharma_-_International_Service_director__7_IMGCentury_22_IMGCentury_gbqjqy.jpg",
    year: "2022-2023",
  },
  {
    id: 81,
    name: "Rtr. Esha Mehra",
    role: "Joint International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744416/Rtr._Esha_Mehra_-_Jt._International_Service_director__12_IMGCentury_29_IMGCentury_baawzg.jpg",
    year: "2022-2023",
  },
  {
    id: 78,
    name: "Rtr. Kirtika Srivastava",
    role: "Shiksha Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744414/Rtr._Kirtika_Shrivastava_-_Shiksha_Director__16_IMGCentury_5_IMGCentury_n20xcl.jpg",
    year: "2022-2023",
  },
  {
    id: 83,
    name: "Rtr. Nilay Zaveri",
    role: "Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744407/Rtr._Nikay_Zaveri_-_Sports_Director__20_IMGCentury_10_IMGCentury_rudozq.jpg",
    year: "2022-2023",
  },
  {
    id: 84,
    name: "Rtr. Ayush Lahoti",
    role: "Entrepreneurship Development Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744421/Rtr._Ayush_Lahoti_-_Entrepreneurship_development__11_IMGCentury_26_IMGCentury_jxir69.jpg",
    year: "2022-2023",
  },
  {
    id: 88,
    name: "Rtr. Chetan Mahnot",
    role: "Joint Digital Communications Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744417/Rtr._Chetan_Mohnut_-_Joint_Digital_Communication_Director__26_IMGCentury_27_IMGCentury_mkfgl5.jpg",
    year: "2022-2023",
  },
  {
    id: 89,
    name: "Rtr. Tanishq Suryavanshi",
    role: "Media Production Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744408/Rtr._Tanishq_Suryavanshi_-_Media_Production_Director__24_IMGCentury_17_IMGCentury_updgfq.jpg",
    year: "2022-2023",
  },
  {
    id: 86,
    name: "Rtr. Sumit Sharma",
    role: "Editorial Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744414/Rtr._Sumit_Sharma_-_Editorial_Service__23_IMGCentury_15_IMGCentury_j7z4qs.jpg",
    year: "2022-2023",
  },
  {
    id: 87,
    name: "Rtr. Sudha Shukla",
    role: "Joint Editorial Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744409/Rtr._Sudha_Shukla_-_Joint_Editorial_Service__2_IMGCentury_14_IMGCentury_hxy6eh.jpg",
    year: "2022-2023",
  },
  {
    id: 85,
    name: "Rtr. Yash Patil",
    role: "Partners in Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744412/Rtr._Yash_Patil_-_Partner-in-service_6_IMGCentury_20_IMGCentury_kofr3x.jpg",
    year: "2022-2023",
  },
  {
    id: 82,
    name: "Rtr. Sejal Dubey",
    role: "Joint Public Relations and Marketing Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744422/Rtr._Sejal_Dubey_-_Joint_Public_Relations_and_Marketing__22_IMGCentury_13_IMGCentury_llofdf.jpg",
    year: "2022-2023",
  },
  // 2021-2022
  {
    id: 95,
    name: "Rtr. Nipesh Dubey",
    role: "Club Service and Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744352/Rtr._Nipesh_Dubey-_Club_service_and_sports_director__15_IMGCentury_22_IMGCentury_te7gv2.jpg",
    year: "2021-2022",
  },
  {
    id: 101,
    name: "Rtr. Allan Fernandes",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744352/Rtr._Allan_Fernandes_-_Community_Service_director__11_IMGCentury_20_IMGCentury_dnawcs.jpg",
    year: "2021-2022",
  },
  {
    id: 98,
    name: "Rtr. Eashen Bhale",
    role: "Joint Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744347/Rtr._Eashan_bhale_-_Joint_Community_Service_director__12_IMGCentury_12_IMGCentury_oxxkrf.jpg",
    year: "2021-2022",
  },
  {
    id: 102,
    name: "Rtr. Adityavikaram",
    role: "Professional and entrepreneurship Development Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744366/Rtr._Aaditya_Jaiswal_-_Joint_Secretary__20_IMGCentury_18_IMGCentury_ncybbt.jpg",
    year: "2021-2022",
  },
  {
    id: 93,
    name: "Rtr. Rutu Shah",
    role: "International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744346/Rtr._Rutu_Shah_-_International_Service_director__5_IMGCentury_2_IMGCentury_mhfxqt.jpg",
    year: "2021-2022",
  },
  {
    id: 90,
    name: "Rtr. Yash Lad",
    role: "Shiksha Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744351/Rtr._Yash_lad_-_Shiksha_Director__8_IMGCentury_7_IMGCentury_dbk5be.jpg",
    year: "2021-2022",
  },
  {
    id: 92,
    name: "Rtr. Shivam Dubey",
    role: "Shiksha Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744356/Rtr._Shivam_Dubey_-_Shiksha_Director__19_IMGCentury_4_IMGCentury_alve89.jpg",
    year: "2021-2022",
  },
  {
    id: 99,
    name: "Rtr. Dhruvi Jagnani",
    role: "Digitial Communication Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744372/Rtr._Dhruvi_Jagnani_-_Digital_Communication_Director__24_IMGCentury_11_IMGCentury_dfuln2.jpg",
    year: "2021-2022",
  },
  {
    id: 97,
    name: "Rtr. Hardik Chemburkar",
    role: "Joint Digital Communication and Social Media Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744368/Rtr._Hardik_Chemburkar_-_Joint_Digital_Communication_Social_Media_Director__1_IMGCentury_13_IMGCentury_oj1to8.jpg",
    year: "2021-2022",
  },
  {
    id: 96,
    name: "Rtr. Malcolm Cardoza",
    role: "Editorial Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744354/Rtr._Malcolm_Cardoza_-_Editorial_Service_director__13_IMGCentury_15_IMGCentury_zotjxa.jpg",
    year: "2021-2022",
  },
  {
    id: 94,
    name: "Rtr. Priyanshu Pandey",
    role: "Partner in Service & Joint Professional and Entrepreneurship Development Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744370/Rtr._Priyanshu_Pandey_-_Partner-in-service_Joint_Professional_and_Entrepreneurship_development_director__17_IMGCentury_1_IMGCentury_ghbq1p.jpg",
    year: "2021-2022",
  },
  {
    id: 103,
    name: "Rtr. Jay Agarwal",
    role: "Public Relations and Marketing Development Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744370/Jay_Agarwal_-_Public_Relations_and_Marketing_director__10_IMGCentury_21_IMGCentury_mmx3bw.jpg",
    year: "2021-2022",
  },
  {
    id: 100,
    name: "Rtr. Ananya Shetty",
    role: "Social Media Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744365/Rtr._Ananya_Shetty_-_Social_Media_Director__22_IMGCentury_9_IMGCentury_gr6mnv.jpg",
    year: "2021-2022",
  },
  {
    id: 91,
    name: "Rtr. Suraj Naidu",
    role: "Club Trainer",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744350/Rtr._Suraj_Naidu_-_Club_Trainer_7_IMGCentury_6_IMGCentury_llj1pu.jpg",
    year: "2021-2022",
  },
  // 2020-2021
  {
    id: 106,
    name: "Rtr. Nishant Verma",
    role: "Club Service and Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744345/Rtr._Nishant_Verma___Club_Service_and_Sports_Director_8_IMGCentury_10_IMGCentury_mn520u.jpg",
    year: "2020-2021",
  },
  {
    id: 107,
    name: "Rtr. Kunal Miskin",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744337/Rtr._Kunal_Miskin___Community_Service_Director_7_IMGCentury_9_IMGCentury_gu5yql.jpg",
    year: "2020-2021",
  },
  {
    id: 108,
    name: "Rtr. Janhavi Mishra",
    role: "Joint Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744345/Rtr._Janhavi_Mishra___Joint_Community_Service_Director_6_IMGCentury_8_IMGCentury_z3jbuz.jpg",
    year: "2020-2021",
  },
  {
    id: 104,
    name: "Rtr. Zoya Ansari",
    role: "Professional and Entrepreneurship Development",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744340/Rtr._Zoya_Ansari___Professional_and_Entrepreneurship_Development_14_IMGCentury_4_IMGCentury_bixe2d.jpg",
    year: "2020-2021",
  },
  {
    id: 105,
    name: "Rtr. Samiksha Bedkar",
    role: "International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744337/Rtr._Samiksha_Bedkar___International_Service_Director_10_IMGCentury_15_IMGCentury_xfj52x.jpg",
    year: "2020-2021",
  },
  {
    id: 109,
    name: "Rtr. Eesha Pandit",
    role: "Digital Communication and Social Media Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744344/Rtr._Eesha_Pandit___Digital_Communication_and_Social_Media_Director_5_IMGCentury_7_IMGCentury_m6scoq.jpg",
    year: "2020-2021",
  },
  {
    id: 110,
    name: "Rtr. Dhruv Shelke",
    role: "Joint Digital Communication and Social Media Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744346/Rtr._Dhruv_Shelke___Joint_Digital_Communication_and_Social_Media_and_Director_4_IMGCentury_6_IMGCentury_ukgalr.jpg",
    year: "2020-2021",
  },
  {
    id: 111,
    name: "Rtr. Ayush Gupta",
    role: "Editorial Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744345/Rtr._Ayush_Gupta___Editorial_Service_Director_2_IMGCentury_13_IMGCentury_yntmem.jpg",
    year: "2020-2021",
  },
  // 2019-2020
  {
    id: 112,
    name: "Rtr. Snehal Raj Verma",
    role: "Club Service and Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744424/Rtr._Snehal_Raj_Verma___Club_Service_and_Sports_Director_10_IMGCentury_7_IMGCentury_dvxtyq.jpg",
    year: "2019-2020",
  },
  {
    id: 114,
    name: "Rtr. Ritesh Shinde",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744425/Rtr._Ritesh_Shinde___Community_Service_Director_7_IMGCentury_4_IMGCentury_sunvru.jpg",
    year: "2019-2020",
  },
  {
    id: 116,
    name: "Rtr. Pratiksha Shrivastava",
    role: "Joint Community Service Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744429/Rtr._Pratiksha_Shrivastava___Jt._Community_Service_Director_6_IMGCentury_12_IMGCentury_qzupkv.jpg",
    year: "2019-2020",
  },
  {
    id: 118,
    name: "Rtr. Dharna Singh",
    role: "Professional and Entrepreneurship Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744425/Rtr._Dharna_Singh___Professional_and_Entrepreneurship_Development_Director_15_IMGCentury_16_IMGCentury_cjcvnp.jpg",
    year: "2019-2020",
  },
  {
    id: 113,
    name: "Rtr. Saneel Gaikwad",
    role: "International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744432/Rtr._Saneel_Gaikwad___International_Service_Director_8_IMGCentury_5_IMGCentury_txhsor.jpg",
    year: "2019-2020",
  },
  {
    id: 115,
    name: "Rtr. Prince Pandey",
    role: "Shiksha Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744430/Rtr._Prince_Pandey___Shiksha_Director_12_IMGCentury_3_IMGCentury_zmxp2r.jpg",
    year: "2019-2020",
  },
  {
    id: 117,
    name: "Rtr. Pratik Halurkar",
    role: "Digital Communication and Social Media Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744429/Rtr._Pratik_Halurkar___Digital_communication_and_Social_media_Director_5_IMGCentury_11_IMGCentury_baoqdu.jpg",
    year: "2019-2020",
  },
  {
    id: 119,
    name: "Rtr. Chirag Bangera",
    role: "Editorial Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744427/Rtr._Chirag_Bangera___Editorial_Director_11_IMGCentury_15_IMGCentury_oqc8jl.jpg",
    year: "2019-2020",
  },
  // 2018-2019
  {
    id: 127,
    name: "Rtr. Darpan Jain",
    role: "Club Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931920/Rtr._Darpan_Jain___Club_Service_Director_4_IMGCentury_1_IMGCentury_nwza1j.jpg",
    year: "2018-2019",
  },
  {
    id: 126,
    name: "Rtr. Dhrumit Rajput",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931918/Rtr._Dhrumit_Rajput___Community_Service_Director_18_IMGCentury_2_IMGCentury_avgtqv.jpg",
    year: "2018-2019",
  },
  {
    id: 129,
    name: "Rtr. Ankit Sharma",
    role: "Personality and Professional Development Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931917/Rtr._Ankit_Sharma___Personality_and_Professional_Development_Director_2_IMGCentury_17_IMGCentury_aqualg.jpg",
    year: "2018-2019",
  },
  {
    id: 123,
    name: "Rtr. Mahima Gandhi",
    role: "International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931920/Rtr._Mahima_Gandhi___International_Service_Director_8_IMGCentury_6_IMGCentury_u9cppy.jpg",
    year: "2018-2019",
  },
  {
    id: 120,
    name: "Rtr. Swaraj Tendulkar",
    role: "Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931922/Rtr._Swaraj_Tendulkar___Sports_Director_15_IMGCentury_13_IMGCentury_ifiq9u.jpg",
    year: "2018-2019",
  },
  {
    id: 125,
    name: "Rtr. Dhruv Shah",
    role: "Digital Communication Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931918/Rtr._Dhruv_Shah___Digital_Communication_Director__5_IMGCentury_3_IMGCentury_rwyqjb.jpg",
    year: "2018-2019",
  },
  {
    id: 121,
    name: "Rtr. Sumit Joshi",
    role: "Editorial Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931924/Rtr._Sumit_Joshi___Editor_Service_Director_14_IMGCentury_12_IMGCentury_ttbrys.jpg",
    year: "2018-2019",
  },
  {
    id: 124,
    name: "Rtr. Jemit Shah",
    role: "Partner in Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931919/Rtr._Jemit_Shah___Partner-in-Service_7_IMGCentury_5_IMGCentury_ctosgt.jpg",
    year: "2018-2019",
  },
  {
    id: 122,
    name: "Rtr. Piyush Singh",
    role: "Public Relations and Marketing Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756932239/Rtr._Piyush_Singh___Public_Relations_and_Marketing_Director_10_IMGCentury_8_IMGCentury_lpe3vv.jpg",
    year: "2018-2019",
  },
  {
    id: 130,
    name: "Rtr. Aayushi Singh",
    role: "Social Media Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931917/Rtr._Aayushi_Singh___Social_Media_Director_1_IMGCentury_16_IMGCentury_aoe84p.jpg",
    year: "2018-2019",
  },
  {
    id: 128,
    name: "Rtr. Bharatkumar Suthar",
    role: "Finance Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756931917/Rtr._Bharatkumar_Suthar___Finance_Director_3_IMGCentury_18_IMGCentury_qoquhw.jpg",
    year: "2018-2019",
  },
  //2017-18
  {
    id: 140,
    name: "Rtr. Het Shah",
    role: "Club Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744404/Rtr._Het_Shah___Club_Service_Director_5_IMGCentury_5_IMGCentury_yoj2z2.jpg",
    year: "2017-2018",
  },
  {
    id: 143,
    name: "Rtr. Swapnil Arya",
    role: "Community Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744401/Rtr._Swapnil_Arya___Community_Service_Director_13_IMGCentury_12_IMGCentury_g4p1u8.jpg",
    year: "2017-2018",
  },
  {
    id: 144,
    name: "Rtr. Ashutosh Tiwari",
    role: "Professional and Entrepreneurship Development Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744405/Rtr._Ashutosh_Tiwari___Professional_and_Entrepreneurship_Development_Director_2_IMGCentury_2_IMGCentury_m4ekvp.jpg",
    year: "2017-2018",
  },
  {
    id: 146,
    name: "Rtr. Keval Chavda",
    role: "International Service Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744406/Rtr._Keval_Chavda___International_Service_Director_mm33xe.webp",
    year: "2017-2018",
  },
  {
    id: 147,
    name: "Rtr. Keyur Pandey",
    role: "Sports Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744405/Rtr._Keyur_Pandey___Sports_7_IMGCentury_14_IMGCentury_jpzol1.jpg",
    year: "2017-2018",
  },
  {
    id: 173,
    name: "Rtr. Shreya Patil",
    role: "Digital Communication Director",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744400/Rtr._Shreya_Patil___Digital_Communication_10_IMGCentury_9_IMGCentury_lnu4yk.jpg",
    year: "2017-2018",
  },
  {
    id: 142,
    name: "Rtr. Sumer Patel",
    role: "Partner-In-Service",
    image: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744401/Rtr._Sumer_Patel___Partner-In-Service_12_IMGCentury_11_IMGCentury_tqyonn.jpg",
    year: "2017-2018",
  },
  {
    id: 141,
    name: "Rtr. Somaiyan Guchait",
    role: "Public Relations and Marketing Director",
    image:
      "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756744406/Rtr._Somaiyan_Guchait___Public_Relations_and_Marketing_Director_11_IMGCentury_10_IMGCentury_ko75sa.jpg",
    year: "2017-2018",
  },


]

const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState("2025-2026")

  const filteredMembers = teamMembers.filter((member) => member.year === selectedYear)
  const filteredBoDs = boardOfDirectors.filter((bod) => bod.year === selectedYear)

  const academicYearOptions = Array.from({ length: 2026 - 2017 }, (_, i) => {
    const startYear = 2017 + i
    const endYear = startYear + 1
    return `${startYear}-${endYear}`
  })

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
              <option key={year} value={year}>
                {year}
              </option>
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
                <div className="aspect-w-1  aspect-h-1 overflow-hidden rounded-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover bg-slate-50 w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-110"
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
            {filteredBoDs.map((bod) => (
              <div
                key={bod.id}
                className="bg-[#faebd7] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg ">
                  <img
                    src={bod.image || "/placeholder.svg"}
                    alt={bod.name}
                    loading="lazy"
                    className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-110"
                  />
                  {/* {bod.id} */}
                </div>
                <h2 className="mt-4 md:text-md overflow-auto text-xl font-bold text-center">{bod.role}</h2>
                <p className="text-center">{bod.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage

