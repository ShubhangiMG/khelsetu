"use client";

import { useRef, useState } from "react";

export default function VideoCard({ src }: { src: string; title: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
      setIsMuted(true);
      v.muted = true;
    }
    setIsPlaying(false);
  };

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isMuted) {
      v.muted = false;
      setIsMuted(false);
      if (v.paused) {
        v.play();
        setIsPlaying(true);
      }
    } else {
      v.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div
      className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />

      {/* Play icon (shows when not hovering) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
            <svg className="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Sound indicator (shows when playing) */}
      {isPlaying && (
        <div className="absolute bottom-3 right-3 z-10">
          <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
            {isMuted ? (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* Video label */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-crimson text-white text-xs font-semibold px-2 py-1 rounded-full">
          VIDEO
        </span>
      </div>
    </div>
  );
}
