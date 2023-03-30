import { DatosDeAmbosEquipos } from './DatosDeAmbosEquipos';

export interface FechaDelFixture {
  Titulo: string;
  DiaDeLaFecha: string;
  LocalVisitante: DatosDeAmbosEquipos[];
  EquipoLibre?: null;
}
