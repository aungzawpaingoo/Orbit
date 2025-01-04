import axios from "axios";

const API_URL = 'http://localhost:5000/tasks';

export const fetchTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        alert('Error Fetching Data : ', error);
        throw error;
    }
};

export const addTask = async (newTask) => {
    try {
        const response = await axios.post(API_URL, newTask);
        alert('Backlog Added Succesfully');
        return response.data;
    } catch (error) {
        alert('Error Adding Data : ', error);
    }
};

export const deletetask = async(id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        alert('Backlog Deleted Succesfully');
    } catch (error) {
        alert('Error Deleting Backlog : ', error);
    }
};

export const updateTask = async (updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
      alert('Backlog Updated Succesfully');
      return response.data;
    } catch (error) {
      alert('Error updating task:', error);
      throw error;
    }
  };