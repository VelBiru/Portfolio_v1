"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center bg-[#0B0D0E] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ========================================================
            MOBILE & TABLET HERO (lg:hidden)
           ======================================================== */}
        <div className="w-full flex flex-col items-center gap-6 lg:hidden">
          
          {/* Mobile Title Header */}
          <ScrollReveal direction="down">
            <div className="text-center z-20">
              <p className="font-body text-white/80 text-sm sm:text-base font-medium tracking-wide mb-1">
                Hello, Welcome!
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-5xl text-[#00E599] tracking-tight">
                I’m Aville Malintad
              </h1>
            </div>
          </ScrollReveal>

          {/* Mobile Center Profile & Background Shield Vector */}
          <div className="relative w-full flex justify-center py-2 z-20">
            <ScrollReveal direction="up" delay={100} className="w-full flex justify-center">
              <div className="relative w-[280px] sm:w-[360px] aspect-[4/5] flex items-end justify-center">
                
                {/* Background Vector Shield Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-[18%] bottom-2 w-[120%] sm:w-[130%] flex items-end justify-center pointer-events-none z-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="./assets/rotated-V.svg"
                      alt="Background Shield Logo"
                      fill
                      priority
                      className="object-contain object-bottom opacity-90"
                    />
                  </div>
                </div>

                {/* Foreground Profile Image */}
                <div className="relative z-20 w-[90%] h-[82%] right-[2%] flex items-end justify-center pointer-events-none">
                  <Image
                    src="./assets/profile.png"
                    alt="Aville Malintad"
                    width={420}
                    height={520}
                    priority
                    className="object-contain object-bottom max-h-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Mobile Callout Highlights & CTA Buttons */}
          <ScrollReveal direction="up" delay={150}>
            <div className="flex flex-col items-center text-center space-y-4 max-w-md mx-auto z-30 pt-2">
              <div className="space-y-2">
                <p className="font-body text-white/70 text-sm">
                  Specializing in
                </p>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#00E599]">
                  Graphic & UI/UX Designs
                </h2>
                <p className="font-body text-white/50 text-xs">
                  & Interactive Web Applications
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 pt-3">
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#14171A] border border-[#00E599]/60 text-white font-heading font-semibold text-xs tracking-wider uppercase hover:bg-[#00E599] hover:text-black transition-all duration-300"
                >
                  ABOUT ME
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00E599] text-black font-heading font-bold text-xs tracking-wider uppercase hover:bg-[#00C281] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,153,0.4)]"
                >
                  PROJECTS
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>


        {/* ========================================================
            DESKTOP HERO (hidden lg:flex flex-col)
           ======================================================== */}
        <div className="hidden lg:flex flex-col items-center w-full">
          
          {/* Desktop Title Header */}
          <ScrollReveal direction="down">
            <div className="text-center z-20 mb-6 max-w-3xl mx-auto">
              <p className="font-body text-white/80 text-lg font-medium tracking-wide mb-1">
                Hello, Welcome!
              </p>
              <h1 className="font-heading font-bold text-6xl lg:text-7xl text-[#00E599] tracking-tight">
                I’m Aville Malintad
              </h1>
            </div>
          </ScrollReveal>

          {/* Center Showcase & Flanking Callouts - Symmetrical Desktop Alignment */}
          <div className="relative w-full grid grid-cols-12 items-end gap-8 pb-0 z-20">

            {/* Left Callout (Graphic & UI/UX Designs) */}
            <div className="col-span-3 flex flex-col items-start text-left z-30 pb-16 self-end">
              <ScrollReveal direction="up" delay={150}>
                <p className="font-body text-white/70 text-lg mb-1">
                  I can create
                </p>
                <h2 className="font-heading font-bold text-3xl text-[#00E599] leading-tight mb-6">
                  Graphic & UI/UX <br /> Designs
                </h2>
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#14171A] border border-[#00E599]/60 text-white font-heading font-semibold text-xs tracking-wider uppercase hover:bg-[#00E599] hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  ABOUT ME
                </Link>
              </ScrollReveal>
            </div>

            {/* Center Static Vector Backdrop (rotated-V.svg) + Profile Picture Aligned */}
            <div className="col-span-6 relative flex items-end justify-center self-end">
              <ScrollReveal direction="up" delay={100} className="w-full flex justify-center">
                <div className="relative w-[520px] aspect-[4/5] flex items-end justify-center">

                  {/* Static Background Triangular Vector Logo (rotated-V.svg) */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[22%] bottom-4 w-[125%] flex items-end justify-center pointer-events-none z-0">
                    <div className="relative w-full h-full">
                      <Image
                        src="./assets/rotated-V.svg"
                        alt="Background Shield Logo"
                        fill
                        priority
                        className="object-contain object-bottom opacity-90"
                      />
                    </div>
                  </div>

                  {/* Foreground Profile Image */}
                  <div className="relative z-20 w-[90%] h-[80%] right-[3%] flex items-end justify-center pointer-events-none">
                    <Image
                      src="./assets/profile.png"
                      alt="Aville Malintad"
                      width={460}
                      height={560}
                      priority
                      className="object-contain object-bottom max-h-full"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Callout (Interactive Website Applications) */}
            <div className="col-span-3 flex flex-col items-end text-right z-30 pb-16 self-end">
              <ScrollReveal direction="up" delay={150}>
                <p className="font-body text-white/70 text-lg mb-1">
                  I can build
                </p>
                <h2 className="font-heading font-bold text-3xl text-[#00E599] leading-tight mb-6">
                  Interactive Website <br /> Applications
                </h2>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#14171A] border border-[#00E599]/60 text-white font-heading font-semibold text-xs tracking-wider uppercase hover:bg-[#00E599] hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  PROJECTS
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Transition Border Connecting Hero to About Me */}
        <div className="w-full max-w-6xl mx-auto mt-12 sm:mt-16 border-b border-white/10 flex items-center justify-center relative">
          <div className="w-16 h-1 bg-[#00E599] rounded-full absolute -bottom-0.5 shadow-[0_0_10px_#00E599]" />
        </div>

      </div>
    </section>
  );
}


