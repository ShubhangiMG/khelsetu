import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work — Khel Setu Foundation",
  description:
    "Explore the programs and initiatives run by Khel Setu Foundation across sports development, community building, and athlete empowerment.",
};

const programs = [
  {
    icon: "⚽",
    title: "Grassroots Football",
    description:
      "Our flagship program bringing structured football training to rural and semi-urban areas. We set up community training centers, provide equipment, and deploy trained coaches to nurture talent at the grassroots level.",
    highlights: [
      "Community training centers",
      "Professional coaching",
      "Equipment and gear supply",
      "Talent identification",
    ],
  },
  {
    icon: "🏆",
    title: "Athlete Development Program",
    description:
      "A comprehensive pipeline that identifies promising athletes and provides them with advanced training, nutrition guidance, sports science support, and competitive exposure at district, state, and national levels.",
    highlights: [
      "Advanced skill training",
      "Nutrition guidance",
      "Competition exposure",
      "Mentorship",
    ],
  },
  {
    icon: "🎓",
    title: "Sports & Education Integration",
    description:
      "We partner with schools to integrate sports into the curriculum, ensuring young athletes don't have to choose between education and their passion. Our program provides after-school coaching and academic support.",
    highlights: [
      "School partnerships",
      "After-school coaching",
      "Academic support",
      "Holistic development",
    ],
  },
  {
    icon: "🤝",
    title: "Community Sports Events",
    description:
      "Regular tournaments, sports days, and community events that bring people together. These events serve as platforms for talent scouting while fostering community spirit and healthy competition.",
    highlights: [
      "Annual tournaments",
      "Inter-community leagues",
      "Sports festivals",
      "Talent scouting",
    ],
  },
  {
    icon: "👟",
    title: "Coaching & Training Infrastructure",
    description:
      "Investing in coaching education and physical infrastructure. We train local youth to become certified coaches and help communities build or upgrade their sporting facilities.",
    highlights: [
      "Coach certification",
      "Facility development",
      "Equipment grants",
      "Local capacity building",
    ],
  },
  {
    icon: "🌟",
    title: "Scholarships & Financial Support",
    description:
      "Financial assistance for talented athletes from underprivileged backgrounds, covering training costs, equipment, travel to competitions, and educational expenses.",
    highlights: [
      "Training scholarships",
      "Competition travel support",
      "Equipment sponsorship",
      "Educational grants",
    ],
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Work</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Programs and initiatives that create lasting impact through sports.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, i) => (
              <div
                key={program.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {program.title}
                  </h2>
                  <div className="w-16 h-1 bg-gold mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {/* PLACEHOLDER: Replace with actual content */}
                    {program.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {program.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-gold">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-cream rounded-2xl h-72 flex items-center justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* PLACEHOLDER: Replace with actual program image */}
                  <span className="text-gray-400 text-sm">
                    [{program.title} image placeholder]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* PLACEHOLDER: Replace with actual numbers */}
            {[
              { number: "500+", label: "Athletes Trained" },
              { number: "20+", label: "Programs Running" },
              { number: "10+", label: "States Covered" },
              { number: "50+", label: "Events Organized" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
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
            Want to support our programs?
          </h2>
          <p className="text-navy-light text-lg mb-8">
            Partner with us, volunteer, or donate to help us expand our reach.
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
