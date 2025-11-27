import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import GoogleButton from "@/components/auth/GoogleButton";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Iniciar sesión
            </h1>
            <p className="text-gray-600">Accede a tu cuenta para votar</p>
          </div>

          {/* Login con Google */}
          <GoogleButton mode="login" />

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                O continúa con email
              </span>
            </div>
          </div>

          {/* Login con Email */}
          <LoginForm />

          {/* Link a Registro */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">¿No tienes cuenta? </span>
            <Link
              href="/auth/register"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Regístrate aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
