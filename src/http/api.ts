import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = "https://movie-portal-backend.herokuapp.com//api";

export const API_URL_IMG = "https://movie-portal-backend.herokuapp.com/"

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config:any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})




$api.interceptors.response.use((config) => {
  return config;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        debugger
          const response = await axios.get<AuthResponse>(`${API_URL}/refresh?token=${localStorage.getItem('tokenRefresh')}`, {withCredentials: true})
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem("tokenRefresh", response.data.refreshToken);
          return $api.request(originalRequest);
      } catch (e) {
          console.log('НЕ АВТОРИЗОВАН')
      }
  }
  throw error;
})

export default $api;
