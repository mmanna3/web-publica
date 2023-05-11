import styles from './SeccionPrincipalFichaje.module.css';
import PasoInput from './PasoInput/PasoInput';
import PasoCodigoEquipo from './PasoCodigoEquipo/PasoCodigoEquipo';
import PasoFotoCarnet from './PasoFotoCarnet/PasoFotoCarnet';
import PasoFotoDocumento from './PasoFotoDocumento/PasoFotoDocumento';
import PasoBotonEnviar from './PasoBotonEnviar/PasoBotonEnviar';
import PasoFechaNacimiento from './PasoFechaNacimiento/PasoFechaNacimiento';
import PasoDNI from './PasoDNI/PasoDNI';
import { FieldErrors, FieldValues, UseFormRegister, useForm, FormProvider } from 'react-hook-form';

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
  const methods = useForm();

  const hacerElPost = async (data) => {
    showLoading(true);
    fetch('https://www.edefi.com.ar/JugadorAutofichado/autofichaje', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Respuesta', res);
        showLoading(false);
        if (res === '"OK"') onSuccess();
        else onError();
      })
      .catch(function (err) {
        console.log('Error del servidor', err);
        showLoading(false);
        onError();
      });
  };

  const onSubmit = (data: any) => {
    hacerElPost(data);
  };

  const huboAlgunError = !(
    Object.keys(methods.formState.errors).length === 0 &&
    methods.formState.errors.constructor === Object
  );

  return (
    <FormProvider {...methods}>
      <div className={styles.seccionContainer + ' font-sans'}>
        <div className={styles.seccion}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {huboAlgunError && (
              <div className=''>
                <div
                  className={`//bootstrap-alert //bootstrap-alert-danger ${styles.alertaValidacion}`}
                >
                  ¡Ups! Hubo algún error. Revisá tus datos y volvé a enviarlos.
                </div>
              </div>
            )}

            <PasoCodigoEquipo />

            <PasoInput longMaxima={10} name='nombre' nombre='nombre' titulo='Tu nombre' />

            <PasoInput longMaxima={11} name='apellido' nombre='apellido' titulo='Tu apellido' />

            <PasoDNI />

            <PasoFechaNacimiento />

            <PasoFotoCarnet />

            <PasoFotoDocumento
              titulo='Foto del frente de tu DNI'
              name='fotoDNIFrente'
              nombre='foto de FRENTE del DNI'
            />

            <PasoFotoDocumento
              titulo='Foto de la parte de atrás de tu DNI'
              name='fotoDNIDorso'
              nombre='foto de ATRÁS del DNI'
            />

            <PasoBotonEnviar />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default FormularioFichaje;
