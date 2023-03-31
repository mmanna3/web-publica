import { FC } from 'react';
import { Link } from 'react-router-dom';

type NewNavBarLinkProps = {
  title: string;
  href: string;
};

const NavBarLink: FC<NewNavBarLinkProps> = ({ title, href }) => {
  return (
    <Link className='text-blue-500 hover:text-blue-800' to={href}>
      {title}
    </Link>
  );
};

export const NavBar = () => {
  return (
    <div className='p-10'>
      <img src='' alt='edefi-logo' />
      <div className='flex flex-row justify-end gap-6'>
        <NavBarLink title='Inicio' href={'/'} />
        <NavBarLink title='Nosotros' href={'/nosotros'} />
        <NavBarLink title='Torneos' href={'/torneos'} />
        <NavBarLink title='Copas' href={'/copas'} />
        <NavBarLink title='Noticias' href={'/noticias'} />
        <NavBarLink title='Contacto' href={'/contacto'} />
        <NavBarLink title='Fichaje' href={'/fichaje'} />
      </div>
    </div>
  );
};
