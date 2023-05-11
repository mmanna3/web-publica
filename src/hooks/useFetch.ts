import { useEffect, useState } from 'react';

export const useFetch = <TipoDeDato>(endpoint: string) => {
  const [data, setData] = useState<TipoDeDato[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  async function doFetch() {
    const response = await fetch(`https://www.edefi.com.ar/publico/${endpoint}`);

    const json = await response.json();

    console.log(json);

    setData(json);
    setIsFetching(false);
  }

  useEffect(() => {
    doFetch();
  }, []);

  return { data, isFetching };
};
