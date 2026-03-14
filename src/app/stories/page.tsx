import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact Stories — Khel Setu Foundation",
  description:
    "Real stories of transformation through sports. Read about the athletes, communities, and programs that Khel Setu Foundation has impacted.",
};

const stories = [
  {
    title: "From Village Ground to State Team",
    category: "Athlete Story",
    excerpt:
      "Born in a small village with limited resources, this young footballer found coaching and support through our grassroots program. Today, they represent their state team and dream of playing nationally.",
  },
  {
    title: "Community Cup Brings a Town Together",
    category: "Community",
    excerpt:
      "What started as a small inter-village football tournament has become the annual highlight of an entire district. Over 500 participants and thousands of spectators come together every year.",
  },
  {
    title: "Scholarship Changes Everything",
    category: "Education",
    excerpt:
      "Unable to afford training equipment and travel to competitions, this talented athlete was on the verge of giving up. Our scholarship program provided the support needed to keep the dream alive.",
  },
  {
    title: "A Coach Returns to Give Back",
    category: "Coaching",
    excerpt:
      "Once a beneficiary of our grassroots program, this young coach came back to train the next generation. Their story shows the multiplier effect of investing in sports development.",
  },
  {
    title: "Girls Take the Field",
    category: "Inclusion",
    excerpt:
      "In a community where girls playing sports was uncommon, our program helped break barriers. Today, the girls' football team is one of the most celebrated groups in the district.",
  },
  {
    title: "Sports Day Sparks a Movement",
    category: "Community",
    excerpt:
      "A single community sports day organized by the foundation inspired local leaders to invest in sports infrastructure. The village now has a proper playing field and regular training sessions.",
  },
];

export default function StoriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impact <span className="text-gold">Stories</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories of real change — lives transformed through the power of
            sports.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article
                key={story.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* PLACEHOLDER: Replace with actual story image */}
                <div className="h-52 bg-gray-200 flex items-center justify-center relative">
                  <span className="text-gray-400 text-sm">
                    [Story image placeholder]
                  </span>
                  <span className="absolute top-4 left-4 bg-crimson text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {story.excerpt}
                  </p>
                  <span className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors cursor-pointer">
                    Read Full Story →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Have a Story to Share?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            If you or someone you know has been impacted by Khel Setu
            Foundation, we&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-light transition-colors duration-200 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
