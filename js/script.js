"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const cardList = document.querySelector("#card-list");

  const data = [
    {
      name: "Company Profile Direct Retail (Freelance)",
      image: "DRetail/1.png",
      description:
        "This company profile management sistem is a Laravel 10 based application. It features user authentication, content management system, and use MySQL for database system. Bootstrap is used in main template as a front end alongside native css and javascript.",
      link: "project1.html",
    },
    {
      name: "Company Profile Tanigo (Magang)",
      image: "Tanigo/2.png",
      description:
        "This company profile management sistem is a Laravel 8 based application. It features user authentication, content management system, and use MySQL for database system. Tailwindcss is used in main template as a front end alongside alpineJs and Jquery.",
      link: "project2.html",
    },
    {
      name: "Company Profile PT HIT (Magang)",
      image: "HIT/3.png",
      description:
        "This company profile management sistem is a Laravel 8 based application. It features user authentication, content management system, and use MySQL for database system. Tailwindcss is used in main template as a front end alongside alpineJs and Jquery.",
      link: "project3.html",
    },
  ];

  data.forEach((item) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add(
      "bg-white",
      "rounded-lg",
      "overflow-hidden",
      "shadow-lg",
      "hover:shadow-2xl",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "transform",
      "hover:-translate-y-2"
    );

    cardItem.innerHTML = `
                    <div class="relative group">
                        <img src="./image/${item.image}" alt="${item.name}" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-gray-800">${item.name}</h3>
                        <p class="text-gray-600 mb-4">${item.description}</p>
                        <div class="flex justify-end">
                            <a href="${item.link}" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out hover:px-5">
                                View Details
                                <svg class="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                `;

    cardList.appendChild(cardItem);
  });
});
