import { AxiosResponse, AxiosError } from 'axios';

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const errorInterceptor = async (error: AxiosError): Promise<any> => {
  if (error.response?.status === 401) {
    console.error('Unauthorized! Redirect to login.');
  }
  return Promise.reject(error);
};

export { responseInterceptor, errorInterceptor };
