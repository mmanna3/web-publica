import React, { useState } from 'react';
// import bootstrap from "GlobalStyle/bootstrap.min.css";
import Label from '../Label/Label';
import Input from '../Input/Input';
import Estilos from './PasoCodigoEquipo.module.css';
import Error from '../Error/Error';
import { IPaso } from '../SeccionPrincipalFichaje';

const PasoCodigoEquipo = ({ register, errors, estiloDelPaso }: IPaso) => {
  const [codigoEquipo, setCodigoEquipo] = useState();
  const [codigoEquipoEsValido, setCodigoEquipoEsValido] = useState(null);
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [yaValidoCodigoEquipo, setYaValidoCodigoEquipo] = useState(false);

  const onCodigoEquipoChange = (id) => {
    setCodigoEquipo(id);
  };

  const validar = async () => {
    return fetch(`/publico/obtenerNombreDelEquipo?codigoAlfanumerico=${codigoEquipo}`)
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
    <div className={`${estiloDelPaso}`}>
      <div className='flex'>
        <div className='w-[100%]'>
          <Label texto={'Código de tu equipo'} subtitulo='Pedíselo a tu delegado' />
        </div>
        <div className='w-[50%]'>
          <Input
            onChange={onCodigoEquipoChange}
            type='string'
            register={register('codigoAlfanumerico', {
              required: true,
              validate: { asyncValidate: onValidarClick },
            })}
            name='codigoAlfanumerico'
          />
        </div>
        <div className='w-[50%]'>
          <button
            type='button'
            className={'//bootstrap-btn //btn-success'}
            style={{ width: '100%' }}
            onClick={onValidarClick}
          >
            Validar
          </button>
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
