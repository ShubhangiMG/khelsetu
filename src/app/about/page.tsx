import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig, projects as projectsData } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Khel Setu Foundation",
  description:
    "Learn about Khel Setu Foundation — born from a belief that sports can heal what society struggles to fix. Founded by Abhishek Gupta.",
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
            It did not begin with a grand vision. It began with a question.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="relative bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-gray-100 text-center">
              <span className="text-crimson font-semibold text-sm uppercase tracking-widest">
                Our Mission
              </span>
              <div className="w-12 h-1 bg-gold mx-auto mt-4 mb-6" />
              <p className="font-[var(--font-playfair)] text-xl md:text-2xl text-navy leading-relaxed mb-6">
                &ldquo;{siteConfig.mission}&rdquo;
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                {siteConfig.missionChallenges}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <p className="font-[var(--font-playfair)] italic text-3xl md:text-4xl text-navy leading-snug">
              &ldquo;What if sports could heal what society struggles to fix?&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin Story — Part 1 */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-navy/5 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/images/founder.jpg"
                  alt={`${siteConfig.founder.name} — ${siteConfig.founder.title}, ${siteConfig.name}`}
                  width={800}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-crimson font-semibold text-sm uppercase tracking-widest">The Beginning</span>
                <h2 className="text-3xl font-bold text-navy mt-2 mb-4">Where It All Started</h2>
                <div className="w-16 h-1 bg-crimson mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  During his work in mental health and community outreach, <strong className="text-navy">{siteConfig.founder.name}</strong>, a student of psychology, had already conducted <strong className="text-navy">{siteConfig.stats.campaigns} mental health awareness campaigns</strong> across schools, colleges, and communities over four years.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  He had seen stress, anxiety, broken confidence — and increasingly, a silent rise in substance abuse among youth.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  But one experience changed everything.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Experiment */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">The Turning Point</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">The Experiment</h2>
              <div className="w-20 h-1 bg-crimson mx-auto" />
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Abhishek visited rehabilitation centres — spaces filled with stories of pain, addiction, and lost potential. Instead of only conversations and counseling, he introduced something different: <strong className="text-gold">sports sessions for the inmates.</strong>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                {[
                  { before: "Hesitation", after: "Participation" },
                  { before: "Silence", after: "Energy" },
                  { before: "Pain", after: "Smiles" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-2xl p-8 text-center">
                    <p className="text-gray-400 text-sm line-through mb-2">{item.before}</p>
                    <p className="text-xl font-bold text-gold">{item.after}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                For a brief moment, those battling addiction were not patients — <em className="text-white">they were players again.</em>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <blockquote className="border-l-4 border-gold pl-6 my-12">
                <p className="font-[var(--font-playfair)] italic text-2xl md:text-3xl text-white leading-snug">
                  &ldquo;Sometimes, what people need is not just treatment — but a purpose to live again.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Movement */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold/5 via-transparent to-navy/5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-crimson font-semibold text-sm uppercase tracking-widest">From Experiment to Movement</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">#ChooseSportsNotDrugs</h2>
              <div className="w-20 h-1 bg-gold mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Deeply inspired since childhood by A. P. J. Abdul Kalam, Abhishek always believed that real change comes from action rooted in compassion. His life philosophy echoes the powerful lines:
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="bg-cream rounded-2xl p-10 my-8 text-center">
              <p className="font-[var(--font-playfair)] italic text-xl md:text-2xl text-navy leading-relaxed">
                &ldquo;हो गई है पीर पर्वत सी, पिघलनी चाहिए,<br />
                इस हिमालय से कोई गंगा निकलनी चाहिए।&rdquo;
              </p>
              <p className="text-gold font-semibold mt-4 text-sm uppercase tracking-wider">
                Pain must transform into purpose.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              What started as a small campaign soon became a voice of change. From local communities to larger platforms, the message resonated. Youth connected. Communities responded. <strong className="text-navy">A movement was born.</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Bigger Problem */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-crimson font-semibold text-sm uppercase tracking-widest">The Realization</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">The Problem Was Bigger</h2>
              <div className="w-20 h-1 bg-gold mx-auto mb-8" />
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Abhishek knew the problem was bigger than drugs. He had seen:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { issue: "Youth lacking life skills", icon: "🎯" },
              { issue: "Students struggling with mental health", icon: "🧠" },
              { issue: "Women needing empowerment", icon: "💪" },
              { issue: "Communities losing reading culture", icon: "📚" },
              { issue: "Elderly feeling isolated", icon: "🤝" },
              { issue: "Substance abuse among youth", icon: "🚫" },
            ].map((item, i) => (
              <ScrollReveal key={item.issue} direction="up" delay={i * 80}>
                <div className="card-hover bg-white rounded-2xl p-8 text-center group">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                  <p className="text-navy font-semibold">{item.issue}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={400}>
            <p className="text-center text-gray-600 text-lg mt-12 max-w-2xl mx-auto">
              He realized that real change cannot come from one solution — <strong className="text-navy">it needs a system.</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Bridge */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">And So</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-8 font-[var(--font-playfair)]">
              Khel Setu Was Born
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-10" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="text-2xl md:text-3xl text-gold font-[var(--font-playfair)] italic mb-12">
              A bridge.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { from: "Problems", to: "Solutions" },
              { from: "Youth", to: "Opportunity" },
              { from: "Pain", to: "Purpose" },
            ].map((item, i) => (
              <ScrollReveal key={item.from} direction="up" delay={200 + i * 100}>
                <div className="glass rounded-2xl p-8 text-center">
                  <p className="text-gray-400 text-sm">{item.from}</p>
                  <div className="text-gold text-2xl my-2">↕</div>
                  <p className="text-white text-lg font-bold">{item.to}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Khel Setu Builds */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-crimson font-semibold text-sm uppercase tracking-widest">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">What We Build</h2>
              <div className="w-20 h-1 bg-gold mx-auto mb-6" />
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Khel Setu is not just about sports. It is about building a system for change.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projectsData.map((item, i) => (
              <ScrollReveal key={item.name} direction="up" delay={i * 80}>
                <Link href={item.href} className="card-hover bg-cream rounded-2xl p-8 text-center block group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">{item.subtitle}</p>
                  <p className="text-navy text-xl font-bold">through {item.name}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">{siteConfig.founder.name}</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="w-40 h-40 rounded-full placeholder-gradient mx-auto mb-8 flex items-center justify-center border-4 border-gold/20">
              <span className="text-gray-400 text-xs">[Photo]</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A student of psychology with a zeal for solving real problems of society, Abhishek&apos;s journey is not just about starting an organization — it is about <strong className="text-white">turning empathy into action.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              His passion for social impact and his belief in community strength continue to inspire a growing movement.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <blockquote className="border-l-4 border-gold pl-6 text-left inline-block">
              <p className="font-[var(--font-playfair)] italic text-xl md:text-2xl text-white leading-snug">
                &ldquo;Khel Setu is not just a foundation.<br />
                It is a belief — that when given the right direction, every life can rise again.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
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
