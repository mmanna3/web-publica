import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/pages/error-page';
import NosotrosPage from './components/pages/NosotrosPage';
import TorneoPage from './components/pages/TorneoPage';
import CopasPage from './components/pages/CopasPage';
import NoticiasPage from './components/pages/NoticiasPage';
import ContactoPage from './components/pages/ContactoPage';
import FichajePage from './components/pages/FichajePage';

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
    path: '/torneos/:torneoId',
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
