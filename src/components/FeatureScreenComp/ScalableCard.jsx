import React from 'react';
import TaskManagement from '../../assets/list-check.png';
import TeamCollaboration from '../../assets/hands-together.png';
import CustomWorkflows from '../../assets/workflow-alt.png';
import AdvancedReporting from '../../assets/newspaper.png';
import Integrations from '../../assets/puzzle-piece-integration.png';
import RealTimeNotifications from '../../assets/bell-notification-social-media.png';

const ScalableCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900">Manage All From One Place</h1>
          <p className="lg:w-1/2 w-full font-medium mt-4 leading-relaxed text-gray-800">
            Orbit helps you manage your projects with ease, from task tracking to team collaboration.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "Task Management",
              description: "Create, assign, and track tasks with detailed priority and deadline settings, keeping your projects organized and on track.",
              iconImage: TaskManagement,
            },
            {
              title: "Team Collaboration",
              description: "Collaborate in real-time with your team by sharing updates, leaving comments, and resolving tasks seamlessly.",
              iconImage: TeamCollaboration,
            },
            {
              title: "Custom Workflows",
              description: "Create and manage custom workflows that suit your team’s process, ensuring streamlined project management.",
              iconImage: CustomWorkflows,
            },
            {
              title: "Advanced Reporting",
              description: "Generate detailed reports to measure team progress, task completion rates, and project timelines.",
              iconImage: AdvancedReporting,
            },
            {
              title: "Integrations",
              description: "Integrate Orbit with popular tools like Slack, GitHub, and Trello to enhance productivity and simplify your workflow.",
              iconImage: Integrations,
            },
            {
              title: "Real-Time Notifications",
              description: "Stay up-to-date with real-time notifications about task updates, comments, and project changes.",
              iconImage: RealTimeNotifications,
            },
          ].map((feature, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src={feature.iconImage}
                    alt={feature.title}
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{feature.title}</h2>
                <p className="leading-relaxed text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default ScalableCard;
