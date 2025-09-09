import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

//Pages 
import Login from './pages/login.jsx';
import Support from './pages/support.jsx';
import RegisterStudent from './pages/registerStudent.jsx'
import DelayControl from './pages/delayControl.jsx'; 
import RegisterEmployee from './pages/registerEmployee.jsx';

import './index.css';


const router = createBrowserRouter([
  {path: '/', element: <RegisterStudent />},
  {path: '/login', element: <Login />},
  {path: '/suporte', element: <Support />},
  {path: '/atrasos', element: <DelayControl />},
  {path: '/registrar-aluno', element: <RegisterStudent />},
  {path: '/registrar-funcionario', element: <RegisterEmployee />},
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);