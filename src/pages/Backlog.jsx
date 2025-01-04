// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
// import { useProject } from '../data/Context/ProjectContext';
// import BacklogDataTable from '../components/AppComponents/BacklogComp/BacklogDataTable';
// import BackLogOperationBar from '../components/AppComponents/BacklogComp/BackLogOperationBar';

// const Backlog = () => {
//   const { project } = useProject();
//   const [tasks, setTasks] = useState([]);

//   return (
//     <div className="flex h-screen">
//       <div>
//         <Sidebar />
//       </div>

//       <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
//         <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Backlog Data"} />

//         <h1 className="text-2xl font-bold my-4">Backlog</h1>

//         <BackLogOperationBar />

//         {/* Container for BacklogDataTable with specific height and scrolling */}
//         <div className="overflow-y-auto max-h-[650px]"> {/* Adjust max-h as needed */}
//           <BacklogDataTable />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Backlog;



import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useProject } from '../data/Context/ProjectContext';
import BackLogOperationBar from '../components/AppComponents/BacklogComp/BackLogOperationBar';
import BacklogDataTable from '../components/AppComponents/BacklogComp/BacklogDataTable';
import axios from 'axios';

const Backlog = () => {
  const { project } = useProject();
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from JSON server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  // Function to add a task
  const addTask = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:5000/tasks', newTask);
      setTasks([...tasks, response.data]); // Add the new task to the state
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id)); // Remove the task from the state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to update a task
  const updateTask = async (updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${updatedTask.id}`, updatedTask);
      setTasks(tasks.map(task => (task.id === updatedTask.id ? response.data : task))); // Update the task in the state
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Backlog Data"} />

        <h1 className="text-2xl font-bold my-4">Backlog</h1>

        {/* Pass functions as props to the operation bar */}
        <BackLogOperationBar addTask={addTask} />

        <div className="overflow-y-auto max-h-[650px]">
          <BacklogDataTable tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
      </div>
    </div>
  );
};

export default Backlog;
