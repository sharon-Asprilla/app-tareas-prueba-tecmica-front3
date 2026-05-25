import axios from "axios";

const API_URL = "https://6a1470676c7db8aac0548757.mockapi.io/Tarea"; // tu endpoint en MockAPI
const API_URL_USUARIOS = "https://6a1470676c7db8aac0548757.mockapi.io/Usuarios"; // endpoint para registro de sesion

export const getTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

// Función nueva para guardar el inicio de sesión en la API
export const saveUserToApi = (userData) => axios.post(API_URL_USUARIOS, userData);
