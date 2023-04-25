import { MyButton } from '../common/MyButton'
import BANNER_CELU from '../../assets/images/mobile/banner-celu.png';

export const InicioPage = () => {
  return (
    <>
      <img className='m-auto w-[250px]' src={BANNER_CELU} alt='banner-image' />
      <div className='my-10 flex flex-col items-center gap-6'>
        <MyButton text={'TORNEOS'} url='/torneos' />
        <MyButton text={'COPAS'} url='/copas' />
        <MyButton text={'NOSOTROS'} url='/nosotros' />
        <MyButton text={'CONTACTO'} url='/contacto' />
        <MyButton text={'FICHAJE'} url='/fichaje' />
      </div>
    </>
  );
};

