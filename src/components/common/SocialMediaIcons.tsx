import IG_ICON from '../../assets/images/icons/ig-icon.png';
import WP_ICON from '../../assets/images/icons/wp-icon.png';

export const SocialMediaIcons = () => {
  return (
    <div className='ml-[5%] flex select-none justify-center space-x-3 py-8 pb-10'>
      <Icon src={IG_ICON} url='https://www.instagram.com/liga_edefi/' />
      <Icon src={WP_ICON} url='watsap' />
    </div>
  );
};

interface IconProps {
  src: string;
  url: string;
};

const Icon = ({ src, url }: IconProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img className='w-10' src={src} alt='instagram' />
    </a>
  );
};
