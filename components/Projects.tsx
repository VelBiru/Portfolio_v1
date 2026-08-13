"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "UI/UX DESIGN", "WEB APPS"];

  const projects = [
    {
      id: 1,
      title: "FinTech Banking Dashboard",
      category: "UI/UX DESIGN",
      description: "A dark-mode analytics dashboard interface focusing on data visualization, seamless transaction flow, and customizable widgets.",
      tags: ["Figma", "UI/UX", "Design System"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Interactive E-Commerce Web App",
      category: "WEB APPS",
      description: "Full-stack web application featuring dynamic filtering, smooth cart drawer state management, and custom glassmorphic product cards.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Aura Creative Studio Platform",
      category: "UI/UX DESIGN",
      description: "Brand identity, web layout, and interactive presentation components designed for a digital marketing agency.",
      tags: ["Figma", "Photoshop", "Prototyping"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "SaaS Analytics & AI Assistant UI",
      category: "WEB APPS",
      description: "Modern web application interface integrating real-time charts, AI chat widget, and responsive multi-tenant navigation.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 bg-[#0B0D0E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00E599] mb-2">
              PORTFOLIO HIGHLIGHTS
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-[#00E599] mx-auto rounded-full shadow-[0_0_10px_#00E599]" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#00E599] text-black shadow-[0_0_15px_rgba(0,229,153,0.5)]"
                  : "bg-[#14171A] text-white/70 border border-white/10 hover:text-white hover:border-[#00E599]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={120 * (idx + 1)}>
              <div
                className="bg-[#14171A] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00E599]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,153,0.15)] flex flex-col group"
              >
                {/* Project Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#0B0D0E]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171A] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-4 left-4 font-heading text-[10px] font-bold tracking-wider text-black bg-[#00E599] px-3 py-1 rounded-full uppercase shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white group-hover:text-[#00E599] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-xs text-white/60 bg-[#0B0D0E] border border-white/10 px-3 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-[#00E599] hover:text-white transition-colors"
                      >
                        <ExternalLink size={15} /> Preview Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-white/70 hover:text-[#00E599] transition-colors ml-auto"
                      >
                        <Code size={15} /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
