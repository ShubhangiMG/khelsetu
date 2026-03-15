import Image from "next/image";
import Link from "next/link";

/* ───────── HERO SECTION ───────── */
function HeroSection() {
  const heroImages = ["/images/founder.jpg", "/images/founder2.jpg", "/images/launch.jpg"];

  return (
    <section className="relative bg-navy min-h-[100vh] flex items-center overflow-hidden">
      {/* Sliding background images */}
      <div
        className="absolute inset-0 flex animate-slide"
        style={{ width: `${heroImages.length * 50}%` }}
      >
        {/* Double the images for seamless loop */}
        {[...heroImages, ...heroImages].map((src, i) => (
          <div
            key={i}
            className="relative shrink-0"
            style={{ width: `${100 / heroImages.length}%` }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={i < heroImages.length}
            />
          </div>
        ))}
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p
          className="font-[var(--font-playfair)] font-black text-5xl md:text-2xl tracking-wider mb-8 text-transparent bg-clip-text leading-tight"
          style={{
            // backgroundImage: "url('/images/tricolor.png')",
            backgroundColor: "#FFFFFF",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1px rgba(197, 165, 90, 0.3)",
          }}
        >
          #ChooseSportsNotDrugs
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6 leading-tight">
          Bridging Sports & Opportunity
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Empowering communities through sports, knowledge and awareness.
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

/* ───────── OUR PROJECTS ───────── */
function ProjectsPreview() {
  const projects = [
    {
      icon: "⚽",
      title: "Project PlayFree",
      subtitle: "Sports Recognition",
      desc: "Giving recognition and platforms to grassroots athletes who deserve to be seen, celebrated, and supported in their sporting journey.",
      href: "/projects#playfree",
    },
    {
      icon: "🏃",
      title: "Project Endorphin",
      subtitle: "Fitness & Wellbeing",
      desc: "Promoting fitness, mental health, and overall wellbeing through structured sports activities and community wellness programs.",
      href: "/projects#endorphin",
    },
    {
      icon: "💪",
      title: "Project Mukti",
      subtitle: "Women Empowerment",
      desc: "Empowering women through sports — breaking barriers, building confidence, and creating pathways to independence and self-reliance.",
      href: "/projects#mukti",
    },
    {
      icon: "🔄",
      title: "Project Second Innings",
      subtitle: "Sports Beyond Retirement",
      desc: "Helping retired and senior athletes find purpose, stay active, and contribute to sports development through coaching and mentorship.",
      href: "/projects#second-innings",
    },
    {
      icon: "📚",
      title: "Project BookRise",
      subtitle: "Education Through Sports",
      desc: "Bridging education and athletics — ensuring young athletes have access to learning resources and academic support alongside their training.",
      href: "/projects#bookrise",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* PLACEHOLDER: Replace with actual description */}
            Focused initiatives driving real change through sports and community
            empowerment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="bg-cream rounded-xl p-10 hover:shadow-lg transition-shadow duration-300 border border-gray-100 block"
            >
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold text-navy mb-1">
                {project.title}
              </h3>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                {project.subtitle}
              </p>
              <p className="text-gray-600">{project.desc}</p>
              <span className="text-navy font-semibold text-sm mt-4 inline-block">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors duration-200"
          >
            Explore All Projects
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

/* ───────── OUR IMPACT PREVIEW ───────── */
function ImpactPreview() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Impact
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* PLACEHOLDER: Replace with actual description */}
            From grassroots fields to national stages — see how we are making a
            difference across communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Lives Transformed Through Sport",
              desc: "Athletes from underprivileged backgrounds gaining access to professional training and competitive platforms.",
            },
            {
              title: "Communities United",
              desc: "Sports events bringing together people across ages, genders, and backgrounds to build stronger communities.",
            },
            {
              title: "Women Breaking Barriers",
              desc: "Through Project Mukti, women are discovering confidence, leadership, and independence through sports.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* PLACEHOLDER: Replace with actual impact image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  [Impact image placeholder]
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/impact"
            className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors duration-200"
          >
            See Our Full Impact
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
      <ProjectsPreview />
      <AboutSnippet />
      <ImpactPreview />
      <CTASection />
    </>
  );
}
