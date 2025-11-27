import type { User, Session, AuthError } from "@supabase/supabase-js";

/**
 * Resultado de las operaciones de autenticación
 */
export interface AuthResult {
  user: User | null;
  session: Session | null;
  error: AuthError | null;
}

/**
 * Credenciales para login con email/password
 */
export interface EmailCredentials {
  email: string;
  password: string;
}

/**
 * Datos para registro con email/password
 */
export interface RegisterData {
  email: string;
  password: string;
  fullName?: string;
}

/**
 * Opciones para el login con Google
 */
export interface GoogleLoginOptions {
  redirectTo?: string;
}

/**
 * Estado del usuario autenticado
 */
export interface AuthUser {
  id: string;
  email: string | undefined;
  fullName?: string;
  avatarUrl?: string;
}

/**
 * Estado de autenticación
 */
export interface AuthState {
  user: AuthUser | null;
  session: Session | null;
  loading: boolean;
}
