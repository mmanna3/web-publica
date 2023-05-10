import { Renglon } from '../../interfaces/Posiciones/Renglon';

interface Props {
  renglones: Renglon[];
  categoria: string;
}

/* Deberia recibir directamente Renglones[]  */
export default function TablaDePosiciones({ renglones, categoria }: Props) {
  return (
    <div className='m-2'>
      <h2 className='mb-2 text-center text-xl text-white'>{categoria}</h2>

      <table className='mx-auto mb-4 w-[100%] max-w-xl table-auto border-collapse border border-slate-500 bg-white text-center'>
        <thead>
          <tr className='bg-[#101010] text-white'>
            <th className='p-2'>Pos</th>
            <th>Esc</th>
            <th className=''>Equipo</th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>Np</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {renglones.map((renglon) => (
            <tr key={renglon.EquipoId} className='border border-slate-200'>
              <td className='text-center'>{renglon.Posicion}</td>
              <td>
                <img
                  className='mx-auto w-[30px]'
                  src={`https://www.edefi.com.ar${renglon.Escudo}`}
                  alt='escudo'
                />
              </td>
              <td>{renglon.Equipo}</td>
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
