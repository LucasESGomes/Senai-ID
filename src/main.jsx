import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

//Pages 
import Login from './pages/login.jsx';
import Register from './pages/register.jsx'

import './index.css';


const router = createBrowserRouter([
  {path: '/register', element: <Register />},
  {path: '/login', element: <Login />}
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);