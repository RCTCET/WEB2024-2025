export const Avenue = () => {
  return (
    <>
      {/* Hero Banner */}
      <div>
        <img
          src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756820583/Frame_116_kxbhve.png"
          alt="avenue_page"
          className="w-full object-cover"
        />
      </div>

      {/* Grid Section */}
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-16 mt-10 mb-10">
  {allinfo.map((item, index) => (
    <div
      key={index}
      className="bg-[#FFEFD9] flex flex-col items-center text-center p-6 rounded-2xl 
                 shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out 
                 hover:scale-105"
    >
      {/* Image */}
      <div className="flex items-center justify-center h-48 w-full bg-white rounded-xl overflow-hidden shadow-inner mb-4">
        <img
          src={item.img}
          alt={item.title}
          className={`max-h-full max-w-full object-contain ${item.className || ""}`}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>

    </>
  );
};

const allinfo = [
  {
    title: "Club Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701729/Club_Service_neglv4.png",
    description:
      "Enhances fellowship among members, organizes meetings and events, and strengthens club operations through well-planned activities.",
  },
  {
    title: "Community Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701729/Community_Service_frzs8z.png",
    description:
      "Focuses on projects and programs that benefit the local community; addresses needs through volunteerism and outreach.",
  },
  {
    title: "Sports",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701719/Sports_zrv3v3.png",
    description:
      "Organizes sporting activities to encourage physical fitness, teamwork, and friendly competition among members.",
  },
  {
    title: "Shiksha",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701727/Shiksha_ttxy3v.png",
    description:
      "Promotes education initiatives, supports schools and students, and encourages lifelong learning and literacy.",
  },
  {
    title: "Public Relations",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701727/PR_htodqq.png",
    description:
      "Enhances the club’s visibility, manages communications, and fosters a positive image among stakeholders and the public.",
  },
  {
    title: "Digital Communication",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701720/Digital_Communications_zigvgs.png",
    description:
      "Ensures effective online communication, manages social media channels, and facilitates digital engagement within and outside the club.",
  },
  {
    title: "Social Media Relations",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701719/Social_Media_Relations_kw31mv.png",
    description:
      "Handles online reputation, shares updates, and engages with the community on social media platforms.",
  },
  {
    title: "Entrepreneurship Development",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701720/Document_from_Yadav_Aaditya_llpyda.png",
    description:
      "Promotes entrepreneurship, supports budding entrepreneurs, and organizes training and mentorship programs.",
  },
  {
    title: "Editorial Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701723/Editorial_y4nvzb.png",
    description:
      "Manages club publications, newsletters, and articles to keep members informed and engaged.",
  },
  {
    title: "Partners-in-Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701720/Partner_In_Service_riqa6q.png",
    description:
      "Collaborates with other organizations and service partners to extend the club’s reach and impact.",
  },
  {
    title: "Professional Development",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701730/Professional_Development_kqiiod.png",
    description:
      "Offers training and skill-building opportunities to help members advance in their professional lives.",
  },
  {
    title: "International Service Development",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756701724/International_Service_knpfwk.png",
    description:
      "Engages in international projects, promotes global understanding, and connects with clubs worldwide.",
  },
];
