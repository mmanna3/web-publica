import { describe, it } from 'vitest';
import { filterTorneosByType } from './logic';
import { Torneo } from '../../interfaces/Torneo';

describe('filterTorneosByType', () => {
  it('Filter "futsal" correctly', ({ expect }) => {
    // Arrange
    const torneos: Torneo[] = [
      { descripcion: 'MATUTINO 6 CATEGORÍAS', id: '1', formato: 'aperturaClausura' },
      { descripcion: 'FUTSAL MAYORES', id: '3', formato: 'aperturaClausura' },
      { descripcion: 'MATUTINO 5 CATEGORÍAS', id: '2', formato: 'aperturaClausura' },
    ];

    // Act
    const resultado = filterTorneosByType(torneos, 'futsal');

    // Assert
    expect(resultado.length).toBe(1);
    expect(resultado[0].descripcion).toBe('FUTSAL MAYORES');
  });

  it('Filter "baby" correctly', ({ expect }) => {
    // Arrange
    const torneos: Torneo[] = [
      { descripcion: 'MATUTINO 6 CATEGORÍAS', id: '1', formato: 'aperturaClausura' },
      { descripcion: 'FUTSAL MAYORES', id: '3', formato: 'aperturaClausura' },
      { descripcion: 'MATUTINO 5 CATEGORÍAS', id: '2', formato: 'aperturaClausura' },
    ];

    // Act
    const resultado = filterTorneosByType(torneos, 'baby');

    // Assert
    expect(resultado.length).toBe(2);
    expect(resultado[0].descripcion).toContain('MATUTINO');
    expect(resultado[1].descripcion).toContain('MATUTINO');
  });

  it('Filter "futbol11" correctly', ({ expect }) => {
    // Arrange
    const torneos: Torneo[] = [
      { descripcion: 'MATUTINO 6 CATEGORÍAS', id: '1', formato: 'aperturaClausura' },
      { descripcion: 'FUTSAL MAYORES', id: '3', formato: 'aperturaClausura' },
      { descripcion: 'MATUTINO 5 CATEGORÍAS', id: '2', formato: 'aperturaClausura' },
    ];

    // Act
    const resultado = filterTorneosByType(torneos, 'futbol11');

    // Assert
    expect(resultado.length).toBe(0);
  });
});
