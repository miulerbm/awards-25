"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

/**
 * QueryProvider - Proveedor de TanStack Query
 *
 * Configura y proporciona el QueryClient para toda la aplicación.
 * Incluye React Query Devtools en desarrollo.
 *
 * @example
 * // En tu layout.tsx
 * <QueryProvider>
 *   <YourApp />
 * </QueryProvider>
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Configuración por defecto para queries
            staleTime: 60 * 1000, // 1 minuto
            retry: 1, // Reintentar una vez en caso de error
            refetchOnWindowFocus: false, // No refetch automático al cambiar ventana
          },
          mutations: {
            // Configuración por defecto para mutations
            retry: 0, // No reintentar mutations automáticamente
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
