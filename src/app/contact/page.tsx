"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Set reply-to and dynamic subject
    const email = data.get("Email") as string;
    const subject = data.get("Subject") as string;
    const name = data.get("Name") as string;
    data.set("_replyto", email);
    data.set("_subject", `KhelSetu Contact: ${subject} — from ${name}`);

    try {
      const res = await fetch(siteConfig.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

              {/* Success Banner */}
              {status === "success" && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="ml-auto text-green-600 hover:text-green-800"
                    aria-label="Dismiss"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Error Banner */}
              {status === "error" && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-red-600 text-xl">!</span>
                  <div>
                    <p className="text-red-800 font-semibold">Something went wrong.</p>
                    <p className="text-red-700 text-sm">Please try again or email us directly.</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="ml-auto text-red-600 hover:text-red-800"
                    aria-label="Dismiss"
                  >
                    ✕
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New KhelSetu Contact Form Submission" />
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
                    name="Name"
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
                    name="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                  <input type="hidden" name="_replyto" id="replyto" />
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
                    name="Subject"
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
                    name="Message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-navy text-white py-3 rounded-lg font-bold text-lg hover:bg-navy-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
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
                      {siteConfig.contact.address.line1}
                      <br />
                      {siteConfig.contact.address.line2}
                      <br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pin}
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
                      <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gold transition-colors">
                        {siteConfig.contact.phone}
                      </a>
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
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors">
                        {siteConfig.contact.email}
                      </a>
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
                      {siteConfig.contact.hours.weekdays}
                      <br />
                      {siteConfig.contact.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.097!2d75.833!3d26.912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQzLjIiTiA3NcKwNDknNTguOCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Khel Setu Foundation Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
