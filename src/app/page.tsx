import Image from "next/image";
import Link from "next/link";

/* ───────── HERO SECTION ───────── */
function HeroSection() {
  return (
    <section className="relative bg-navy min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Image
          src="/images/logo.jpg"
          alt="Khel Setu Foundation"
          width={120}
          height={120}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Bridging Sports &<br />
          <span className="text-gold">Opportunity</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          {/* PLACEHOLDER: Replace with actual tagline */}
          Empowering communities through sports. Nurturing talent. Building
          futures across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="bg-gold text-navy px-8 py-3 rounded-md font-bold text-lg hover:bg-gold-light transition-colors duration-200"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-navy transition-colors duration-200"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── IMPACT NUMBERS ───────── */
function ImpactNumbers() {
  const stats = [
    // PLACEHOLDER: Replace with actual numbers
    { number: "500+", label: "Athletes Supported" },
    { number: "20+", label: "Programs" },
    { number: "10+", label: "States Reached" },
    { number: "50+", label: "Community Events" },
  ];

  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                {stat.number}
              </div>
              <div className="text-gold font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── AREAS OF WORK ───────── */
function AreasOfWork() {
  const areas = [
    {
      icon: "⚽",
      title: "Grassroots Football",
      desc: "Building football programs from the ground up in underserved communities.",
    },
    {
      icon: "🏆",
      title: "Athlete Development",
      desc: "Identifying and nurturing sporting talent to reach their full potential.",
    },
    {
      icon: "🎓",
      title: "Sports & Education",
      desc: "Combining academics with athletics for holistic youth development.",
    },
    {
      icon: "🤝",
      title: "Community Sports",
      desc: "Organizing sports events that unite and uplift local communities.",
    },
    {
      icon: "👟",
      title: "Training & Coaching",
      desc: "Providing professional coaching and training infrastructure.",
    },
    {
      icon: "🌟",
      title: "Scholarships",
      desc: "Financial support for talented athletes from underprivileged backgrounds.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Areas of Work
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* PLACEHOLDER: Replace with actual description */}
            We work across multiple domains to create a comprehensive sports
            ecosystem that empowers every athlete.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-cream rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/our-work"
            className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors duration-200"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── ABOUT SNIPPET ───────── */
function AboutSnippet() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About <span className="text-gold">Khel Setu</span> Foundation
            </h2>
            <div className="w-20 h-1 bg-crimson mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {/* PLACEHOLDER: Replace with actual about text */}
              &ldquo;Khel Setu&rdquo; means &ldquo;Bridge of Sports.&rdquo; We
              believe that sports have the power to transform lives, bridge
              divides, and create pathways to a brighter future. Our foundation
              works tirelessly to bring sporting opportunities to every corner of
              India.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {/* PLACEHOLDER: Replace with more about text */}
              From grassroots football programs to athlete scholarships, we are
              building a movement that puts sports at the heart of community
              development and youth empowerment.
            </p>
            <Link
              href="/about"
              className="text-gold font-semibold text-lg hover:text-gold-light transition-colors inline-flex items-center gap-2"
            >
              Know More →
            </Link>
          </div>
          <div className="bg-navy-light rounded-2xl h-80 flex items-center justify-center">
            {/* PLACEHOLDER: Replace with actual image */}
            <span className="text-gray-500 text-sm">
              [Image placeholder — Foundation team / sports event]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── STORIES / TESTIMONIALS ───────── */
function StoriesSection() {
  const stories = [
    {
      title: "From Village Ground to State Team",
      category: "Athlete Story",
      excerpt:
        "A young footballer from rural India gets the training and support to represent their state.",
    },
    {
      title: "Community Cup Brings a Town Together",
      category: "Community",
      excerpt:
        "An annual sports tournament becomes the highlight of a small town, uniting people across all ages.",
    },
    {
      title: "Scholarship Changes Everything",
      category: "Education",
      excerpt:
        "With financial backing, a talented athlete balances studies and sport to build a complete future.",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Impact Stories
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories of real impact — lives changed through the power of
            sports.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* PLACEHOLDER: Replace with actual story image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  [Story image placeholder]
                </span>
              </div>
              <div className="p-6">
                <span className="text-crimson text-xs font-bold uppercase tracking-wider">
                  {story.category}
                </span>
                <h3 className="text-lg font-bold text-navy mt-2 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm">{story.excerpt}</p>
                <Link
                  href="/stories"
                  className="text-gold font-semibold text-sm mt-4 inline-block hover:text-gold-dark transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/stories"
            className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors duration-200"
          >
            All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA SECTION ───────── */
function CTASection() {
  return (
    <section className="py-16 bg-gold">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Join the Movement
        </h2>
        <p className="text-navy-light text-lg mb-8">
          {/* PLACEHOLDER */}
          Whether you want to volunteer, donate, or partner with us — there are
          many ways to make a difference.
        </p>
        <Link
          href="/contact"
          className="bg-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-navy-dark transition-colors duration-200"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

/* ───────── HOME PAGE ───────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactNumbers />
      <AreasOfWork />
      <AboutSnippet />
      <StoriesSection />
      <CTASection />
    </>
  );
}
