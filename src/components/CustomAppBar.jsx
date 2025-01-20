// import React, { useContext, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import Typography from '@mui/material/Typography';
// import AppBarIcon from '../assets/LogoWithTextAlign.png';
// import NotificationIcon from '../assets/bell (1).png';
// import HelpIcon from '../assets/interrogation (2).png';
// import SettingsIcon from '../assets/settings (1).png';
// import { UserContext } from '../data/Context/UserContext';
// import { getAuth, signOut } from 'firebase/auth';


// const CustomAppBar = ({ onCreateProject }) => {
//   const { user, setUser } = useContext(UserContext);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfileClick = () => {
//     console.log('Profile clicked');
//     handleMenuClose();
//   };

//   const handleThemeClick = () => {
//     console.log('Theme clicked');
//     handleMenuClose();
//   };

//   const handleLogoutClick = () => {
//     handleMenuClose();

//     const auth = getAuth();
//     signOut(auth)
//     .then(() => {
//       alert('User signed out successfully.');
//       setUser(null);
//       window.location.href = '/';
//     })
//     .catch((error) => {
//       console.error('Error signing out:', error);
//       alert('Error signing out:', error);
//     });
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'white', padding: 0, boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Box>
//           <img
//             src={AppBarIcon}
//             alt="App Bar"
//             style={{ height: '60px', width: '170px', objectFit: 'cover' }}
//           />
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <TextField
//             size="small"
//             variant="outlined"
//             placeholder="Search"
//             sx={{ backgroundColor: 'white', borderRadius: '4px', width: '200px' }}
//           />
//           <TextField
//             select
//             size="small"
//             variant="outlined"
//             sx={{ backgroundColor: 'white', borderRadius: '4px', width: '150px' }}
//             defaultValue=""
//           >
//             <MenuItem value="">Option 1</MenuItem>
//             <MenuItem value="2">Option 2</MenuItem>
//             <MenuItem value="3">Option 3</MenuItem>
//           </TextField>
//           <Button
//             variant="contained"
//             color="primary"
//             size="small"
//             sx={{ textTransform: 'none', fontSize: '14px' }}
//             onClick={onCreateProject}
//           >
//             Create Project
//           </Button>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="error">
//               <img
//                 src={NotificationIcon}
//                 alt="Notifications"
//                 style={{ height: '18px', width: '18px' }}
//               />
//             </Badge>
//           </IconButton>
//           <IconButton color="inherit">
//             <img
//               src={HelpIcon}
//               alt="Help"
//               style={{ height: '18px', width: '18px' }}
//             />
//           </IconButton>
//           <IconButton color="inherit">
//             <img
//               src={SettingsIcon}
//               alt="Settings"
//               style={{ height: '18px', width: '18px' }}
//             />
//           </IconButton>
//           <IconButton onClick={handleMenuOpen}>
//             <Avatar
//               alt="User Profile"
//               src={user.photoURL}
//               sx={{
//                 border: '2px solid white',
//                 borderRadius: '50%',
//               }}
//             />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             PaperProps={{
//               sx: {
//                 width: '300px', 
//                 backgroundColor: 'white', 
//                 color: 'black', 
//                 borderRadius: '6px',
//                 padding: '4px', 
//               },
//             }}
//           >
//           <Box
//   sx={{
//     padding: 1,
//     backgroundColor: 'white',
//     borderRadius: '0px',
//     fontFamily: 'Roboto, sans-serif',
//   }}
// >
//   <Typography
//     variant="subtitle2"
//     fontWeight="bold"
//     sx={{ fontSize: '12px', color: '#444', marginBottom: 1 }}
//   >
//     Account Information
//   </Typography>
//   <Box
//     sx={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: 1,
//     }}
//   >
//     <Avatar
//       alt="User Profile"
//       src={user.photoURL}
//       sx={{
//         width: '35px',
//         height: '35px',
//         marginTop: '10px',
//         marginBottom: '10px',
//       }}
//     />
//     <Box>
//       <Typography
//         variant="h6"
//         fontWeight="semibold"
//         sx={{ fontSize: '13.5px', color: '#222' }}
//       >
//         {user.displayName}
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{ fontSize: '11.5px', color: '#666', marginTop: '2px' }}
//       >
//         {user.email}
//       </Typography>
//     </Box>
//   </Box>
// </Box>
// <MenuItem
//   onClick={handleProfileClick}
//   sx={{
//     fontSize: '14px',
//     color: '#555',
//     fontFamily: 'Roboto, sans-serif',
//     '&:hover': { backgroundColor: 'white' },
//     marginTop: '5px',
//     marginBottom: '5px',
//   }}
// >
//   Profile
// </MenuItem>
// <MenuItem
//   onClick={handleThemeClick}
//   sx={{
//     fontSize: '14px',
//     color: '#555',
//     fontFamily: 'Roboto, sans-serif',
//     '&:hover': { backgroundColor: 'white' },
//     marginTop: '5px',
//     marginBottom: '5px',
//   }}
// >
//   Theme
// </MenuItem>
// <MenuItem
//   onClick={handleLogoutClick}
//   sx={{
//     fontSize: '14px',
//     color: '#555',
//     fontFamily: 'Roboto, sans-serif',
//     '&:hover': { backgroundColor: 'white' },
//     marginTop: '5px',
//     marginBottom: '5px',
//   }}
// >
//   Logout
// </MenuItem>


//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default CustomAppBar;


import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import AppBarIcon from '../assets/LogoWithTextAlign.png';
import NotificationIcon from '../assets/bell (1).png';
import HelpIcon from '../assets/interrogation (2).png';
import SettingsIcon from '../assets/settings (1).png';
import { UserContext } from '../data/Context/UserContext';
import { getAuth, signOut } from 'firebase/auth';


const CustomAppBar = ({ onCreateProject }) => {
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    handleMenuClose();
  };

  const handleThemeClick = () => {
    console.log('Theme clicked');
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    handleMenuClose();

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('User signed out successfully.');
        setUser(null);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error signing out:', error);
        alert('Error signing out:', error);
      });
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', padding: 0, boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <img
            src={AppBarIcon}
            alt="App Bar"
            style={{ height: '60px', width: '170px', objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search"
            sx={{ backgroundColor: 'white', borderRadius: '4px', width: '200px' }}
          />
          <TextField
            select
            size="small"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: '4px', width: '150px' }}
            defaultValue=""
          >
            <MenuItem value="">Option 1</MenuItem>
            <MenuItem value="2">Option 2</MenuItem>
            <MenuItem value="3">Option 3</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ textTransform: 'none', fontSize: '14px' }}
            onClick={onCreateProject}
          >
            Create Project
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <img
                src={NotificationIcon}
                alt="Notifications"
                style={{ height: '18px', width: '18px' }}
              />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <img
              src={HelpIcon}
              alt="Help"
              style={{ height: '18px', width: '18px' }}
            />
          </IconButton>
          <IconButton color="inherit">
            <img
              src={SettingsIcon}
              alt="Settings"
              style={{ height: '18px', width: '18px' }}
            />
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Avatar
              alt="User Profile"
              src={user.photoURL}
              sx={{
                border: '2px solid white',
                borderRadius: '50%',
              }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                width: '300px',
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '6px',
                padding: '4px',
              },
            }}
          >
            <Box
              sx={{
                padding: 1,
                backgroundColor: 'white',
                borderRadius: '0px',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ fontSize: '12px', color: '#444', marginBottom: 1 }}
              >
                Account Information
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Avatar
                  alt="User Profile"
                  src={user.photoURL}
                  sx={{
                    width: '35px',
                    height: '35px',
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="semibold"
                    sx={{ fontSize: '13.5px', color: '#222' }}
                  >
                    {user.displayName}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: '11.5px', color: '#666', marginTop: '2px' }}
                  >
                    {user.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <MenuItem
              onClick={handleProfileClick}
              sx={{
                fontSize: '14px',
                color: '#555',
                fontFamily: 'Roboto, sans-serif',
                '&:hover': { backgroundColor: 'white' },
                marginTop: '5px',
                marginBottom: '5px',
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleThemeClick}
              sx={{
                fontSize: '14px',
                color: '#555',
                fontFamily: 'Roboto, sans-serif',
                '&:hover': { backgroundColor: 'white' },
                marginTop: '5px',
                marginBottom: '5px',
              }}
            >
              Theme
            </MenuItem>
            <MenuItem
              onClick={handleLogoutClick}
              sx={{
                fontSize: '14px',
                color: '#555',
                fontFamily: 'Roboto, sans-serif',
                '&:hover': { backgroundColor: 'white' },
                marginTop: '5px',
                marginBottom: '5px',
              }}
            >
              Logout
            </MenuItem>


          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
