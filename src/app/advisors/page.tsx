import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Advisors — Khel Setu Foundation",
  description:
    "Meet the advisors who guide Khel Setu Foundation's vision and strategic direction.",
};

const advisors = [
  {
    name: "Adv. Ridhhi Chandrawat",
    title: "Secretary",
    organization: "Abhyutthanam Society",
    bio: "A legal professional and social activist providing strategic guidance on rights-based approaches to help the foundation maximize its impact across communities.",
    photo: "/images/advisors/advisor3.jpg",
  },
  {
    name: "Adv. Pranjal Singh",
    title: "President",
    organization: "Abhyutthanam Society",
    bio: "An advocate and Right to Education activist bringing legal expertise and grassroots advocacy experience to strengthen the foundation's education and empowerment initiatives.",
    photo: "/images/advisors/advisor5.jpg",
  },
  {
    name: "Pratibha Jhingan",
    title: "Assistant Faculty",
    organization: "Next IAS",
    bio: "An educator shaping future civil servants, bringing deep expertise in public policy and governance to guide the foundation's strategic direction and program design.",
    photo: "/images/advisors/advisor4.png",
  },
  {
    name: "Shashank Garg",
    title: "Academic Associate",
    organization: "IIM Indore",
    bio: "An academic associate at one of India's premier management institutes, bringing research-driven insights and strategic thinking to strengthen the foundation's programs and outreach.",
    photo: "/images/advisors/advisor2.jpg",
  },
  {
    name: "Shubhangi Garg",
    title: "Software Engineer",
    organization: "Microsoft",
    bio: "A technology professional driving the foundation's digital presence and leveraging technical expertise to amplify community outreach and impact.",
    photo: "",
  },
];

export default function AdvisorsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Advisors</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experienced leaders guiding our mission and strategy.
          </p>
        </div>
      </section>

      {/* Advisors Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden relative">
                  <Image
                    src={advisor.photo}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">{advisor.name}</h3>
                <p className="text-gold font-semibold text-sm mt-1">
                  {advisor.title}
                </p>
                <p className="text-crimson text-xs font-semibold uppercase tracking-wider mt-1">
                  {advisor.organization}
                </p>
                <div className="w-12 h-0.5 bg-gold mx-auto my-4" />
                <p className="text-gray-600 text-sm">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Interested in Advising?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We welcome experienced professionals who share our passion for
            sports-driven community development.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-light transition-colors duration-200 inline-block"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </>
  );
}
