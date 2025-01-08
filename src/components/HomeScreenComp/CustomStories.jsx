import React, { useState, useEffect } from "react";

const testimonies = [
  {
    quote:
      "“Orbit has transformed the way our team collaborates. The Smart Links and integrations have been game-changers for productivity and discoverability.”",
    author: "Jane Doe",
    role: "Project Manager, TechNova",
  },
  {
    quote:
      "“With Orbit, managing complex projects has never been easier. The intuitive interface and powerful tools save us hours every week.”",
    author: "John Smith",
    role: "Senior Developer, InnovateX",
  },
  {
    quote:
      "“The simplicity and efficiency of Orbit allow us to focus on what matters most—delivering value to our customers.”",
    author: "Emily Johnson",
    role: "CEO, FutureTech",
  },
];

const CustomStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800  py-32 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-white">For teams big & small</h1>
        <p className="text-lg text-white mt-4">
          Hear from start-ups & large enterprises that prefer Orbit
        </p>
        <a
          href="#customer-stories"
          className="text-blue-600 font-medium mt-4 inline-block"
        >
          See more customer stories
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-black h-72 rounded-lg shadow-lg p-8 max-w-xl mx-auto overflow-hidden">
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-lg italic text-center">{testimony.quote}</p>
            <p className="text-white font-semibold mt-4">{testimony.author}</p>
            <p className="text-white">{testimony.role}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        
       
      </div>
    </div>
  );
};

export default CustomStories;
