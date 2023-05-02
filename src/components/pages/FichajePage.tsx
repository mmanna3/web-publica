import IMG_FICHAJE_TITLE from '../../assets/images/titles/fichaje-title.png';

export const FichajePage = () => {
  return (
    <>
      <img className='mx-auto' src={IMG_FICHAJE_TITLE} alt='Fichaje' />
      <form className='flex flex-col select-text text-white'>
        <div className='m-auto flex flex-col gap-6 w-4/5 md:w-2/5 bg-blue-700 p-4 md:p-10'>
          <div className='flex flex-col'>
            <label htmlFor=''>Código de tu equipo</label>
            <label htmlFor=''>Pedíselo a tu delegado</label>
          </div>
          <div className='flex justify-between gap-10'>
            <input className='w-[40%] rounded-md text-black' type='number' />
            <button className='w-[40%] text-xs lg:text-base rounded-md shadow-md p-2 bg-green-600'>Validar</button>
          </div>
        </div>
        <div className='m-auto flex flex-col gap-6 w-4/5 md:w-2/5 bg-red-600 p-4 md:p-10'>
          <label htmlFor=''>Tu nombre</label>
          <input className='rounded-md text-black py-1' type='text' />
          <label htmlFor=''>Tu apellido</label>
          <input className='rounded-md text-black py-1' type='text' />
          <label htmlFor=''>Tu DNI</label>
          <input className='rounded-md text-black py-1' type='number' />
        </div>
        <div className='m-auto flex flex-col gap-6 w-4/5 md:w-2/5 bg-red-600 p-4 md:p-10'>
          <label htmlFor=''>Tu fecha de nacimiento</label>
          <div className='flex justify-between'>
            <div className='flex flex-col w-[30%]'>
              <label htmlFor=''>Día</label>
              <input className='rounded-md text-black py-1' type='number' />
            </div>
            <div className='flex flex-col w-[30%]'>
              <label htmlFor=''>Mes</label>
              <input className='rounded-md text-black py-1' type='number' />
            </div>
            <div className='flex flex-col w-[30%]'>
              <label htmlFor=''>Año</label>
              <input className='rounded-md text-black py-1' type='number' />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
