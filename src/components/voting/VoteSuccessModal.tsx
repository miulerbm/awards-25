"use client";

import { X, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import type { Category, Nominee } from "@/types";

interface VoteSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextCategory: () => void;
  category: Category;
  nominee: Nominee;
  hasNextCategory: boolean;
}

/**
 * Modal de confirmación de voto exitoso
 *
 * Muestra un resumen del voto registrado y opciones para:
 * - Ir a la siguiente categoría
 * - Cerrar el modal
 *
 * @example
 * <VoteSuccessModal
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   onNextCategory={() => router.push(`/voting/${nextCategory.slug}`)}
 *   category={currentCategory}
 *   nominee={votedNominee}
 *   hasNextCategory={!!nextCategory}
 * />
 */
export default function VoteSuccessModal({
  isOpen,
  onClose,
  onNextCategory,
  category,
  nominee,
  hasNextCategory,
}: VoteSuccessModalProps) {
  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative bg-secondary-800 rounded-2xl shadow-2xl border border-primary-500/30 max-w-md w-full animate-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary-500/20 p-3">
                <CheckCircle2 className="w-12 h-12 text-primary-400" />
              </div>
            </div>

            {/* Title */}
            <h2
              id="modal-title"
              className="text-2xl font-bold text-white text-center mb-2"
            >
              ¡Voto Registrado!
            </h2>

            <p className="text-gray-400 text-center mb-6">
              Tu voto ha sido guardado exitosamente
            </p>

            {/* Vote Summary */}
            <div className="bg-secondary-900/50 rounded-lg p-4 mb-6 border border-secondary-700">
              <div className="mb-3">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Categoría
                </p>
                <p className="text-white font-medium">{category.title}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Tu voto
                </p>
                <p className="text-primary-400 font-bold">{nominee.title}</p>
                {nominee.subtitle && (
                  <p className="text-gray-400 text-sm mt-1">
                    {nominee.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {hasNextCategory && (
                <button
                  onClick={onNextCategory}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Próxima Categoría
                </button>
              )}

              <button
                onClick={onClose}
                className="w-full bg-secondary-700 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {hasNextCategory ? "Quedarme Aquí" : "Cerrar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
