"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Khel Setu Foundation is doing incredible work in using sports as a tool for social change. Their approach to mental health awareness through community engagement is truly inspiring.",
    name: "Testimonial 1",
    role: "Community Member",
    initials: "T1",
  },
  {
    quote:
      "The PlayFree initiative opened my eyes to how sports can transform communities dealing with substance abuse. The passion and dedication of the team is remarkable.",
    name: "Testimonial 2",
    role: "Volunteer",
    initials: "T2",
  },
  {
    quote:
      "What sets Khel Setu apart is their holistic approach — from youth engagement to elderly welfare, they are building something truly meaningful for Rajasthan.",
    name: "Testimonial 3",
    role: "Supporter",
    initials: "T3",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const goTo = useCallback(
    (index: number, dir: "left" | "right" = "left") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo(current === testimonials.length - 1 ? 0 : current + 1, "left");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? testimonials.length - 1 : current - 1, "right");
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-navy/5 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-crimson font-semibold text-sm uppercase tracking-widest">
            What People Say
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Voices of <span className="text-gradient">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-cream rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
            {/* Decorative quote marks */}
            <svg
              className="absolute top-6 left-6 w-20 h-20 text-gold/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            {/* Animated quote text */}
            <div className="relative z-10">
              <p
                className={`font-[var(--font-playfair)] italic text-xl md:text-2xl lg:text-3xl text-navy leading-relaxed mb-10 min-h-[7rem] transition-all duration-300 ${
                  isAnimating
                    ? direction === "left"
                      ? "opacity-0 translate-x-8"
                      : "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person info + nav */}
              <div
                className={`flex items-center justify-between transition-all duration-300 delay-100 ${
                  isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center border-3 border-gold/30 shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-navy text-lg">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-navy transition-all duration-200 group"
                  >
                    <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-navy transition-all duration-200 group"
                  >
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar auto-play indicator */}
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "left" : "right")}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="h-1 flex-1 rounded-full bg-gray-200 overflow-hidden"
                >
                  <div
                    className={`h-full rounded-full transition-all ${
                      i === current
                        ? "bg-gold animate-[progress_5s_linear]"
                        : i < current
                          ? "bg-gold/40 w-full"
                          : "bg-transparent w-0"
                    }`}
                    style={i === current ? { width: "100%" } : undefined}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
