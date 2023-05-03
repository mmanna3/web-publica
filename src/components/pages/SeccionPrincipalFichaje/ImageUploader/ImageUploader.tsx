import React from 'react';
import estilos from './ImageUploader.module.css';
// import bootstrap from "GlobalStyle/bootstrap.min.css";

interface IImageUploader {
  onChange: () => any;
}

const ImageUploader = ({ onChange }: IImageUploader) => (
  <div style={{ width: '100%' }}>
    <label style={{ width: '100%' }}>
      <div className={estilos.contenedorDeContenidoCentrado}>
        <span className={`//bootstrap-btn //btn-danger ${estilos.botonImageUploader}`}>SUBILA</span>
      </div>
      <input style={{ display: 'none' }} type='file' accept='image/*' onChange={onChange} />
    </label>
  </div>
);

export default ImageUploader;
