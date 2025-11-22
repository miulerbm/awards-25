"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "./faqData";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-awards-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-white/70">
            Encuentra respuestas a las preguntas más comunes sobre la plataforma
            de votación
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 text-primary-400">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              ¿Tienes más preguntas?
            </h2>
            <p className="text-white/70 mb-6">
              Si no encontraste la respuesta que buscabas, no dudes en contactar
              al joven Alex. No te responderá, pero tampoco nos importa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
