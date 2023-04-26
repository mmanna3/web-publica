import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './components/pages/error-page';
import { NosotrosPage } from './components/pages/NosotrosPage';
import { TorneosPage } from './components/pages/Torneos/TorneosPage';
import { CopasPage } from './components/pages/CopasPage';
import { NoticiasPage } from './components/pages/NoticiasPage';
import { ContactoPage } from './components/pages/ContactoPage';
import { FichajePage } from './components/pages/FichajePage';
import { ZonasDelTorneo } from './components/pages/Torneos/ZonasDelTorneo';
import { TablasDeLaZona } from './components/pages/Torneos/TablasDeLaZona';
import { ListaDeTablasDePosiciones } from './components/posiciones/ListaDeTablasDePosiciones';
import { ListaDeTablasDelFixture } from './components/fixture/ListaDeTablasDelFixture';
import { ListaDeTablasDeJornadas } from './components/jornadas/ListaDeTablasDeJornadas';
import { ListaDeTablasDeClubes } from './components/clubes/ListaDeTablasDeClubes';
import TiposDeTorneosPage from './components/pages/Torneos/TiposDeTorneosPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tiposdetorneos',
    element: <TiposDeTorneosPage />,
  },
  {
    path: '/torneos-baby',
    // Que esto sea un enum
    element: <TorneosPage tipo='baby' />,
  },
  {
    path: '/torneos-futsal',
    element: <TorneosPage tipo='futsal' />,
  },
  {
    path: '/torneos-futbol-11',
    element: <TorneosPage tipo='futbol11' />,
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
    path: '/torneo/:torneoId/zona/:zonaId/posiciones',
    element: <ListaDeTablasDePosiciones />,
  },
  {
    path: '/torneo/:torneoId/zona/:zonaId/fixture',
    element: <ListaDeTablasDelFixture />,
  },
  {
    path: '/torneo/:torneoId/zona/:zonaId/jornadas',
    element: <ListaDeTablasDeJornadas />,
  },
  {
    path: '/torneo/:torneoId/zona/:zonaId/clubes',
    element: <ListaDeTablasDeClubes />,
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
    path: '/nosotros',
    element: <NosotrosPage />,
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
    <RouterProvider router={router} />,
  </React.StrictMode>,
);
