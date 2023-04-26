import { useState } from 'react';
import EDEFI_LOGO from '../../assets/images/edefi-logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='mb-3 flex items-center justify-between border-b border-gray-400 py-4 px-4 backdrop-blur-md md:mb-7 md:border-none md:py-2 md:pl-20 md:backdrop-blur-none'>
      <img className='w-14' src={EDEFI_LOGO} alt='edefi-logo' />
      <nav>
        <section className='MOBILE-MENU flex lg:hidden'>
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
            <ul className='MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between'>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <Link to='/tiposdetorneos'>Torneos</Link>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <Link to='/copas'>Copas</Link>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <Link to='/noticias'>Noticias</Link>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <Link to='/nosotros'>Nosotros</Link>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <Link to='/contacto'>Contacto</Link>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <Link to='/fichaje'>Fichaje</Link>
              </li>
            </ul>
          </div>
        </section>

        <div className='DESKTOP-MENU hidden space-x-8 pt-2 text-[#666] lg:flex'>
          <Link to='/'>Inicio</Link>
          <Link to='/torneos'>Torneos</Link>
          <Link to='/copas'>Copas</Link>
          <Link to='/noticias'>Noticias</Link>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/fichaje'>Fichaje</Link>
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
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
