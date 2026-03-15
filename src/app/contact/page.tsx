import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Khel Setu Foundation",
  description:
    "Get in touch with Khel Setu Foundation. Reach out to volunteer, partner, donate, or learn more about our programs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out and let&apos;s make a
            difference together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send us a message
              </h2>
              {/*
                FORM NOTE: This form uses Formspree for handling submissions
                without a backend. Replace "YOUR_FORMSPREE_ID" with your
                actual Formspree form ID (create one free at formspree.io),
                or swap with any other form handler (Netlify Forms, etc.)
              */}
              <form
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate">Donate</option>
                    <option value="partner">Partnership</option>
                    <option value="media">Media</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-white py-3 rounded-lg font-bold text-lg hover:bg-navy-light transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Office Address</h3>
                    <p className="text-gray-600 mt-1">
                      {/* PLACEHOLDER: Replace with actual address */}
                      [Address Line 1]
                      <br />
                      [Address Line 2]
                      <br />
                      [City, State, PIN]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      {/* PLACEHOLDER: Replace with actual phone */}
                      8094939595
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Email</h3>
                    <p className="text-gray-600 mt-1">
                      {/* PLACEHOLDER: Replace with actual email */}
                      khelsetu.org@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Working Hours</h3>
                    <p className="text-gray-600 mt-1">
                      {/* PLACEHOLDER */}
                      Monday – Saturday: 10:00 AM – 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                {/* PLACEHOLDER: Replace with Google Maps embed */}
                <span className="text-gray-400 text-sm">
                  [Google Maps embed placeholder]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
