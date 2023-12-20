import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login';
import Dashboard from "./pages/dashboard/Dashboard"
import AddUser from './pages/adduser/AddUser';
import { Attendance } from './components/attendance/Attendance';
import AdminLogin from './pages/adminLogin/AdminLogin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
  {
    path: "/adminsignin",
    element: <AdminLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
