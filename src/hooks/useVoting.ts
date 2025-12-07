"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { votingService } from "@/lib/api/votingService";
import type { VoteResponse, UserVotesResponse } from "@/types";

/**
 * Hook personalizado para gestionar votaciones
 *
 * Proporciona funcionalidades para:
 * - Obtener votos del usuario
 * - Enviar nuevos votos
 * - Invalidar cache después de votar
 *
 * @example
 * const { userVotes, submitVote, isSubmitting } = useVoting(userId)
 *
 * // Enviar un voto
 * submitVote({
 *   categoryId: 'mejor-jugador-left',
 *   nomineeId: 'nominee-123'
 * })
 */
export function useVoting(userId: string | undefined) {
  const queryClient = useQueryClient();

  // Query para obtener los votos del usuario
  const {
    data: userVotesData,
    isLoading: isLoadingVotes,
    error: votesError,
    refetch: refetchVotes,
  } = useQuery<UserVotesResponse>({
    queryKey: ["userVotes", userId],
    queryFn: () => votingService.getUserVotes(userId!),
    enabled: !!userId, // Solo ejecutar si hay userId
    staleTime: 30 * 1000, // Considerar datos frescos por 30 segundos
  });

  // Mutation para enviar un voto
  const {
    mutate: submitVoteMutation,
    mutateAsync: submitVoteAsync,
    isPending: isSubmitting,
    error: submitError,
  } = useMutation<
    VoteResponse,
    Error,
    { categoryId: string; nomineeId: string }
  >({
    mutationFn: async ({ categoryId, nomineeId }) => {
      if (!userId) {
        throw new Error("Usuario no autenticado");
      }
      return votingService.submitVote(userId, categoryId, nomineeId);
    },
    onSuccess: () => {
      // Invalidar y refrescar los votos del usuario después de votar exitosamente
      queryClient.invalidateQueries({ queryKey: ["userVotes", userId] });
    },
  });

  // Función helper para verificar si el usuario ya votó en una categoría
  const hasVotedInCategory = (categoryId: string): boolean => {
    if (!userVotesData?.data?.votes) return false;
    return userVotesData.data.votes.some(
      (vote) => vote.categoryId === categoryId
    );
  };

  // Función helper para obtener el nomineeId votado en una categoría
  const getVotedNomineeId = (categoryId: string): string | null => {
    if (!userVotesData?.data?.votes) return null;
    const vote = userVotesData.data.votes.find(
      (vote) => vote.categoryId === categoryId
    );
    return vote?.nomineeId || null;
  };

  // Crear un mapa de votos por categoría para fácil acceso
  const votesByCategory =
    userVotesData?.data?.votes.reduce((acc, vote) => {
      acc[vote.categoryId] = vote.nomineeId;
      return acc;
    }, {} as Record<string, string>) || {};

  return {
    // Datos
    userVotes: userVotesData?.data?.votes || [],
    totalVotes: userVotesData?.data?.totalVotes || 0,
    votesByCategory,

    // Estados de carga
    isLoadingVotes,
    isSubmitting,

    // Errores
    votesError,
    submitError,

    // Funciones
    submitVote: submitVoteMutation,
    submitVoteAsync,
    refetchVotes,
    hasVotedInCategory,
    getVotedNomineeId,
  };
}
