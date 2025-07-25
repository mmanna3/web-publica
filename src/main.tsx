import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorNotFound } from './components/common/ErrorNotFound';
import { NosotrosPage } from './components/pages/NosotrosPage';
import { TipoDeTorneo } from './components/pages/Torneos/TipoDeTorneo';
import { CopasPage } from './components/pages/Copas/CopasPage';
import { NoticiaPage, NoticiasPage } from './components/pages/NoticiasPage';
import { ContactoPage } from './components/pages/ContactoPage';
import { FichajePage } from './components/pages/FichajePage';
import { ZonasDelTorneo } from './components/pages/Torneos/ZonasDelTorneo';
import { OpcionesDeLaZona } from './components/pages/Torneos/OpcionesDeLaZona';
import { ListaDeTablasDePosiciones } from './components/common/TablasDePosiciones/ListaDeTablasDePosiciones';
import { ListaDeTablasDelFixture } from './components/common/TablasDelFixture/ListaDeTablasDelFixture';
import { ListaDeTablasDeJornadas } from './components/common/TablasDeJornadas/ListaDeTablasDeJornadas';
import { ListaDeTablasDeClubes } from './components/common/TablasDeCubes/ListaDeTablasDeClubes';
import { TorneosPage } from './components/pages/Torneos/TorneosPage';
import { InicioPage } from './components/pages/InicioPage';
import TipoDeCopa from './components/pages/Copas/TipoDeCopa';
import { ListaDeTablasDeSanciones } from './components/common/TablaDeSanciones/ListaDeTablasDeSanciones';
import { LlaveEliminatoria } from './components/pages/Torneos/LlaveEliminatoria';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: '/',
        element: <InicioPage />,
      },
      {
        path: '/torneos',
        element: <TorneosPage />,
      },
      {
        path: '/torneos/baby',
        element: <TipoDeTorneo tipo='baby' />,
      },
      {
        path: '/torneos/futsal',
        element: <TipoDeTorneo tipo='futsal' />,
      },
      {
        path: '/torneos/futbol-11',
        element: <TipoDeTorneo tipo='futbol11' />,
      },
      {
        path: '/copas',
        element: <CopasPage />,
      },
      {
        path: '/copas/delaliga',
        element: <TipoDeCopa tipo='copaDeLaLiga' />,
      },
      {
        path: '/copas/deprimera',
        element: <TipoDeCopa tipo='copaDePrimera' />,
      },
      {
        path: '/copas/copaedefi',
        element: <TipoDeCopa tipo='copaEdefi' />,
      },
      {
        path: '/copas/torneoverano',
        element: <TipoDeCopa tipo='torneoDeVerano' />,
      },
      {
        path: '/noticias',
        element: <NoticiasPage />,
      },
      {
        path: '/noticias/:noticiaId',
        element: <NoticiaPage />,
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
      {
        path: '/torneo/:torneoId/llaveeliminatoria',
        element: <LlaveEliminatoria />,
      },
      {
        path: '/torneo/:torneoId/zonas',
        element: <ZonasDelTorneo />,
      },
      {
        path: '/torneo/:torneoId/zona/:zonaId',
        element: <OpcionesDeLaZona />,
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
        path: '/torneo/:torneoId/zona/:zonaId/sanciones',
        element: <ListaDeTablasDeSanciones />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
