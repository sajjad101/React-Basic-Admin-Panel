// src/services/api/interceptors/requestInterceptor.ts
import { AxiosRequestConfig } from 'axios';

const requestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export default requestInterceptor;
