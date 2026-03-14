import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Khel Setu Foundation",
  description:
    "Learn about Khel Setu Foundation's mission, vision, and the team working to bridge sports and opportunity across India.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed">
                {/* PLACEHOLDER: Replace with actual mission statement */}
                To bridge the gap between sporting talent and opportunity by
                providing grassroots programs, coaching, and infrastructure that
                empower athletes from all backgrounds to realize their
                potential.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Vision</h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed">
                {/* PLACEHOLDER: Replace with actual vision statement */}
                A India where every talented young person has access to sporting
                opportunities, regardless of their economic background or
                geographic location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              {/* PLACEHOLDER: Replace with actual image */}
              <span className="text-gray-400">
                [Founder / Team photo placeholder]
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Story</h2>
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
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
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-cream rounded-xl"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-gray-300 text-lg">
              The people behind the mission.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PLACEHOLDER: Replace with actual team members */}
            {[
              { name: "[Team Member 1]", role: "[Designation]" },
              { name: "[Team Member 2]", role: "[Designation]" },
              { name: "[Team Member 3]", role: "[Designation]" },
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
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Want to be part of our journey?
          </h2>
          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-dark transition-colors duration-200 inline-block mt-4"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
