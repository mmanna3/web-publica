import { Link } from 'react-router-dom';
import { useFetchTorneos } from './hooks/useFetchTorneos';
import { Torneo } from '../../../interfaces/Torneo';

interface Props {
  tipo: 'baby' | 'futsal' | 'futbol11';
}

export const TorneosPage = ({ tipo }: Props) => {
  const { torneos, isFetching } = useFetchTorneos();

  const filterTorneosByType = (torneos: Torneo[]): Torneo[] => {
    const tiposDeTorneo = {
      baby: ['MATUTINO', 'VESPERTINO'],
      futsal: ['FUTSAL'],
      futbol11: ['FUTBOL 11'],
    };

    const torneosByType: Torneo[] = [];

    torneos.forEach((torneo) => {
      tiposDeTorneo[tipo].forEach((tipoDeTorneo) => {
        if (torneo.descripcion.toUpperCase().includes(tipoDeTorneo)) torneosByType.push(torneo);
      });
    });

    return torneosByType;
  };

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }

  return (
    <main className='bg-gray-200 p-4'>
      <h1 className='my-10 text-center text-3xl font-bold underline'>TorneosPage</h1>

      <div className='mb-10 grid grid-cols-3 gap-3'>
        {filterTorneosByType(torneos).map(({ id, descripcion }) => (
          <Link
            key={id}
            to={`/torneo/${id}/zonas`}
            className='min-h-[100px] min-w-[300px] rounded-lg bg-blue-600 text-center text-lg text-white shadow-xl'
          >
            {descripcion}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TorneosPage;
