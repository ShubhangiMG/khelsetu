import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import { siteConfig, projects as projectsData } from "@/lib/siteConfig";

/* ──────────────────── WAVE DIVIDER SVG ──────────────────── */
function WaveDivider({ color = "#f4d09a", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? "top-[-1px] rotate-180" : "bottom-[-1px]"}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[80px]">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={color}
          opacity="0.25"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill={color}
          opacity="0.5"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ──────────────────── FLOATING DECORATIONS ──────────────────── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gold circle */}
      <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full border-2 border-gold/20 animate-float" />
      {/* Crimson dot */}
      <div className="absolute top-[30%] right-[12%] w-4 h-4 rounded-full bg-crimson/30 animate-float-slow" />
      {/* Navy ring */}
      <div className="absolute bottom-[20%] left-[15%] w-12 h-12 rounded-full border border-gold/15 animate-pulse-glow" />
      {/* Gold diamond */}
      <div className="absolute top-[60%] right-[8%] w-8 h-8 border border-gold/20 rotate-45 animate-float" />
      {/* Small dots scattered */}
      <div className="absolute top-[45%] left-[25%] w-2 h-2 rounded-full bg-gold/25 animate-float-slow" />
      <div className="absolute top-[75%] right-[25%] w-3 h-3 rounded-full bg-white/10 animate-float" />
      {/* Large faded circle */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-gold/10 animate-spin-slow" />
    </div>
  );
}

/* ──────────────────── HERO SECTION ──────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/readrise/IMG-20250318-WA0016.jpg"
          alt="Khel Setu Foundation event"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy/60" />

      {/* Gradient mesh overlay for depth */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      {/* Floating decorative elements */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="font-[var(--font-playfair)] italic text-6xl md:text-7xl lg:text-4xl font-bold mb-8 leading-[1.1]">
          <span className="text-gradient">Building a Stronger India - </span>{" "}
          <span className="text-white">Mind, Body, and Society.</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl mb-4 leading-relaxed max-w-lg mx-auto font-[var(--font-playfair)] italic">
          हो गई है पीर पर्वत सी, पिघलनी चाहिए<br />
          इस हिमालय से कोई गंगा निकलनी चाहिए
        </p>

        <p className="text-gold italic font-semibold text-lg md:text-xl tracking-wide mb-10">
          #ChooseSportsNotDrugs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="btn-shine bg-gold text-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:scale-105"
          >
            Get Involved
          </Link>
          <Link
            href="/projects"
            className="glass text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            Our Initiatives →
          </Link>
        </div>
      </div>

      {/* Bottom wave into next section */}
      <WaveDivider color="#FAF8F5" />
    </section>
  );
}

/* ──────────────────── IMPACT NUMBERS ──────────────────── */
function ImpactNumbers() {
  const stats = [
    { number: siteConfig.stats.campaigns, label: "Awareness Campaigns", icon: "📢" },
    { number: siteConfig.stats.projects, label: "Active Projects", icon: "🎯" },
    { number: siteConfig.stats.events, label: "Community Events", icon: "🤝" },
    { number: siteConfig.stats.livesTouched, label: "Lives Touched", icon: "❤️" },
  ];

  return (
    <section className="relative bg-cream py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
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
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────── OUR PROJECTS ──────────────────── */
function ProjectsPreview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-navy/5 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-crimson font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-4">
              Our Projects
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focused initiatives driving real change through sports and community
              empowerment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, i) => (
            <ScrollReveal key={project.fullName} direction="up" delay={i * 100}>
              <Link
                href={project.href}
                className={`card-hover relative bg-white rounded-2xl p-10 border border-gray-100 block overflow-hidden group`}
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-navy mb-1">
                    {project.fullName}
                  </h3>
                  <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{project.desc}</p>
                  <span className="inline-flex items-center gap-2 text-navy font-semibold text-sm mt-6 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={300}>
          <div className="text-center mt-14">
            <Link
              href="/projects"
              className="btn-shine bg-navy text-white px-10 py-4 rounded-full font-semibold hover:bg-navy-light transition-all duration-300 hover:scale-105 inline-block"
            >
              Explore All Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────── ABOUT SNIPPET ──────────────────── */
function AboutSnippet() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
      <FloatingShapes />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-crimson font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                About <span className="text-gradient">Khel Setu</span> Foundation
              </h2>
              <div className="w-20 h-1 bg-crimson mb-8" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Born from a powerful experiment — introducing sports in rehabilitation centres — {siteConfig.name} is the realization that sports can heal what society struggles to fix. Founded by {siteConfig.founder.name}, a psychology student who conducted {siteConfig.stats.campaigns} mental health campaigns.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                What started as the #ChooseSportsNotDrugs campaign has grown into a movement with six projects — building drug-free youth, stronger minds, empowered women, and dignified lives through the bridge of sports.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-10">
                <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-2">Our Mission</p>
                <p className="text-gray-200 text-base leading-relaxed italic">
                  &ldquo;{siteConfig.mission}&rdquo;
                </p>
              </div>
              <Link
                href="/about"
                className="btn-shine inline-flex items-center gap-3 bg-gold/10 border border-gold/30 text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold/20 transition-all duration-300 group"
              >
                Know More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="rounded-2xl h-66 relative overflow-hidden">
                <Image
                  src="/images/image.png"
                  alt="Khel Setu Foundation team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── CTA SECTION ──────────────────── */
function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gold via-gold-light to-gold overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-navy/5 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal direction="up">
          <span className="text-navy/60 font-semibold text-sm uppercase tracking-widest">
            Be The Change
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-4 mb-6 font-[var(--font-playfair)]">
            Join the Movement
          </h2>
          <p className="text-navy/70 text-xl mb-10 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or partner with us — there are
            many ways to make a difference.
          </p>
          <Link
            href="/contact"
            className="btn-shine bg-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-navy-dark transition-all duration-300 hover:scale-105 inline-block shadow-2xl shadow-navy/20"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────── HOME PAGE ──────────────────── */
/* ──────────────────── PARTNERS LOGO SLIDER ──────────────────── */
function PartnersSection() {
  const logos = [
    { src: "/images/logosPartner/logo1.png", alt: "Partner 1" },
    { src: "/images/logosPartner/logo2.png", alt: "Partner 2" },
    { src: "/images/logosPartner/logo3.png", alt: "Partner 3" },
    { src: "/images/logosPartner/logo4.png", alt: "Partner 4" },
    { src: "/images/logosPartner/logo5.png", alt: "Partner 5" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <span className="text-crimson font-semibold text-sm uppercase tracking-widest">
              Trusted By
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-2">
              Our Partners
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="hover:scale-110 transition-transform duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactNumbers />
      <ProjectsPreview />
      <AboutSnippet />
      <CTASection />
      <PartnersSection />
    </>
  );
}
