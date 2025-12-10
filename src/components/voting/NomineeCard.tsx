"use client";

import { Nominee } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, Play, Pause, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface NomineeCardProps {
  nominee: Nominee;
  onVote?: (nomineeId: string) => void;
  isVoted?: boolean;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  hasVotedInCategory?: boolean;
}

// Helper function to determine media type based on URL extension
const getMediaType = (url: string): "image" | "video" | "audio" => {
  const lowerUrl = url.toLowerCase();
  if (
    lowerUrl.endsWith(".mp4") ||
    lowerUrl.endsWith(".webm") ||
    lowerUrl.endsWith(".mov")
  ) {
    return "video";
  }
  if (
    lowerUrl.endsWith(".ogg") ||
    lowerUrl.endsWith(".mpeg") ||
    lowerUrl.endsWith(".mp3") ||
    lowerUrl.endsWith(".wav")
  ) {
    return "audio";
  }
  return "image";
};

const NomineeCard = ({
  nominee,
  onVote,
  isVoted = false,
  isAuthenticated = false,
  isLoading = false,
  hasVotedInCategory = false,
}: NomineeCardProps) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  const handleVote = () => {
    if (onVote && isAuthenticated && !isVoted) {
      onVote(nominee.id);
    }
  };

  // Use Unsplash placeholder if no imageUrl is provided
  const imageSrc =
    nominee.imageUrl ||
    `https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80`;

  const mediaType = getMediaType(imageSrc);

  // Handle play/pause toggle
  const handlePlayPause = () => {
    if (isPlaying) {
      // If playing, pause it
      mediaRef.current?.pause();
      setIsPlaying(false);
    } else {
      // If paused, open modal and play
      setIsModalOpen(true);
      setIsPlaying(true);
    }
  };

  // Handle modal close - pause media
  const handleCloseModal = () => {
    if (mediaRef.current) {
      mediaRef.current.pause();
      setIsPlaying(false);
    }
    setIsModalOpen(false);
  };

  // Listen to media play/pause events to sync state
  useEffect(() => {
    const mediaElement = mediaRef.current;
    if (!mediaElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    mediaElement.addEventListener("play", handlePlay);
    mediaElement.addEventListener("pause", handlePause);
    mediaElement.addEventListener("ended", handleEnded);

    return () => {
      mediaElement.removeEventListener("play", handlePlay);
      mediaElement.removeEventListener("pause", handlePause);
      mediaElement.removeEventListener("ended", handleEnded);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="group relative bg-secondary-800 rounded-lg overflow-hidden border border-secondary-700 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-400 z-10">
        {/* Play/Pause Button - Only for video and audio, hidden on mobile */}
        {(mediaType === "video" || mediaType === "audio") && (
          <button
            onClick={handlePlayPause}
            className="hidden md:block absolute cursor-pointer top-4 left-4 z-30 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5" fill="currentColor" />
            )}
          </button>
        )}

        {/* Media Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary-900">
          {mediaType === "image" && (
            <>
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary-900 z-10">
                  <Loader2 className="w-10 h-10 text-primary-400 animate-spin" />
                </div>
              )}
              <Image
                src={imageSrc}
                alt={nominee.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[2px]"
                onLoad={() => setImageLoading(false)}
              />
            </>
          )}

          {mediaType === "video" && (
            <video
              src={imageSrc}
              controls
              controlsList="nodownload"
              className="w-full h-full object-cover"
              preload="metadata"
            >
              Tu navegador no soporta videos.
            </video>
          )}

          {mediaType === "audio" && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 p-6">
              <div className="mb-6">
                <svg
                  className="w-24 h-24 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </div>
              <audio
                src={imageSrc}
                controls
                controlsList="nodownload"
                className="w-full max-w-sm"
                preload="metadata"
              >
                Tu navegador no soporta audio.
              </audio>
            </div>
          )}

          {/* Loading Overlay - Always visible when loading */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-20 animate-in fade-in duration-200">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-12 h-12 text-primary-400 animate-spin" />
                <span className="text-white font-bold text-lg">VOTANDO...</span>
              </div>
            </div>
          )}

          {/* Vote Button Desktop - Hover based (hidden on mobile) */}
          {!isLoading && (
            <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {!isAuthenticated ? (
                <Link
                  href={`/auth/login?callbackUrl=${encodeURIComponent(
                    pathname
                  )}`}
                  className="bg-linear-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent-500/40 hover:shadow-accent-600/50"
                  aria-label="Iniciar sesión para votar"
                >
                  LOGIN
                </Link>
              ) : (
                <button
                  onClick={handleVote}
                  disabled={isVoted}
                  className={`cursor-pointer ${
                    isVoted
                      ? "bg-linear-to-r from-accent-500 to-accent-600 opacity-90 cursor-not-allowed shadow-accent-500/40"
                      : "bg-primary-500 hover:bg-primary-600 shadow-primary-500/40 hover:shadow-primary-600/50 hover:scale-105"
                  } text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform shadow-lg disabled:transform-none disabled:hover:scale-100`}
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
        <div className="p-5">
          <h3 className="text-white font-bold text-md mb-2 line-clamp-5">
            {nominee.title}
          </h3>

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
                disabled={isLoading || isVoted}
                className={`w-full ${
                  isVoted
                    ? "bg-linear-to-r from-accent-500 to-accent-600 opacity-90 cursor-not-allowed shadow-accent-500/40"
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

      {/* Modal for Video/Audio Playback */}
      {isModalOpen && (mediaType === "video" || mediaType === "audio") && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute cursor-pointer top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-50"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>{" "}
          <div
            className="relative max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-secondary-800 rounded-lg p-6 shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-4">
                {nominee.title}
              </h3>

              {mediaType === "video" && (
                <video
                  ref={mediaRef as React.RefObject<HTMLVideoElement>}
                  src={imageSrc}
                  controls
                  autoPlay
                  controlsList="nodownload"
                  className="w-full max-h-[70vh] rounded-lg object-contain"
                  preload="metadata"
                >
                  Tu navegador no soporta videos.
                </video>
              )}

              {mediaType === "audio" && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="mb-8">
                    <svg
                      className="w-32 h-32 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                  <audio
                    ref={mediaRef as React.RefObject<HTMLAudioElement>}
                    src={imageSrc}
                    controls
                    autoPlay
                    controlsList="nodownload"
                    className="w-full"
                    preload="metadata"
                  >
                    Tu navegador no soporta audio.
                  </audio>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NomineeCard;
