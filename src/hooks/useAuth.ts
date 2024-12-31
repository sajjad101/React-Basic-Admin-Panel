import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    console.error('Unauthorized! Redirecting to login.');
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  return { isAuthenticated, logout };
};
