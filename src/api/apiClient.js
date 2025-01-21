import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://orbit-backend-ajte.onrender.com/api/',
    headers: {
     'Content-Type': 'application/json',
    },
});

export default apiClient;