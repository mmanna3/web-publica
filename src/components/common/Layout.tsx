import { SocialMedia } from './SocialMedia/SocialMedia';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    // <div className='bg-fondo-celu bg-cover bg-no-repeat bg-fixed md:bg-fondo-pc'>
    <div className=' bg-black'>
      <Header />
      <main className='mx-auto ml-[5%] select-none '>
        <Outlet />

        <SocialMedia />
      </main>
    </div>
  );
};
