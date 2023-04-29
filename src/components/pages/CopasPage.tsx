import IMG_COPAS_TITLE from '../../assets/images/mobile/buttons/copas-title.png';
import IMG_COPA_EDEFI from '../../assets/images/mobile/buttons/copa-edefi.png';
import IMG_COPA_LIGA from '../../assets/images/mobile/buttons/copa-liga.png';

export const CopasPage = () => {
  return (
    <main>
      <img src={IMG_COPAS_TITLE} alt='Copas' />
      <div className='flex flex-col gap-16 my-32'>
        <img className='max-w-lg mx-auto' src={IMG_COPA_EDEFI} alt='Copa-edefi' />
        <img className='max-w-lg mx-auto' src={IMG_COPA_LIGA} alt='Copa-liga' />
      </div>
    </main>
  );
};
