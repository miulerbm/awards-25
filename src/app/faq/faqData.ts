export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "¿Cómo puedo votar?",
    answer:
      "Para votar, simplemente navega a la sección de votación, selecciona una categoría y elige tu nominado favorito. Luego haz clic en el botón 'Votar' para confirmar tu elección.",
  },
  {
    question: "¿Puedo cambiar mi voto?",
    answer:
      "Sí, puedes cambiar tu voto mientras el período de votación esté activo. Tu voto más reciente será el que se contabilice.",
  },
  {
    question: "¿Cuándo termina el período de votación?",
    answer:
      "El período de votación se cierra el 17 de diciembre de 2025 a las 23:59. Asegúrate de votar antes de esa fecha.",
  },
  {
    question: "¿Puedo votar en múltiples categorías?",
    answer:
      "¡Absolutamente! Puedes y te animamos a votar en todas las categorías disponibles. Cada categoría es independiente.",
  },
  {
    question: "¿Necesito crear una cuenta para votar?",
    answer:
      "Sí, necesitas iniciar sesión para poder emitir tu voto. Esto nos ayuda a garantizar que cada persona vote solo una vez por categoría.",
  },
  {
    question: "¿Cuándo se anunciarán los ganadores?",
    answer:
      "Los ganadores se anunciarán en una ceremonia especial que se realizará el 20 de Diciembre (si loxo quiere).",
  },
  {
    question: "¿Cómo se eligieron los nominados?",
    answer:
      "Los nominados fueron seleccionados por un comité editorial basándose en criterios de calidad, impacto y popularidad en cada categoría durante el año 2025 (Mentira, todo lo decidió loxo). ",
  },
  {
    question: "¿Qué pasa si hay un empate?",
    answer:
      "En caso de empate, el comité organizador tomará la decisión final basándose en criterios adicionales predefinidos.",
  },
];
