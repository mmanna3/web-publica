import './App.css';
import NavBar from './components/common/NavBar';

function App() {
  return (
    <>
      <main className='bg-green-700'>
        <NavBar />
        <section className='m-auto max-w-[600px] rounded-lg border border-orange-500'>
          <h2 className='my-20 text-center text-3xl font-bold'>Banner</h2>
        </section>
        <section>
          <h2 className='my-10 bg-gray-100 text-center text-3xl font-bold'>Torneos</h2>
          <div className='grid-cols grid place-content-center'>
            <img src='./vite.svg' alt='baby' className='w-[100px]' />
            <p>Baby</p>
            <img src='./vite.svg' alt='futsal' className='w-[100px]' />
            <p>Futsal</p>
            <img src='./vite.svg' alt='futbol-11' className='w-[100px]' />
            <p>Futbol 11</p>
          </div>
        </section>
        <section>
          <h2 className='my-10 bg-gray-100 text-center text-3xl font-bold'>Copas</h2>
          <div className='mx-auto flex w-[500px] justify-between bg-gray-800 opacity-80 '>
            <img src='./vite.svg' alt='baby' className='w-[100px]' />
            <img src='./vite.svg' alt='futsal' className='w-[100px]' />
          </div>
        </section>
        <section className='flex justify-between bg-gray-50 p-10'>
          <img className='h-[400px] w-[200px]' src='./vite.svg' alt='logo' />
          <div>
            <h3 className='font-semibold'>Contacto</h3>
            <p>@liga_edefi</p>
            <p>Juan B. justo 550, Haedo, Bs. As.</p>
            <p>Juan B. justo 550, Haedo, Bs. As.Lunes a Jueves de 17.30 a 20.30 hs.</p>
            <p>Viernes 17.30 a 19.30 hs.</p>
            <p>(+549) 2195-8389</p>
            <p>edefiargentina@hotmail.com</p>
          </div>
          <div>
            <h3 className='font-semibold'>Seguinos</h3>
            <img className='h-[400px] w-[200px]' src='./vite.svg' alt='phone' />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
