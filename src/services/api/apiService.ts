import axiosInstance from './axiosInstance';

export const fetchUsers = async () => {
  const response = await axiosInstance.get('./users');
  return response.data;
};

