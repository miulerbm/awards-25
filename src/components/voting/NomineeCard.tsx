"use client";

import { Nominee } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

interface NomineeCardProps {
  nominee: Nominee;
  onVote?: (nomineeId: string) => void;
  isVoted?: boolean;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  hasVotedInCategory?: boolean;
}

const NomineeCard = ({
  nominee,
  onVote,
  isVoted = false,
  isAuthenticated = false,
  isLoading = false,
  hasVotedInCategory = false,
}: NomineeCardProps) => {
  const pathname = usePathname();

  const handleVote = () => {
    if (onVote && isAuthenticated && !hasVotedInCategory) {
      onVote(nominee.id);
    }
  };

  // Use Unsplash placeholder if no imageUrl is provided
  const imageSrc =
    nominee.imageUrl ||
    `https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80`;

  return (
    <div className="group relative bg-secondary-800/50 rounded-lg overflow-hidden border border-secondary-700 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-400 z-10">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-secondary-900">
        <Image
          src={imageSrc}
          alt={nominee.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Loading Overlay - Always visible when loading */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-20 animate-in fade-in duration-200">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-12 h-12 text-primary-400 animate-spin" />
              <span className="text-white font-bold text-lg">VOTANDO...</span>
            </div>
          </div>
        )}

        {/* Vote Button Overlay Desktop - Hover based (hidden on mobile) */}
        {!isLoading && (
          <div className="hidden md:flex absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end justify-center pb-6">
            {!isAuthenticated ? (
              <Link
                href={`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`}
                className="bg-linear-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent-500/40 hover:shadow-accent-600/50"
                aria-label="Iniciar sesión para votar"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={handleVote}
                disabled={isLoading || (hasVotedInCategory && !isVoted)}
                className={`${
                  hasVotedInCategory && !isVoted
                    ? "cursor-not-allowed opacity-50 bg-secondary-700"
                    : "cursor-pointer"
                } ${
                  isVoted
                    ? "bg-linear-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 shadow-accent-500/40 hover:shadow-accent-600/50"
                    : !hasVotedInCategory
                    ? "bg-primary-500 hover:bg-primary-600 shadow-primary-500/40 hover:shadow-primary-600/50"
                    : ""
                } text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:hover:scale-100`}
                aria-label={
                  isVoted
                    ? `Ya votaste por ${nominee.title}`
                    : `Votar por ${nominee.title}`
                }
              >
                {isVoted ? "VOTADO" : "VOTAR"}
              </button>
            )}
          </div>
        )}

        {/* Voted Badge */}
        {isVoted && isAuthenticated && !isLoading && (
          <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            ✓ VOTADO
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-secondary-800/80 backdrop-blur-sm">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
          {nominee.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-1 mb-3 md:mb-0">
          {nominee.subtitle || nominee.publisher}
        </p>

        {/* Mobile Vote Button - Always visible on mobile, hidden on desktop */}
        <div className="md:hidden mt-3">
          {!isAuthenticated ? (
            <Link
              href={`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`}
              className="block w-full text-center bg-linear-to-r from-accent-500 to-accent-600 active:from-accent-600 active:to-accent-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-lg shadow-accent-500/40"
              aria-label="Iniciar sesión para votar"
            >
              LOGIN
            </Link>
          ) : (
            <button
              onClick={handleVote}
              disabled={isLoading || (hasVotedInCategory && !isVoted)}
              className={`w-full ${
                hasVotedInCategory && !isVoted
                  ? "bg-secondary-700 opacity-50 cursor-not-allowed"
                  : isVoted
                  ? "bg-linear-to-r from-accent-500 to-accent-600 active:from-accent-600 active:to-accent-700 shadow-accent-500/40"
                  : "bg-primary-500 active:bg-primary-600 shadow-primary-500/40"
              } text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              aria-label={
                isVoted
                  ? `Ya votaste por ${nominee.title}`
                  : `Votar por ${nominee.title}`
              }
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>VOTANDO...</span>
                </>
              ) : isVoted ? (
                "✓ VOTADO"
              ) : (
                "VOTAR"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NomineeCard;
