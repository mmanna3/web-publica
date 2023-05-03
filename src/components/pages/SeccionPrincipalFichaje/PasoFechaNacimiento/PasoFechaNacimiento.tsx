import React, { useState, useEffect } from 'react';
// import bootstrap from "GlobalStyle/bootstrap.min.css";
import Label from '../Label/Label';
import Input from '../Input/Input';
import Estilos from './PasoFechaNacimiento.module.css';
import Error from '../Error/Error';
import { IPaso } from '../SeccionPrincipalFichaje';

const PasoFechaNacimiento = ({ register, errors, estiloDelPaso }: IPaso) => {
  const [valorCalculado, setValorCalculado] = useState('');
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [anio, setAnio] = useState();

  useEffect(() => {
    setValorCalculado(`${dia}-${mes}-${anio}`);
  }, [dia, mes, anio]);

  const actualizarDia = (dia) => {
    if (dia.length === 1) dia = '0' + dia;

    setDia(dia);
  };

  const actualizarMes = (mes) => {
    if (mes.length === 1) mes = '0' + mes;

    setMes(mes);
  };

  const actualizarAnio = (anio) => {
    setAnio(anio);
  };

  const validarFecha = (date) => {
    const temp = date.split('-');
    const d = new Date(temp[1] + '-' + temp[0] + '-' + temp[2]);
    const resultado =
      d &&
      d.getMonth() + 1 == temp[1] &&
      d.getDate() == Number(temp[0]) &&
      d.getFullYear() == Number(temp[2]);
    return resultado || '¡Ups! Hay un problema con la fecha. Revisala.';
  };

  return (
    <div className={estiloDelPaso}>
      <div className='flex'>
        <div className=''>
          <Label texto='Tu fecha de nacimiento' />
        </div>
        <div className={''}>
          <p className={Estilos.tituloInput}>Día</p>
          <Input type='number' onChange={actualizarDia} />
        </div>
        <div className={''}>
          <p className={Estilos.tituloInput}>Mes</p>
          <Input type='number' onChange={actualizarMes} />
        </div>
        <div className={''}>
          <p className={Estilos.tituloInput}>Año</p>
          <Input type='number' onChange={actualizarAnio} />
        </div>
        <input
          style={{ display: 'none' }}
          ref={register('fechaNacimiento', { required: true, validate: validarFecha })}
          name='fechaNacimiento'
          defaultValue={valorCalculado}
        />
        <Error name='fechaNacimiento' errors={errors} nombre='fecha' />
      </div>
    </div>
  );
};

export default PasoFechaNacimiento;
