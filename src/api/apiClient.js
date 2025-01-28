import axios from 'axios';

const apiClient = axios.create({
     baseURL: 'https://orbit-backend-ajte.onrender.com/api/',
    // baseURL:'http://localhost:3000/api',
    headers: {
     //'Content-Type': 'application/json',
    },
});

export const getImageUrl = (imagePath) => {
      return `https://orbit-backend-ajte.onrender.com/${imagePath}`; 
    // return `http://localhost:3000/${imagePath}`; 
  };

export default apiClient;