import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
  timeout: 1000,
});

export default instance;
