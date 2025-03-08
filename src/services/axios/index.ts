import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Directly use from .env
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 2000,
});

// Simple functions
export const getRequest = (URL: string) => axiosClient.get(URL);
export const postRequest = (URL: string, payload: unknown) => axiosClient.post(URL, payload);
export const patchRequest = (URL: string, payload: unknown) => axiosClient.patch(URL, payload);
export const deleteRequest = (URL: string) => axiosClient.delete(URL);

export default axiosClient;
