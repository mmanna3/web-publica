import { Tabla } from '../../interfaces/Posiciones/Tabla';

interface Props {
  tablaPorCategoria: Tabla;
  categoria: string;
}

export default function TablaDePosiciones({ tablaPorCategoria, categoria }: Props) {
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
