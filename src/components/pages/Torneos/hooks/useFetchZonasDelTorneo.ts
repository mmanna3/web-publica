import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Zona } from '../../../../interfaces/Zona';

export const useFetchZonasDelTorneo = () => {
  const [zonas, setZonas] = useState<Zona[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const { torneoId } = useParams();

  async function fetchZonas() {
    // eslint-disable-next-line quotes
    const response = fetch(`https://edefi.com.ar/publico/zonas?torneoId=${torneoId}`);

    const zonasData: Zona[] = await (await response).json();

    setZonas(zonasData);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchZonas();
  }, []);

  return { zonas, isFetching };
};
