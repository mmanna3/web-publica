import React, { useState } from 'react';
import Label from '../Label/Label';
import ImageUploader from '../ImageUploader/ImageUploader';
import estilos from './PasoFotoDocumento.module.css';
import imagenDniFrente from './dniFrente.png';
import imagenDniDorso from './dniDorso.jpg';
import Error from '../Error/Error';
import { useFormContext } from 'react-hook-form';

interface IPasoFotoDocumento {
  titulo: string;
  name: string;
  nombre: string;
}

const PasoFotoDocumento = ({ titulo, name, nombre }: IPasoFotoDocumento) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const imagenDefault = name === 'fotoDNIFrente' ? imagenDniFrente : imagenDniDorso;
  // manigga del futuro no me juzgues, había poco tiempo y me pagaban poco

  const [imagenBase64, setImagenBase64] = useState(imagenDefault);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImagenBase64(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className={'bg-blue-800 py-6 px-3'}>
      <div className=''>
        <div className={estilos.contenedorDeContenidoCentrado}>
          <Label texto={titulo} subtitulo='Que se lean bien tus datos' centrado />
        </div>

        <div className={estilos.contenedorDeContenidoCentrado}>
          <img readOnly width='200' src={imagenBase64} className={estilos.imagenDNIFrente} />
        </div>

        <input
          readOnly
          {...register(name, {
            validate: (value) => value !== imagenDefault || `¡Ups! Te olvidaste la ${nombre}.`,
          })}
          style={{ display: 'none' }}
          value={imagenBase64}
        />
        <Error name={name} errors={errors} nombre={nombre} />
        <ImageUploader onChange={onSelectFile} />
      </div>
    </div>
  );
};

export default PasoFotoDocumento;
