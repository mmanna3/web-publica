import { useParams, useSearchParams } from 'react-router-dom';
import { GenericButton } from '../../common/GenericButton';

export const OpcionesDeLaZona = () => {
  const { torneoId, zonaId } = useParams();
  const [URLSearchParams] = useSearchParams();
  const esAnual = URLSearchParams.get('esAnual');

  return (
    <>
      <div className='flex flex-col items-center gap-5'>
        <GenericButton
          path={`/torneo/${torneoId}/zona/${zonaId}/posiciones?esAnual=${esAnual}`}
          content='Posiciones'
        />
        {esAnual !== 'true' &&
        <>
          <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/fixture`} content='Fixture' />
          <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/jornadas`} content='Jornadas' />
          <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/clubes`} content='Clubes' /> 
        </>}
      </div>
    </>
  );
};
