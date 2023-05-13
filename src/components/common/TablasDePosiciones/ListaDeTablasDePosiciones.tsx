import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Spinner } from '../Spinner';
import {Table} from './Table';
import { PosicionesDelTorneo, Tabla } from '../../../interfaces/api';

/* //ESTE COMPONENTE SE VA A ENCARGAR DE FILTRAR LA DATA Y PASARSELA A LA TABLA GENERICA. */

export const ListaDeTablasDePosiciones = () => {
  const { zonaId } = useParams();
  const { data, isFetching } = useFetch<PosicionesDelTorneo>(`/posiciones?zonaId=${zonaId}`);
  const { TablaGeneral, TablasPorCategoria } = data;

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div className='mx-auto grid gap-2 sm:grid-cols-2'>
      {TablasPorCategoria.map(({ CategoriaId, Categoria, Renglones }: Tabla) => (
        <Table key={CategoriaId} categoria={Categoria} renglones={Renglones} />
      ))}

      <Table
        key={TablaGeneral?.CategoriaId}
        categoria='General'
        renglones={TablaGeneral?.Renglones}
      />
    </div>
  );
};
