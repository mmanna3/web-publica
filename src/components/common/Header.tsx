import { useState } from 'react';
import EDEFI_LOGO from '../../assets/images/edefi-logo.svg';
import { Link } from 'react-router-dom';
import { TORNEOS_PORTAL_URL } from '../../globalConst';

interface NavOpenLinksProps {
  path: string;
  content: string;
  closeNav: () => void;
}
const NavOpenLink = ({ path, content, closeNav }: NavOpenLinksProps) => {
  return (
    <li className='border-b border-gray-400 uppercase'>
      <Link onClick={closeNav} to={path}>
        {content}
      </Link>
    </li>
  );
};

interface NavOpenExternalLinkProps {
  href: string;
  content: string;
  closeNav: () => void;
}
const NavOpenExternalLink = ({ href, content, closeNav }: NavOpenExternalLinkProps) => {
  return (
    <li className='border-b border-gray-400 uppercase'>
      <a href={href} onClick={closeNav}>
        {content}
      </a>
    </li>
  );
};

interface HeaderProps {
  hideLayout: () => void;
  showLayout: () => void;
}

export const Header = ({ hideLayout, showLayout }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isClosed = () => setIsNavOpen(false);

  if (isNavOpen) {
    hideLayout();
  } else {
    showLayout();
  }

  return (
    <div className='flex items-center justify-between gap-8 py-4 px-4 mb-4'>
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

            <ul className='MENU-LINK-MOBILE-OPEN z-50 flex h-[100vh] flex-col items-center justify-evenly py-10'>
              <NavOpenExternalLink closeNav={isClosed} href={TORNEOS_PORTAL_URL} content='Torneos' />
              <NavOpenExternalLink closeNav={isClosed} href={TORNEOS_PORTAL_URL} content='Copas' />
              <NavOpenLink closeNav={isClosed} path='/nosotros' content='Nosotros' />
              <NavOpenLink closeNav={isClosed} path='/contacto' content='Contacto' />
              <NavOpenLink closeNav={isClosed} path='/fichaje' content='Fichaje' />
              <NavOpenLink closeNav={isClosed} path='/noticias' content='Noticias' />
            </ul>
          </div>
        </section>

        <div className='DESKTOP-MENU hidden space-x-4 pt-2 text-[#666] sm:flex sm:text-[10px]  lg:text-[14px]'>
          <Link to='/'>Inicio</Link>
          <a href={TORNEOS_PORTAL_URL}>Torneos</a>
          <a href={TORNEOS_PORTAL_URL}>Copas</a>
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
        background: white;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 50;
      }
    `}</style>
    </div>
  );
}
