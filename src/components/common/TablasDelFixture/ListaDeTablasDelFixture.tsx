import { useFetchFixture } from '../../../hooks/useFetchFixture';
import { TablaDelFixture } from './TablaDelFixture';

export const ListaDeTablasDelFixture = () => {
  const { fechas, isFetching } = useFetchFixture();

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }
  return (
    <div className='flex flex-wrap justify-center bg-gray-400'>
      {fechas.map(({ Titulo, DiaDeLaFecha, LocalVisitante }) => (
        <TablaDelFixture
          key={DiaDeLaFecha}
          titulo={Titulo}
          diaDeLaFecha={DiaDeLaFecha}
          localVisitante={LocalVisitante}
        />
      ))}
    </div>
  );
};