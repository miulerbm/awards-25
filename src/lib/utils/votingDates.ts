/**
 * Utilidades para validación de fechas de votación
 */

// Fecha de inicio: 10 de diciembre de 2025 a las 00:00
export const VOTING_START_DATE = new Date("2025-12-05T00:00:00-05:00"); // Timezone Peru (GMT-5)

// Fecha de fin: 19 de diciembre de 2025 a las 23:59
export const VOTING_END_DATE = new Date("2025-12-19T23:59:59-05:00"); // Timezone Peru (GMT-5)

/**
 * Verifica si las votaciones están actualmente abiertas
 *
 * @returns true si las votaciones están abiertas, false si no
 *
 * @example
 * if (isVotingOpen()) {
 *   // Permitir votación
 * } else {
 *   // Mostrar mensaje de votaciones cerradas
 * }
 */
export function isVotingOpen(): boolean {
  const now = new Date();
  return now >= VOTING_START_DATE && now <= VOTING_END_DATE;
}

/**
 * Obtiene un mensaje descriptivo del estado de las votaciones
 *
 * @returns Mensaje indicando si las votaciones están abiertas, cerradas o próximas
 *
 * @example
 * const message = getVotingStatusMessage()
 * // "Las votaciones están abiertas hasta el 19 de diciembre"
 * // "Las votaciones aún no han comenzado"
 * // "Las votaciones han finalizado"
 */
export function getVotingStatusMessage(): string {
  const now = new Date();

  if (now < VOTING_START_DATE) {
    return "Las votaciones comenzarán el 10 de diciembre a las 00:00";
  }

  if (now > VOTING_END_DATE) {
    return "Las votaciones han finalizado";
  }

  return "Las votaciones están abiertas hasta el 19 de diciembre a las 23:59";
}

/**
 * Calcula cuántos días faltan para que abran/cierren las votaciones
 *
 * @returns Objeto con información de días restantes
 */
export function getVotingTimeRemaining(): {
  status: "not-started" | "open" | "closed";
  daysRemaining: number;
  message: string;
} {
  const now = new Date();

  if (now < VOTING_START_DATE) {
    const diffTime = VOTING_START_DATE.getTime() - now.getTime();
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return {
      status: "not-started",
      daysRemaining,
      message: `Las votaciones comenzarán en ${daysRemaining} día${
        daysRemaining !== 1 ? "s" : ""
      }`,
    };
  }

  if (now > VOTING_END_DATE) {
    return {
      status: "closed",
      daysRemaining: 0,
      message: "Las votaciones han finalizado",
    };
  }

  const diffTime = VOTING_END_DATE.getTime() - now.getTime();
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    status: "open",
    daysRemaining,
    message: `Quedan ${daysRemaining} día${
      daysRemaining !== 1 ? "s" : ""
    } para votar`,
  };
}
