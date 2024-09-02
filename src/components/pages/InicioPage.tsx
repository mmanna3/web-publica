import { ImageBtn } from '../common/ImageBtn';
import IMG_BTN_TORNEOS from '../../assets/images/mobile/buttons/torneos.avif';
import IMG_BTN_COPAS from '../../assets/images/mobile/buttons/copas.avif';
import IMG_BTN_FICHAJE from '../../assets/images/mobile/buttons/fichaje.avif';
import IMG_BTN_NOSOTROS from '../../assets/images/mobile/buttons/nosotros.avif';
import IMG_BTN_CONTACTO from '../../assets/images/mobile/buttons/contacto.avif';
import { BASE_URL } from '../../globalConst';

export const InicioPage = () => {
  return (
    <>
      <img
        className='mx-auto h-[130px] w-[90%] sm:hidden'
        src={`${BASE_URL}/imagenes/publicidades/2.jpg`}
        alt='banner-image'
      />
      <img
        className='m-auto hidden h-[180px] w-[90%] sm:block '
        src={`${BASE_URL}/imagenes/publicidades/1.jpg`}
        alt='banner-image'
      />
      <div className=' mx-auto flex flex-col items-center gap-6 p-16 xs:max-w-sm md:max-w-md xl:max-w-xl'>
        <ImageBtn img={IMG_BTN_TORNEOS} alt='torneos' url='/torneos' />
        <ImageBtn img={IMG_BTN_COPAS} alt='copas' url='/copas' />
        <ImageBtn img={IMG_BTN_NOSOTROS} alt='nosotros' url='/nosotros' />
        <ImageBtn img={IMG_BTN_CONTACTO} alt='contacto' url='/contacto' />
        <ImageBtn img={IMG_BTN_FICHAJE} alt='fichaje' url='/fichaje' />
      </div>
    </>
  );
};
