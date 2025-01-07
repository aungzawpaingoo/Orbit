import React from 'react';

const ScalableCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Manage All From One Place</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Orbit helps you manage your projects with ease, from task tracking to team collaboration, inspired by the efficiency of JIRA.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "Task Management",
              description: "Create, assign, and track tasks with detailed priority and deadline settings, keeping your projects organized and on track.",
              iconPath: "M22 12h-4l-3 9L9 3l-3 9H2", // Example icon path for task management
            },
            {
              title: "Team Collaboration",
              description: "Collaborate in real-time with your team by sharing updates, leaving comments, and resolving tasks seamlessly.",
              iconPath: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12", // Example icon path for team collaboration
            },
            {
              title: "Custom Workflows",
              description: "Create and manage custom workflows that suit your team’s process, ensuring streamlined project management.",
              iconPath: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", // Example icon path for workflows
            },
            {
              title: "Advanced Reporting",
              description: "Generate detailed reports to measure team progress, task completion rates, and project timelines.",
              iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", // Example icon path for reporting
            },
            {
              title: "Integrations",
              description: "Integrate Orbit with popular tools like Slack, GitHub, and Trello to enhance productivity and simplify your workflow.",
              iconPath: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z", // Example icon path for integrations
            },
            {
              title: "Real-Time Notifications",
              description: "Stay up-to-date with real-time notifications about task updates, comments, and project changes.",
              iconPath: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", // Example icon path for notifications
            },
          ].map((feature, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d={feature.iconPath}></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{feature.title}</h2>
                <p className="leading-relaxed text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Start Managing Your Projects with Orbit
        </button>
      </div>
    </section>
  );
};

export default ScalableCard;
