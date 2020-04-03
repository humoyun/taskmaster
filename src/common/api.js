import axios from "axios";

const isProd = () => location.hostname !== "localhost";

const api = axios.create({
  baseURL: isProd() ? process.env.API_HOST_PROD : process.env.API_HOST_DEV
});

// instance.interceptors.response.use();
// instance.interceptors.request.use();

export default api;
