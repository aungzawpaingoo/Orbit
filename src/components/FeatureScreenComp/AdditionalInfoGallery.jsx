import React from 'react';

const AdditionalInfoGallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Seamless Project Management</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Effortlessly manage your tasks, collaborate with teams, and track progress in real-time. Stay organized, meet deadlines, and increase productivity with robust project management tools.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="project overview" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="task management" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="collaboration features" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="real-time updates" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="progress tracking" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="team collaboration" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfoGallery;
