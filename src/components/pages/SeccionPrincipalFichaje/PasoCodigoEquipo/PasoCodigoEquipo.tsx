import React, { ChangeEventHandler, useState } from 'react';
// import bootstrap from "GlobalStyle/bootstrap.min.css";
import Label from '../Label/Label';
import Input from '../Input/Input';
import Estilos from './PasoCodigoEquipo.module.css';
import Error from '../Error/Error';
import { IPaso } from '../SeccionPrincipalFichaje';

const PasoCodigoEquipo = ({ register, errors }: IPaso) => {
  const [codigoEquipo, setCodigoEquipo] = useState<string>();
  const [codigoEquipoEsValido, setCodigoEquipoEsValido] = useState<boolean | null>(null);
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [yaValidoCodigoEquipo, setYaValidoCodigoEquipo] = useState(false);

  const onCodigoEquipoChange = (id: string) => {
    setCodigoEquipo(id);
  };

  const validar = async () => {
    return fetch(
      `https://www.edefi.com.ar/publico/obtenerNombreDelEquipo?codigoAlfanumerico=${codigoEquipo}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setNombreEquipo(data);
        setCodigoEquipoEsValido(true);
        setYaValidoCodigoEquipo(true);
        return true;
      })
      .catch(() => {
        setCodigoEquipoEsValido(false);
        setYaValidoCodigoEquipo(true);
        return false;
      });
  };

  const onValidarClick = async () => {
    const resultado = await validar();
    return resultado;
  };

  return (
    <div className='bg-blue-700 py-6 px-3'>
      <div className='flex flex-col'>
        <div className='w-[100%]'>
          <Label texto={'Código de tu equipo'} subtitulo='Pedíselo a tu delegado' />
        </div>
        <div className='flex'>
          <Input
            onChange={onCodigoEquipoChange}
            type='string'
            register={register('codigoAlfanumerico', {
              required: true,
              validate: { asyncValidate: onValidarClick },
            })}
            name='codigoAlfanumerico'
            className='w-1/2'
          />
          <div className='w-1/2'>
            <button
              type='button'
              className={'py-auto rounded-lg bg-green-700 text-center text-white'}
              style={{ width: '100%' }}
              onClick={onValidarClick}
            >
              Validar
            </button>
          </div>
        </div>
        {yaValidoCodigoEquipo &&
          (codigoEquipoEsValido ? (
            <div className=''>
              <div
                className={`//bootstrap-alert //bootstrap-alert-success ${Estilos.alertaValidacionEquipo}`}
              >
                Tu equipo es <strong>{nombreEquipo}</strong>
              </div>
            </div>
          ) : (
            <div className=''>
              <div
                className={`//bootstrap-alert //bootstrap-alert-danger ${Estilos.alertaValidacionEquipo}`}
              >
                El código es incorrecto
              </div>
            </div>
          ))}

        {errors.codigoEquipo && errors.codigoEquipo.type === 'required' && (
          <div className=''>
            <div
              className={`//bootstrap-alert //bootstrap-alert-danger ${Estilos.alertaValidacionEquipo}`}
            >
              ¡Ups! Te olvidaste el código de tu equipo.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasoCodigoEquipo;
