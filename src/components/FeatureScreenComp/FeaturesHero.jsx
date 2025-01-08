import React from 'react';
import headerImg from '../../assets/featureCoverOne.png'

const FeaturesHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Take Control of Your Projects
            <br className="hidden lg:inline-block" /> with Orbit's Powerful Tools
          </h1>
          <p className="mb-8 leading-relaxed">
            Orbit streamlines your project management by providing intuitive task tracking, team collaboration, and agile workflows. Whether you're managing a small team or large-scale projects, Orbit helps you stay organized and focused on delivering results.
          </p>
          <div className="flex justify-center">
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-center shadow-md h-80 rounded" alt="hero" src={headerImg} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
