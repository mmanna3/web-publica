import IMG_CONTACTO_LARGE from '../../assets/images/mobile/buttons/contacto-large.png';
import SEGUINOS_CELU from '../../assets/images/mobile/seguinos-celu.png';

export const ContactoPage = () => {
  return (
    <main>
      <img className='m-auto' src={IMG_CONTACTO_LARGE} alt='Contacto' />
      <div className='mx-auto my-12 text-center'>
        <div className='mb-16 md:text-xl lg:text-2xl'>
          <h2 className='my-4 text-title-darkGreen md:text-xl lg:text-2xl '>
            Horarios de atención
          </h2>
          <p className='mb-3'>Lunes a jueves de 17:30 hs a 20:30 hs</p>
          <p className='mb-3'>Viernes de 17:00 hs a 19:30 hs</p>
        </div>
        <div className='mb-16 md:text-xl lg:text-2xl'>
          <h2 className='my-4 text-title-darkGreen md:text-xl lg:text-2xl '>Dirección</h2>
          <p className='mb-3'>Juan B. Justo 550, Haedo. Bs. As</p>
          <p className='mb-3'>CP: 1706</p>
        </div>
        <div className='mb-16 md:text-xl lg:text-2xl'>
          <h2 className='my-4 text-title-darkGreen md:text-xl lg:text-2xl '>Teléfono</h2>
          <p className='mb-3'>21958389</p>
        </div>
        <div className='mb-16 md:text-xl lg:text-2xl'>
          <h2 className='my-4 text-title-darkGreen md:text-xl lg:text-2xl '>E-mail</h2>
          <p className='mb-3'>edefiargentina@hotmail.com</p>
        </div>
      </div>
      <img className='m-auto w-40 md:w-52 lg:w-64' src={SEGUINOS_CELU} alt='Seguinos' />
    </main>
  );
};
