import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Khel Setu Foundation",
  description: "Privacy policy for Khel Setu Foundation website.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <div className="w-20 h-1 bg-crimson mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
          {/* PLACEHOLDER: Replace with actual privacy policy content */}
          <p className="text-gray-500 italic mb-8">
            Last updated: [Date placeholder]
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you visit our website or contact us through our forms, we may
            collect personal information such as your name, email address, phone
            number, and any other information you voluntarily provide.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the information collected to respond to your inquiries,
            provide information about our programs and services, send updates
            about our foundation activities (with your consent), and improve our
            website experience.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            3. Data Protection
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We take reasonable measures to protect your personal information from
            unauthorized access, use, or disclosure. We do not sell, trade, or
            rent your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            4. Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website may use cookies to enhance your browsing experience.
            You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            5. Third-Party Links
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website may contain links to external sites. We are not
            responsible for the privacy practices of other websites.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            6. Contact
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at [email@khelsetu.org].
          </p>
        </div>
      </section>
    </>
  );
}
