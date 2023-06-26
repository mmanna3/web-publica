import { describe, it } from 'vitest';
import { filterTorneosByType, flatZonas } from './logic';
import { Torneo, Zona } from '../../interfaces/api';

describe('filterTorneosByType', () => {
  it('Filter "COPA EDEFI" correctly', ({ expect }) => {
    // Arrange
    const torneos: Torneo[] = [
      { descripcion: 'COPA EDEFI Vespertino', id: '1', formato: 'relampago' },
      { descripcion: 'COPA EDEFI Matutino', id: '3', formato: 'relampago' },
      { descripcion: 'COPA DE LA LIGA Bla bla bla', id: '2', formato: 'relampago' },
      { descripcion: 'TORNEO DE VERANO 5 CAT', id: '4', formato: 'relampago' },
    ];

    // Act
    const resultado = filterTorneosByType(torneos, 'copaEdefi');

    // Assert
    expect(resultado.length).toBe(2);
    expect(resultado[0].descripcion).toBe('COPA EDEFI Vespertino');
    expect(resultado[1].descripcion).toBe('COPA EDEFI Matutino');
  });

  it('Filter "TORNEO DE VERANO" correctly', ({ expect }) => {
    // Arrange
    const torneos: Torneo[] = [
      { descripcion: 'COPA EDEFI Vespertino', id: '1', formato: 'relampago' },
      { descripcion: 'COPA EDEFI Matutino', id: '3', formato: 'relampago' },
      { descripcion: 'COPA DE LA LIGA Bla bla bla', id: '2', formato: 'relampago' },
      { descripcion: 'TORNEO DE VERANO 5 CAT', id: '4', formato: 'relampago' },
    ];

    // Act
    const resultado = filterTorneosByType(torneos, 'torneoDeVerano');

    // Assert
    expect(resultado.length).toBe(1);
    expect(resultado[0].descripcion).toBe('TORNEO DE VERANO 5 CAT');
  });

  it('Filter "COPA DE LA LIGA" correctly', ({ expect }) => {
    // Arrange
    const torneos: Torneo[] = [
      { descripcion: 'COPA EDEFI Vespertino', id: '1', formato: 'relampago' },
      { descripcion: 'COPA EDEFI Matutino', id: '3', formato: 'relampago' },
      { descripcion: 'COPA DE LA LIGA Bla bla bla', id: '2', formato: 'relampago' },
      { descripcion: 'TORNEO DE VERANO 5 CAT', id: '4', formato: 'relampago' },
    ];

    // Act
    const resultado = filterTorneosByType(torneos, 'copaDeLaLiga');

    // Assert
    expect(resultado.length).toBe(1);
    expect(resultado[0].descripcion).toBe('COPA DE LA LIGA Bla bla bla');
  });

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

describe.only('flatZonas', () => {
  it('Case 1: Only ZonaAperturaId', ({ expect }) => {
    const zonas: Zona[] = [
      {descripcion: 'Solo Apertura', zonaAperturaId: 100},
      {descripcion: 'Solo Apertura 2', zonaAperturaId: 200}
    ]
    
    const resultado = flatZonas(zonas);

    expect(resultado.length).toBe(2);
    expect(resultado[0].id).toBe(100);
    expect(resultado[0].descripcion).toBe('Solo Apertura - Apertura');
    expect(resultado[1].id).toBe(200);
    expect(resultado[1].descripcion).toBe('Solo Apertura 2 - Apertura');
  });

  it('Case 2: ZonaAperturaId and ZonaClausuraId', ({ expect }) => {
    const zonas: Zona[] = [
      {descripcion: 'Apertura y Clausura', zonaAperturaId: 100, zonaClausuraId: 102},
      {descripcion: 'Solo Apertura 2', zonaAperturaId: 200}
    ]
    
    const resultado = flatZonas(zonas);

    expect(resultado.length).toBe(3);
    expect(resultado[0].id).toBe(100);
    expect(resultado[0].descripcion).toBe('Apertura y Clausura - Apertura');
    expect(resultado[1].id).toBe(102);
    expect(resultado[1].descripcion).toBe('Apertura y Clausura - Clausura');
    expect(resultado[2].id).toBe(200);
    expect(resultado[2].descripcion).toBe('Solo Apertura 2 - Apertura');
  });

  it('Case 3: ZonaRelampagoId', ({ expect }) => {
    const zonas: Zona[] = [
      {descripcion: 'Relámpago', zonaRelampagoId: 700},
      {descripcion: 'Relámpago 2', zonaRelampagoId: 800}
    ]
    
    const resultado = flatZonas(zonas);

    expect(resultado.length).toBe(2);
    expect(resultado[0].id).toBe(700);
    expect(resultado[0].descripcion).toBe('Relámpago');
    expect(resultado[1].id).toBe(800);    
    expect(resultado[1].descripcion).toBe('Relámpago 2');
  });

  it('Case 4: Bad data from backend', ({ expect }) => {
    const zonas: Zona[] = [
      {descripcion: 'No tiene ningún Id'}
    ]
    
    expect(() => flatZonas(zonas)).toThrowError();    
  });
})
