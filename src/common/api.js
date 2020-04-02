import axios from "axios";

const isProd = () => location.hostname !== "localhost";

console.log("isProd ", isProd());
const api = axios.create({
  baseURL: isProd() ? process.env.API_HOST_PROD : process.env.API_HOST_DEV
});

// instance.interceptors.response.use();
// instance.interceptors.request.use();

console.log("axios instance: ", api);

export default api;
