import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Projects — Khel Setu Foundation",
  description:
    "Explore Khel Setu Foundation's projects: PlayFree, Endorphin, Mukti, Second Innings, and BookRise.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Focused initiatives driving meaningful change through sports and
            community empowerment.
          </p>
        </div>
      </section>

      {/* Project PlayFree */}
      <section id="playfree" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                Project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                PlayFree
              </h2>
              <p className="text-gold font-semibold text-lg mb-6">
                Sports Recognition & Grassroots Platforms
              </p>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual description */}
                Project PlayFree is about giving every athlete — no matter how
                remote their village or modest their means — the recognition they
                deserve. We create platforms where grassroots talent can be
                discovered, celebrated, and supported.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with more details */}
                Through tournaments, scouting camps, and athlete spotlights, we
                connect emerging athletes with coaches, organizations, and
                opportunities that can change the trajectory of their careers.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Grassroots tournaments",
                  "Talent scouting camps",
                  "Athlete spotlights",
                  "Coaching connections",
                  "Equipment support",
                  "Competition exposure",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream rounded-2xl h-96 flex items-center justify-center">
              <span className="text-gray-400">[Project PlayFree image placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* Project Endorphin */}
      <section id="endorphin" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl h-96 flex items-center justify-center lg:order-1">
              <span className="text-gray-400">[Project Endorphin image placeholder]</span>
            </div>
            <div className="lg:order-2">
              <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                Project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                Endorphin
              </h2>
              <p className="text-gold font-semibold text-lg mb-6">
                Fitness & Wellbeing
              </p>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual description */}
                Project Endorphin harnesses the natural power of sports to
                boost mental health, physical fitness, and overall wellbeing.
                Named after the &ldquo;feel-good&rdquo; chemicals released
                during exercise, this initiative brings structured fitness and
                wellness programs to communities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with more details */}
                From community fitness drives to mental health awareness through
                sport, Endorphin is about making wellness accessible and
                enjoyable for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Community fitness programs",
                  "Mental health awareness",
                  "Wellness workshops",
                  "Youth fitness camps",
                  "Stress relief through sport",
                  "Healthy lifestyle promotion",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* Project Mukti */}
      <section id="mukti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                Project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                Mukti
              </h2>
              <p className="text-gold font-semibold text-lg mb-6">
                Women Empowerment Through Sports
              </p>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual Project Mukti description */}
                Project Mukti — meaning &ldquo;liberation&rdquo; — is our
                flagship initiative focused on empowering women through sports.
                We believe that when women play, they don&apos;t just compete —
                they break barriers, build confidence, and inspire entire
                communities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with more details */}
                Through structured training programs, community sports events,
                and mentorship, Project Mukti provides women with the platform,
                skills, and support to discover their potential both on and off
                the field.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* PLACEHOLDER: Replace with actual highlights */}
                {[
                  "Sports training programs",
                  "Leadership development",
                  "Community engagement",
                  "Confidence building",
                  "Health & fitness awareness",
                  "Mentorship network",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream rounded-2xl h-96 flex items-center justify-center">
              {/* PLACEHOLDER: Replace with actual Project Mukti image */}
              <span className="text-gray-400">
                [Project Mukti image placeholder]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-100 h-px" />

      {/* Project Second Innings */}
      <section id="second-innings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                Project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                Second Innings
              </h2>
              <p className="text-gold font-semibold text-lg mb-6">
                Sports Beyond Retirement
              </p>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual description */}
                Project Second Innings is dedicated to athletes and sports
                enthusiasts who still have so much to give. Whether it&apos;s
                retired players, senior sportspersons, or those looking for a
                fresh start, this project creates opportunities to stay
                connected to sports.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with more details */}
                Through coaching roles, mentorship programs, and masters-level
                competitions, Second Innings ensures that passion for sports
                never has to end.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Coaching opportunities",
                  "Mentorship programs",
                  "Masters competitions",
                  "Knowledge transfer",
                  "Senior fitness programs",
                  "Community leadership",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream rounded-2xl h-96 flex items-center justify-center">
              <span className="text-gray-400">[Project Second Innings image placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* Project BookRise */}
      <section id="bookrise" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl h-96 flex items-center justify-center lg:order-1">
              <span className="text-gray-400">[Project BookRise image placeholder]</span>
            </div>
            <div className="lg:order-2">
              <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                Project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                BookRise
              </h2>
              <p className="text-gold font-semibold text-lg mb-6">
                Education Through Sports
              </p>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual description */}
                Project BookRise bridges the gap between education and athletics.
                We ensure that young athletes don&apos;t have to choose between
                their studies and their sport — they can excel at both.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with more details */}
                From academic tutoring and library access to study materials and
                educational workshops, BookRise provides the support athletes need
                to build complete, well-rounded futures.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Academic tutoring",
                  "Library & study resources",
                  "Educational workshops",
                  "School partnerships",
                  "Scholarship guidance",
                  "Career counseling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Want to support our projects?
          </h2>
          <p className="text-navy-light text-lg mb-8">
            Partner with us, volunteer, or donate to help us expand our reach
            and impact.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-dark transition-colors duration-200 inline-block"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
