import { TablasPorCategoria } from '../../interfaces/TablasPorCategoria';

interface listaProps {
  tablasPorCategoria: TablasPorCategoria[];
}

interface tablaProps {
  tablaPorCategoria: TablasPorCategoria;
  key: number;
  categoria: string;
}

export default function ListaDeTablasDePosiciones({ tablasPorCategoria }: listaProps) {
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

function TablaDePosiciones({ tablaPorCategoria, categoria }: tablaProps) {
  return (
    <div className='m-2'>
      <h2>Numero de Tabla: {categoria}</h2>

      <table className='grid table-auto bg-white'>
        <thead>
          <tr className='grid grid-cols-12'>
            <th>Pos</th>
            <th>Esc</th>
            <th className='col-span-4'>Equipo</th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>Np</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {tablaPorCategoria.Renglones.map((renglon) => (
            <tr key={renglon.EquipoId} className='grid grid-cols-12'>
              <td>{renglon.Posicion}</td>
              <td>{'Escudo'}</td>
              <td className='col-span-4'>{renglon.Equipo}</td>
              <td>{renglon.Pj}</td>
              <td>{renglon.Pg}</td>
              <td>{renglon.Pe}</td>
              <td>{renglon.Pp}</td>
              <td>{renglon.Np}</td>
              <td>{renglon.Pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
