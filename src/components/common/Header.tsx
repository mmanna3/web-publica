import { useState } from 'react';
import EDEFI_LOGO from '../../assets/images/edefi-logo.svg';
import { Link } from 'react-router-dom';

interface Props {
  path: string;
  content: string;
  closeNav: () => void;
}
const NavOpenLink = ({ path, content, closeNav }: Props) => {
  return (
    <li className='my-8 border-b border-gray-400 uppercase'>
      <Link onClick={closeNav} to={path}>
        {content}
      </Link>
    </li>
  );
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isClosed = () => setIsNavOpen(false);

  return (
    <div className='mb-3 flex items-center justify-between py-4 px-4  gap-8'>
      <Link to='/'>
        <img className='w-14 sm:w-20 lg:w-24' src={EDEFI_LOGO} alt='edefi-logo' />
      </Link>
      <nav>
        <section className='MOBILE-MENU flex sm:hidden'>
          <div className='HAMBURGER-ICON space-y-2' onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>

            <ul className='MENU-LINK-MOBILE-OPEN z-50 flex min-h-[250px] flex-col items-center justify-between'>
              <NavOpenLink closeNav={isClosed} path='/torneos' content='Torneos' />
              <NavOpenLink closeNav={isClosed} path='/copas' content='Copas' />
              <NavOpenLink closeNav={isClosed} path='/noticias' content='Noticias' />
              <NavOpenLink closeNav={isClosed} path='/nosotros' content='Nosotros' />
              <NavOpenLink closeNav={isClosed} path='/contacto' content='Contacto' />
              <NavOpenLink closeNav={isClosed} path='/fichaje' content='Fichaje' />
              <NavOpenLink closeNav={isClosed} path='/noticias' content='Noticias' />
            </ul>
          </div>
        </section>

        <div className='DESKTOP-MENU hidden space-x-4 pt-2 text-[#666] sm:flex sm:text-[9px] lg:text-[16px] xl:text-[18px]'>
          <Link to='/'>Inicio</Link>
          <Link to='/torneos'>Torneos</Link>
          <Link to='/copas'>Copas</Link>
          <Link to='/noticias'>Noticias</Link>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/fichaje'>Fichaje</Link>
          <Link to='/noticias'>Noticias</Link>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 50;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
