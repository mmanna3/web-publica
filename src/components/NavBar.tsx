
export default function NavBar() {
  return (
    <div className="p-10">
      <img src="#" alt="logo" />
      <ul className='flex flex-row justify-end'>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/'>
            Inicio
          </a>
        </li>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/nosotros'>
            Nosotros
          </a>
        </li>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/torneos'>
            Torneos
          </a>
        </li>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/copas'>
            Copas
          </a>
        </li>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/noticias'>
            Noticias
          </a>
        </li>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/contacto'>
            Contacto
          </a>
        </li>
        <li className='mr-6'>
          <a className='text-blue-500 hover:text-blue-800' href='/fichaje'>
            Fichaje
          </a>
        </li>
      </ul>
    </div>
  );
}
