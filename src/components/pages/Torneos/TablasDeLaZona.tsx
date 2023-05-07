import { useParams } from 'react-router-dom';
import { GenericButton } from '../../common/GenericButton';

export const TablasDeLaZona = () => {
  const { torneoId, zonaId } = useParams();

  return (
    <>
      {/* <div className='mb-10 flex justify-between'>
        <button className='bg-red-600'>Torneo tanto</button>
        <button className='bg-green-500'>Zona tanto</button>
      </div> */}
      <div className='mt-[5%] flex flex-col items-center gap-5'>
        <GenericButton
          path={`/torneo/${torneoId}/zona/${zonaId}/posiciones`}
          content='Posiciones'
        />
        <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/fixture`} content='Fixture' />
        <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/jornadas`} content='Jornadas' />
        <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/clubes`} content='Clubes' />
        <GenericButton path={`/torneo/${torneoId}/zona/${zonaId}/sanciones`} content='Sanciones' />
      </div>
    </>
  );
};
