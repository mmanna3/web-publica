import { ReactNode } from 'react';
import { BASE_URL } from '../../globalConst';

interface TableProps {
  titulo: string;
  children: ReactNode;
}

export function Table({ titulo, children }: TableProps) {
  return (
    <div>
      <h2 className='mb-2 text-center text-xl text-black'>{titulo}</h2>
      <table className='max-2xl mx-auto mb-4 w-[100%] table-auto border-collapse border border-slate-500 bg-white text-center font-arial text-xs '>
        {children}
      </table>
    </div>
  );
}

interface TableRowProps {
  children: ReactNode;
  type?: 'tableHead';
}

export const TableRow = ({ children, type }: TableRowProps) => {
  return type === 'tableHead' ? (
    <tr className='w-[100%] bg-[#101010] text-xl text-white'>{children}</tr>
  ) : (
    <tr className='border border-slate-200'>{children}</tr>
  );
};

interface RowContentProps {
  content: string | number;
  type?: string;
}

export const RowContent = ({ content, type }: RowContentProps) => {
  return type === 'Img' ? (
    <td className='border border-slate-200'>
      <img className='mx-auto w-[30px]' src={`${BASE_URL}${content}`} alt='escudo' />
    </td>
  ) : (
    <td className='border border-slate-200'>{content}</td>
  );
};
