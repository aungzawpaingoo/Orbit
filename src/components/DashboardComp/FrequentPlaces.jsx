import React, { useState } from 'react';
import data from '../../data/data.json';

const FrequentPlaces = () => {
  const [activeTab, setActiveTab] = useState('Working On');

  const typeColors = {
    feature: 'bg-green-500',
    userstory: 'bg-blue-500',
    bug: 'bg-red-500',
  };

  return (
    <div className="p-4">
      <div className="flex border-b border-gray-300 mb-4">
        {['Working On', 'Assigned To Me', 'Done'].map((tab) => (
          <button
            key={tab}
            className={`p-2 text-sm transition-colors duration-200 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <tbody>
            {data[activeTab].map((row) => (
              <tr
                key={row.id}
                className="shadow-md py-8"
              >
                <td className="w-10 p-2 text-left">
                  <div
                    className={`w-4 h-4 rounded-full ${typeColors[row.type]}`}
                  ></div>
                </td>
                <td className="p-2 text-left">{row.task}</td>
                <td className="p-2 text-left">{row.assignedDate}</td>
                <td className="p-2 text-left">
                  <img
                    src={row.assignedPersonPhoto}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FrequentPlaces;
