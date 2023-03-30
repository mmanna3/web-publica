import { Categoria } from './Categoria';
import { JornadaPorFecha } from './JornadaPorFecha';

export interface JornadasDelTorneo {
  Titulo: string;
  JornadasPorFecha: JornadaPorFecha[];
  Categorias: Categoria[];
  JornadasVerificadasId?: number;
  TorneoId: number;
  ZonaId: number;
}
