import { SocialMedia } from './SocialMedia/SocialMedia';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='max-h-max bg-fondo-celu bg-cover bg-no-repeat'>
      {/* <div className=' bg-black'> */}
      <Header />
      <main className='mx-auto ml-[5%] select-none '>
        <Outlet />
      </main>
      <SocialMedia />
    </div>
  );
};
