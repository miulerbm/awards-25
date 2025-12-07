"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getAllCategories, getNomineesByCategory } from "@/lib/mockData";
import { useAuth } from "@/hooks/useAuth";
import { useVoting } from "@/hooks/useVoting";

export default function CategoriesPage() {
  const { user } = useAuth();
  const { votesByCategory, totalVotes } = useVoting(user?.id);
  const categories = getAllCategories();
  const totalCategories = categories.length;

  return (
    <div className="min-h-screen bg-awards-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Vote Counter - Centered */}
        {user && (
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-lg px-6 py-3">
              <span className="text-white/70 font-medium text-sm">
                PROGRESO:
              </span>
              <span className="text-primary-400 font-bold text-lg">
                {totalVotes}/{totalCategories}
              </span>
              <span className="text-white/50 text-sm">categorías votadas</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            CATEGORÍAS
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explora todas las categorías y vota por tus favoritos en cada una
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const nominees = getNomineesByCategory(category.id);
            const nomineeCount = nominees.length;
            const hasVoted = !!votesByCategory[category.id];

            return (
              <Link
                key={category.id}
                href={`/voting/${category.slug}`}
                className={`group relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  hasVoted
                    ? "bg-primary-500/10 border-primary-400 hover:border-primary-300 hover:bg-primary-500/15 hover:shadow-primary-500/20"
                    : "bg-secondary-800/50 border-secondary-700 hover:border-primary-400 hover:bg-secondary-800/70 hover:shadow-primary-500/20"
                }`}
              >
                {/* Voted Badge */}
                {hasVoted && (
                  <div className="absolute top-6 right-6">
                    <CheckCircle2 className="w-5 h-5 text-primary-400" />
                  </div>
                )}

                {/* Content */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-secondary-700">
                  <div className="text-sm text-gray-400">
                    <span className="font-semibold text-primary-400">
                      {nomineeCount}
                    </span>{" "}
                    Nominados
                  </div>
                  <div className="text-primary-400 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    {hasVoted ? "VER VOTO →" : "VOTAR →"}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para votar?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Selecciona una categoría para comenzar a votar por tus favoritos
            </p>
            <Link
              href={`/voting/${categories[0]?.slug || ""}`}
              className="btn-accent text-lg px-8 py-4"
            >
              COMENZAR A VOTAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
