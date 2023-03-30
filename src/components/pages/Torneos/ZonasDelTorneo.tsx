import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Zona {
  descripcion: string;
  zonaAperturaId: number;
  zonaClausuraId: number;
  zonaRelampagoId: null;
}

export default function ZonasDelTorneo() {
  const [zonas, setZonas] = useState<Zona[]>([]);
  const { torneoId } = useParams();
  // console.log(torneoId);

  async function fetchZonas() {
    // eslint-disable-next-line quotes
    const response = fetch(`https://edefi.com.ar/publico/zonas?${torneoId}`);

    const zonasData: Zona[] = await (await response).json();

    setZonas(zonasData);
  }

  useEffect(() => {
    fetchZonas();
  }, []);

  return (
    <main className='flex justify-center'>
      <div className='grid-row-3 m-20 grid grid-cols-1 gap-4'>
        {zonas.map(({ descripcion, zonaAperturaId }) => (
          <Link
            key={zonaAperturaId}
            to={`/torneo/${torneoId}/zona/zonaId=${zonaAperturaId}`}
            className='text min-h-[100px] w-[500px] rounded-lg bg-green-600 text-center text-white  shadow-xl'
          >
            {descripcion}
          </Link>
        ))}
      </div>
    </main>
  );
}
