import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";

/**
 * Cliente de Supabase para Server Components y Route Handlers
 *
 * Este cliente debe usarse en:
 * - Server Components (componentes sin 'use client')
 * - Route Handlers (app/api/*)
 * - Server Actions
 *
 * Usa createServerClient de @supabase/ssr para manejar cookies del servidor.
 *
 * @example
 * import { createClient } from '@/lib/supabase/server'
 *
 * const supabase = await createClient()
 * const { data } = await supabase.auth.getUser()
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignorar errores en Server Components (solo lectura)
            // Los errores solo importan en Server Actions o Route Handlers
          }
        },
      },
    }
  );
}
