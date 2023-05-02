import { Link } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { Torneo } from '../../../interfaces/Torneo';

const filterTorneosByType = (torneos: Torneo[], tipo: 'baby' | 'futsal' | 'futbol11'): Torneo[] => {
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

interface Props {
  tipo: 'baby' | 'futsal' | 'futbol11';
}

export const TipoDeTorneo = ({ tipo }: Props) => {
  const { data, isFetching } = useFetch<Torneo>('TorneosAperturaClausura?anio=2023');

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }

  return (
    <>
      <h1 className='my-10 text-center text-3xl font-bold underline'>TIPO DE TORNEO</h1>

      <div className='flex flex-col items-center gap-10'>
        {filterTorneosByType(data, tipo).map(({ id, descripcion }) => (
          <Link
            key={id}
            to={`/torneo/${id}/zonas`}
            className='w-52 md:w-80 rounded-lg bg-title-darkGreen py-10 text-center text-white shadow-xl'
          >
            {descripcion}
          </Link>
        ))}
      </div>
    </>
  );
};

export default TipoDeTorneo;
