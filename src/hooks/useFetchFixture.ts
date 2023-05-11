import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FechaDelFixture, FixtureDelTorneo } from '../interfaces/api';

export const useFetchFixture = () => {
  const [fechas, setFechas] = useState<FechaDelFixture[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const { zonaId } = useParams();

  async function fetchFixture() {
    const response = await fetch(`${BASE_URL}/publico/fixture?zonaId=${zonaId}`);

    const { Fechas }: FixtureDelTorneo = await response.json();

    console.log(Fechas);

    setFechas(Fechas);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchFixture();
  }, []);

  return { fechas, isFetching };
};
