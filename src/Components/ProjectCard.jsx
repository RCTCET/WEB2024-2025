import React from "react";

function ProjectCard({ imageUrl, title, objective, impact }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 m-3 p-3 sm:p-4 bg-orange-50 dark:bg-stone-800 rounded-xl shadow-md dark:shadow-stone-900/50 hover:shadow-lg dark:hover:shadow-stone-900/70 transition-transform hover:scale-[1.01] border dark:border-stone-700">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-44 sm:h-56 md:h-64 object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-7/12 bg-white dark:bg-stone-700 rounded-lg shadow dark:shadow-stone-900/50 p-3 sm:p-4 border dark:border-stone-600">
        <h3 className="text-lg sm:text-xl font-bold text-orange-600 dark:text-yellow-400 mb-2">
          {title}
        </h3>

        <div className="space-y-2 text-sm sm:text-base leading-relaxed">
          <div>
            <p className="font-semibold text-gray-900 dark:text-stone-100">Objective:</p>
            <p className="text-gray-700 dark:text-stone-300">{objective}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-stone-100">Impact:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-stone-300">
              {impact.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
