"use client";

/**
 * Hook de autenticación
 *
 * Re-exporta useAuth desde AuthProvider para facilitar imports.
 * Usa este hook en cualquier componente para acceder al estado de auth.
 *
 * @example
 * import { useAuth } from '@/hooks/useAuth'
 *
 * function MyComponent() {
 *   const { user, loading, signOut } = useAuth()
 *
 *   if (loading) return <Spinner />
 *   if (!user) return <LoginButton />
 *
 *   return (
 *     <div>
 *       <p>Hola {user.email}</p>
 *       <button onClick={signOut}>Logout</button>
 *     </div>
 *   )
 * }
 */
export { useAuth } from "@/providers/AuthProvider";
