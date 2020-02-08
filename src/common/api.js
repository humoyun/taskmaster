import axios from "axios";

// const isProd = () => location.hostname !== "localhost";

const instance = axios.create({
  baseURL: process.env.API_HOST_DEV + "/v1"
});

// instance.interceptors.response.use();
// instance.interceptors.request.use();

export default instance;
