import React, { useState } from 'react';
// import bootstrap from "GlobalStyle/bootstrap.min.css";
import estilos from './PasoBotonEnviar.css';

const PasoBotonEnviar = ({ estiloDelPaso }) => {
  return (
    <div className={'bg-red-700 py-6 px-3'}>
      <div className={'flex'}>
        <div className=''>
          <div className={estilos.contenedorDeContenidoCentrado}>
            <p className={estilos.declaracion}>
              Al enviar los datos, declaro estar acompañado por un mayor de edad que autoriza a que
              puedan publicarse fotos y videos del jugador fichado en medios donde se difunda
              material sobre torneos organizados por EDEFI.
            </p>
          </div>

          <div className={estilos.contenedorDeContenidoCentrado}>
            <button
              className={`py-auto py-auto rounded-lg bg-green-700 text-white ${estilos.boton}`}
              type='submit'
            >
              ENVIAR MIS DATOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasoBotonEnviar;
