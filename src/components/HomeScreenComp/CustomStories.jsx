import React, { useState } from 'react';

const CustomStories = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: '📅 Efficient Task Management',
      description:
        'Break down large initiatives into manageable tasks, assign deadlines, and track progress effortlessly. Stay on top of your work with ease using Orbit’s intuitive task management system.',
      image: 'https://via.placeholder.com/400x300?text=Efficient+Task+Management',
    },
    {
      title: 'Strategic Goal Alignment',
      description:
        'Make sure every project you undertake aligns with your long-term objectives. Set measurable targets, track outcomes, and ensure your team’s actions are driving business growth.',
      image: 'https://via.placeholder.com/400x300?text=Strategic+Goal+Alignment',
    },
    {
      title: 'Customizable Progress Tracking',
      description:
        'Customize your workflow by choosing how you want to track projects. Whether it’s through boards, lists, or task views, Orbit adapts to the way your team works best.',
      image: 'https://via.placeholder.com/400x300?text=Customizable+Progress+Tracking',
    },
    {
      title: 'Data-Driven Performance Insights',
      description:
        'Leverage detailed reports and analytics to evaluate your team’s performance. Optimize processes, spot inefficiencies, and make data-backed decisions to improve project outcomes.',
      image: 'https://via.placeholder.com/400x300?text=Data-Driven+Performance+Insights',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-6 lg:p-12 w-full">
      <div className="lg:w-1/3 w-full flex flex-col items-center justify-center">
        <img
          src={features[selectedFeature].image}
          alt={features[selectedFeature].title}
          className="rounded-lg shadow-lg w-full max-w-md object-cover mb-6"
        />
      </div>

      <div className="lg:w-1/3 w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {features[selectedFeature].title}
        </h2>
        <p className="text-gray-700 mb-6">{features[selectedFeature].description}</p>
      </div>

      <div className="lg:w-1/3 w-full flex flex-col space-y-4">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setSelectedFeature(index)}
            className={`text-left p-4 border-l-4 ${
              selectedFeature === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            } transition-all hover:bg-blue-100`}
          >
            <h3
              className={`text-lg font-medium ${
                selectedFeature === index ? 'text-blue-600' : 'text-gray-900'
              }`}
            >
              {feature.title}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomStories;
