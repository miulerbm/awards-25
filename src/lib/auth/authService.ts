import { createClient } from "@/lib/supabase/client";
import type { AuthError } from "@supabase/supabase-js";
import type {
  AuthResult,
  EmailCredentials,
  RegisterData,
  GoogleLoginOptions,
} from "./authTypes";

/**
 * Servicio de autenticación
 *
 * Encapsula toda la lógica de autenticación con Supabase.
 * Usa este servicio desde tus componentes o desde el AuthProvider.
 *
 * Todos los métodos devuelven un AuthResult con user, session y error.
 */
export const authService = {
  /**
   * Login con email y password
   *
   * @example
   * const { user, error } = await authService.loginWithEmail({
   *   email: 'user@example.com',
   *   password: 'password123'
   * })
   */
  async loginWithEmail(credentials: EmailCredentials): Promise<AuthResult> {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    return {
      user: data.user,
      session: data.session,
      error,
    };
  },

  /**
   * Registro con email y password
   *
   * @example
   * const { user, error } = await authService.registerWithEmail({
   *   email: 'user@example.com',
   *   password: 'password123',
   *   fullName: 'John Doe'
   * })
   */
  async registerWithEmail(data: RegisterData): Promise<AuthResult> {
    const supabase = createClient();

    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
        },
      },
    });

    return {
      user: authData.user,
      session: authData.session,
      error,
    };
  },

  /**
   * Login con Google OAuth
   *
   * Redirige al usuario a Google para autenticarse.
   * Después del login, Google redirigirá a /auth/callback
   *
   * @example
   * await authService.loginWithGoogle()
   */
  async loginWithGoogle(options?: GoogleLoginOptions): Promise<AuthResult> {
    const supabase = createClient();

    // ✅ FIX: Usar variable de entorno para evitar problemas con URLs de preview de Netlify
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const redirectTo = options?.redirectTo || `${baseUrl}/auth/callback`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });

    return {
      user: null,
      session: null,
      error,
    };
  },

  /**
   * Logout (cierra sesión)
   *
   * @example
   * await authService.logout()
   */
  async logout(): Promise<{ error: AuthError | null }> {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  /**
   * Obtiene el usuario actual
   *
   * @example
   * const { user } = await authService.getCurrentUser()
   */
  async getCurrentUser(): Promise<AuthResult> {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    return {
      user: data.user,
      session: null,
      error,
    };
  },

  /**
   * Obtiene la sesión actual
   *
   * @example
   * const { session } = await authService.getSession()
   */
  async getSession(): Promise<AuthResult> {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getSession();

    return {
      user: data.session?.user || null,
      session: data.session,
      error,
    };
  },

  /**
   * Envía email de recuperación de contraseña
   *
   * @example
   * await authService.resetPassword('user@example.com')
   */
  async resetPassword(email: string): Promise<{ error: AuthError | null }> {
    const supabase = createClient();

    // ✅ FIX: Usar variable de entorno para evitar problemas con URLs de preview
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${baseUrl}/auth/reset-password`,
    });

    return { error };
  },

  /**
   * Actualiza la contraseña del usuario
   *
   * @example
   * await authService.updatePassword('newPassword123')
   */
  async updatePassword(
    newPassword: string
  ): Promise<{ error: AuthError | null }> {
    const supabase = createClient();

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    return { error };
  },
};
