import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

const instanceData = {
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
};

export const publicAxiosInstance = axios.create(instanceData);
