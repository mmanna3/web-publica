import { useFetch } from '../../common/hooks/useFetch';
import { Torneo } from '../../../interfaces/api';
import { filterTorneosByType } from '../../common/logic';
import { Spinner } from '../../common/Spinner';
import { GenericButton } from '../../common/GenericButton';

interface Props {
  tipo: 'baby' | 'futsal' | 'futbol11';
}

export const TipoDeTorneo = ({ tipo }: Props) => {
  const anioActual = new Date().getFullYear() - 1;
  const { data, isFetching } = useFetch<Torneo>(`TorneosAperturaClausura?anio=${anioActual}`);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        {filterTorneosByType(data, tipo).map(({ id, descripcion }) => (
          <GenericButton key={id} path={`/torneo/${id}/zonas`} content={descripcion} />
        ))}
      </div>
    </>
  );
};

export default TipoDeTorneo;
