"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Globe, Code, Layers } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT ME", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Clean SVG Icons for Socials
  const GithubIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const FigmaIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zm0-24C5.792 0 4 1.792 4 4s1.792 4 4 4h4V4c0-2.208-1.792-4-4-4zm0 8c-2.208 0-4 1.792-4 4s1.792 4 4 4h4V8H8zm8-4c-2.208 0-4 1.792-4 4v4h4c2.208 0 4-1.792 4-4s-1.792-4-4-4zm0 8c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4z" />
    </svg>
  );

  const socialLinks = [
    { icon: <GithubIcon />, href: "https://github.com", label: "GitHub" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FigmaIcon />, href: "https://figma.com", label: "Figma" },
    { icon: <Globe className="w-4 h-4" />, href: "#", label: "Website" },
  ];

  return (
    <footer className="bg-[#0B0D0E] border-t border-white/10 pt-16 pb-12 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Brand Section */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Link href="#home" className="flex items-center gap-3 group">
            <Image
              src="./assets/logo.svg"
              alt="Aville Malintad Logo"
              width={36}
              height={36}
              className="object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-white tracking-wider text-base">
                AVILLE
              </span>
              <span className="font-heading font-bold text-white/80 tracking-widest text-xs">
                MALINTAD
              </span>
            </div>
          </Link>
          <p className="font-body text-xs text-white/60 text-center max-w-sm">
            Graphic & UI/UX Designer & Interactive Web Application Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-heading font-medium text-xs tracking-wider text-white/70 hover:text-[#00E599] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 bg-[#14171A] border border-white/10 rounded-full text-white/70 hover:text-[#00E599] hover:border-[#00E599]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,229,153,0.3)]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Aville Malintad. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-heading text-xs font-semibold text-white/70 hover:text-[#00E599] transition-colors bg-[#14171A] border border-white/10 px-4 py-2 rounded-full hover:border-[#00E599]/40"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="text-[#00E599]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
