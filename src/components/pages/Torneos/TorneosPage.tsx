import { Link } from 'react-router-dom';
import IMG_TORNEOS_TITLE from '../../../assets/images/mobile/buttons/torneos-title.png';
import BTN_TORNEO_BABY from '../../../assets/images/mobile/buttons/btn-baby.png';
import BTN_TORNEO_FUTSAL from '../../../assets/images/mobile/buttons/btn-futsal.png';
import BTN_TORNEO_FUTBOL11 from '../../../assets/images/mobile/buttons/btn-futbol11.png';
import IMG_TORNEO_BABY from '../../../assets/images/mobile/img-baby.jpg';
import IMG_TORNEO_FUTSAL from '../../../assets/images/mobile/img-futsal.jpg';
import IMG_TORNEO_FUTBOL11 from '../../../assets/images/mobile/img-futbol11.jpg';

export const TorneosPage = () => {
  return (
    <main>
      <img className='' src={IMG_TORNEOS_LARGE} alt='Torneos' />
      <div className='flex flex-col items-center gap-10'>
        <Link key='futsal' to='/torneos/futsal' className='flex items-center'>
          <img className='mr-2 h-[30px] w-[80px]' src={BTN_TORNEO_FUTSAL} alt='Torneo-futsal' />
          <img className='w-[200px]' src={IMG_TORNEO_FUTSAL} alt='Torneo-futsal' />
        </Link>
        <Link key='baby' to='/torneos/baby' className='flex items-center'>
          <img className='mr-2 h-[30px] w-[80px]' src={BTN_TORNEO_BABY} alt='Torneo-baby' />
          <img className='w-[200px]' src={IMG_TORNEO_BABY} alt='Torneo-baby' />
        </Link>
        <Link key='futbol-11' to='/torneos/futbol-11' className='flex items-center'>
          <img className='mr-2 h-[30px] w-[80px]' src={BTN_TORNEO_FUTBOL11} alt='Torneo-futbol11' />
          <img className='w-[200px]' src={IMG_TORNEO_FUTBOL11} alt='Torneo-futbol11' />
        </Link>
      </div>
    </main>
  );
};

export default TorneosPage;
