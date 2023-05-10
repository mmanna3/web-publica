import { useFetchPosiciones } from '../pages/Torneos/hooks/useFetchPosiciones';
import TablaDePosiciones from './TablaDePosiciones';

export const ListaDeTablasDePosiciones = () => {
  const { tablasPorCategoria, tablaGeneral, isFetching } = useFetchPosiciones();

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }
  return (
    <div className='grid gap-2 bg-title-darkGreen md:grid-cols-2'>
      {tablasPorCategoria.map(({ CategoriaId, Categoria, Renglones }) => (
        <TablaDePosiciones
          key={CategoriaId}
          categoria={Categoria}
          /* renglones={Renglones} */
          renglones={Renglones}
        />
      ))}

      <TablaDePosiciones
        key={tablaGeneral?.CategoriaId}
        categoria='General'
        renglones={tablaGeneral?.Renglones}
      />
    </div>
  );
};
