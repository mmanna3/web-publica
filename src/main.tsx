import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/error-page';
import NosotrosPage from './pages/NosotrosPage';
import TorneoPage from './pages/TorneoPage';
import CopasPage from './pages/CopasPage';
import NoticiasPage from './pages/NoticiasPage';
import ContactoPage from './pages/ContactoPage';
import FichajePage from './pages/FichajePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/nosotros',
    element: <NosotrosPage />,
  },
  {
    path: '/torneos',
    element: <TorneoPage />,
  },
  {
    path: '/copas',
    element: <CopasPage />,
  },
  {
    path: '/noticias',
    element: <NoticiasPage />,
  },
  {
    path: '/contacto',
    element: <ContactoPage />,
  },
  {
    path: '/fichaje',
    element: <FichajePage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
