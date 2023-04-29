import { Icon } from './Icon';

import IG_ICON from '../../../assets/images/icons/ig-icon.png';
import WP_ICON from '../../../assets/images/icons/wp-icon.png';

export const SocialMedia = () => {
  return (
    <div className='flex justify-center space-x-3 py-8 pb-10'>
      <Icon src={IG_ICON} />
      <Icon src={WP_ICON} />
    </div>
  );
};
