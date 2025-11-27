"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/auth/authService";

interface RegisterFormProps {
  redirectTo?: string;
}

/**
 * Formulario de Registro con Email y Password
 */
export default function RegisterForm({ redirectTo = "/" }: RegisterFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await authService.registerWithEmail({
      email,
      password,
      fullName,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Registro exitoso
    setSuccess(true);
    setLoading(false);

    // Redirigir después de 2 segundos
    setTimeout(() => {
      router.push(redirectTo);
      router.refresh();
    }, 2000);
  };

  if (success) {
    return (
      <div className="p-4 text-sm text-green-800 bg-green-100 border border-green-200 rounded-lg">
        ¡Registro exitoso! Verifica tu email para activar tu cuenta.
        Redirigiendo...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nombre completo
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
          placeholder="Juan Pérez"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
          placeholder="••••••••"
        />
        <p className="mt-1 text-xs text-gray-500">Mínimo 6 caracteres</p>
      </div>

      {error && (
        <div className="p-3 text-sm text-red-800 bg-red-100 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Creando cuenta..." : "Crear cuenta"}
      </button>
    </form>
  );
}
