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
}

const NomineeCard = ({
  nominee,
  onVote,
  isVoted = false,
  isAuthenticated = false,
  isLoading = false,
}: NomineeCardProps) => {
  const pathname = usePathname();

  const handleVote = () => {
    if (onVote && isAuthenticated) {
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
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={handleVote}
                disabled={isLoading}
                className={`cursor-pointer ${
                  isVoted
                    ? "bg-accent-500 hover:bg-accent-600"
                    : "bg-primary-500 hover:bg-primary-600"
                } text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                {isVoted ? "VOTED" : "VOTE"}
              </button>
            )}
          </div>
        )}

        {/* Voted Badge */}
        {isVoted && isAuthenticated && !isLoading && (
          <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            ✓ VOTED
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
              className="block w-full text-center bg-accent-500 active:bg-accent-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-lg"
            >
              LOGIN
            </Link>
          ) : (
            <button
              onClick={handleVote}
              disabled={isLoading}
              className={`w-full ${
                isVoted
                  ? "bg-accent-500 active:bg-accent-600"
                  : "bg-primary-500 active:bg-primary-600"
              } text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>VOTANDO...</span>
                </>
              ) : isVoted ? (
                "✓ VOTED"
              ) : (
                "VOTE"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NomineeCard;
