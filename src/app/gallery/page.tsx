import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { getProjectImages, getGalleryImages } from "@/lib/getImages";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gallery — Khel Setu Foundation",
  description:
    "Photos and moments from Khel Setu Foundation's programs, events, and community impact.",
};

/* Build-time: scan all image folders automatically */
const galleryCategories = [
  { title: "PlayFree", description: "Sports Against Drugs", folder: "playfree", images: getProjectImages("playfree") },
  { title: "Endorphin", description: "Mental Wellness Movement", folder: "endorphin", images: getProjectImages("endorphin") },
  { title: "Life Ready", description: "Life Skills for Youth", folder: "lifeready", images: getProjectImages("lifeready") },
  { title: "ReadRise", description: "Reading & Library Development", folder: "readrise", images: getProjectImages("readrise") },
  { title: "Mukti", description: "Women Empowerment", folder: "mukti", images: getProjectImages("mukti") },
  { title: "Second Innings", description: "Elderly Welfare", folder: "second-innings", images: getProjectImages("second-innings") },
  { title: "Community Moments", description: "Events, gatherings, and celebrations", folder: "gallery", images: getGalleryImages() },
].filter((c) => c.images.length > 0);

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Gallery</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Moments captured from the field — the joy, the grit, the spirit.
          </p>
        </div>
      </section>

      {/* Gallery Sections — auto-populated from image folders */}
      {galleryCategories.map((category, catIndex) => (
        <section
          key={category.folder}
          className={`py-20 ${catIndex % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="mb-10">
                <span className="text-crimson font-semibold text-sm uppercase tracking-widest">
                  {category.description}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mt-2 mb-2">
                  {category.title}
                </h2>
                <div className="w-12 h-1 bg-gold mt-3" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.images.map((src, i) => (
                <ScrollReveal key={src} direction="up" delay={i * 80}>
                  <div className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src={src}
                      alt={`${category.title} photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Note */}
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-300 text-lg">
            Want to see more or share your photos from our events?
          </p>
          <p className="text-gold font-semibold mt-2">
            Follow us on social media for the latest updates.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            {[
              { name: "Facebook", url: siteConfig.social.facebook },
              { name: "Instagram", url: siteConfig.social.instagram },
              { name: "Twitter", url: siteConfig.social.twitter },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="text-white hover:text-gold transition-colors text-sm font-medium"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
