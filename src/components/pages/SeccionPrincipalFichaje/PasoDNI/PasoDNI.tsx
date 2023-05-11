import Label from '../Label/Label';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Estilos from './PasoDNI.module.css';
import { IPaso } from '../SeccionPrincipalFichaje';

const PasoDNI = ({ register, errors }: IPaso) => {
  const jugadorYaEstaFichado = async (dni: number) => {
    return fetch(`/publico/elDniEstaFichado?dni=${dni}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch(() => false);
  };

  const validar = async (dni: number) => {
    const resultado = await jugadorYaEstaFichado(dni);
    return !resultado || '¡Ups! Ya estás fichado. Consultá con tu delegado.';
  };

  return (
    <div className='bg-red-700 py-6 px-3'>
      <div className=''>
        <div className=''>
          <Label texto='Tu DNI' />
        </div>
        <div className=''>
          <Input
            type='number'
            register={register('dni', {
              required: true,
              maxLength: { value: 9, message: '¡Ups! Como máximo son 9 números' },
              validate: { asyncValidate: validar },
            })}
            name='dni'
            onChange={() => console.log('aaa')}
          />
        </div>
        <Error name='dni' errors={errors} nombre='DNI' />
      </div>
    </div>
  );
};

export default PasoDNI;
