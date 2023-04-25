import { Link } from 'react-router-dom';

type myButtonProps = {
  text: string;
  url: string;
};
export const MyButton = ({ text, url }: myButtonProps) => {
  return (
    <div className='group w-[180px] rounded-lg bg-green-300 py-6 text-center text-black opacity-80 hover:bg-green-100'>
      <div className='rounded-lg bg-green-600 tracking-wider text-white opacity-80 group-hover:bg-slate-300 group-hover:text-slate-500'>
        <Link to={url}><p>{text}</p></Link>
      </div>
    </div>
  );
};
