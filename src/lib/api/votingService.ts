import type { VoteRequest, VoteResponse, UserVotesResponse } from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_VOTING_API_BASE_URL ||
  "https://wind.mmhighmetrik.com/api/w/temp/jobs/run_wait_result/p/u/dtsoluciones22";

const SUBMIT_ENDPOINT =
  process.env.NEXT_PUBLIC_VOTING_SUBMIT_ENDPOINT || "eager_script";
const GET_ENDPOINT =
  process.env.NEXT_PUBLIC_VOTING_GET_ENDPOINT || "illuminating_script";

const SUBMIT_TOKEN =
  process.env.NEXT_PUBLIC_VOTING_SUBMIT_TOKEN ||
  "xvXEnDo9coHFQFAt85tnck8ZRCDZOlKd";
const GET_TOKEN =
  process.env.NEXT_PUBLIC_VOTING_GET_TOKEN ||
  "QBtVVUzi2mtFaoIf0eO157FcaT5d1jyq";

/**
 * Servicio de API de votación
 *
 * Encapsula todas las llamadas al backend de votación.
 * Utiliza tokens estáticos de autorización definidos en variables de entorno.
 */
export const votingService = {
  /**
   * Envía un voto al backend (POST - upsert)
   *
   * @example
   * const response = await votingService.submitVote({
   *   userId: 'user-123',
   *   categoryId: 'mejor-jugador-left',
   *   nomineeId: 'nominee-456'
   * })
   */
  async submitVote(
    userId: string,
    categoryId: string,
    nomineeId: string
  ): Promise<VoteResponse> {
    const url = `${API_BASE_URL}/${SUBMIT_ENDPOINT}`;

    const requestBody: VoteRequest = {
      body: {
        userId,
        categoryId,
        nomineeId,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUBMIT_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(
        `Error al enviar voto: ${response.status} ${response.statusText}`
      );
    }

    const data: VoteResponse = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Error al registrar el voto");
    }

    return data;
  },

  /**
   * Obtiene los votos de un usuario (GET)
   *
   * @example
   * const response = await votingService.getUserVotes('user-123')
   * console.log(response.data.votes) // Array de votos
   */
  async getUserVotes(userId: string): Promise<UserVotesResponse> {
    const url = `${API_BASE_URL}/${GET_ENDPOINT}`;

    const response = await fetch(url, {
      method: "POST", // El endpoint usa POST pero funciona como GET
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GET_TOKEN}`,
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error(
        `Error al obtener votos: ${response.status} ${response.statusText}`
      );
    }

    const data: UserVotesResponse = await response.json();

    if (!data.success) {
      throw new Error("Error al obtener los votos del usuario");
    }

    return data;
  },
};
