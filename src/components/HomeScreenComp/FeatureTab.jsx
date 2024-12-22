import React, { useState } from 'react';

const FeatureTab = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: '⚡ Plan and organize tasks',
      description:
        'From short projects to large cross-functional programs, Orbit helps break big ideas down into achievable steps. Organize work, create milestones, map dependencies, and more.',
      image: 'https://via.placeholder.com/400x300?text=Plan+and+Organize+Tasks',
    },
    {
      title: 'Align work to goals',
      description:
        'Ensure that your projects align with your business objectives. Set clear goals and track progress effectively.',
      image: 'https://via.placeholder.com/400x300?text=Align+Work+to+Goals',
    },
    {
      title: 'Track work your way',
      description:
        'Track tasks and projects with customizable views tailored to your workflow, whether agile boards or detailed lists.',
      image: 'https://via.placeholder.com/400x300?text=Track+Work+Your+Way',
    },
    {
      title: 'Optimize with insights',
      description:
        'Get actionable insights and reports to optimize your workflows and improve efficiency.',
      image: 'https://via.placeholder.com/400x300?text=Optimize+with+Insights',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-6 lg:p-12 w-full">
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

      <div className="lg:w-2/3 w-full flex flex-col lg:flex-row items-center justify-center text-center lg:space-x-6 mt-6 lg:mt-0">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {features[selectedFeature].title}
          </h2>
          <p className="text-gray-700">{features[selectedFeature].description}</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={features[selectedFeature].image}
            alt={features[selectedFeature].title}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureTab;
