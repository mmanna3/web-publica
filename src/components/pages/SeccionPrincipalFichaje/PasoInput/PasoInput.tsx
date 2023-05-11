import Label from '../Label/Label';
import Input from '../Input/Input';
import Error from '../Error/Error';
import { IPaso } from '../SeccionPrincipalFichaje';

interface IPasoInput extends IPaso {
  titulo: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  nombre: string;
  longMaxima: number;
  type?: string;
}

const PasoInput = ({
  titulo,
  onChange,
  name,
  nombre,
  longMaxima,
  register,
  errors,
  type = 'text',
}: IPasoInput) => {
  const caracteres = type === 'text' ? 'letras' : 'números';

  return (
    <div className='bg-red-700 py-6 px-3'>
      <div className=''>
        <div className=''>
          <Label texto={titulo} />
        </div>
        <div className=''>
          <Input
            type={type}
            register={register(name, {
              required: true,
              maxLength: {
                value: longMaxima,
                message: `¡Ups! Como máximo son ${longMaxima} ${caracteres}`,
              },
            })}
            name={name}
            onChange={onChange}
          />
        </div>
        <Error name={name} errors={errors} nombre={nombre} />
      </div>
    </div>
  );
};

export default PasoInput;
