import { SocialMedia } from './SocialMedia/SocialMedia';
import Header from './Header';
import { Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <div className='h-[100vh] bg-fondo-celu bg-cover bg-no-repeat md:bg-fondo-pc'>
      <Header />
      <Outlet/>
      <SocialMedia />
    </div>
  );
};
