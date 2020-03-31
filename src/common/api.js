import axios from "axios";

const isProd = () => location.hostname !== "localhost";

const api = axios.create({
  baseURL: isProd ? process.env.API_HOST_DEV : process.env.API_HOST_PROD
});

// instance.interceptors.response.use();
// instance.interceptors.request.use();

console.log("axios instance: ", api);

export default api;
