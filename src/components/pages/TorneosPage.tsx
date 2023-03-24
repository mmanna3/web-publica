import { useEffect, useState } from 'react';
import NavBar from '../common/NavBar';
import { Link } from 'react-router-dom';

interface Torneo {
  descripcion: string;
  id: string;
  formato: string;
}

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
    <div className='bg-gray-200 p-4'>
      <NavBar />
      <h1 className='my-10 text-center text-3xl font-bold underline'>TorneosPage</h1>

      {torneos.map((torneo) => (
        <div key={torneo.id} className='mb-10 grid grid-cols-3 gap-3'>
          <Link
            to={`/torneos/${torneo.id}`}
            className='min-h-[100px] min-w-[300px] rounded-lg bg-blue-600 shadow-xl'
          >
            {torneo.descripcion}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TorneosPage;
