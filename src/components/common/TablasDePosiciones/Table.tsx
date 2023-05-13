import { ReactNode } from 'react';
import { BASE_URL } from '../../../globalConst';
import { Renglon } from '../../../interfaces/api';



interface TableStyleProps {
  children: ReactNode;
  titulo: string;
}

const TableStyle = ({ children, titulo }: TableStyleProps) => {
  return (
    <div>
      <h2 className='mb-2 text-center text-xl text-black'>{titulo}</h2>
      <table className='max-2xl mx-auto mb-4 w-[100%] table-auto border-collapse border border-slate-500 bg-white text-center font-arial text-xs '>
        {children}
      </table>
    </div>
  );
};

interface TableProps {
  renglones: Renglon[];
  categoria: string;
  renglon: Renglon;
}

export function Table({ renglones, categoria }: TableProps) {
  return (
    <TableStyle titulo={categoria}>
      <TableHead columnNames={['Pos', 'Esc', 'Equipo', 'J', 'G', 'E', 'P', 'Np', 'Pts']} />
      <TableRowList renglones={renglones} />
    </TableStyle>
  );
}

interface TableHead {
  columnNames: string[];
}

const TableHead = ({ columnNames }: TableHead) => {
  return (
    <thead>
      <tr className='bg-[#101010] text-white'>
        {columnNames.map((data) => (
          <th key={data} className='p-2'>{data}</th>
        ))}
      </tr>
    </thead>
  );
};

interface TableRowListProps {
  renglones: Renglon[];
}

const TableRowList = ({ renglones }: TableRowListProps) => {
  return (
    <tbody>
      {renglones.map((renglon) => (
        <TableRow key={renglon.EquipoId} renglon={renglon} />
      ))}
    </tbody>
  );
};

interface TableRowProps {
  renglon: Renglon;
}

const TableRow = ({ renglon }: TableRowProps) => {
  return (
    <tr className='border border-slate-200'>
      <td className='border border-slate-200'>{renglon.Posicion}</td>
      <td className='border border-slate-200'>
        <img className='mx-auto w-[30px]' src={`${BASE_URL}${renglon.Escudo}`} alt='escudo' />
      </td>
      <td>{renglon.Equipo}</td>
      <td className='border border-slate-200'>{renglon.Pj}</td>
      <td className='border border-slate-200'>{renglon.Pg}</td>
      <td className='border border-slate-200'>{renglon.Pe}</td>
      <td className='border border-slate-200'>{renglon.Pp}</td>
      <td className='border border-slate-200'>{renglon.Np}</td>
      <td className='border border-slate-200'>{renglon.Pts}</td>
    </tr>
  );
};

{
  /* <TableHead />
    <RowList>
      <Row >
    </RowList> */
}
