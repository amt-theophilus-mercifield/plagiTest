import axios from "axios";

export const Api = axios.create({
  baseURL: "https://0681-196-61-44-226.ngrok-free.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
