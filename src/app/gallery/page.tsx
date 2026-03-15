import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Khel Setu Foundation",
  description:
    "Photos and moments from Khel Setu Foundation's programs, events, and community impact.",
};

// PLACEHOLDER: Replace with actual gallery categories and images
const galleryCategories = [
  {
    title: "Project Mukti",
    description: "Women empowerment through sports",
    images: [
      { alt: "Mukti event 1", placeholder: true },
      { alt: "Mukti event 2", placeholder: true },
      { alt: "Mukti event 3", placeholder: true },
      { alt: "Mukti event 4", placeholder: true },
    ],
  },
  {
    title: "Project PlayFree",
    description: "Sports recognition and grassroots tournaments",
    images: [
      { alt: "PlayFree event 1", placeholder: true },
      { alt: "PlayFree event 2", placeholder: true },
      { alt: "PlayFree event 3", placeholder: true },
      { alt: "PlayFree event 4", placeholder: true },
    ],
  },
  {
    title: "Community Events",
    description: "Tournaments, sports days, and celebrations",
    images: [
      { alt: "Community event 1", placeholder: true },
      { alt: "Community event 2", placeholder: true },
      { alt: "Community event 3", placeholder: true },
      { alt: "Community event 4", placeholder: true },
    ],
  },
  {
    title: "Training & Coaching",
    description: "Behind the scenes of athlete development",
    images: [
      { alt: "Training 1", placeholder: true },
      { alt: "Training 2", placeholder: true },
      { alt: "Training 3", placeholder: true },
      { alt: "Training 4", placeholder: true },
    ],
  },
];

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

      {/* Gallery Sections */}
      {galleryCategories.map((category, catIndex) => (
        <section
          key={category.title}
          className={`py-16 ${catIndex % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                {category.title}
              </h2>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider">
                {category.description}
              </p>
              <div className="w-12 h-1 bg-crimson mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.images.map((image, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {/* PLACEHOLDER: Replace with actual Image components */}
                  <span className="text-gray-400 text-xs text-center px-2">
                    [Photo: {image.alt}]
                  </span>
                </div>
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
            {/* PLACEHOLDER: Replace # with actual social URLs */}
            {["Facebook", "Instagram", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-white hover:text-gold transition-colors text-sm font-medium"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
