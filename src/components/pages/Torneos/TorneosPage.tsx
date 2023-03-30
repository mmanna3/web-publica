import { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import { Link } from 'react-router-dom';
import { Torneo } from '../../../interfaces/Torneo';

function TorneosPage() {
  const [torneos, setTorneos] = useState<Torneo[]>([]);

  async function fetchTorneosAperturaClausura() {
    const response = await fetch(
      'https://www.edefi.com.ar/publico/TorneosAperturaClausura?anio=2022',
    );

    const torneos: Torneo[] = await response.json();

    setTorneos(torneos);
  }

  useEffect(() => {
    fetchTorneosAperturaClausura();
  }, []);

  return (
    <main className='bg-gray-200 p-4'>
      <NavBar />
      <h1 className='my-10 text-center text-3xl font-bold underline'>TorneosPage</h1>

      <div className='mb-10 grid grid-cols-3 gap-3'>
        {torneos.map(({ id, descripcion }) => (
          <Link
            key={id}
            to={`/torneo/${id}/zonas`}
            className='min-h-[100px] min-w-[300px] rounded-lg bg-blue-600 text-center text-lg text-white shadow-xl'
          >
            {descripcion}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default TorneosPage;
