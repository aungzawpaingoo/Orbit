import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import ResponsiveGrid from '../components/AppComponents/DashboardComp/ResponsiveGrid';
import { useLocation } from 'react-router-dom';
import { useProject } from '../data/Context/ProjectContext';
import InAppBar from '../components/AppComponents/CommonComp/InAppBar';
import { Typography } from '@mui/material';

const Dashboard = () => {

  const { project } = useProject();


  return (

    <>

    

    <div className="flex h-screen">
      
      
      <div className="">
        <Sidebar />
      </div>

      
      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Report View"}/>

        {/* <h1 className="text-2xl font-bold my-4">Summary</h1> */}
        <div className='my-4'>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>Summary</Typography>
        </div>

        <ResponsiveGrid />
        
      </div>

    </div>

    </>
  );
};

export default Dashboard;

// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
// import ResponsiveGrid from '../components/AppComponents/DashboardComp/ResponsiveGrid';
// import { useProject } from '../data/Context/ProjectContext';
// import InAppBar from '../components/AppComponents/CommonComp/InAppBar';

// const Dashboard = () => {
//   const { project } = useProject();

//   return (
//     <div className="h-screen flex flex-col">
//       {/* AppBar - Fixed at the Top */}
//       <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-500 z-30">
//         <InAppBar />
//       </div>

//       {/* Sidebar and Main Content */}
//       <div className="flex flex-1 mt-16">
//         {/* Sidebar - Fixed */}
//         <div className="fixed top-16 left-0 text-white z-20">
//           <Sidebar />
//         </div>

//         {/* Scrollable Main Content */}
//         <div className="flex-1 ml-64 p-6 overflow-y-auto bg-white">
//           <TitleBreadCrump
//             titleOne={project.name}
//             titleTwo={project.key}
//             titleThree={"Report View"}
//           />

//           <h1 className="text-2xl font-bold my-4">Summary</h1>

//           <ResponsiveGrid />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

