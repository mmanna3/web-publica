import NavBar from '../common/NavBar'
import BABY_CELU from '../../assets/images/mobile/baby-celu.png'
import FUTSAL_CELU from '../../assets/images/mobile/futsal-celu.png'
import F11_CELU from '../../assets/images/mobile/f11-celu.png'
import TORNEOS from '../../assets/images/torneos.png'
import COPAS from '../../assets/images/copas.png'
import BANNER_CELU from '../../assets/images/mobile/banner-celu.png'
import COPA_EDEFI from '../../assets/images/copa-edefi.png'
import COPA_LIGA from '../../assets/images/copa-liga.png'

export default function InicioPage() {
  return (
    <main className='bg-fondo-celu bg-cover'>
        <NavBar />
        <section className='p-4'>
          <img src={BANNER_CELU} alt="banner" />
        </section>
        <section>
          
          <img src={TORNEOS} alt="torneos" className='mb-2' />
          <div className='grid-cols grid place-content-center bg-gray-200 opacity-80 mb-8'>
            <img src={BABY_CELU} alt='baby' className='w-[100px]' />
            <img src={FUTSAL_CELU} alt='futsal' className='w-[100px]' />
            <img src={F11_CELU} alt='futbol-11' className='w-[100px]' />
          </div>
        </section>
        <section>
          <img src={COPAS} alt="copas" className='mb-2 opacity-80' />
          <div className='mx-auto flex justify-around  bg-gray-200 opacity-80 mb-8 '>
            <img src={COPA_EDEFI} alt='edefi' className='w-[100px]' />
            <img src={COPA_LIGA} alt='de-la-liga' className='w-[100px]' />
          </div>
        </section>
       
      </main>
  )
}
