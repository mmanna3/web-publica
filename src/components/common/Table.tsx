import { ReactNode } from 'react';
import { BASE_URL } from '../../globalConst';

interface TableProps {
  titulo?: string;
  leyenda?: string;
  children: ReactNode;
}

export function Table({ titulo, children, leyenda }: TableProps) {
  return (
    <div className='mx-1'>
      <h2 className='mb-2 text-center text-xl text-black'>{titulo}</h2>
      <table className='max-2xl mx-auto mb-6 w-[100%] table-auto border-collapse border border-slate-500 bg-white text-center font-arial text-xs'>
        {children}
      </table>      
      <pre className='max-w-[400px] font-arial text-[13px] ml-1 mt-[-0.8rem]'>{leyenda}</pre>      
    </div>
  );
}

interface TableRowProps {
  children: ReactNode;
  type?: 'tableHead';
  className?: string;
}

export const TableRow = ({ children, type, className }: TableRowProps) => {
  return type === 'tableHead' ? (
    <tr className='bg-[#101010] text-[15px] text-white'>{children}</tr>
  ) : (
    <tr className={`border border-slate-300 text-[14px] ${className}`}>{children}</tr>
  );
};

interface RowContentProps {
  content: string | number;
  type?: string;
}

export const RowContent = ({ content, type }: RowContentProps) => {
  return type === 'Img' ? (
    <td className='border-b-1'>
      <img className='mx-auto w-30 max-w-[32px]' src={`${BASE_URL}${content}`} alt='escudo' />
    </td>
  ) : (
    <td className='border-b-1'>{content}</td>
  );
};
