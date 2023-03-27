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
  const { torneoId } = useParams()
  
  async function fetchZonas() {
    // eslint-disable-next-line quotes
    const response = fetch(`https://edefi.com.ar/publico/zonas?${torneoId}`);

    const zonas: Zona[] = await (await response).json();

    setZonas(zonas);
  }

  useEffect(() => {
    fetchZonas();
  }, []);

  return (
    <main className='flex justify-center'>
      <div className='grid grid-cols-1 grid-row-3 gap-4 m-20'>
        {zonas.map((zona) => (
          <Link
            key={zona.zonaAperturaId}
            to='/torneos/LAZONAID'
            className='min-h-[100px] w-[500px] rounded-lg bg-green-600 text-white text-center shadow-xl  text'
          >
            {zona.descripcion}
          </Link>
        ))}
      </div>
    </main>
  );
}
