import { Link, useParams } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { Zona } from '../../../interfaces/Zona';

export const ZonasDelTorneo = () => {
  const { torneoId } = useParams();
  const { data, isFetching } = useFetch<Zona>(`zonas?torneoId=${torneoId}`);

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }

  return (
    <main className='flex justify-center'>
      <div className='grid-row-3 m-20 grid grid-cols-1 gap-4'>
        {data.map(({ descripcion, zonaAperturaId }) => (
          <Link
            key={zonaAperturaId}
            to={`/torneo/${torneoId}/zona/${zonaAperturaId}`}
            className='text min-h-[100px] w-[500px] rounded-lg bg-green-600 text-center text-white  shadow-xl'
          >
            {descripcion}
          </Link>
        ))}
      </div>
    </main>
  );
};
