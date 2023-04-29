import { Link } from 'react-router-dom';
import IMG_TORNEOS_TITLE from '../../../assets/images/titles/torneos-title.png';
import BTN_TORNEO_BABY from '../../../assets/images/mobile/buttons/btn-baby.png';
import BTN_TORNEO_FUTSAL from '../../../assets/images/mobile/buttons/btn-futsal.png';
import BTN_TORNEO_FUTBOL11 from '../../../assets/images/mobile/buttons/btn-futbol11.png';
import IMG_TORNEO_BABY from '../../../assets/images/mobile/img-baby.jpg';
import IMG_TORNEO_FUTSAL from '../../../assets/images/mobile/img-futsal.jpg';
import IMG_TORNEO_FUTBOL11 from '../../../assets/images/mobile/img-futbol11.jpg';

export const TorneosPage = () => {
  return (
    <main className='ml-[5%] md:ml-[10%]'>
      <img className='  lg:max-w-4xl mb-5 ' src={IMG_TORNEOS_TITLE} alt='Torneos' />
      <div className='flex flex-col items-center gap-10 lg:flex-row'>
        <Link key='futsal' to='/torneos/futsal' className='flex items-center md:flex-col-reverse'>
          <img className='mr-2 h-8 w-20 md:h-12 md:w-40 md:mt-3' src={BTN_TORNEO_FUTSAL} alt='Torneo-futsal' />
          <img className='w-48 md:w-80' src={IMG_TORNEO_FUTSAL} alt='Torneo-futsal' />
        </Link>
        <Link key='baby' to='/torneos/baby' className='flex items-center md:flex-col-reverse'>
          <img className='mr-2 h-8 w-20 md:h-12 md:w-40 md:mt-3' src={BTN_TORNEO_BABY} alt='Torneo-baby' />
          <img className='w-48 md:w-80' src={IMG_TORNEO_BABY} alt='Torneo-baby' />
        </Link>
        <Link key='futbol-11' to='/torneos/futbol-11' className='flex items-center md:flex-col-reverse'>
          <img className='mr-2 h-8 w-20 md:h-12 md:w-40 md:mt-3' src={BTN_TORNEO_FUTBOL11} alt='Torneo-futbol11' />
          <img className='w-48 md:w-80' src={IMG_TORNEO_FUTBOL11} alt='Torneo-futbol11' />
        </Link>
      </div>
    </main>
  );
};

export default TorneosPage;
