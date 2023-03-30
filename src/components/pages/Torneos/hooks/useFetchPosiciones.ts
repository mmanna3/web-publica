import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PosicionesDelTorneo } from '../../../../interfaces/Posiciones/PosicionesDelTorneo';
import { Tabla } from '../../../../interfaces/Posiciones/Tabla';

export const useFetchPosiciones = () => {
  const [tablasPorCategoria, setTablasPorCategoria] = useState<Tabla[]>([]);
  const [tablaGeneral, setTablaGeneral] = useState<Tabla>();
  const [isFetching, setIsFetching] = useState(true)
  const { zonaId, tipoDeTabla } = useParams();

  async function fetchPosiciones() {
    const response = await fetch(
      `https://www.edefi.com.ar/publico/${tipoDeTabla}?zonaId=${zonaId}`,
    );

    const { TablasPorCategoria, TablaGeneral }: PosicionesDelTorneo = await response.json();

    setTablasPorCategoria(TablasPorCategoria);
    setTablaGeneral(TablaGeneral);
    setIsFetching(false)
    console.log('Tabla general: ', TablaGeneral);
  }

  useEffect(() => {
    fetchPosiciones();
  }, []);

  return { tablasPorCategoria, tablaGeneral, isFetching };
};
