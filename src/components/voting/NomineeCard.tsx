"use client";

import { Nominee } from "@/types";
import Image from "next/image";

interface NomineeCardProps {
  nominee: Nominee;
  onVote?: (nomineeId: string) => void;
  isVoted?: boolean;
}

const NomineeCard = ({
  nominee,
  onVote,
  isVoted = false,
}: NomineeCardProps) => {
  const handleVote = () => {
    if (onVote) {
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

        {/* Vote Button Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={handleVote}
            className={`cursor-pointer ${
              isVoted
                ? "bg-primary-500 hover:bg-primary-600"
                : "bg-accent-500 hover:bg-accent-600"
            } text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            {isVoted ? "VOTED" : "VOTE"}
          </button>
        </div>

        {/* Voted Badge */}
        {isVoted && (
          <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            ✓ VOTED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-secondary-800/80 backdrop-blur-sm">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
          {nominee.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-1">
          {nominee.subtitle || nominee.publisher}
        </p>
      </div>
    </div>
  );
};

export default NomineeCard;
