import { FechaDelFixture } from './FechaDelFixture';

export interface FixtureDelTorneo {
  ZonaId: number;
  TorneoId: number;
  Titulo: string;
  Fechas: FechaDelFixture[];
  PublicadoBool: boolean;
}
