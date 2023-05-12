import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Zona } from '../../../interfaces/api';
import { GenericButton } from '../../common/GenericButton';
import { Spinner } from '../../common/Spinner'

export const ZonasDelTorneo = () => {
  const { torneoId } = useParams();
  const { data, isFetching } = useFetch<Zona>(`zonas?torneoId=${torneoId}`);

  const getZonaId = (zona: Zona) =>
    zona.zonaAperturaId || zona.zonaClausuraId || zona.zonaRelampagoId;

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <main className='flex justify-center'>
      <div className='mt-[5%] flex flex-col items-center gap-5'>
        {data.map((zona) => (
          <GenericButton
            key={getZonaId(zona)}
            path={`/torneo/${torneoId}/zona/${getZonaId(zona)}`}
            content={zona.descripcion}
          />
        ))}
      </div>
    </main>
  );
};
