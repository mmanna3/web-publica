import { Tabla } from './Tabla';

export interface PosicionesDelTorneo {
  ZonaId: number;
  TorneoId: number;
  Titulo: string;
  VerGoles: boolean;
  TablasPorCategoria: Tabla[];
  TablaGeneral: Tabla;
}
