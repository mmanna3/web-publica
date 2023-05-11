import { useState } from 'react';
import styles from './SeccionPrincipalFichaje.module.css';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import FormularioFichaje from './FormularioFichaje';
import ErrorMessage from './Error/ErrorMessage';

export interface IPaso {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const SeccionPrincipalFichaje = () => {
  const [mensajeExitoVisible, mostrarMensajeExito] = useState(false);
  const [mensajeErrorServidorVisible, mostrarMensajeErrorServidor] = useState(false);
  const [spinnerVisible, mostrarSpinner] = useState(false);

  const estaLaSeccionHabilitada = () => {
    const hoy = new Date();
    const diaDeHoy = hoy.getDay();
    const horaActual = hoy.getHours();
    if (diaDeHoy == 6 || diaDeHoy == 0 || diaDeHoy == 5 || (diaDeHoy == 4 && horaActual >= 20))
      return false;
    return true;
  };

  if (!estaLaSeccionHabilitada())
    // if (true)
    return (
      <div className='flex'>
        <div className=''>
          <div className={`${styles.mensajeDeshabilitado}`}>
            {/* El fichaje está <strong>deshabilitado.</strong> Los días habilitados para ficharse son lunes, martes, miércoles y jueves hasta las 20Hs. */}
            El fichaje está <strong>deshabilitado</strong>.
          </div>
        </div>
      </div>
    );
  else if (mensajeExitoVisible)
    return (
      <div className='flex'>
        <div className=''>
          <div className={`${styles.mensajeExitoResultadoDelPost}`}>
            <strong>¡Tus datos se enviaron correctamente!</strong> Gracias por ficharte.
            <div className={`${styles.margenDeArribaDelBoton} //bootstrap-align-items-center`}>
              <button
                onClick={() => mostrarMensajeExito(false)}
                className={`py-auto py-auto-primary rounded-lg text-white ${styles.botonFicharOtroJugador}`}
              >
                Fichar otro jugador
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else if (mensajeErrorServidorVisible)
    return <ErrorMessage message='¡Ups! Hubo un error. Volvé a intentar más tarde.' large />;
  else if (spinnerVisible) return <>Ponele que soy un spinner</>;
  else
    return (
      <FormularioFichaje
        showLoading={mostrarSpinner}
        onSuccess={() => mostrarMensajeExito(true)}
        onError={() => mostrarMensajeErrorServidor(true)}
      />
    );
};

export default SeccionPrincipalFichaje;
