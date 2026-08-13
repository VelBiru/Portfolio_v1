"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0B0D0E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00E599] mb-2">
              LET'S CONNECT
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-[#00E599] mx-auto rounded-full shadow-[0_0_10px_#00E599]" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  Have a project in mind? <br />
                  <span className="text-[#00E599]">Let's build something great.</span>
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  Whether you need a full UI/UX design suite, a custom interactive web application, or a frontend refactoring, feel free to reach out. I am open to freelance work, full-time roles, and collaborative projects.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-[#14171A] border border-white/10 p-5 rounded-2xl">
                  <div className="p-3 bg-[#0B0D0E] rounded-xl text-[#00E599] border border-white/5">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-heading text-xs text-white/50 uppercase tracking-wider">Email Address</p>
                    <a
                      href="mailto:aville.malintad@example.com"
                      className="font-body text-base font-semibold text-white hover:text-[#00E599] transition-colors"
                    >
                      aville.malintad@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#14171A] border border-white/10 p-5 rounded-2xl">
                  <div className="p-3 bg-[#0B0D0E] rounded-xl text-[#00E599] border border-white/5">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="font-heading text-xs text-white/50 uppercase tracking-wider">Location</p>
                    <p className="font-body text-base font-semibold text-white">
                      Available Worldwide / Remote
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-[#14171A] border border-white/10 rounded-2xl p-8 relative shadow-2xl">
                {formSubmitted ? (
                  <div className="py-16 text-center space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 bg-[#00E599]/20 text-[#00E599] rounded-full flex items-center justify-center mx-auto border border-[#00E599]/40">
                      <CheckCircle size={36} />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="font-body text-sm text-white/70 max-w-md mx-auto">
                      Thank you for reaching out. I will review your message and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-heading text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E599] focus:ring-1 focus:ring-[#00E599] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-heading text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. alex@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E599] focus:ring-1 focus:ring-[#00E599] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Project Inquiry / Job Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E599] focus:ring-1 focus:ring-[#00E599] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E599] focus:ring-1 focus:ring-[#00E599] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#00E599] hover:bg-[#00C281] text-black font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,229,153,0.4)] flex items-center justify-center gap-2"
                    >
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
