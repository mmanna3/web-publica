import { Club } from './Club';

export interface Clubes {
  Titulo?: string;
  Renglones: Club[];
  TorneoId?: number;
  ZonaId?: number;
}
