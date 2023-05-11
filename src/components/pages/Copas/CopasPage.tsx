import IMG_COPAS_TITLE from '../../../assets/images/titles/copas-title.png';
import IMG_COPA_EDEFI from '../../../assets/images/mobile/buttons/copa-edefi.png';
import IMG_COPA_LIGA from '../../../assets/images/mobile/buttons/copa-liga.png';
import { Link } from 'react-router-dom';

export const CopasPage = () => {
  return (
    <>
      <img className='mx-auto lg:max-w-4xl' src={IMG_COPAS_TITLE} alt='Copas' />
      <div className='my-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center'>
        <Link
          key='copa-edefi'
          to='/copas/copaedefi'
          className='flex items-center md:flex-col-reverse'
        >
          <img className='w-56 md:w-72 lg:w-96' src={IMG_COPA_EDEFI} alt='Copa EDEFI' />
        </Link>
        <Link
          key='torneo-verano'
          to='/copas/torneoverano'
          className='flex items-center md:flex-col-reverse'
        >
          <img className='w-56 md:w-72 lg:w-96' src={IMG_COPA_EDEFI} alt='Torneo verano' />
        </Link>
        <Link
          key='copa-liga'
          to='/copas/delaliga'
          className='flex items-center md:flex-col-reverse'
        >
          <img className='w-56 md:w-72 lg:w-96' src={IMG_COPA_LIGA} alt='Copas de la liga' />
        </Link>
      </div>
    </>
  );
};
