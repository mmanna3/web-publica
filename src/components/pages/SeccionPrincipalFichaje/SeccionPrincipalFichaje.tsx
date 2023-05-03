import { useState } from 'react';
import styles from './SeccionPrincipalFichaje.module.css';
import PasoInput from './PasoInput/PasoInput';
import PasoCodigoEquipo from './PasoCodigoEquipo/PasoCodigoEquipo';
import PasoFotoCarnet from './PasoFotoCarnet/PasoFotoCarnet';
import PasoFotoDocumento from './PasoFotoDocumento/PasoFotoDocumento';
import PasoBotonEnviar from './PasoBotonEnviar/PasoBotonEnviar';
import PasoFechaNacimiento from './PasoFechaNacimiento/PasoFechaNacimiento';
import PasoDNI from './PasoDNI/PasoDNI';
import { FieldErrors, FieldValues, UseFormRegister, useForm } from 'react-hook-form';

export interface IPaso {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  estiloDelPaso: any;
}

const SeccionPrincipalFichaje = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // initialize the hook
  const [mensajeExitoVisible, mostrarMensajeExito] = useState(false);
  const [mensajeErrorServidorVisible, mostrarMensajeErrorServidor] = useState(false);
  const [spinnerVisible, mostrarSpinner] = useState(false);

  const hacerElPost = async (data) => {
    mostrarSpinner(true);
    fetch('JugadorAutofichado/autofichaje', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        mostrarSpinner(false);
        if (res === 'OK') mostrarMensajeExito(true);
        else mostrarMensajeErrorServidor(true);
      })
      .catch(function () {
        mostrarSpinner(false);
        mostrarMensajeErrorServidor(true);
      });
  };

  const estaLaSeccionHabilitada = () => {
    const hoy = new Date();
    const diaDeHoy = hoy.getDay();
    const horaActual = hoy.getHours();
    if (diaDeHoy == 6 || diaDeHoy == 0 || diaDeHoy == 5 || (diaDeHoy == 4 && horaActual >= 20))
      return false;
    return true;
  };

  const onSubmit = (data: any) => {
    hacerElPost(data);
  };

  const huboAlgunError = !(Object.keys(errors).length === 0 && errors.constructor === Object);

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
                className={`//bootstrap-btn //bootstrap-btn-primary ${styles.botonFicharOtroJugador}`}
              >
                Fichar otro jugador
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else if (mensajeErrorServidorVisible)
    return (
      <div className='flex'>
        <div className=''>
          <div className={`${styles.mensajeErrorResultadoDelPost}`}>
            ¡Ups! Hubo un <strong>error</strong>. Volvé a intentar más tarde.
          </div>
        </div>
      </div>
    );
  else if (spinnerVisible) return <>Ponele que soy un spinner</>;
  else
    return (
      <div className={styles.seccionContainer}>
        <div className={styles.seccion}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {huboAlgunError && (
              <div className=''>
                <div
                  className={`//bootstrap-alert //bootstrap-alert-danger ${styles.alertaValidacion}`}
                >
                  ¡Ups! Hubo algún error. Revisá tus datos y volvé a enviarlos.
                </div>
              </div>
            )}

            <PasoCodigoEquipo estiloDelPaso={styles.pasoAzul} register={register} errors={errors} />

            <PasoInput
              estiloDelPaso={styles.pasoRojo}
              register={register}
              errors={errors}
              longMaxima={10}
              name='nombre'
              nombre='nombre'
              titulo='Tu nombre'
            />

            <PasoInput
              estiloDelPaso={styles.pasoRojo}
              register={register}
              errors={errors}
              longMaxima={11}
              name='apellido'
              nombre='apellido'
              titulo='Tu apellido'
            />

            <PasoDNI estiloDelPaso={styles.pasoRojo} register={register} errors={errors} />

            <PasoFechaNacimiento
              estiloDelPaso={styles.pasoRojo}
              register={register}
              errors={errors}
            />

            <PasoFotoCarnet estiloDelPaso={styles.pasoVerde} errors={errors} register={register} />

            <PasoFotoDocumento
              estiloDelPaso={styles.pasoAzul}
              register={register}
              titulo='Foto del frente de tu DNI'
              errors={errors}
              name='fotoDNIFrente'
              nombre='foto de FRENTE del DNI'
            />

            <PasoFotoDocumento
              estiloDelPaso={styles.pasoAzul}
              register={register}
              titulo='Foto de la parte de atrás de tu DNI'
              errors={errors}
              name='fotoDNIDorso'
              nombre='foto de ATRÁS del DNI'
            />

            <PasoBotonEnviar estiloDelPaso={styles.pasoRojo} />
          </form>
        </div>
      </div>
    );
};

export default SeccionPrincipalFichaje;
