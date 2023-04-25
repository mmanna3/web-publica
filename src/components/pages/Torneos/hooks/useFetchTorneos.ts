import { useCallback, useEffect, useState } from 'react';
import { Torneo } from '../../../../interfaces/Torneo';

export const useFetchTorneos = () => {
  const [torneos, setTorneos] = useState<Torneo[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  async function fetchTorneosAperturaClausura() {
    const response = await fetch(
      'https://www.edefi.com.ar/publico/TorneosAperturaClausura?anio=2022',
    );

    const torneos: Torneo[] = await response.json();

    setTorneos(torneos);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchTorneosAperturaClausura();
  }, []);

  return { torneos, isFetching };
};
