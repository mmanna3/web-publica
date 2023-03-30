import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PosicionesDelTorneo } from '../../interfaces/Posiciones/PosicionesDelTorneo'
import { Tabla } from '../../interfaces/Posiciones/Tabla';
import TablaDePosiciones from './TablaDePosiciones';

export default function ListaDeTablasDePosiciones() {
  const [tablasPorCategoria, setTablasPorCategoria] = useState<Tabla[]>([]);
  const [tablaGeneral, setTablaGeneral] = useState<Tabla>();
  const { zonaId } = useParams();

  async function fetchPosiciones() {
    const response = await fetch(`https://www.edefi.com.ar/publico/posiciones?zonaId=${zonaId}`);

    const { TablasPorCategoria, TablaGeneral }: PosicionesDelTorneo = await response.json();

    setTablasPorCategoria(TablasPorCategoria);
    setTablaGeneral(TablaGeneral);
    console.log('Tabla general: ', TablaGeneral);
  }

  useEffect(() => {
    fetchPosiciones();
  }, []);

  return (
    <div className='flex flex-wrap justify-center bg-gray-400'>
      {tablasPorCategoria.map((tablaPorCategoria) => (
        <TablaDePosiciones
          key={tablaPorCategoria.CategoriaId}
          categoria={tablaPorCategoria.Categoria}
          tablaPorCategoria={tablaPorCategoria}
        />
      ))}
    </div>
  );
}
