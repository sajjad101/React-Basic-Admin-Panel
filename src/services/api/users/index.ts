import axiosInstance from '../axiosInstance';

// Fetch all users
export const fetchUsers = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

// Create a user
export const createUser = async (user: Record<string, any>) => {
  const response = await axiosInstance.post('/users', user);
  return response.data;
};

// Fetch a single user by ID
export const fetchUserById = async (id: string) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};
