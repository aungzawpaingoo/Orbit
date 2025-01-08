import React from 'react'
import Video from '../../assets/OrbitVideo.mp4'

const UsersDetails = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white body-font py-20 rounded-xl">
      {/* Video background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0 rounded-xl" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video and enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10 rounded-xl"></div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap rounded-2xl relative z-20">
        {/* Content Section */}
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 z-10 relative">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-white">Your All-in-One Project Management Hub</h1>
            <div className="leading-relaxed text-xs">
              Orbit redefines the way you manage your projects. Designed for freelancers, small teams, and growing businesses, it brings all your tools together on a single platform. Effortlessly collaborate, manage tasks, track progress, and ensure your projects are always on track—wherever you are.
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
            <h2 className="title-font font-medium text-xl text-white">Streamline Your Workflow</h2>
            <p className="leading-relaxed mt-2 text-xs">
              Orbit's intuitive interface helps you stay organized and focused. Prioritize tasks with ease and ensure that nothing falls through the cracks. With smart task lists and project timelines, you can track progress and meet deadlines—every time. Say goodbye to chaos and hello to clarity.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
            <h2 className="title-font font-medium text-xl text-white">Collaborate in Real-Time</h2>
            <p className="leading-relaxed mt-2 text-xs">
              Collaboration has never been easier. Share files, leave feedback, and communicate instantly with your team, no matter where they are. Orbit keeps everyone in sync, fostering real-time collaboration that makes your team more effective and your projects more successful. Work together, achieve more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UsersDetails
