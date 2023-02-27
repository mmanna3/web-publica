import { TablasPorCategoria } from '../interfaces/TablasPorCategoria';

interface Props {
  tablasPorCategoria: TablasPorCategoria[];
  tabla: TablasPorCategoria;
  key: number;
  categoria: number;
}

export default function ListaDeTablasDePosiciones({ tablasPorCategoria }: Props) {
  return (
    <div className='flex flex-wrap justify-center bg-gray-400'>
      {tablasPorCategoria.map((tabla) => (
        <TablaDePosiciones key={tabla.CategoriaId} categoria={tabla.Categoria} tabla={tabla} />
      ))}
    </div>
  );
}

function TablaDePosiciones({ tabla, categoria }: Props) {
  return (
    <div className='m-2'>
      <h2>Numero de Tabla: {categoria}</h2>

      <table className='table-auto grid bg-white'>
        <thead >
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

          <tbody >
        {tabla.Renglones.map((renglon) => (
            <tr key={renglon.EquipoId} className='grid grid-cols-12'>
              <td>{renglon.Posicion}</td>
              <td >{renglon.Escudo}</td>
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
