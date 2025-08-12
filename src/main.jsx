import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

//Pages 
import Login from './pages/login.jsx';

import './index.css';

const router = createBrowserRouter([
  {path: '/', element: <h2>Hello World</h2>},
  {path: '/login', element: <Login />}
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);