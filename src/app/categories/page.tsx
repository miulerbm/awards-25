import Link from "next/link";
import { getAllCategories, getNomineesByCategory } from "@/lib/mockData";

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-awards-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
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

            return (
              <Link
                key={category.id}
                href={`/voting/${category.slug}`}
                className="group relative bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-2xl p-8 hover:border-primary-400 hover:bg-secondary-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20"
              >
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
                    VOTAR →
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
