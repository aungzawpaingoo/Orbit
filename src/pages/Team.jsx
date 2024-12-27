import React from 'react';
import Sidebar from '../components/Sidebar';

const Team = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-semibold">Team Content</h1>
      </div>
    </div>
  );
};

export default Team;
