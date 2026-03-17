import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Khel Setu Foundation",
  description:
    "Learn about Khel Setu Foundation's mission, vision, and the team working to bridge sports and opportunity across India.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gold">Us</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The story behind the bridge of sports.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="card-hover bg-cream rounded-2xl p-10">
                <span className="text-crimson font-semibold text-sm uppercase tracking-widest">Purpose</span>
                <h2 className="text-3xl font-bold text-navy mt-2 mb-4">Our Mission</h2>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  To bridge the gap between sporting talent and opportunity by
                  providing grassroots programs, coaching, and infrastructure that
                  empower athletes from all backgrounds to realize their
                  potential.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="card-hover bg-cream rounded-2xl p-10">
                <span className="text-crimson font-semibold text-sm uppercase tracking-widest">Aspiration</span>
                <h2 className="text-3xl font-bold text-navy mt-2 mb-4">Our Vision</h2>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  An India where every talented young person has access to sporting
                  opportunities, regardless of their economic background or
                  geographic location.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-navy/5 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder — Khel Setu Foundation"
                  width={800}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-crimson font-semibold text-sm uppercase tracking-widest">Our Journey</span>
                <h2 className="text-3xl font-bold text-navy mt-2 mb-4">Our Story</h2>
                <div className="w-16 h-1 bg-crimson mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual story */}
                Khel Setu Foundation was born from a simple yet powerful belief:
                that sports can be the bridge — the &ldquo;setu&rdquo; — that
                connects underprivileged youth to a world of opportunity,
                discipline, and growth.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {/* PLACEHOLDER: Replace with more story text */}
                What started as a small community initiative has grown into a
                foundation that touches lives across multiple states, running
                training programs, organizing tournaments, and supporting
                athletes with scholarships.
              </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold/5 via-transparent to-navy/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-crimson font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-4">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Inclusivity",
                desc: "Sports for everyone, regardless of background or ability.",
              },
              {
                icon: "💪",
                title: "Empowerment",
                desc: "Building confidence and life skills through athletic achievement.",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "Strengthening bonds and fostering unity through shared sporting experiences.",
              },
              {
                icon: "⭐",
                title: "Excellence",
                desc: "Striving for the highest standards in everything we do.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} direction="up" delay={i * 100}>
                <div className="card-hover text-center p-10 bg-cream rounded-2xl group">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Founder
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-gray-300 text-lg">
              The visionary behind our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PLACEHOLDER: Replace with actual team members */}
            {[
              { name: "Abhishek Gupta", role: "Founder" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-navy-light rounded-xl p-6 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">[Photo]</span>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-gold via-gold-light to-gold overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-navy/5 translate-x-1/3 translate-y-1/3" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 font-[var(--font-playfair)]">
              Want to be part of our journey?
            </h2>
            <Link
              href="/contact"
              className="btn-shine bg-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-navy-dark transition-all duration-300 hover:scale-105 inline-block shadow-2xl shadow-navy/20"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
