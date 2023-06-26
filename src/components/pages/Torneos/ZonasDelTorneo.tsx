import { useParams } from 'react-router-dom';
import { useFetch } from '../../common/hooks/useFetch';
import { Zona } from '../../../interfaces/api';
import { GenericButton } from '../../common/GenericButton';
import { Spinner } from '../../common/Spinner';
import { flatZonas } from '../../common/logic';

export const ZonasDelTorneo = () => {
  const { torneoId } = useParams();
  const { data, isFetching } = useFetch<Zona>(`zonas?torneoId=${torneoId}`);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        {flatZonas(data).map((zona) => (
          <GenericButton
            key={zona?.id}
            path={`/torneo/${torneoId}/zona/${zona?.id}`}
            content={zona.descripcion}
          />
        ))}
      </div>
    </>
  );
};
