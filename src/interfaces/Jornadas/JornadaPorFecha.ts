import { Jornada } from './Jornada';

export interface JornadaPorFecha {
  FechaId: number;
  FechaNumero: number;
  Renglones: Jornada[];
  Publicada: string;
  PublicadaBool: boolean;
}
