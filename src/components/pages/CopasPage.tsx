import IMG_COPAS_TITLE from '../../assets/images/titles/copas-title.png';
import IMG_COPA_EDEFI from '../../assets/images/mobile/buttons/copa-edefi.png';
import IMG_COPA_LIGA from '../../assets/images/mobile/buttons/copa-liga.png';

export const CopasPage = () => {
  return (
    <>
      <img className='mx-auto lg:max-w-4xl' src={IMG_COPAS_TITLE} alt='Copas' />
      <div className='flex flex-col items-center gap-8 my-16 lg:flex-row lg:justify-center'>
        <img className='w-56 md:w-72 lg:w-96' src={IMG_COPA_EDEFI} alt='Copa-edefi' />
        <img className='w-56 md:w-72 lg:w-96' src={IMG_COPA_LIGA} alt='Copa-liga' />
      </div>
    </>
  );
};
