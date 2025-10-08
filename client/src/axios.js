import axios from "axios";

const instance = axios.create({
  baseURL: "https://event-management-backend-m0kg.onrender.com",
  withCredentials: true
});

export default instance;
