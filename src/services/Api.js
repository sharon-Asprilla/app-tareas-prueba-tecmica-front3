import axios from "axios";

const API_URL = "https://6a1470676c7db8aac0548757.mockapi.io/Tarea";
const API_URL_USUARIOS = "https://6a1470676c7db8aac0548757.mockapi.io/Usuarios";

export const getTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

export const saveUserToApi = (userData) => axios.post(API_URL_USUARIOS, userData);
