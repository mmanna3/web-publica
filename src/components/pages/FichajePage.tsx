import IMG_FICHAJE_TITLE from '../../assets/images/titles/fichaje-title.png';

export const FichajePage = () => {
  return (
    <main>
      <img className='ml-[3%]' src={IMG_FICHAJE_TITLE} alt='Fichaje' />
      <form className='flex flex-col text-white'>
        <div className='m-auto flex flex-col gap-6 w-4/5 md:w-2/5 bg-blue-700 p-10'>
          <div className='flex flex-col'>
            <label htmlFor=''>Código de tu equipo</label>
            <label htmlFor=''>Pedíselo a tu delegado</label>
          </div>
          <div className='flex justify-between gap-10'>
            <input className='w-[40%]' type='number' />
            <button className='w-[40%] rounded-md shadow-md p-2 bg-green-600'>Validar</button>
          </div>
        </div>
        <div className='m-auto flex flex-col gap-6 w-4/5 md:w-2/5 bg-red-600 p-10'>
          <label htmlFor=''>Tu nombre</label>
          <input type='text' />
          <label htmlFor=''>Tu apellido</label>
          <input type='text' />
          <label htmlFor=''>Tu DNI</label>
          <input type='number' />
        </div>
        <div className='m-auto flex flex-col gap-6 w-4/5 md:w-2/5 bg-red-600 p-10'>
          <label htmlFor=''>Tu fecha de nacimiento</label>
          <div className='flex justify-between'>
            <div className='flex flex-col w-[30%]'>
              <label htmlFor=''>Día</label>
              <input type='number' />
            </div>
            <div className='flex flex-col w-[30%]'>
              <label htmlFor=''>Mes</label>
              <input type='number' />
            </div>
            <div className='flex flex-col w-[30%]'>
              <label htmlFor=''>Año</label>
              <input type='number' />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};
