"use client";

import React from "react";
import { Layout, Monitor, Sparkles, Zap, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-[#00E599]" />,
      title: "Graphic & UI/UX Design",
      description: "Designing user-centered interface layouts, wireframes, visual systems, and brand visual identities from concept to high-fidelity mockups.",
      features: [
        "Figma Wireframing & Design Systems",
        "Mobile & Desktop Responsive UI",
        "Brand Identity & Graphic Assets",
        "Interactive Clickable Prototypes",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#00E599]" />,
      title: "Interactive Web Development",
      description: "Building fast, high-performance web applications with modern frontend frameworks, glassmorphism UI styling, and dynamic state logic.",
      features: [
        "React & Next.js App Router Architecture",
        "Tailwind CSS v4 & Custom Styling",
        "TypeScript Type-safe Integration",
        "API Integration & Dynamic Rendering",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#00E599]" />,
      title: "Frontend Motion & Interactions",
      description: "Enhancing user engagement with fluid micro-interactions, scroll-driven entrance reveals, hover effects, and crisp visual animations.",
      features: [
        "CSS & Framer Motion Animations",
        "Micro-Interactions & Hover Dynamics",
        "Glassmorphic & Dark Theme Aesthetics",
        "Cross-Browser Responsive Polish",
      ],
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00E599]" />,
      title: "Optimization & Audit",
      description: "Refactoring existing frontend codebases for enhanced loading speeds, accessibility compliance, visual polish, and clean component structure.",
      features: [
        "SEO Best Practices & Semantic HTML",
        "Performance Optimization",
        "Accessibility (a11y) Refactoring",
        "Clean Reusable Component Architecture",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-[#0B0D0E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00E599] mb-2">
              WHAT I CAN DO FOR YOU
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Services & Expertise
            </h2>
            <div className="w-16 h-1 bg-[#00E599] mx-auto rounded-full shadow-[0_0_10px_#00E599]" />
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={120 * (index + 1)}>
              <div
                className="bg-[#14171A] border border-white/10 rounded-2xl p-8 hover:border-[#00E599]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,153,0.15)] flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="p-4 bg-[#0B0D0E] w-fit rounded-2xl border border-white/5 group-hover:border-[#00E599]/30 transition-colors mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-[#00E599] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-6 border-t border-white/10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 font-body text-xs text-white/80">
                      <CheckCircle2 size={16} className="text-[#00E599] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
