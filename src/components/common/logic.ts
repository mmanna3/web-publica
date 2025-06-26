import { Torneo, Zona } from '../../interfaces/api';

const tiposDeTorneo = {
  baby: ['MATUTINO', 'VESPERTINO'],
  futsal: ['FUTSAL', 'FEMENINO'],
  futbol11: ['FUTBOL 11'],
  copaEdefi: ['COPA EDEFI'],
  torneoDeVerano: ['TORNEO DE VERANO'],
  copaDeLaLiga: ['COPA DE LA LIGA'],
  copaDePrimera: ['COPA DE PRIMERA'],
};

export const filterTorneosByType = (
  torneos: Torneo[],
  tipo: keyof typeof tiposDeTorneo,
): Torneo[] => {
  const torneosByType: Torneo[] = [];

  torneos.forEach((torneo) => {
    tiposDeTorneo[tipo].forEach((tipoDeTorneo) => {
      if (torneo.descripcion.toUpperCase().includes(tipoDeTorneo)) torneosByType.push(torneo);
    });
  });

  return torneosByType;
};

interface ZonaProcesada {
  id: number;
  descripcion: string;
  esAnual: boolean;
}

/**
 * Uno pone un comentario cuando no logra ser lo suficientemente explicativo con el propio código.
 * Como el diseño está mal hecho, el mismo objeto puede tener uno o dos valores en NULL.
 * Generalmente, una estructura con "valores opcionales" y por lo tanto varios NULL es difícil de manejar.
 * @param zonas 
 * @returns 
 */
export const flatZonas = (zonas: Array<Zona>): Array<ZonaProcesada> => {
  return zonas.map((zona) => {
  
    if (zona.zonaRelampagoId) {
      return [{
        id:  zona.zonaRelampagoId,
        descripcion: zona.descripcion,
        esAnual: false
      }]
    }

    if (zona.zonaAperturaId) {
      const zonaApertura = {
        id:  zona.zonaAperturaId,
        descripcion: `${zona.descripcion} - Apertura`,
        esAnual: false
      }

      if (zona.zonaClausuraId) {
        const zonaClausura = {
          id:  zona.zonaClausuraId,
          descripcion: `${zona.descripcion} - Clausura`,
          esAnual: false
        }

        const zonaAnual = {
          id:  zona.zonaAperturaId,
          descripcion: `${zona.descripcion} - Anual`,
          esAnual: true
        }
        return [zonaApertura, zonaClausura, zonaAnual]
      } else return [zonaApertura]
    } 
    
    throw Error(`Hubo un error. La zona que vino del backend no tenía el formato correcto.
    Sí o sí tiene que tener o ZonaAperturaId o ZonaRelampagoId`);
    
  }).flat()
}

