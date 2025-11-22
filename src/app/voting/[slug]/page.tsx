"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getAllCategories,
  getCategoryBySlug,
  getNomineesByCategory,
} from "@/lib/mockData";
import NomineeCard from "@/components/voting/NomineeCard";

export default function VotingPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [votes, setVotes] = useState<Record<string, string>>({});

  const categories = getAllCategories();
  const currentCategory = getCategoryBySlug(slug);
  const nominees = currentCategory
    ? getNomineesByCategory(currentCategory.id)
    : [];

  const currentIndex = categories.findIndex((cat) => cat.slug === slug);
  const previousCategory =
    currentIndex > 0 ? categories[currentIndex - 1] : null;
  const nextCategory =
    currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  const totalCategories = categories.length;
  const votedCategories = Object.keys(votes).length;

  const handleVote = (nomineeId: string) => {
    if (!currentCategory) return;

    setVotes((prev) => {
      const newVotes = { ...prev };
      if (newVotes[currentCategory.id] === nomineeId) {
        delete newVotes[currentCategory.id];
      } else {
        newVotes[currentCategory.id] = nomineeId;
      }
      return newVotes;
    });
  };

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-awards-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Category Not Found
          </h1>
          <Link href="/categories" className="btn-primary">
            View All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-awards-gradient">
      {/* Top Navigation Bar */}
      <div className="sticky top-16 bg-secondary-900/95 backdrop-blur-md border-b border-primary-500/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-16">
            {/* Left - Exit Voting */}
            <Link
              href="/categories"
              className="text-white/90 hover:text-primary-400 font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>CATEGORÍAS</span>
            </Link>

            {/* Center - Navigation */}
            <div className="flex items-center gap-4 text-sm font-medium">
              {previousCategory ? (
                <Link
                  href={`/voting/${previousCategory.slug}`}
                  className="text-white/70 hover:text-primary-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>ANTERIOR</span>
                </Link>
              ) : (
                <div className="text-white/30 flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4" />
                  <span>ANTERIOR</span>
                </div>
              )}

              <Link
                href="/categories"
                className="text-primary-400 hover:text-primary-300 transition-colors uppercase"
              >
                VER TODAS
              </Link>

              {nextCategory ? (
                <Link
                  href={`/voting/${nextCategory.slug}`}
                  className="text-white/70 hover:text-primary-400 transition-colors flex items-center gap-1"
                >
                  <span>SIGUIENTE</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <div className="text-white/30 flex items-center gap-1">
                  <span>SIGUIENTE</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Right - Votes Cast */}
            <div className="text-white font-medium text-sm">
              <span className="text-white/70">TOTAL</span>{" "}
              <span className="text-primary-400">
                {votedCategories}/{totalCategories}
              </span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden flex-col py-3 gap-3">
            {/* Top Row - Previous/View All/Next */}
            <div className="flex items-center justify-center gap-4">
              {previousCategory ? (
                <Link
                  href={`/voting/${previousCategory.slug}`}
                  className="flex items-center justify-center h-12 rounded-lg text-sm pr-3 text-white hover:text-primary-400 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                  ANTERIOR
                </Link>
              ) : (
                <div className="flex items-center justify-center h-12 rounded-lg text-white/30">
                  <ChevronLeft className="w-6 h-6" />
                </div>
              )}

              <Link
                href="/categories"
                className="flex-1 text-center px-6 py-3 rounded-lg text-primary-400 font-bold text-sm hover:text-primary-300 transition-all uppercase"
              >
                VER TODAS
              </Link>

              {nextCategory ? (
                <Link
                  href={`/voting/${nextCategory.slug}`}
                  className="flex items-center justify-center h-12 rounded-lg text-sm text-white pl-3 hover:text-primary-400 transition-all"
                >
                  SIGUIENTE
                  <ChevronRight className="w-6 h-6" />
                </Link>
              ) : (
                <div className="flex items-center justify-center h-12 rounded-lg text-white/30">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Category Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
            {currentCategory.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Nominees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {nominees.map((nominee) => (
            <NomineeCard
              key={nominee.id}
              nominee={nominee}
              onVote={handleVote}
              isVoted={votes[currentCategory.id] === nominee.id}
            />
          ))}
        </div>

        {/* No Nominees Message */}
        {nominees.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No nominees available for this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
