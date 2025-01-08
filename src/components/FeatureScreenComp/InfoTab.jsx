import React from 'react';
import headerImg from '../../assets/featureCoverOne.png'


const InfoTab = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container w-full px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20">
          <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-blue-500 text-blue-500 tracking-wider rounded-t">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>Step 1: Create Project
          </a>
          <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>Step 2: Define Tasks
          </a>
          <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>Step 3: Assign Tasks
          </a>
          <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>Step 4: Track Progress
          </a>
        </div>
        
        <img className="w-full block mx-auto mb-10 object-cover object-center shadow-xl rounded" alt="project management" src={headerImg} />
        
        <div className="flex flex-col text-center w-full">
          <h1 className="text-xl font-bold title-font mb-4 text-gray-900">Effortlessly Manage Projects with Orbit</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Orbit makes project management simple and effective. From creating projects and defining tasks to tracking progress, Orbit helps you stay organized and on top of your deadlines. Collaborate with your team seamlessly and ensure that everyone is aligned towards the same goal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoTab;
