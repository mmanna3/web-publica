import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className='p-10'>
      <img src='' alt='edefi-logo' />
      <ul className='flex flex-row justify-end'>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/'>
            Inicio
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/nosotros'>
            Nosotros
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/torneos'>
            Torneos
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/copas'>
            Copas
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/noticias'>
            Noticias
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/contacto'>
            Contacto
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/fichaje'>
            Fichaje
          </Link>
        </li>
      </ul>
    </div>
  );
}
