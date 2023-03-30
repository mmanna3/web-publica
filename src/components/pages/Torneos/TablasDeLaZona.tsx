import { Link, useParams } from 'react-router-dom';

export default function TablasDeLaZona() {

 
const {torneoId, zonaId} = useParams()
  

  return (
    <main className='m-auto w-[500px]'>
      {/* <NavBar /> */}
      <div className='mb-10 flex justify-between'>
        <button className='bg-red-600'>Torneo tanto</button>
        <button className='bg-green-500'>Zona tanto</button>
      </div>
      <div className='flex flex-col gap-5'>
        <Link
          to={`/torneo/${torneoId}/zona/${zonaId}/posiciones`}
          className='rounded-lg bg-blue-600 p-4 text-center text-white'
        >
          Posiciones
        </Link>
        <button className='rounded-lg bg-blue-600 p-4 text-center text-white'>Fixture</button>
        <button className='rounded-lg bg-blue-600 p-4 text-center text-white'>Jornadas</button>
        <button className='rounded-lg bg-blue-600 p-4 text-center text-white'>Clubes</button>
        <button className='rounded-lg bg-blue-600 p-4 text-center text-white'>Sanciones</button>
      </div>
    </main>
  );
}
