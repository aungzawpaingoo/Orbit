import React from 'react';

const IntoComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-12 bg-white w-full h-full">
      <div className="text-center lg:text-left mb-6 lg:mb-0 lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Great outcomes</h1>
        <h2 className="text-2xl lg:text-3xl mb-6">start with Orbit</h2>
        <h3 className="text-lg lg:text-xl text-gray-600">
          The only project management tool you need to plan and track work across every team.
        </h3>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/3">
        <h4 className="text-lg font-semibold mb-2">Work email</h4>
        <input
          type="email"
          placeholder="you@company.com"
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        <h5 className="text-sm text-gray-500 mb-4">
          Find teammates, plus keep work and life separate by using your work email.
        </h5>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4">Sign Up</button>
        <h3 className="text-center text-gray-600 mb-4">Or Continue With</h3>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-100 py-2 px-4 rounded">Google</button>
          <button className="bg-gray-100 py-2 px-4 rounded">Microsoft</button>
        </div>
      </div>
    </div>
  );
};

export default IntoComponent;
