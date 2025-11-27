import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import GoogleButton from "@/components/auth/GoogleButton";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Crear cuenta
            </h1>
            <p className="text-gray-600">Únete para votar por tus favoritos</p>
          </div>

          {/* Registro con Google */}
          <GoogleButton mode="register" />

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                O regístrate con email
              </span>
            </div>
          </div>

          {/* Registro con Email */}
          <RegisterForm />

          {/* Link a Login */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">¿Ya tienes cuenta? </span>
            <Link
              href="/auth/login"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Inicia sesión aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
