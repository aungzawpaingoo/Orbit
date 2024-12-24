import React from 'react';

const GreetingTitle = ({title}) => {
  return (
    <div className="pt-0 pb-8 bg-white w-full border border-b-gray-300 border-t-0 border-l-0 border-r-0">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center sm:text-left">
        {title}
      </h1>
    </div>
  );
};

export default GreetingTitle;
