"use client";

import React from "react";
import Image from "next/image";
import { Palette, Code, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const tools = [
    { name: "Figma", icon: "./assets/tools-logo/figma.svg", desc: "UI/UX & Prototyping" },
    { name: "Framer", icon: "./assets/tools-logo/framer.svg", desc: "Interactive Motion" },
    { name: "React", icon: "./assets/tools-logo/react.svg", desc: "Frontend Web Apps" },
    { name: "TypeScript", icon: "./assets/tools-logo/typescript.svg", desc: "Type-safe Logic" },
    { name: "JavaScript", icon: "./assets/tools-logo/javascript.svg", desc: "Web Engineering" },
    { name: "Photoshop", icon: "./assets/tools-logo/photoshop.svg", desc: "Graphic & Brand" },
    { name: "Illustrator", icon: "./assets/tools-logo/illustrator.svg", desc: "Vector Artwork" },
  ];

  const aiTools = [
    { name: "Antigravity", icon: "./assets/tools-logo/antigravity.svg", desc: "Google DeepMind AI" },
    { name: "Claude", icon: "./assets/tools-logo/claude.svg", desc: "Anthropic Claude 3.7" },
    { name: "Codex", icon: "./assets/tools-logo/codex.svg", desc: "OpenAI Codex" },
    { name: "ChatGPT", icon: "./assets/tools-logo/chatgpt.svg", desc: "OpenAI GPT-4o" },
    { name: "Gemini", icon: "./assets/tools-logo/gemini.svg", desc: "Google Gemini Pro" },
  ];

  const highlights = [
    {
      icon: <Palette className="w-6 h-6 text-[#00E599]" />,
      title: "UI/UX & Graphic Design",
      desc: "Creating intuitive interfaces, wireframes, component libraries, and brand visual identities.",
    },
    {
      icon: <Code className="w-6 h-6 text-[#00E599]" />,
      title: "Interactive Web Development",
      desc: "Building performant, responsive web applications using React, Next.js, and modern CSS.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#00E599]" />,
      title: "User-Centered Motion",
      desc: "Incorporating fluid micro-animations, glassmorphic styling, and seamless transitions.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[#0B0D0E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00E599] mb-2">
              DISCOVER MY JOURNEY
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-[#00E599] mx-auto rounded-full shadow-[0_0_10px_#00E599]" />
          </div>
        </ScrollReveal>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Bio Description */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={100}>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white leading-snug">
                Bridging the gap between <span className="text-[#00E599]">aesthetic design</span> and <span className="text-[#00E599]">functional code</span>.
              </h3>
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mt-4">
                Hello! I’m Aville Malintad, a designer and developer with a passion for building user interfaces that are as functional as they are visually captivating. With a strong foundation in graphic design and frontend web technologies, I bring ideas to life with high attention to detail, typography, and interactive dynamics.
              </p>
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mt-4">
                Whether designing clean UI layouts or engineering responsive single-page applications, my goal is always to deliver memorable, seamless experiences for users.
              </p>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
                <div>
                  <span className="font-heading font-bold text-3xl md:text-4xl text-[#00E599]">3+</span>
                  <p className="font-body text-xs md:text-sm text-white/60 mt-1">Years Experience</p>
                </div>
                <div>
                  <span className="font-heading font-bold text-3xl md:text-4xl text-[#00E599]">25+</span>
                  <p className="font-body text-xs md:text-sm text-white/60 mt-1">Projects Built</p>
                </div>
                <div>
                  <span className="font-heading font-bold text-3xl md:text-4xl text-[#00E599]">100%</span>
                  <p className="font-body text-xs md:text-sm text-white/60 mt-1">Client Focus</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={150 * (idx + 1)}>
                <div
                  className="bg-[#14171A] border border-white/10 hover:border-[#00E599]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,153,0.15)] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0B0D0E] rounded-xl border border-white/5 group-hover:border-[#00E599]/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#00E599] transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm text-white/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Tools & Tech Stack */}
        <div className="mt-16 sm:mt-20">
          <ScrollReveal direction="up">
            <h3 className="font-heading text-lg md:text-xl font-bold text-center text-white mb-6">
              Technologies & Design Tools I Master
            </h3>
          </ScrollReveal>

          {/* Compact Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {tools.map((tool, tIdx) => (
              <ScrollReveal key={tool.name} direction="up" delay={60 * (tIdx + 1)}>
                <div
                  className="bg-[#14171A] border border-white/10 hover:border-[#00E599]/50 rounded-xl p-3.5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,229,153,0.2)] group"
                >
                  <div className="relative w-8 h-8 mb-2">
                    <Image
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      fill
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-white group-hover:text-[#00E599]">
                    {tool.name}
                  </h4>
                  <p className="font-body text-[10px] text-white/50 mt-0.5 line-clamp-1">
                    {tool.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-white/10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-xl mx-auto mb-8">
              <p className="font-heading text-[10px] font-semibold uppercase tracking-widest text-[#00E599] mb-1">
                INTELLIGENT WORKFLOW
              </p>
              <h3 className="font-heading text-lg md:text-xl font-bold text-white">
                AI Assistants & Models I Leverage
              </h3>
            </div>
          </ScrollReveal>

          {/* Compact AI Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {aiTools.map((ai, aIdx) => (
              <ScrollReveal key={ai.name} direction="up" delay={70 * (aIdx + 1)}>
                <div
                  className="bg-[#14171A] border border-white/10 hover:border-[#00E599]/50 rounded-xl p-3.5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,229,153,0.25)] group"
                >
                  <div className="relative w-8 h-8 mb-2">
                    <Image
                      src={ai.icon}
                      alt={`${ai.name} logo`}
                      fill
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-white group-hover:text-[#00E599]">
                    {ai.name}
                  </h4>
                  <p className="font-body text-[10px] text-white/50 mt-0.5 line-clamp-1">
                    {ai.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
