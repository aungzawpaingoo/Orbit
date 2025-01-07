import React from 'react';
import CardIMGOne from '../../assets/cardOne.png';
import CardIMGTwo from '../../assets/cardTwo.png';
import CardIMGThree from '../../assets/cardThree.png';
import CardIMGFour from '../../assets/cardFour.png';

const FeatureCards = () => {
  return (
    <section className="text-gray-600 body-font bg-white py-12">
      <div className="container mx-auto bg-white">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-medium title-font mb-2 text-gray-900">
              Empower Your Team with Orbit's Project Management Tools
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Manage your projects with precision. Orbit helps your teams stay on track, collaborate efficiently, and meet deadlines with ease.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="p-4 sm:w-1/2 lg:w-1/4">
              <div className="bg-white rounded-lg shadow flex flex-col h-full border-gray-100 border">
                <div className="w-full">
                  <img
                    className="w-full h-52 object-contain rounded-t-lg"
                    src={getImageUrl(idx)}
                    alt="feature"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-2">
                    {getCardSubtitle(idx)}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {getCardTitle(idx)}
                  </h2>
                  <p className="leading-relaxed text-base flex-grow">
                    {getCardDescription(idx)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getImageUrl = (idx) => {
  const images = [CardIMGOne, CardIMGTwo, CardIMGThree, CardIMGFour];
  return images[idx % images.length]; // Return the corresponding image for each card
};

const getCardSubtitle = (idx) => {
  const subtitles = [
    "Seamless Communication",
    "Strategic Planning",
    "Collaborative Workflow",
    "Effective Resource Management",
  ];

  return subtitles[idx % subtitles.length];
};

const getCardTitle = (idx) => {
  const titles = [
    "Task Management",
    "Project Planning",
    "Team Collaboration",
    "Resource Allocation",
  ];

  return titles[idx % titles.length];
};

const getCardDescription = (idx) => {
  const descriptions = [
    "Orbit’s task management feature allows you to assign, track, and collaborate on tasks, ensuring deadlines are met with seamless communication.",
    "Plan your project from start to finish with Orbit’s intuitive tools. Assign milestones, track progress, and align team efforts to achieve your goals.",
    "Boost team collaboration with Orbit. Share updates, discuss ideas, and work together in real time to drive project success.",
    "Allocate resources effectively with Orbit. Track team workload, assign tasks based on availability, and ensure optimal productivity throughout the project.",
  ];

  return descriptions[idx % descriptions.length];
};

export default FeatureCards;
