import { FieldErrors, FieldValues } from 'react-hook-form';
import estilos from './Error.module.css';

interface IError {
  errors: FieldErrors<FieldValues>;
  name: string;
  nombre: string;
}

const Error = ({ errors, name, nombre }: IError) => {
  return (
    <>
      {errors[name] && errors[name]?.type === 'required' && (
        <div className=''>
          <div className={`text-white ${estilos.alertaValidacionEquipo}`}>
            ¡Ups! Te olvidaste tu {nombre}.
          </div>
        </div>
      )}

      {errors[name] && errors[name]?.type !== 'required' && (
        <div className=''>
          <div className={`text-white ${estilos.alertaValidacionEquipo}`}>
            {(errors[name] as any).message}
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
