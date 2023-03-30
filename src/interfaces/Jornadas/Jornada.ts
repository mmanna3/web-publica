import { Resultado } from './Resultado';

export interface Jornada {
  JornadaId: number;
  JornadaNumero: number;
  Escudo: string;
  EquipoId: number;
  Equipo: string;
  ResultadosPorCategorias: Resultado[];
  PuntosTotales: number
  PartidosJugados: number
  PartidoVerificado: string
}
