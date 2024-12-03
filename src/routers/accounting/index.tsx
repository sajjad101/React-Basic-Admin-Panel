import {  Navigate } from "react-router-dom";
import Login from '@/pages/accounting/login'; 

const accountingRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    index: true,
    element: <Navigate to="/login" replace />
  }
];

export default accountingRoutes;
