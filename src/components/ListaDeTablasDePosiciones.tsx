import { render } from 'react-dom';
import { Renglon } from '../interfaces/Renglon';
import { TablasPorCategoria } from '../interfaces/TablasPorCategoria';

interface Props {
  tablasPorCategoria: TablasPorCategoria[];
  tabla: TablasPorCategoria;
  // tabla: Renglon;
}

export default function ListaDeTablasDePosiciones({ tablasPorCategoria }: Props) {
  {
    tablasPorCategoria.forEach((tabla) => <TablaDePosiciones key={tabla.CategoriaId}  />);
  }

  return (
    <div className='flex bg-gray-400'>
      <TablaDePosiciones />
      <TablaDePosiciones />
    </div>
  );
}

function TablaDePosiciones() {



  return (
    <div className='m-2'>
      <h2>Numero de Tabla: 15</h2>

      <table className='table-auto bg-white'>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Esc</th>
            <th>Equipo</th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>Np</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Escudo</td>
            <td>San Lorenzo</td>
            <td>11</td>
            <td>11</td>
            <td>61</td>
            <td>91</td>
            <td>91</td>
            <td>11</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Escudo</td>
            <td>San Lorenzo</td>
            <td>11</td>
            <td>11</td>
            <td>61</td>
            <td>91</td>
            <td>91</td>
            <td>11</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Escudo</td>
            <td>San Lorenzo</td>
            <td>11</td>
            <td>11</td>
            <td>61</td>
            <td>91</td>
            <td>91</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
