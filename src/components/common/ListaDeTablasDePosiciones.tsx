import { useFetchPosiciones } from '../pages/Torneos/hooks/useFetchPosiciones';
import TablaDePosiciones from './TablaDePosiciones';

export default function ListaDeTablasDePosiciones() {
  const { tablasPorCategoria, tablaGeneral, isFetching } = useFetchPosiciones();

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }
  return (
    <div className='flex flex-wrap justify-center bg-gray-400'>
      {tablasPorCategoria.map((tablaPorCategoria) => (
        <TablaDePosiciones
          key={tablaPorCategoria.CategoriaId}
          categoria={tablaPorCategoria.Categoria}
          tablaPorCategoria={tablaPorCategoria}
        />
      ))}
    </div>
  );
}

// const ListaLasTablas = () => {
//   <div className='flex flex-wrap justify-center bg-gray-400'>
//     {tablasPorTipo.map((tablaPorCategoria) => (
//       <TablaDePosiciones
//         key={tablaPorCategoria.CategoriaId}
//         categoria={tablaPorCategoria.Categoria}
//         tablaPorCategoria={tablaPorCategoria}
//       />
//     ))}
//   </div>;
// };
