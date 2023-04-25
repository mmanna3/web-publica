import { ReactElement } from 'react';
import { NavBar } from './NavBar/Navbar';
import { SocialMedia } from './SocialMedia/SocialMedia';

type LayoutProps = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='container h-[100vh] bg-fondo-celu bg-cover bg-no-repeat'>
      <NavBar />
      {children}
      <SocialMedia />
    </div>
  );
};
