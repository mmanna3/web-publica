import { useFetchFixture } from '../../../hooks/useFetchFixture';
import { Spinner } from '../Spinner'
import { TablaDelFixture } from './TablaDelFixture';

export const ListaDeTablasDelFixture = () => {
  const { fechas, isFetching } = useFetchFixture();

  if (isFetching) {
    return <Spinner />;
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
