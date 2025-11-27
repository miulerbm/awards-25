import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

/**
 * Cliente de Supabase para componentes del lado del cliente (Client Components)
 *
 * Este cliente debe usarse SOLO en componentes que corren en el browser.
 * Usa createBrowserClient de @supabase/ssr para manejar correctamente las cookies.
 *
 * @example
 * 'use client'
 * import { createClient } from '@/lib/supabase/client'
 *
 * const supabase = createClient()
 * const { data } = await supabase.auth.getUser()
 */
export function createClient() {
  // ✅ SEGURIDAD: Validar variables de entorno
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    throw new Error("Missing required Supabase environment variables");
  }

  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
