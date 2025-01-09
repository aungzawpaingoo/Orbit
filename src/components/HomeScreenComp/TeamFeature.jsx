import React from 'react';
import reportGIF from '../../assets/chart-kanban.png';
import collabGIF from '../../assets/team-check-alt.png';
import taskGIF from '../../assets/responsability.png';
import { useNavigate } from 'react-router-dom';

const TeamFeature = () => {

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signUp');
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-gray-900 mb-4">
            Orbit: Empowering Teams to Achieve More
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Spend less time trying to get aligned and create more time driving projects forward with confidence.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 mb-5 flex-shrink-0">
              <img src={collabGIF} alt="Seamless Collaboration" className="rounded-none" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Seamless Collaboration
              </h2>
              <p className="leading-relaxed text-base">
                Orbit brings your team together in one place. With features like task assignments, real-time updates, and team chat, collaboration has never been easier.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 mb-5 flex-shrink-0">
              <img src={taskGIF} alt="Streamlined Task Management" className="rounded-none" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Streamlined Task Management
              </h2>
              <p className="leading-relaxed text-base">
                With Orbit’s task management features, assign and track tasks with ease. Stay on top of deadlines and ensure smooth project flow with visual timelines.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 mb-5 flex-shrink-0">
              <img src={reportGIF} alt="Real-Time Reporting" className="rounded-none" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Real-Time Reporting
              </h2>
              <p className="leading-relaxed text-base">
                Orbit provides powerful reporting tools to track project performance in real-time. Get insights into project progress, resource allocation, and team productivity.
              </p>
            </div>
          </div>
        </div>
        <button onClick={navigateToSignup} className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Get Started with Orbit
        </button>
      </div>
    </section>
  );
};

export default TeamFeature;
