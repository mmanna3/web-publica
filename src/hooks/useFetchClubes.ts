import { useEffect, useState } from 'react';
import { Club, Clubes } from '../interfaces/api';
import { useParams } from 'react-router-dom';

export const useFetchClubes = () => {
  const [clubes, setClubes] = useState<Club[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const { zonaId } = useParams();

  async function fetchClubes() {
    // eslint-disable-next-line quotes
    const response = await fetch(`${BASE_URL}/publico/clubes?zonaId=232`);

    const { Renglones }: Clubes = await response.json();

    setClubes(Renglones);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchClubes();
  }, []);

  return { clubes, isFetching };
};
