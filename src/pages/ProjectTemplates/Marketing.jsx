import React, { useState } from 'react';
import ProjectCards from '../../components/AppComponents/CreateProjectComp/ProjectCards';
import { Button } from '@mui/material';

const Marketing = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const projectsData = [
    {
      cardImage: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d4d8ed6ce8ab642005abb6d070d05f4e/icons8-app.png',
      projectTitle: 'Project One',
      projectDescription: 'Short description of Project One goes here.',
      projectDetails: {
        title: 'Project One Detailed Info',
        description: 'This template lets you create and share an always-up-to-date roadmap. Save time, have productive discussions, and get aligned in Jira Product Discovery.',
        imageOne: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageOneText: 'This is the first image description.',
        imageTwo: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageTwoText: 'This is the second image description.',
        imageThree: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageThreeText: 'This is the third image description.',
        imageFour: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageFourText: 'This is the fourth image description.',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        workflows: ['Workflow 1', 'Workflow 2', 'Workflow 3'],
        recommendations: ['Recommendation 1', 'Recommendation 2'],
      },
    },
    {
      cardImage: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d4d8ed6ce8ab642005abb6d070d05f4e/icons8-app.png',
      projectTitle: 'Project Two',
      projectDescription: 'Short description of Project Two goes here.',
      projectDetails: {
        title: 'Project Two Detailed Info',
        description: 'This is a more detailed description of Project Two.',
        imageOne: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageOneText: 'Image one description for project two.',
        imageTwo: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageTwoText: 'Image two description for project two.',
        imageThree: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageThreeText: 'Image three description for project two.',
        imageFour: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageFourText: 'Image four description for project two.',
        tags: ['Tag A', 'Tag B'],
        features: ['Feature A', 'Feature B'],
        workflows: ['Workflow A'],
        recommendations: ['Recommendation A'],
      },
    },
    {
      cardImage: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d4d8ed6ce8ab642005abb6d070d05f4e/icons8-app.png',
      projectTitle: 'Project Three',
      projectDescription: 'Short description of Project Three goes here.',
      projectDetails: {
        title: 'Project Three Detailed Info',
        description: 'This is a more detailed description of Project Three.',
        imageOne: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageOneText: 'Image one description for project three.',
        imageTwo: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageTwoText: 'Image two description for project three.',
        imageThree: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageThreeText: 'Image three description for project three.',
        imageFour: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageFourText: 'Image four description for project three.',
        tags: ['Tag X', 'Tag Y'],
        features: ['Feature X', 'Feature Y'],
        workflows: ['Workflow X'],
        recommendations: ['Recommendation X'],
      },
    },
    {
      cardImage: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d4d8ed6ce8ab642005abb6d070d05f4e/icons8-app.png',
      projectTitle: 'Project Four',
      projectDescription: 'Short description of Project Four goes here.',
      projectDetails: {
        title: 'Project Four Detailed Info',
        description: 'This is a more detailed description of Project Four.',
        imageOne: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageOneText: 'Image one description for project four.',
        imageTwo: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageTwoText: 'Image two description for project four.',
        imageThree: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageThreeText: 'Image three description for project four.',
        imageFour: 'https://cdn-share-sprites.flaticon.com/pack/1/1308/1308373-lifestyle_facebook.jpg',
        imageFourText: 'Image four description for project four.',
        tags: ['Tag Z', 'Tag W'],
        features: ['Feature Z', 'Feature W'],
        workflows: ['Workflow Z'],
        recommendations: ['Recommendation Z'],
      },
    },
  ];

  return (
    <div className="p-0">
      <div>
        <h2 className="text-base font-semibold mb-4">Made For You</h2>
        <h3 className="text-sm text-gray-600 mb-8">
          Templates for you based on how similar teams work.
        </h3>
      </div>

      {selectedProject ? (
        <div>
          <button
            onClick={handleBackClick}
            className="mb-2 text-blue-500 text-sm"
          >
            Back to Projects List
          </button>
          <div className="p-6 border rounded-lg bg-white">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
              <div className="col-span-8">
                
                <div className='flex item-center justify-between'>
                <h3 className="text-2xl font-bold">{selectedProject.projectDetails.title}</h3>
                <Button variant='contained'>Choose This Template</Button>
                </div>
              
                <p className="mt-4">{selectedProject.projectDetails.description}</p>
                <div className="mt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <img
                        src={selectedProject.projectDetails.imageOne}
                        alt="Image One"
                        className="w-full rounded-lg"
                      />
                      <p>{selectedProject.projectDetails.imageOneText}</p>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src={selectedProject.projectDetails.imageTwo}
                        alt="Image Two"
                        className="w-full rounded-lg"
                      />
                      <p>{selectedProject.projectDetails.imageTwoText}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <img
                        src={selectedProject.projectDetails.imageThree}
                        alt="Image Three"
                        className="w-full rounded-lg"
                      />
                      <p>{selectedProject.projectDetails.imageThreeText}</p>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src={selectedProject.projectDetails.imageFour}
                        alt="Image Four"
                        className="w-full rounded-lg"
                      />
                      <p>{selectedProject.projectDetails.imageFourText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="sticky top-0 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Tags</h4>
                  <ul>
                    {selectedProject.projectDetails.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mt-4">Features</h4>
                  <ul>
                    {selectedProject.projectDetails.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mt-4">Workflows</h4>
                  <ul>
                    {selectedProject.projectDetails.workflows.map((workflow, index) => (
                      <li key={index}>{workflow}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mt-4">Recommendations</h4>
                  <ul>
                    {selectedProject.projectDetails.recommendations.map((recommendation, index) => (
                      <li key={index}>{recommendation}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6">
          {projectsData.map((project, index) => (
            <ProjectCards
              key={index}
              cardImage={project.cardImage}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketing;
