import { Link, useParams } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { Zona } from '../../../interfaces/Zona';
import { GenericButton } from '../../common/GenericButton';

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
          <GenericButton
            key={zonaAperturaId}
            path={`/torneo/${torneoId}/zona/${zonaAperturaId}`}
            content={descripcion}
          />
        ))}
      </div>
    </main>
  );
};
