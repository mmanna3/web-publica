import { useFetchClubes } from '../pages/Torneos/hooks/useFetchClubes';
import { TablaDeClubes } from './TablaDeClubes'

export const ListaDeTablasDeClubes = () => {
  const { clubes, isFetching } = useFetchClubes();

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }
  return (
    <div className='flex flex-col justify-center bg-gray-400 p-6'>
      <div className='mb-10 flex justify-between'>
        <button className='bg-red-600'>Torneo tanto</button>
        <button className='bg-green-500'>Zona tanto</button>
      </div>
      <div className=''>
        {clubes.map(({  Equipo, Localidad, Direccion, TechoDescripcion }, index) => (
          <TablaDeClubes
            key={index}
            equipo={Equipo}
            localidad={Localidad}
            direccion={Direccion}
            techo={TechoDescripcion}
          />
        ))}
      </div>
    </div>
  );
};
