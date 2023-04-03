import { useParams } from 'react-router-dom';
import { JornadasDelTorneo } from '../../../../interfaces/Jornadas/JornadasDelTorneo';
import { JornadaPorFecha } from '../../../../interfaces/Jornadas/JornadaPorFecha';
import { Categoria } from '../../../../interfaces/Jornadas/Categoria';
import { useEffect, useState } from 'react';

export const useFetchJornadas = () => {
  const [jornadasPorFecha, setJornadasPorFecha] = useState<JornadaPorFecha[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const { zonaId } = useParams();

  async function fetchPosiciones() {
    // eslint-disable-next-line quotes
    const response = await fetch(`https://www.edefi.com.ar/publico/jornadas?zonaId=232`);

    const { JornadasPorFecha, Categorias }: JornadasDelTorneo = await response.json();

    setJornadasPorFecha(JornadasPorFecha);
    setCategorias(Categorias);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchPosiciones();
  }, []);

  return { jornadasPorFecha, categorias, isFetching };
};
