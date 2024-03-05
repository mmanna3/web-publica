import { useParams } from 'react-router-dom';
import { useFetch } from '../../common/hooks/useFetch';
import { Zona } from '../../../interfaces/api';
import { GenericButton } from '../../common/GenericButton';
import { Spinner } from '../../common/Spinner';
import { flatZonas } from '../../common/logic';

export const ZonasDelTorneo = () => {
  const { torneoId } = useParams();
  const { data, isFetching } = useFetch<Zona>(`zonas?torneoId=${torneoId}`);
  const { data: nombreLlaveEliminatoria, isFetching: isFetchingTieneLlave } = useFetch(`tieneLlaveEliminatoria?torneoId=${torneoId}`);

  if (isFetching || isFetchingTieneLlave) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        {(nombreLlaveEliminatoria as unknown as string) !== '' && <GenericButton
            key={'llave-eliminatoria'}
            path={`/torneo/${torneoId}/llaveeliminatoria`}
            content={nombreLlaveEliminatoria.toString()}
          />}

        {flatZonas(data).map((zona) => (
          <GenericButton
            key={zona?.id + zona.esAnual.toString()}
            path={`/torneo/${torneoId}/zona/${zona?.id}?esAnual=${zona?.esAnual}`}
            content={zona.descripcion}
          />
        ))}
      </div>
    </>
  );
};
