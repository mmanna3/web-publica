import { Link } from 'react-router-dom';

export const TorneosPage = () => {
  return (
    <main className='bg-gray-200 p-4'>
      <h1 className='my-10 text-center text-3xl font-bold underline'>Tipos de torneo</h1>

      <div className='flex gap-3'>
        <Link
          key='baby'
          to='/torneos-baby'
          className='min-h-[100px] min-w-[300px] rounded-lg bg-blue-600 text-center text-lg text-white shadow-xl'
        >
          Baby
        </Link>
        <Link
          key='futsal'
          to='/torneos-futsal'
          className='min-h-[100px] min-w-[300px] rounded-lg bg-blue-600 text-center text-lg text-white shadow-xl'
        >
          Futsal
        </Link>
        <Link
          key='futbol-11'
          to='/torneos-futbol-11'
          className='min-h-[100px] min-w-[300px] rounded-lg bg-blue-600 text-center text-lg text-white shadow-xl'
        >
          Fútbol 11
        </Link>
      </div>
    </main>
  );
};

export default TorneosPage;
