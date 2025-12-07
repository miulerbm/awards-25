"use client";

import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

/**
 * Componente Toast para notificaciones
 *
 * Muestra mensajes temporales de éxito, error o información
 *
 * @example
 * const [showToast, setShowToast] = useState(false)
 *
 * {showToast && (
 *   <Toast
 *     message="Voto registrado exitosamente"
 *     type="success"
 *     onClose={() => setShowToast(false)}
 *   />
 * )}
 */
export function Toast({
  message,
  type = "info",
  duration = 4000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300); // Esperar a que termine la animación
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const colors = {
    success: "bg-green-500/90 border-green-400",
    error: "bg-red-500/90 border-red-400",
    info: "bg-blue-500/90 border-blue-400",
  };

  return (
    <div
      className={`fixed top-20 right-4 z-50 max-w-md transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`${colors[type]} backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-2xl border flex items-start gap-3`}
        role="alert"
      >
        <div className="mt-0.5">{icons[type]}</div>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={handleClose}
          className="text-white/80 hover:text-white transition-colors shrink-0"
          aria-label="Cerrar notificación"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/**
 * Hook para gestionar toasts
 *
 * @example
 * const { showToast, ToastContainer } = useToast()
 *
 * const handleClick = () => {
 *   showToast("Operación exitosa", "success")
 * }
 *
 * return (
 *   <>
 *     <button onClick={handleClick}>Click me</button>
 *     <ToastContainer />
 *   </>
 * )
 */
export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const showToast = (message: string, type: ToastType = "info") => {
    setToast({ message, type });
  };

  const ToastContainer = () =>
    toast ? (
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(null)}
      />
    ) : null;

  return { showToast, ToastContainer };
}
