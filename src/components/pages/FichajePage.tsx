import IMG_FICHAJE_TITLE from '../../assets/images/titles/fichaje-title.png';
import SeccionPrincipalFichaje from './SeccionPrincipalFichaje/SeccionPrincipalFichaje';

export const FichajePage = () => {
  return (
    <>
      <SeccionPrincipalFichaje />
      {/* <img className='mx-auto' src={IMG_FICHAJE_TITLE} alt='Fichaje' />
      <form className='flex select-text flex-col text-white'>
        <div className='m-auto flex w-4/5 flex-col gap-6 bg-blue-700 p-4 md:w-2/5 md:p-10'>
          <div className='flex flex-col'>
            <label htmlFor=''>Código de tu equipo</label>
            <label htmlFor=''>Pedíselo a tu delegado</label>
          </div>
          <div className='flex justify-between gap-10'>
            <input className='w-[40%] rounded-md text-black' type='number' />
            <button className='w-[40%] rounded-md bg-green-600 p-2 text-xs shadow-md lg:text-base'>
              Validar
            </button>
          </div>
        </div>
        <div className='m-auto flex w-4/5 flex-col gap-6 bg-red-600 p-4 md:w-2/5 md:p-10'>
          <label htmlFor=''>Tu nombre</label>
          <input className='rounded-md py-1 text-black' type='text' />
          <label htmlFor=''>Tu apellido</label>
          <input className='rounded-md py-1 text-black' type='text' />
          <label htmlFor=''>Tu DNI</label>
          <input className='rounded-md py-1 text-black' type='number' />
        </div>
        <div className='m-auto flex w-4/5 flex-col gap-6 bg-red-600 p-4 md:w-2/5 md:p-10'>
          <label htmlFor=''>Tu fecha de nacimiento</label>
          <div className='flex justify-between'>
            <div className='flex w-[30%] flex-col'>
              <label htmlFor=''>Día</label>
              <input className='rounded-md py-1 text-black' type='number' />
            </div>
            <div className='flex w-[30%] flex-col'>
              <label htmlFor=''>Mes</label>
              <input className='rounded-md py-1 text-black' type='number' />
            </div>
            <div className='flex w-[30%] flex-col'>
              <label htmlFor=''>Año</label>
              <input className='rounded-md py-1 text-black' type='number' />
            </div>
          </div>
        </div>
      </form> */}
    </>
  );
};
