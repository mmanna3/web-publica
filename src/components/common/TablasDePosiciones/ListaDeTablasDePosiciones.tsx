import { useFetchPosiciones } from '../../../hooks/useFetchPosiciones';
import { Spinner } from '../Spinner';
import TablaDePosiciones from './TablaDePosiciones';

export const ListaDeTablasDePosiciones = () => {
  const { tablasPorCategoria, tablaGeneral, isFetching } = useFetchPosiciones();

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div className='grid gap-2 md:grid-cols-2'>
      {tablasPorCategoria.map(({ CategoriaId, Categoria, Renglones }) => (
        <TablaDePosiciones key={CategoriaId} categoria={Categoria} renglones={Renglones} />
      ))}

      <TablaDePosiciones
        key={tablaGeneral?.CategoriaId}
        categoria='General'
        renglones={tablaGeneral?.Renglones}
      />
    </div>
  );
};
