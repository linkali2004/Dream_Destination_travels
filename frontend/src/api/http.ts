import axios from "axios";

export const http = axios.create({
  baseURL: "https://dream-destination-travels.onrender.com/api",
  timeout: 8000
});
