import { Renglon } from '../../../interfaces/api';

interface Props {
  renglones: Renglon[];
  categoria: string;
}

export default function TablaDePosiciones({ renglones, categoria }: Props) {
  return (
    <div className='m-4'>
      <h2 className='mb-2 text-center text-xl text-black'>{categoria}</h2>

      <table className='mx-auto mb-4 w-[100%] max-w-sm table-auto border-collapse border border-slate-500 bg-white text-center text-xs font-font-arial'>
        <thead>
          <tr className='bg-[#101010] text-white'>
            <th className='p-2'>Pos</th>
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
          {renglones.map((renglon) => (
            <tr key={renglon.EquipoId} className='border border-slate-200'>
              <td className='border border-slate-200'>{renglon.Posicion}</td>
              <td className='border border-slate-200'>
                <img
                  className='mx-auto w-[30px]'
                  src={`https://www.edefi.com.ar${renglon.Escudo}`}
                  alt='escudo'
                />
              </td>
              <td>{renglon.Equipo}</td>
              <td className='border border-slate-200'>{renglon.Pj}</td>
              <td className='border border-slate-200'>{renglon.Pg}</td>
              <td className='border border-slate-200'>{renglon.Pe}</td>
              <td className='border border-slate-200'>{renglon.Pp}</td>
              <td className='border border-slate-200'>{renglon.Np}</td>
              <td className='border border-slate-200'>{renglon.Pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
