import {  Navigate } from "react-router-dom";
import Login from '@/features/accounting/login'; 
import Register from '@/features/accounting/Register'; 

const accountingRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    index: true,
    element: <Navigate to="/login" replace />
  },
  {
    path: "/register",
    element: <Register />,
  }
];

export default accountingRoutes;
