import IG_ICON from '../../assets/images/icons/ig-icon.png';
import WP_ICON from '../../assets/images/icons/wp-icon.png';

export const SocialMediaIcons = () => {
  return (
    <div className='mx-auto flex select-none justify-center space-x-3 p-4'>
      <Icon src={IG_ICON} url='https://www.instagram.com/liga_edefi/' />
      <Icon src={WP_ICON} url='watsap' />
    </div>
  );
};

interface IconProps {
  src: string;
  url: string;
}

const Icon = ({ src, url }: IconProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img className='w-8 bg-red-600' src={src} alt='instagram' />
    </a>
  );
};
