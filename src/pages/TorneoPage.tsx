import { useEffect, useState } from 'react';
import ListaDeTablasDePosiciones from '../components/ListaDeTablasDePosiciones';
/* Interfaces */
import { TablasPorCategoria } from '../interfaces/TablasPorCategoria';
import { Torneos } from '../interfaces/Torneos';
import NavBar from '../components/NavBar'

// interface Props {
//   tablasPorCategoria:TablasPorCategoria[]
// }

function TorneoPage() {
  const [tablasPorCategoria, setTablasPorCategoria] = useState<TablasPorCategoria>([]);

  async function fetchTorneosAperturaClausura() {
    const response = await fetch('https://www.edefi.com.ar/publico/posiciones?zonaId=191');

    const torneos: Torneos = await response.json();

    setTablasPorCategoria(torneos.TablasPorCategoria);
  }

  useEffect(() => {
    fetchTorneosAperturaClausura();
  }, []);

  return (
    <div className='bg-gray-200 p-4'>
      <NavBar />
      <h1 className='my-10 text-center text-3xl font-bold underline'>TorneosPage</h1>
      <nav className='grid grid-cols-3 grid-rows-2 gap-2 bg-gray-100 p-4'>
        <p className='bg-red-500'>Vespertino</p>
        <p className='bg-green-500'>A</p>
        <p className='bg-blue-500'>Apertura</p>
        <p className='col-span-3 bg-blue-400'>Posiciones</p>
      </nav>

      <ListaDeTablasDePosiciones tablasPorCategoria={tablasPorCategoria} />
    </div>
  );
}

export default TorneoPage;
