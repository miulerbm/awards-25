"use client";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import { useAuth } from "@/providers/AuthProvider";

export default function HomePage() {
  const { session } = useAuth();
  return (
    <div className="min-h-screen bg-awards-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Background elements similar to Game Awards */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 lg:pt-32 pb-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-1">
              {/* Countdown Banner */}
              <div className="inline-block text-start backdrop-blur-sm text-white  py-2 rounded-full text-sm font-medium mb-4 lg:mb-8">
                APERTURA: 10 DE DICIEMBRE
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6">
                <span className="block">THE</span>
                <span className="block text-primary-400">XINO</span>
                <span className="block">AWARDS</span>
              </h1>

              {/* Event Details */}
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8">
                <div className="mb-2">DICIEMBRE 20</div>
                <div className="text-base lg:text-lg text-gray-400">
                  EN ALGUN LUGAR (SI LOXO QUIERE)
                </div>
              </div>

              {/* Action Buttons - Only on desktop */}
              {!session && (
                <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <Link
                    href="/auth/login"
                    className="btn-accent text-lg px-8 py-4 w-full sm:w-auto"
                  >
                    INICIA SESIÓN
                  </Link>
                  <Link
                    href="/categories"
                    className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                  >
                    VER CATEGORÍAS
                  </Link>
                </div>
              )}
            </div>
            {/* Action Buttons - Mobile only, before carousel */}
            {!session && (
              <div className="flex lg:hidden flex-col sm:flex-row gap-4 justify-center items-center order-2">
                <Link
                  href="/auth/login"
                  className="btn-accent text-lg px-8 py-4 w-3/4 sm:w-auto text-center"
                >
                  INICIA SESIÓN
                </Link>
                <Link
                  href="/categories"
                  className="btn-primary text-lg px-8 py-4 w-3/4 sm:w-auto text-center"
                >
                  VER CATEGORÍAS
                </Link>
              </div>
            )}

            {/* Image Carousel */}
            <div className="relative h-[220px] sm:h-[300px] lg:h-[550px] xl:h-[650px] w-full max-w-[600px] mx-auto order-3">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-secondary-800/30 backdrop-blur-sm border border-secondary-700">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Vota por Tus Favoritos
              </h3>
              <p className="text-gray-400">
                Elige tus candidatos favoritos en múltiples categorías y haz que
                tu voz sea escuchada.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-secondary-800/30 backdrop-blur-sm border border-secondary-700">
              <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Celebra la Excelencia
              </h3>
              <p className="text-gray-400">
                Reconoce los logros sobresalientes en los kktronicos y sus
                xinadas.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-secondary-800/30 backdrop-blur-sm border border-secondary-700">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Sé Parte de la Historia
              </h3>
              <p className="text-gray-400">
                Únete a nosotros, no somos uno, tampoco somos dos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
