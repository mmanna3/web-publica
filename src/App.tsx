import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import { SocialMediaIcons } from './components/common/SocialMediaIcons';

export function loader() {
  console.log('soy el loader');
}

function App() {
  return (
    <div className='max-h-max min-h-screen bg-fondo-celu bg-cover bg-no-repeat'>
      <Header />
      <main className='mx-auto select-none '>
        <Outlet />
      </main>
      <SocialMediaIcons />
    </div>
  );
}

export default App;
