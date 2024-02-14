import { useFetch } from '../../common/hooks/useFetch';
import { Torneo } from '../../../interfaces/api';
import { filterTorneosByType } from '../../common/logic';
import { Spinner } from '../../common/Spinner';
import { GenericButton } from '../../common/GenericButton';
import { useState } from 'react';

interface Props {
  tipo: 'baby' | 'futsal' | 'futbol11';
}

export const TipoDeTorneo = ({ tipo }: Props) => {
  const anioActual = new Date().getFullYear();
  const anioPasado = anioActual - 1;
  const { data, isFetching } = useFetch<Torneo>(`TorneosAperturaClausura?anio=${anioActual}`);
  const { data: torneosAnioPasado, isFetching: isFetchingAnioPasado } = useFetch<Torneo>(`TorneosAperturaClausura?anio=${anioPasado}`);
  const [seVenLosDelAnioPasado, verAnioPasado] = useState(false);

  if (isFetching || isFetchingAnioPasado) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        {filterTorneosByType(data, tipo).map(({ id, descripcion }) => (
          <GenericButton key={id} path={`/torneo/${id}/zonas`} content={descripcion} />
        ))}
      </div>
      <div className='flex flex-col items-center gap-10 mt-20 mb-10'>
        <button className='text-sm border p-2 border-slate-700 rounded text-slate-600' onClick={() => verAnioPasado(v => !v)}>Año {anioPasado}</button>
      </div>
      <div className='flex flex-col items-center gap-10'>                
        {seVenLosDelAnioPasado ? filterTorneosByType(torneosAnioPasado, tipo).map(({ id, descripcion }) => (
          <GenericButton key={id} path={`/torneo/${id}/zonas`} content={descripcion} />
        )): null}
      </div>
    </>
  );
};

export default TipoDeTorneo;
