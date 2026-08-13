"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────
interface TrailParticle {
  x: number;
  y: number;
  alpha: number; // current opacity 0→1
  size: number;  // dot radius
}

// ─── Constants ──────────────────────────────────────────────────────────────
const TRAIL_LENGTH = 28;          // number of trailing dots
const FADE_SPEED   = 0.055;       // how fast each dot fades out
const LERP_SPEED   = 0.18;        // how fast each dot follows its leader
const BASE_SIZE    = 5;           // head dot radius in px
const SHRINK       = 0.87;        // each successive dot shrinks by this factor
const COLOR        = "0, 229, 153"; // RGB for #00E599

// ─── Component ──────────────────────────────────────────────────────────────
export default function CustomCursor() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rafRef       = useRef<number | null>(null);
  const mouseRef     = useRef({ x: -200, y: -200 });
  const visibleRef   = useRef(false);
  const hoveredRef   = useRef(false);

  // DOM cursor dot (zero-latency, no canvas needed)
  const [dotPos,    setDotPos]    = useState({ x: -200, y: -200 });
  const [visible,   setVisible]   = useState(false);
  const [hovered,   setHovered]   = useState(false);
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => {
    setMounted(true);

    // ── Only activate on fine-pointer (mouse) devices ─────────────────────
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // ── Canvas setup ──────────────────────────────────────────────────────
    const canvas = canvasRef.current!;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Build trail particle chain ─────────────────────────────────────────
    // Each particle lazily follows the one in front of it (index 0 = head → mouse)
    const particles: TrailParticle[] = Array.from({ length: TRAIL_LENGTH }, (_, i) => ({
      x: -200,
      y: -200,
      alpha: 0,
      size: BASE_SIZE * Math.pow(SHRINK, i),
    }));

    // ── Animation loop ─────────────────────────────────────────────────────
    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      // 1. Update positions — each particle lerps toward the one in front
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const targetX = i === 0 ? mx : particles[i - 1].x;
        const targetY = i === 0 ? my : particles[i - 1].y;

        p.x += (targetX - p.x) * LERP_SPEED;
        p.y += (targetY - p.y) * LERP_SPEED;

        // Fade in when mouse is in window, fade out when not
        if (visibleRef.current) {
          p.alpha = Math.min(1, p.alpha + FADE_SPEED * 2);
        } else {
          p.alpha = Math.max(0, p.alpha - FADE_SPEED);
        }
      }

      // 2. Draw — back to front so head is on top
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (p.alpha <= 0) continue;

        // Fractional position in trail: 0 = tail, 1 = head
        const frac = 1 - i / particles.length;
        const baseAlpha = frac * frac; // quadratic falloff toward tail

        const outerAlpha = baseAlpha * p.alpha * 0.22;
        const coreAlpha  = baseAlpha * p.alpha * (hoveredRef.current ? 0.95 : 0.85);
        const size = p.size * (hoveredRef.current && i === 0 ? 1.6 : 1);

        // Outer soft glow halo
        if (outerAlpha > 0.01) {
          const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3.2);
          glowGrad.addColorStop(0,   `rgba(${COLOR}, ${outerAlpha})`);
          glowGrad.addColorStop(1,   `rgba(${COLOR}, 0)`);
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Solid bright core dot
        ctx.fillStyle = `rgba(${COLOR}, ${coreAlpha})`;
        ctx.shadowColor = `rgba(${COLOR}, ${coreAlpha * 0.8})`;
        ctx.shadowBlur = size * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    // ── Mouse event listeners ─────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isClickable =
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        el.tagName === "LABEL" ||
        !!el.closest("a") ||
        !!el.closest("button") ||
        el.getAttribute("role") === "button" ||
        el.classList.contains("cursor-pointer") ||
        window.getComputedStyle(el).cursor === "pointer";

      hoveredRef.current = isClickable;
      setHovered(isClickable);
    };

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseover",  onOver,  { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // SSR guard — don't render anything until we're in the browser
  if (!mounted) return null;

  return (
    <>
      {/* Full-screen canvas for trail particles */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998]"
        aria-hidden="true"
      />

      {/* Main cursor dot — uses CSS transform for zero-lag tracking */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[99999]"
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`,
          willChange: "transform",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        {/* Outer ring */}
        <div
          className="absolute rounded-full border-2 border-[#00E599] transition-all duration-200"
          style={{
            width:  hovered ? 40 : 28,
            height: hovered ? 40 : 28,
            top:    hovered ? -20 : -14,
            left:   hovered ? -20 : -14,
            background: hovered ? "rgba(0,229,153,0.12)" : "transparent",
            boxShadow: hovered
              ? "0 0 16px rgba(0,229,153,0.5), inset 0 0 8px rgba(0,229,153,0.15)"
              : "0 0 8px rgba(0,229,153,0.3)",
          }}
        />

        {/* Inner solid dot */}
        <div
          className="absolute rounded-full bg-[#00E599] transition-all duration-150"
          style={{
            width:  hovered ? 6 : 8,
            height: hovered ? 6 : 8,
            top:    hovered ? -3 : -4,
            left:   hovered ? -3 : -4,
            boxShadow: "0 0 10px rgba(0,229,153,0.9), 0 0 4px #00E599",
          }}
        />
      </div>
    </>
  );
}
