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
}

interface IProps {
  showLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
  onError: () => void;
}

const FormularioFichaje = ({ showLoading, onSuccess, onError }: IProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const hacerElPost = async (data) => {
    showLoading(true);
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
        showLoading(false);
        if (res === 'OK') onSuccess();
        else onError();
      })
      .catch(function () {
        showLoading(false);
        onError();
      });
  };

  const onSubmit = (data: any) => {
    hacerElPost(data);
  };

  const huboAlgunError = !(Object.keys(errors).length === 0 && errors.constructor === Object);

  return (
    <div className={styles.seccionContainer + ' font-sans'}>
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

          <PasoCodigoEquipo register={register} errors={errors} />

          <PasoInput
            register={register}
            errors={errors}
            longMaxima={10}
            name='nombre'
            nombre='nombre'
            titulo='Tu nombre'
          />

          <PasoInput
            register={register}
            errors={errors}
            longMaxima={11}
            name='apellido'
            nombre='apellido'
            titulo='Tu apellido'
          />

          <PasoDNI register={register} errors={errors} />

          <PasoFechaNacimiento register={register} errors={errors} setValue={setValue} />

          <PasoFotoCarnet errors={errors} register={register} />

          <PasoFotoDocumento
            register={register}
            titulo='Foto del frente de tu DNI'
            errors={errors}
            name='fotoDNIFrente'
            nombre='foto de FRENTE del DNI'
          />

          <PasoFotoDocumento
            register={register}
            titulo='Foto de la parte de atrás de tu DNI'
            errors={errors}
            name='fotoDNIDorso'
            nombre='foto de ATRÁS del DNI'
          />

          <PasoBotonEnviar />
        </form>
      </div>
    </div>
  );
};

export default FormularioFichaje;
