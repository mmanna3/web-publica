import { FieldErrors, FieldValues } from 'react-hook-form';

interface IError {
  errors: FieldErrors<FieldValues>;
  name: string;
  nombre: string;
}

const Error = ({ errors, name, nombre }: IError) => {
  let message = undefined;

  if (errors[name] && errors[name]?.type === 'required')
    message = `¡Ups! Te olvidaste tu ${nombre}`;
  else if (errors[name] && errors[name]?.type !== 'required')
    message = (errors[name] as any).message;

  return (
    <>
      {message && (
        <div className=''>
          <div className='mt-2 rounded-md border bg-red-600 py-1 text-center text-white'>
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
