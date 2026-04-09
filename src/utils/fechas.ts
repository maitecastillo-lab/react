import { DateTime } from 'luxon';

/**
 * Calcula la diferencia en días entre dos fechas.
 * Recibe strings en formato ISO (ej. "2026-04-10")
 */
export function calcularDiferenciaDias(fechaInicio: string, fechaFin: string): number {
  const inicio = DateTime.fromISO(fechaInicio);
  const fin = DateTime.fromISO(fechaFin);

  // Calculamos la diferencia y extraemos los días
  const diff = fin.diff(inicio, 'days').days;

  // Retornamos el número redondeado (o 0 si hay error)
  return Math.floor(diff || 0);
}