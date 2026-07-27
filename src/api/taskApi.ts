import axios from 'axios';
import { Task } from '../types/Task';

// const API_URL = 'http://localhost:8080/api/v2/tasks';

const API_URL = 'https://basic-task-app-backend-production.up.railway.app/api/v2/tasks';

export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await axios.post(API_URL + "/create", task);
    return response.data;
};

export const updateTask = async (id: string, task: Partial<Task>): Promise<Task> => {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};