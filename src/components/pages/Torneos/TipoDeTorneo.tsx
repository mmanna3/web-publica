import { Link } from 'react-router-dom';
import { useFetch } from '../../common/hooks/useFetch';
import { Torneo } from '../../../interfaces/api';
import { filterTorneosByType } from '../../common/logic';
import { Spinner } from '../../common/Spinner';

interface Props {
  tipo: 'baby' | 'futsal' | 'futbol11';
}

export const TipoDeTorneo = ({ tipo }: Props) => {
  const { data, isFetching } = useFetch<Torneo>('TorneosAperturaClausura?anio=2023');

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        {filterTorneosByType(data, tipo).map(({ id, descripcion }) => (
          <Link
            key={id}
            to={`/torneo/${id}/zonas`}
            className='w-52 rounded-lg bg-title-darkGreen py-10 text-center text-white shadow-xl md:w-80'
          >
            {descripcion}
          </Link>
        ))}
      </div>
    </>
  );
};

export default TipoDeTorneo;
