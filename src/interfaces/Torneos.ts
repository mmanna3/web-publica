import { TablasPorCategoria } from './TablasPorCategoria';
import { TablaGeneral } from './TablaGeneral';

export interface Posiciones {
  ZonaId: number;
  TorneoId: number;
  Titulo: string;
  VerGoles: boolean;
  TablasPorCategoria: TablasPorCategoria[];
  TablaGeneral: TablaGeneral;
}
