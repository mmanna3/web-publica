import { useFetchFixture } from '../pages/Torneos/hooks/useFetchFixture';
import TablaDelFixture from './TablasDelFixture'

export default function ListaDeTablasDelFixture() {
  const { fechas, isFetching } = useFetchFixture();

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }
  return (
    <div className='flex flex-wrap justify-center bg-gray-400'>
      {fechas.map(({Titulo, DiaDeLaFecha, LocalVisitante}) => (
        <TablaDelFixture key={DiaDeLaFecha} titulo={Titulo} diaDeLaFecha={DiaDeLaFecha} localVisitante={LocalVisitante} />
      ))}
    </div>
  );
}
