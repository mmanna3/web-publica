import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/pages/error-page';
import NosotrosPage from './components/pages/NosotrosPage';
import TorneosPage from './components/pages/Torneos/TorneosPage';
import CopasPage from './components/pages/CopasPage';
import NoticiasPage from './components/pages/NoticiasPage';
import ContactoPage from './components/pages/ContactoPage';
import FichajePage from './components/pages/FichajePage';
import ZonasDelTorneo from './components/pages/Torneos/ZonasDelTorneo';
import Prueba from './components/Prueba';
import TablasDeLaZona from './components/pages/Torneos/TablasDeLaZona';
import ListaDeTablasDePosiciones from './components/common/ListaDeTablasDePosiciones'

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
    path: '/prueba/:pruebaId',
    element: <Prueba />,
  },
  {
    path: '/torneos',
    element: <TorneosPage />,
  },
  {
    path: '/torneo/:torneoId/zonas',
    element: <ZonasDelTorneo />,
  },
  {
    path: '/torneo/:torneoId/zona/:zonaId',
    element: <TablasDeLaZona />,
  },
  {
    path: '/torneo/:torneoId/zona/:zonaId/:tipoDeTabla',
    element: <ListaDeTablasDePosiciones />
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
