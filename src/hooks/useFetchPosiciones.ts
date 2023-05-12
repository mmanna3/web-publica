import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PosicionesDelTorneo, Tabla } from '../interfaces/api';
import { BASE_URL } from '../globalConst'

export const useFetchPosiciones = () => {
  const [tablasPorCategoria, setTablasPorCategoria] = useState<Tabla[]>([]);
  const [tablaGeneral, setTablaGeneral] = useState<Tabla>();
  const [isFetching, setIsFetching] = useState(true);
  const { zonaId } = useParams();

  async function fetchPosiciones() {
    const response = await fetch(`${BASE_URL}/publico/posiciones?zonaId=${zonaId}`);

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
