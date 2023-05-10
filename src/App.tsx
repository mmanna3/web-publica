import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import { SocialMedia } from './components/common/SocialMedia/SocialMedia';

export function loader() {
  console.log('soy el loader');
}

function App() {
  return (
    <div className='max-h-max bg-fondo-celu bg-cover bg-no-repeat'>
      <Header />
      <main className='mx-auto ml-[5%] select-none '>
        <Outlet />
      </main>
      <SocialMedia />
    </div>
  )
}

export default App;
