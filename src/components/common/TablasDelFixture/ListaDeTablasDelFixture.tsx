import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { FechaDelFixture, FixtureDelTorneo } from '../../../interfaces/api';
import { Spinner } from '../Spinner';
import { RowContent, Table, TableRow } from '../Table';

export const ListaDeTablasDelFixture = () => {
  const { zonaId } = useParams();
  const { data, isFetching } = useFetch<FixtureDelTorneo>(`fixture?zonaId=${zonaId}`);

  if (isFetching) {
    return <Spinner />;
  }

  const fechas: FechaDelFixture[] = [...data.Fechas];

  return (
    <div className='mx-auto grid gap-2 sm:grid-cols-2'>
      {fechas.map(({ Titulo, DiaDeLaFecha, LocalVisitante }) => (
        <Table key={DiaDeLaFecha} titulo={Titulo}>
          <thead>
            <TableRow type='tableHead'>
              <RowContent content={Titulo} />
              <RowContent content={DiaDeLaFecha} />
            </TableRow>
          </thead>
          <tbody>
            {LocalVisitante.map(({ Local, Visitante, EscudoLocal, EscudoVisitante }, i) => (
              <TableRow key={i}>
                <RowContent content={EscudoLocal} type='Img' />
                <RowContent content={Local} />
                <RowContent content={'vs.'} />
                <RowContent content={Visitante} />
                <RowContent content={EscudoVisitante} type='Img' />
              </TableRow>
            ))}
          </tbody>
        </Table>
      ))}
    </div>
  );
};
