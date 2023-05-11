import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PosicionesDelTorneo, Tabla } from '../interfaces/api';

export const useFetchPosiciones = () => {
  const [tablasPorCategoria, setTablasPorCategoria] = useState<Tabla[]>([]);
  const [tablaGeneral, setTablaGeneral] = useState<Tabla>();
  const [isFetching, setIsFetching] = useState(true);
  const { zonaId } = useParams();

  async function fetchPosiciones() {
    const response = await fetch(`https://www.edefi.com.ar/publico/posiciones?zonaId=${zonaId}`);

    const { TablasPorCategoria, TablaGeneral }: PosicionesDelTorneo = await response.json();

    setTablasPorCategoria(TablasPorCategoria);
    setTablaGeneral(TablaGeneral);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchPosiciones();
  }, []);

  return { tablasPorCategoria, tablaGeneral, isFetching };
};
