import IG_ICON from '../../assets/images/icons/ig-icon.avif';
import WP_ICON from '../../assets/images/icons/wp-icon.avif';

export const SocialMediaIcons = () => {
  return (
    <div className='mx-auto flex select-none justify-center space-x-3 p-4'>
      <Icon src={IG_ICON} url='https://www.instagram.com/liga_edefi/' />
      <Icon src={WP_ICON} url='https://wa.me/1158900516' />
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
      <img className='w-8' src={src} alt='social-icon' />
    </a>
  );
};
