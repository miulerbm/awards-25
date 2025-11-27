"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User, Session } from "@supabase/supabase-js";
import type { AuthState } from "@/lib/auth/authTypes";

interface AuthContextType extends AuthState {
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider - Proveedor de contexto de autenticación
 *
 * Mantiene el estado global del usuario autenticado y sincroniza
 * automáticamente los cambios de sesión con Supabase.
 *
 * @example
 * // En tu layout.tsx
 * <AuthProvider>
 *   <YourApp />
 * </AuthProvider>
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    // Obtener sesión inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Escuchar cambios de autenticación
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  const value = {
    user: user
      ? {
          id: user.id,
          email: user.email,
          fullName: user.user_metadata?.full_name || user.user_metadata?.name,
          avatarUrl:
            user.user_metadata?.avatar_url || user.user_metadata?.picture,
        }
      : null,
    session,
    loading,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook para consumir el contexto de autenticación
 *
 * @example
 * const { user, loading, signOut } = useAuth()
 *
 * if (loading) return <Spinner />
 * if (!user) return <LoginPage />
 *
 * return <div>Hola {user.email}</div>
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
