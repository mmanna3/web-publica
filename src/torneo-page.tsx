import { useEffect } from 'react';

function Torneo() {
  async function fetchTorneosAperturaClausura() {
    const response = await fetch(
      'https://www.edefi.com.ar/publico/TorneosAperturaClausura?anio=2022',
      {
        method: 'get',
      },
    );

    const torneos = await response.json();
    console.log(torneos);
  }

  useEffect(() => {
    fetchTorneosAperturaClausura();
  }, []);

  return <div>Torneitos</div>;
}

export default Torneo;
