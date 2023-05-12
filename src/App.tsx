import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import { SocialMediaIcons } from './components/common/SocialMediaIcons';

export function loader() {
  console.log('soy el loader');
}

function App() {
  return (
    <div className='mx-auto flex max-h-fit min-h-screen flex-col justify-between bg-fondo-celu bg-cover bg-no-repeat xl:bg-fondo-pc'>
      <Layout />
      <SocialMediaIcons />
    </div>
  );
}

export const Layout = () => {
  return (
    <div className='mx-auto sm:max-w-2xl lg:max-w-6xl'>
      <Header />
      <main className='mx-auto mb-6 select-none  '>
        <Outlet />
      </main>
    </div>
  );
};
export default App;
