import { Jornada, Categoria } from '../../interfaces/api';

type TablaDeJornadasProps = {
  renglones: Jornada[];
  fechaNumero: number;
  categorias: Categoria[];
};

export const TablaDeJornadas = ({ renglones, fechaNumero, categorias }: TablaDeJornadasProps) => {
  return (
    <div className='mb-6 flex max-w-3xl flex-col'>
      <h2 className='mb-1 text-2xl'>{fechaNumero}</h2>

      <table className='grid table-auto bg-white'>
        <EncabezadoTabla categorias={categorias} />

        <tbody>
          {renglones.map(
            (
              {
                JornadaId,
                JornadaNumero,
                Escudo,
                Equipo,
                PuntosTotales,
                PartidosJugados,
                PartidoVerificado,
                ResultadosPorCategorias,
              },
              index,
            ) => (
              <tr key={JornadaId + index} className='grid-cols-13 grid grid-flow-col grid-rows-1'>
                <td className=''>{JornadaNumero}</td>
                <td className='col-span-4'>
                  <img
                    className='max-w-[30px]'
                    src={`https://www.edefi.com.ar${Escudo}`}
                    alt='escudo'
                  />
                </td>
                <td className='col-span-2'>{Equipo}</td>

                {ResultadosPorCategorias.map(({ Goles, Orden }) => (
                  <td key={Orden}>{Goles}</td>
                ))}

                <td>{PuntosTotales}</td>
                <td>{PartidosJugados}</td>
                <td>{PartidoVerificado}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

type EncabezadoTablaProps = {
  categorias: Categoria[];
};

const EncabezadoTabla = ({ categorias }: EncabezadoTablaProps) => {
  return (
    <thead>
      <tr className='grid-cols-13 grid grid-flow-col grid-rows-1 bg-gray-300'>
        <td>JN°</td>
        <td className='col-span-2'>Esc</td>
        <td className='col-span-4'>Equipo</td>
        {categorias.map(({ Id, Nombre }) => (
          <th key={Id}>{Nombre}</th>
        ))}
        <td>T.P.</td>
        <td>P.J.</td>
        <td>V</td>
      </tr>
    </thead>
  );
};


