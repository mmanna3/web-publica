import { DatosDeAmbosEquipos } from '../../interfaces/Fixture/DatosDeAmbosEquipos';

interface Props {
  localVisitante: DatosDeAmbosEquipos[];
  titulo: string;
  diaDeLaFecha: string;
}

export const TablaDelFixture = ({ localVisitante, titulo, diaDeLaFecha }: Props) => {
  return (
    <div className='m-2'>
      <h2 className='mb-1'>{titulo}</h2>

      <table className='grid table-auto bg-white'>
        <thead>
          <tr className='grid grid-cols-12'>
            <th className='col-span-6 text-start'>{titulo}</th>
            <th className='col-span-6 text-end'>{diaDeLaFecha}</th>
          </tr>
        </thead>

        <tbody>
          {localVisitante.map((renglon, i) => (
            <tr key={i} className='grid grid-cols-12'>
              <td className='col-span-2'>{renglon.EscudoLocal}</td>
              <td className='col-span-4 text-center'>{renglon.Local}</td>
              <td className='col-span-4 text-center'>{renglon.Visitante}</td>
              <td className='col-span-2'>{renglon.EscudoVisitante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
