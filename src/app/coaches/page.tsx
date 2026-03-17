import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Coaches — Khel Setu Foundation",
  description:
    "Meet the dedicated coaches of Khel Setu Foundation who train and mentor athletes at the grassroots level.",
};

const coaches = [
  // PLACEHOLDER: Replace with actual coach details
  {
    name: "[Coach Name 1]",
    sport: "[Sport / Specialization]",
    bio: "A passionate coach with years of experience in grassroots sports development. Dedicated to identifying and nurturing young talent.",
    achievements: ["[Achievement 1]", "[Achievement 2]", "[Achievement 3]"],
  },
  {
    name: "[Coach Name 2]",
    sport: "[Sport / Specialization]",
    bio: "Committed to building athletic excellence through structured training programs and mentorship.",
    achievements: ["[Achievement 1]", "[Achievement 2]", "[Achievement 3]"],
  },
  {
    name: "[Coach Name 3]",
    sport: "[Sport / Specialization]",
    bio: "Bringing professional coaching standards to community-level sports, empowering the next generation of athletes.",
    achievements: ["[Achievement 1]", "[Achievement 2]", "[Achievement 3]"],
  },
  {
    name: "[Coach Name 4]",
    sport: "[Sport / Specialization]",
    bio: "Focused on inclusive sports training, ensuring every athlete gets the guidance they deserve regardless of background.",
    achievements: ["[Achievement 1]", "[Achievement 2]", "[Achievement 3]"],
  },
];

export default function CoachesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Coaches</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The mentors and trainers shaping the future of grassroots sports.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, i) => (
              <ScrollReveal key={coach.name} direction="up" delay={i * 100}>
                <div className="card-hover bg-white rounded-2xl overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-auto placeholder-gradient flex items-center justify-center shrink-0">
                      <span className="text-gray-400 text-sm">[Photo]</span>
                    </div>
                    <div className="p-8 flex-1">
                      <h3 className="text-xl font-bold text-navy">
                        {coach.name}
                      </h3>
                      <p className="text-gold font-semibold text-sm mb-3">
                        {coach.sport}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{coach.bio}</p>
                      <div>
                        <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-2">
                          Key Achievements
                        </p>
                        <ul className="space-y-1">
                          {coach.achievements.map((a) => (
                            <li
                              key={a}
                              className="text-gray-600 text-xs flex items-center gap-2"
                            >
                              <span className="text-gold">✓</span> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Coach CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Want to Coach With Us?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            If you&apos;re passionate about sports and community development, we&apos;d
            love to have you on our team.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-light transition-colors duration-200 inline-block"
          >
            Apply to Coach
          </Link>
        </div>
      </section>
    </>
  );
}
