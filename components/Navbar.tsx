"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT ME", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl bg-[#14171A]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">
        {/* Brand / Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="./assets/logo.svg"
              alt="Aville Malintad Logo"
              width={32}
              height={32}
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-white tracking-wider text-sm">
              AVILLE
            </span>
            <span className="font-heading font-bold text-white/80 tracking-widest text-xs">
              MALINTAD
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-heading font-medium text-xs tracking-wider text-white/80 hover:text-[#00E599] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-[#00E599] focus:outline-none p-1"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-6 right-6 bg-[#14171A] border border-[#00E599]/30 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading font-medium text-sm text-white/90 hover:text-[#00E599] py-2 border-b border-white/5 last:border-none"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
