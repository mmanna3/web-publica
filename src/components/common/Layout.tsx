import { ReactElement } from 'react';
import { SocialMedia } from './SocialMedia/SocialMedia';
import Header from './Header';

type LayoutProps = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='h-[100vh] bg-fondo-celu bg-cover bg-no-repeat md:bg-fondo-pc'>
      <Header />
      {children}
      <SocialMedia />
    </div>
  );
};
