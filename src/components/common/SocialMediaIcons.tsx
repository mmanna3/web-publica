import IG_ICON from '../../assets/images/icons/ig-icon.avif';
import EMAIL_ICON from '../../assets/images/icons/email-icon.avif';
import { ReactNode } from 'react';

export const SocialMediaIcons = () => {
  return (
    <div className='mx-auto flex select-none items-center justify-center space-x-3 p-4'>
      <InstagramIcon />
      <CopyToClipboard>
        <EmailIcon />
      </CopyToClipboard>
    </div>
  );
};

export const InstagramIcon = () => {
  return (
    <a href='https://www.instagram.com/liga_edefi/' target='_blank' rel='noreferrer'>
      <img className='w-8' src={IG_ICON} alt='instagram-icon' />
    </a>
  );
};

const EmailIcon = () => {
  return <img className='w-10' src={EMAIL_ICON} alt='email-icon' />;
};

interface CopyToClipboardProps {
  children: ReactNode;
}

function copy() {
  const email = 'edefiargentina@hotmail.com';
  navigator.clipboard.writeText(email);
}

function handleClick() {
  copy();
  alert('E-mail copiado al portapapeles!')
}

const CopyToClipboard = ({ children }: CopyToClipboardProps) => {
  return <button onClick={handleClick}>{children}</button>;
};
