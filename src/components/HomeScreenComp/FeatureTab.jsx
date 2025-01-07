import React, { useState } from 'react';
import CardIMGOne from '../../assets/cardFour.png';
import CardIMGTwo from '../../assets/one.png';
import CardIMGThree from '../../assets/two.png';
import CardIMGFour from '../../assets/four.png';

const FeatureTab = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: '⚡ Plan and organize tasks',
      description:
        'Orbit helps break big ideas down into achievable steps. Organize work, create milestones, and map dependencies.',
      image: CardIMGOne,
    },
    {
      title: 'Align work to goals',
      description:
        'Ensure that projects align with business objectives. Set clear goals and track progress.',
      image: CardIMGTwo,
    },
    {
      title: 'Track work your way',
      description:
        'Track tasks and projects with customizable views tailored to your workflow.',
      image: CardIMGThree,
    },
    {
      title: 'Optimize with insights',
      description:
        'Get actionable insights and reports to optimize workflows and improve efficiency.',
      image: CardIMGFour,
    },
  ];

  return (
    <>
      <h1 className="text-5xl font-bold text-center text-gray-900 mt-12 mb-2 lg:mb-8 w-full">
        Made for complex projects or everyday tasks
      </h1>
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
                  selectedFeature === index ? 'text-blue-600 font-bold' : 'text-gray-900 font-medium' 
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            </button>
          ))}
        </div>

        <div className="lg:w-2/3 w-full flex flex-col lg:flex-row items-center justify-center text-center lg:space-x-6 mt-6 lg:mt-0">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={features[selectedFeature].image}
              alt={features[selectedFeature].title}
              className="rounded-lg shadow-lg w-full max-w-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureTab;
