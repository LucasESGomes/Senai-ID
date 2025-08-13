import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

//Pages 
import Login from './pages/login.jsx';
main
import Support from './pages/support.jsx';
=======
import Register from './pages/register.jsx'
main

import './index.css';


const router = createBrowserRouter([
main
  {path: '/', element: <h2>Hello World</h2>},
  {path: '/login', element: <Login />},
  {path: '/support', element: <Support />},
=======
  {path: '/register', element: <Register />},
  {path: '/login', element: <Login />}
main
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);