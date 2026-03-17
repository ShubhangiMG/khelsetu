import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { projects as projectsData } from "@/lib/siteConfig";
import { getProjectImagesWithSize, type ImageInfo } from "@/lib/getImages";

export const metadata: Metadata = {
  title: "Our Projects — Khel Setu Foundation",
  description:
    "Explore Khel Setu Foundation's six flagship initiatives: PlayFree, Endorphin, Life Ready, ReadRise, Mukti, and Second Innings.",
};

/* Build-time image scanning — drop new photos into the folder and rebuild */
const projectImages: Record<string, ImageInfo[]> = {
  playfree: getProjectImagesWithSize("playfree"),
  endorphin: getProjectImagesWithSize("endorphin"),
  lifeready: getProjectImagesWithSize("lifeready"),
  readrise: getProjectImagesWithSize("readrise"),
  mukti: getProjectImagesWithSize("mukti"),
  "second-innings": getProjectImagesWithSize("second-innings"),
};

function ProjectImageGrid({ folder, icon, name }: { folder: string; icon: string; name: string }) {
  const images = projectImages[folder] || [];

  if (images.length === 0) {
    return (
      <div className="lg:sticky lg:top-36 space-y-4">
        <div className="placeholder-gradient rounded-2xl h-72 flex flex-col items-center justify-center">
          <span className="text-7xl mb-3">{icon}</span>
          <span className="text-gray-400 text-sm">Photos coming soon</span>
        </div>
      </div>
    );
  }

  const [main, ...rest] = images;

  return (
    <div className="lg:sticky lg:top-36 space-y-4">
      <div className="rounded-2xl overflow-hidden h-64 relative">
        <Image
          src={main.src}
          alt={`${name} project`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {rest.slice(0, 4).map((img, i) => (
            <div key={img.src} className="rounded-xl overflow-hidden h-40 relative">
              <Image
                src={img.src}
                alt={`${name} photo ${i + 2}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The foundation operates through six flagship initiatives — each addressing a critical social challenge through education, awareness, and community engagement.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {projectsData.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-navy border border-gray-200 hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all whitespace-nowrap shrink-0"
              >
                <span>{p.icon}</span>
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────── */}
      {/* 1. PlayFree – Sports Against Drugs */}
      {/* ──────────────────────────────────────────────────── */}
      <section id="playfree" className="scroll-mt-28 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                  Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-2">
                  PlayFree
                </h2>
                <p className="text-gold font-semibold text-lg mb-6">
                  Sports Against Drugs
                </p>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Project PlayFree is a youth engagement initiative that uses sports as a preventive strategy against drug abuse and substance dependency among community youth aged 18–30. Rajasthan, like many regions in India, is witnessing increasing challenges related to drug use among young people. PlayFree aims to create healthy alternatives, discipline, and purpose through structured sports engagement and awareness programs.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  The project promotes the idea that sports can function as social therapy, providing youth with a sense of identity, teamwork, and physical wellbeing. Through local tournaments, sports clubs, and awareness campaigns, PlayFree encourages young people to choose fitness, teamwork, and achievement instead of addiction.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  The program works through community-level engagement, collaborating with local sports grounds, youth groups, colleges, and civil society organisations. Along with sports events, the initiative also integrates drug awareness education, mentorship, and leadership opportunities so that young participants become advocates for a drug-free society.
                </p>

                {/* Subcomponents */}
                <h3 className="text-navy font-bold text-lg mb-4">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Community Sports Leagues (football, cricket, kabaddi, athletics)",
                    "Anti-Drug Awareness Workshops",
                    "Youth Leadership & Sports Ambassador Program",
                    "Fitness & Wellness Camps",
                    "Sports Infrastructure Support in underserved areas",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <ProjectImageGrid folder="playfree" icon="⚽" name="PlayFree" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* ──────────────────────────────────────────────────── */}
      {/* 2. Endorphin – Mental Wellness Movement */}
      {/* ──────────────────────────────────────────────────── */}
      <section id="endorphin" className="scroll-mt-28 py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <ProjectImageGrid folder="endorphin" icon="🏃" name="Endorphin" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                  Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-2">
                  Endorphin
                </h2>
                <p className="text-gold font-semibold text-lg mb-6">
                  Mental Wellness Movement
                </p>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Project Endorphin focuses on improving mental health awareness and emotional resilience among youth and communities in Rajasthan. Mental health challenges such as stress, anxiety, and depression are increasingly affecting young people, yet awareness and access to support systems remain limited.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Endorphin works to build a community-based mental wellness ecosystem, combining awareness, preventive education, and practical wellbeing techniques. The project promotes simple but effective practices such as mindfulness, yoga, emotional literacy, and stress management to help individuals maintain psychological wellbeing.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  The initiative works through schools, colleges, and community spaces, ensuring that mental wellness becomes a mainstream social conversation rather than a taboo topic. Through workshops, support groups, and educational campaigns, Endorphin aims to build a generation that is emotionally resilient and aware of mental health needs.
                </p>

                <h3 className="text-navy font-bold text-lg mb-4">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Mental Health Awareness Sessions in Schools and Colleges",
                    "Community Mindfulness & Yoga Programs",
                    "Emotional Resilience Workshops",
                    "Mental Health Resource Distribution",
                    "Public Dialogues and Awareness Campaigns",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* ──────────────────────────────────────────────────── */}
      {/* 3. Life Ready – Life Skills for Youth */}
      {/* ──────────────────────────────────────────────────── */}
      <section id="life-ready" className="scroll-mt-28 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                  Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-2">
                  Life Ready
                </h2>
                <p className="text-gold font-semibold text-lg mb-6">
                  Life Skills for Youth
                </p>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Life Ready is an educational initiative designed to equip school and college students with essential life skills that traditional education systems often overlook. While academic learning remains important, many young people lack practical skills needed for navigating modern life, including decision-making, communication, emotional intelligence, and civic responsibility.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Life Ready aims to bridge this gap by introducing structured life skills programs in schools and colleges across Rajasthan. The project focuses on helping students develop the confidence, awareness, and practical competencies necessary to thrive both personally and professionally.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Through interactive workshops, group activities, and experiential learning modules, Life Ready encourages students to become responsible citizens, effective communicators, and resilient individuals capable of handling real-world challenges.
                </p>

                <h3 className="text-navy font-bold text-lg mb-4">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Communication and Leadership Training",
                    "Financial Literacy and Career Awareness",
                    "Civic Sense and Responsible Citizenship",
                    "Emotional Intelligence and Conflict Resolution",
                    "Digital Literacy and Online Safety",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <ProjectImageGrid folder="lifeready" icon="🎯" name="Life Ready" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* ──────────────────────────────────────────────────── */}
      {/* 4. ReadRise – Reading and Library Development */}
      {/* ──────────────────────────────────────────────────── */}
      <section id="readrise" className="scroll-mt-28 py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <ProjectImageGrid folder="readrise" icon="📚" name="ReadRise" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                  Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-2">
                  ReadRise
                </h2>
                <p className="text-gold font-semibold text-lg mb-6">
                  Reading &amp; Library Development
                </p>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  ReadRise is an initiative aimed at promoting reading culture and strengthening library infrastructure, particularly in underserved communities. In many areas, students lack access to books, libraries, and reading environments that stimulate curiosity and learning.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  ReadRise seeks to ensure that knowledge reaches the last mile by developing community libraries, supporting school libraries, and encouraging reading habits among children and youth. The project emphasises that reading is not only an academic activity but a foundation for critical thinking, creativity, and lifelong learning.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Through book donation drives, library development, and reading engagement programs, ReadRise aims to create spaces where young people can discover knowledge beyond textbooks.
                </p>

                <h3 className="text-navy font-bold text-lg mb-4">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Community Library Development",
                    "School Library Strengthening Programs",
                    "Reading Clubs and Book Circles",
                    "Book Donation and Distribution Campaigns",
                    "Mobile Libraries for Rural Areas",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* ──────────────────────────────────────────────────── */}
      {/* 5. Mukti – Women Empowerment */}
      {/* ──────────────────────────────────────────────────── */}
      <section id="mukti" className="scroll-mt-28 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                  Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-2">
                  Mukti
                </h2>
                <p className="text-gold font-semibold text-lg mb-6">
                  Women Empowerment Through Knowledge
                </p>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Project Mukti aims to empower women through knowledge, awareness, and skill development, enabling them to participate confidently in social, economic, and community life. In many parts of Rajasthan, women face barriers related to education, economic independence, and social awareness.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Mukti focuses on strengthening women&apos;s capacity by providing educational resources, awareness programs, and practical skills training. The project works to build confidence, leadership, and financial independence among women while encouraging them to become community leaders and change-makers.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  By creating supportive learning environments and connecting women to opportunities, Mukti aims to contribute to gender equality and social progress.
                </p>

                <h3 className="text-navy font-bold text-lg mb-4">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Awareness Programs on Rights and Legal Literacy",
                    "Skill Development Workshops",
                    "Financial Literacy for Women",
                    "Leadership and Community Participation Training",
                    "Health and Wellbeing Awareness Sessions",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <ProjectImageGrid folder="mukti" icon="💪" name="Mukti" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px" />

      {/* ──────────────────────────────────────────────────── */}
      {/* 6. Second Innings – Elderly Welfare */}
      {/* ──────────────────────────────────────────────────── */}
      <section id="second-innings" className="scroll-mt-28 py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <ProjectImageGrid folder="second-innings" icon="🔄" name="Second Innings" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-crimson font-bold text-sm uppercase tracking-wider">
                  Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-2">
                  Second Innings
                </h2>
                <p className="text-gold font-semibold text-lg mb-6">
                  Elderly Welfare &amp; Dignity
                </p>
                <div className="w-16 h-1 bg-gold mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Second Innings is a program dedicated to improving the wellbeing and dignity of senior citizens. As societies modernize, many elderly individuals face social isolation, lack of engagement, and limited support systems.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  Second Innings aims to create opportunities for elderly citizens to remain active, respected, and socially connected. Through community gatherings, health awareness initiatives, and volunteer engagement programs, the project encourages intergenerational interaction and promotes respect for senior citizens.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  The program recognizes that elderly individuals possess valuable life experience and wisdom that can benefit younger generations.
                </p>

                <h3 className="text-navy font-bold text-lg mb-4">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Senior Citizen Community Clubs",
                    "Health and Wellness Camps",
                    "Intergenerational Dialogue Programs",
                    "Legal Awareness for Elderly Rights",
                    "Volunteer Support Networks",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-gold via-gold-light to-gold overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-navy/5 translate-x-1/3 translate-y-1/3" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4 font-[var(--font-playfair)]">
              Want to support our projects?
            </h2>
            <p className="text-navy/70 text-lg mb-8">
              Partner with us, volunteer, or donate to help us expand our reach and impact.
            </p>
            <Link
              href="/contact"
              className="btn-shine bg-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-navy-dark transition-all duration-300 hover:scale-105 inline-block shadow-2xl shadow-navy/20"
            >
              Get Involved
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
