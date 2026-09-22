import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 5000,
});

export default api;

export const getSystemStatus = () => api.get("/status");

export const getSensors = () => api.get("/sensor");

export const getLandmarks = () => api.get("/landmarks");

export const getMapping = () => api.get("/mapping");

export const getAnalytics = () => api.get("/analytics");

export const getVoiceData = () => api.get("/voice");