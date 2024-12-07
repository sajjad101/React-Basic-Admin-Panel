import axios from 'axios';
import requestInterceptor from './interceptors/requestInterceptor';
import { responseInterceptor, errorInterceptor } from './interceptors/responseInterceptor';


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);


export default axiosInstance;
