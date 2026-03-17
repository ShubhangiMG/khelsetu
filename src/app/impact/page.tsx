import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Our Impact — Khel Setu Foundation",
  description:
    "See the real-world impact of Khel Setu Foundation's programs across communities, athletes, and women empowerment.",
};

export default function ImpactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Impact</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Measuring change, one life at a time.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "500+", label: "Youth Supported", icon: "🏅" },
              { number: "20+", label: "Programs Run", icon: "📋" },
              { number: "10+", label: "Districts Reached", icon: "🗺️" },
              { number: "50+", label: "Events Organized", icon: "🎯" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} direction="up" delay={i * 150}>
                <div className="text-center group">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-2">
                    <AnimatedCounter target={stat.number} />
                  </div>
                  <div className="text-gold font-semibold uppercase tracking-wider text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Where We Make a Difference
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          <div className="space-y-16">
            {/* Impact Area 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden h-72 relative">
                <Image
                  src="/images/endorphin/IMG-20250706-WA0005.jpg"
                  alt="Youth development through sports"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Youth Development
                </h3>
                <div className="w-12 h-1 bg-crimson mb-4" />
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {/* PLACEHOLDER: Replace with actual content */}
                  From village grounds to state-level competitions, our programs
                  identify raw talent and provide the coaching, equipment, and
                  support needed to compete at higher levels.
                </p>
                <ul className="space-y-2">
                  {[
                    "Professional coaching for grassroots athletes",
                    "Competition exposure at district and state levels",
                    "Equipment and gear support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-gold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact Area 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 rounded-2xl overflow-hidden h-72 relative">
                <Image
                  src="/images/mukti/DSC00334.JPG"
                  alt="Women empowerment through Project Mukti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Women Empowerment
                </h3>
                <div className="w-12 h-1 bg-crimson mb-4" />
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {/* PLACEHOLDER: Replace with actual content */}
                  Through Project Mukti, women are discovering that sports is
                  more than just a game — it&apos;s a path to confidence,
                  leadership, and independence.
                </p>
                <ul className="space-y-2">
                  {[
                    "Women-led sports training programs",
                    "Leadership and confidence workshops",
                    "Community role model development",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-gold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact Area 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden h-72 relative">
                <Image
                  src="/images/gallery/IMG-20250626-WA0106.jpg"
                  alt="Community building through sports events"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Community Building
                </h3>
                <div className="w-12 h-1 bg-crimson mb-4" />
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {/* PLACEHOLDER: Replace with actual content */}
                  Sports brings people together. Our community events and
                  tournaments unite neighborhoods, foster healthy competition,
                  and create lasting bonds.
                </p>
                <ul className="space-y-2">
                  {[
                    "Annual community tournaments",
                    "Inter-village sports leagues",
                    "Youth engagement programs",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-gold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Voices from the Field
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PLACEHOLDER: Replace with actual testimonials */}
            {[
              {
                quote:
                  "Khel Setu gave me the chance to train properly and compete. I never thought I'd represent my district.",
                name: "Saurabh",
                role: "Athlete, Project PlayFree",
              },
              {
                quote:
                  "Through Project Mukti, I found confidence I didn't know I had. Sports changed how I see myself.",
                name: "Payal",
                role: "Participant, Project Mukti",
              },
              {
                quote:
                  "The foundation's work in our village has united the community like nothing else could.",
                name: "Om Prakash",
                role: "Community Leader",
              },
            ].map((t) => (
              <div key={t.name} className="bg-navy-light rounded-xl p-8">
                <p className="text-gray-300 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-gold text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Be Part of the Impact
          </h2>
          <p className="text-navy-light text-lg mb-8">
            Every contribution creates ripples of change in communities across
            India.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-dark transition-colors duration-200 inline-block"
          >
            Join Us
          </Link>
        </div>
      </section>
    </>
  );
}
