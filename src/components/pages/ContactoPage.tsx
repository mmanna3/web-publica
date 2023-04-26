import IMG_CONTACTO_LARGE from '../../assets/images/mobile/buttons/contacto-large.png'
import SEGUINOS_CELU from '../../assets/images/mobile/seguinos-celu.png'
import DATOS_CONTACTO_CELU from '../../assets/images/mobile/datos-contacto-celu.png'

export const ContactoPage = () => {
  return (
    <main>
      <img src={IMG_CONTACTO_LARGE} alt="Contacto" />
      <img src={DATOS_CONTACTO_CELU} alt="Datos" />
      {/* <div>
        <h2>Horarios de atención</h2>
        <p>Lunes a jueves de 17:30 hs a 20:30 hs</p>
        <p>Viernes de 17:00 hs a 19:30 hs</p>
      </div>
      <div>
        <h2>Dirección</h2>
        <p>Juan B. Justo 550, Haedo. Bs. As</p>
        <p>CP: 1706</p>
      </div>
      <div>
        <h2>Teléfono</h2>
        <p>21958389</p>
      </div>
      <div>
        <h2>E-mail</h2>
        <p>edefiargentina@hotmail.com</p>
      </div> */}
      <img src={SEGUINOS_CELU} alt="Seguinos" />
    </main>
  );
};






