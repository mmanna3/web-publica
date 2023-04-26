import { ImageBtn } from '../common/MyButton';
import BANNER_CELU from '../../assets/images/mobile/banner-celu.png';
import IMG_BTN_TORNEOS from '../../assets/images/mobile/buttons/torneos.png';
import IMG_BTN_COPAS from '../../assets/images/mobile/buttons/copas.png';
import IMG_BTN_FICHAJE from '../../assets/images/mobile/buttons/fichaje.png';
import IMG_BTN_NOSOTROS from '../../assets/images/mobile/buttons/nosotros.png';
import IMG_BTN_CONTACTO from '../../assets/images/mobile/buttons/contacto.png';

export const InicioPage = () => {
  return (
    <>
      <img className='m-auto w-[250px]' src={BANNER_CELU} alt='banner-image' />
      <div className='my-10 flex flex-col items-center gap-6'>
        <ImageBtn img={IMG_BTN_TORNEOS} alt='torneos' url='/torneos' />
        <ImageBtn img={IMG_BTN_COPAS} alt='copas' url='/copas' />
        <ImageBtn img={IMG_BTN_NOSOTROS} alt='nosotros' url='/nosotros' />
        <ImageBtn img={IMG_BTN_CONTACTO} alt='contacto' url='/contacto' />
        <ImageBtn img={IMG_BTN_FICHAJE} alt='fichaje' url='/fichaje' />
      </div>
    </>
  );
};
