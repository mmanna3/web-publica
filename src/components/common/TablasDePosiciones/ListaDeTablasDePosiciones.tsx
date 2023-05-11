import { useFetchPosiciones } from '../../../hooks/useFetchPosiciones';
import TablaDePosiciones from './TablaDePosiciones';

export const ListaDeTablasDePosiciones = () => {
  const { tablasPorCategoria, tablaGeneral, isFetching } = useFetchPosiciones();

  // /* TOCHECK */
  // const mainStyles = document.querySelector('main');
  // mainStyles?.classList.remove('ml-[5%]');
  // /* TOCHECK */

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
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
