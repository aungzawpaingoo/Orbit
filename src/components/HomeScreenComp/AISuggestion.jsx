import React from 'react';
import AIIcon from '../../assets/react.svg';
import AICover from '../../assets/planet (1).png';

const AISuggestion = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-300 via-blue-600 to-blue-800 flex flex-col items-center justify-center">

<img 
  src={AICover} 
  alt="AI Cover" 
  className="object-contain w-full h-1/5 max-w-2xl rounded-xl mb-6 transform scale-x-[-1]" 
/>

      <h1 className="text-white text-5xl font-bold mb-4">Coming Soon!</h1>
      <h1 className="text-white text-2xl font-bold mb-4">Your Next Move, Suggested by AI</h1>
      <h3 className="text-white text-center mb-6 max-w-3xl mx-auto">
        Let Orbit’s AI-powered suggestions help you plan your next big step. Our intelligent assistant
        analyzes your goals and automatically generates tasks and action items to ensure your success.
      </h3>
      <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-md transition duration-300 hover:bg-blue-100">
        Explore Orbit Intelligence
      </button>
    </div>
  );
};

export default AISuggestion;
