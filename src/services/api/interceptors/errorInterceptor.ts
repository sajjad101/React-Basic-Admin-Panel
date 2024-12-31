import { AxiosError } from 'axios';
import { useAuth } from '../../../hooks/useAuth';

const errorInterceptor = async (error: AxiosError): Promise<any> => {
    const { logout } = useAuth();
    if (error.response?.status === 401) {
        logout()
    }
    return Promise.reject(error);
};

export default errorInterceptor;
