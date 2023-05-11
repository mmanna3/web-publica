import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Zona } from '../../../interfaces/api';
import { GenericButton } from '../../common/GenericButton';

export const ZonasDelTorneo = () => {
  const { torneoId } = useParams();
  const { data, isFetching } = useFetch<Zona>(`zonas?torneoId=${torneoId}`);

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }

  return (
    <main className='flex justify-center'>
      <div className='mt-[5%] flex flex-col items-center gap-5'>
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
