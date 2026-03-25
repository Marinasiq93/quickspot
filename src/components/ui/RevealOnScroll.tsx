"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function RevealOnScroll({ children, className = "", delay = 0, direction = "up" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const transforms = { up: "translateY(28px)", left: "translateX(-28px)", right: "translateX(28px)", none: "none" };

  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction], transition: `opacity 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`, willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}
