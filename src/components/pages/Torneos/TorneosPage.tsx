import { Link } from 'react-router-dom';
import IMG_TORNEOS_TITLE from '../../../assets/images/mobile/titles/torneos-title.png';
import BTN_TORNEO_BABY from '../../../assets/images/mobile/buttons/btn-baby.avif';
import BTN_TORNEO_FUTSAL from '../../../assets/images/mobile/buttons/btn-futsal.avif';
import BTN_TORNEO_FUTBOL11 from '../../../assets/images/mobile/buttons/btn-futbol11.avif';
import IMG_TORNEO_FUTSAL from '../../../assets/images/mobile/img-futsal.avif';
import IMG_TORNEO_BABY from '../../../assets/images/mobile/img-baby.avif';
import IMG_TORNEO_FUTBOL11 from '../../../assets/images/mobile/img-futbol11.avif';

export const TorneosPage = () => {
  return (
    <>
     
      <img className='mx-auto mb-5 lg:max-w-4xl' src={IMG_TORNEOS_TITLE} alt='Torneos' />
      <div className='flex flex-col items-center gap-6 lg:flex-row lg:justify-center'>
        <Link key='futsal' to='/torneos/futsal' className='flex items-center md:flex-col-reverse'>
          <img
            className='mr-2 h-8 w-20 md:mt-3 md:h-12 md:w-40'
            src={BTN_TORNEO_FUTSAL}
            alt='Torneo-futsal'
          />
          <img className='w-48 md:w-64 lg:h-44' src={IMG_TORNEO_FUTSAL} alt='Torneo-futsal' />
        </Link>
        <Link key='baby' to='/torneos/baby' className='flex items-center md:flex-col-reverse'>
          <img
            className='mr-2 h-8 w-20 md:mt-3 md:h-12 md:w-40'
            src={BTN_TORNEO_BABY}
            alt='Torneo-baby'
          />
          <img className='w-48 md:w-64 lg:h-44' src={IMG_TORNEO_BABY} alt='Torneo-baby' />
        </Link>
        <Link
          key='futbol-11'
          to='/torneos/futbol-11'
          className='flex items-center md:flex-col-reverse'
        >
          <img
            className='mr-2 h-8 w-20 md:mt-3 md:h-12 md:w-40'
            src={BTN_TORNEO_FUTBOL11}
            alt='Torneo-futbol11'
          />
          <img className='w-48 md:w-64 lg:h-44' src={IMG_TORNEO_FUTBOL11} alt='Torneo-futbol11' />
        </Link>
      </div>
    </>
  );
};

export default TorneosPage;
