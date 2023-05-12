import { useFetchJornadas } from '../../../hooks/useFetchJornadas';
import { Spinner } from '../Spinner'
import { TablaDeJornadas } from './TablaDeJornadas';

export const ListaDeTablasDeJornadas = () => {
  const { jornadasPorFecha, categorias, isFetching } = useFetchJornadas();

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div className='flex flex-col justify-center bg-gray-400 p-6'>
      <div className='mb-10 flex justify-between'>
        <button className='bg-red-600'>Torneo tanto</button>
        <button className='bg-green-500'>Zona tanto</button>
      </div>
      <div className=''>
        {jornadasPorFecha.map(({ FechaId, FechaNumero, Renglones }) => (
          <TablaDeJornadas
            key={FechaId}
            renglones={Renglones}
            categorias={categorias}
            fechaNumero={FechaNumero}
          />
        ))}
      </div>
    </div>
  );
};
