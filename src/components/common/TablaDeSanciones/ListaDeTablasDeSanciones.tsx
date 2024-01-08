import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Sancion } from '../../../interfaces/api';
import { Spinner } from '../Spinner';
import { RowContent, Table, TableRow } from '../Table';

export const ListaDeTablasDeSanciones = () => {
  const { zonaId } = useParams();
  const { data, isFetching } = useFetch<Sancion>(`/sanciones?zonaId=${zonaId}`);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className='mx-auto grid gap-2 sm:grid-cols-1'>
      <Table>
        <thead>
          <TableRow type={'tableHead'}>
            <RowContent content={''} />
            <RowContent content={'Fecha'} />
            <RowContent content={'Categoría'} />
            <RowContent content={'Local'} />
            <RowContent content={'Visitante'} />
            <RowContent content={'Sanción'} />
            <RowContent content={'Fechas adeudadas'} />
          </TableRow>
        </thead>
        <tbody>
          {data.map(({ dia, fecha, local, visitante, categoria, sancion, fechasQueAdeuda }, i) => (
            <TableRow key={i}>
              <RowContent content={dia} />
              <RowContent content={fecha} />
              <RowContent content={categoria} />
              <RowContent content={local} />
              <RowContent content={visitante} />
              <RowContent content={sancion} />
              <RowContent content={fechasQueAdeuda} />
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
