import { useEffect, useState } from 'react';
import { Club } from '../../../../interfaces/Clubes/Club';
import { useParams } from 'react-router-dom';
import { Clubes } from '../../../../interfaces/Clubes/Clubes'

export const useFetchClubes = () => {
  const [clubes, setClubes] = useState<Club[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const { zonaId } = useParams();

  async function fetchClubes() {
    // eslint-disable-next-line quotes
    const response = await fetch(`https://www.edefi.com.ar/publico/clubes?zonaId=232`);

    const { Renglones }: Clubes = await response.json();

    setClubes(Renglones);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchClubes();
  }, []);

  return { clubes, isFetching };
};
