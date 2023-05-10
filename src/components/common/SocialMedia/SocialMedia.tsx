import { Icon } from './Icon';

import IG_ICON from '../../../assets/images/icons/ig-icon.png';
import WP_ICON from '../../../assets/images/icons/wp-icon.png';

export const SocialMedia = () => {
  return (
    <div className='ml-[5%] select-none flex justify-center space-x-3 py-8 pb-10'>
      <Icon src={IG_ICON} url='https://www.instagram.com/liga_edefi/'/>
      <Icon src={WP_ICON} url='watsap'/>
    </div>
  );
};
