import { NavBarLink } from './NavbarLink';
import EDEFI_LOGO from '../../../assets/images/edefi-logo.svg';
import { Logo } from './Logo';

export const NavBar = () => {
  return (
    <div className='flex justify-between p-1'>
      <Logo src={EDEFI_LOGO} />
      <div className='flex flex-row items-center justify-end gap-1'>
        <NavBarLink title='Inicio' href={'/'} />
        <NavBarLink title='Torneos' href={'/torneos'} />
        <NavBarLink title='Copas' href={'/copas'} />
        <NavBarLink title='Noticias' href={'/noticias'} />
        <NavBarLink title='Nosotros' href={'/nosotros'} />
        <NavBarLink title='Contacto' href={'/contacto'} />
        <NavBarLink title='Fichaje' href={'/fichaje'} />
      </div>
    </div>
  );
};
