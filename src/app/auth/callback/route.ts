import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Route Handler para el callback de OAuth (Google, etc.)
 *
 * Cuando el usuario se autentica con Google, es redirigido aquí con un código.
 * Este handler intercambia el código por una sesión de Supabase.
 *
 * URL: /auth/callback?code=...
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  // ✅ FIX: Usar URL base configurada en lugar de origin dinámico
  // Esto previene problemas con URLs de preview de Netlify (main--, etc.)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || requestUrl.origin;

  if (code) {
    const supabase = await createClient();

    // Intercambiar el código por una sesión
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Error en callback OAuth:", error);
      // Redirigir a login con error
      return NextResponse.redirect(
        new URL("/auth/login?error=oauth_error", baseUrl)
      );
    }

    // ✅ FIX: Después de intercambiar el código, redirigir limpiamente sin el ?code=
    // Esto evita que el código de OAuth quede visible en la URL del navegador
    const redirectTo = requestUrl.searchParams.get("redirect_to") || "/";

    // ✅ SEGURIDAD: Validar redirect URL para prevenir Open Redirect attacks
    if (
      !redirectTo.startsWith("/") ||
      redirectTo.startsWith("//") ||
      redirectTo.includes("\\") ||
      /^(?:\/\/|http:\/\/|https:\/\/)/i.test(redirectTo)
    ) {
      // Usar URL absoluta para asegurar limpieza completa del ?code=
      return NextResponse.redirect(new URL("/", baseUrl));
    }

    // Usar URL absoluta para asegurar limpieza completa del ?code=
    return NextResponse.redirect(new URL(redirectTo, baseUrl));
  }

  // Si no hay código, redirigir al home
  return NextResponse.redirect(new URL("/", baseUrl));
}
