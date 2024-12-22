import React from 'react';
import AIIcon from '../../assets/react.svg';
import AICover from '../../assets/AI_Image.png';

const AISuggestion = () => {
  return (
    <div className="w-full bg-blue-500 h-screen relative rounded-xl">
      <div className="absolute inset-0 flex flex-col pt-10 items-center text-center">
        <img src={AIIcon} alt="AI Icon" className="max-w-xs h-20 mb-4" />
        <h1 className="text-white text-2xl font-semibold mb-2">Your next move, suggested by AI</h1>
        <h3 className="text-white mb-4">Atlassian Intelligence takes your big ideas and automatically suggests the tasks to help get it done.</h3>
        <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-md mb-4">Explore Orbit Intelligence</button>
        
        
        <img 
          src={'https://via.placeholder.com/400x300?text=Plan+and+Organize+Tasks'} 
          alt="AI Cover" 
          className="object-cover w-full h-4/5 max-w-5xl mb-4 rounded-xl pb-10" 
        />
      </div>
    </div>
  );
};

export default AISuggestion;
