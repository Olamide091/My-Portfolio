"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  // Ring position lags slightly behind cursor
  const ring = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const cur = curRef.current;
    const ringEl = ringRef.current;
    if (!cur || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly via transform
      cur.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    const animate = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.12;
      ring.current.y += (target.current.y - ring.current.y) * 0.12;
      const hw = ringEl.offsetWidth / 2;
      const hh = ringEl.offsetHeight / 2;
      ringEl.style.transform = `translate(${ring.current.x - hw}px, ${ring.current.y - hh}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    const addHover = () => document.body.classList.add("cursor-hover");
    const removeHover = () => document.body.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={curRef} id="cursor" style={{ position: "fixed", top: 0, left: 0, width: 10, height: 10, borderRadius: "50%", background: "#3b82f6", pointerEvents: "none", zIndex: 99999, boxShadow: "0 0 10px #3b82f6", willChange: "transform" }} />
      <div ref={ringRef} id="cursor-ring" style={{ position: "fixed", top: 0, left: 0, width: 36, height: 36, border: "1px solid rgba(59,130,246,0.35)", borderRadius: "50%", pointerEvents: "none", zIndex: 99998, willChange: "transform", transition: "width 0.3s, height 0.3s, border-color 0.3s" }} />
    </>
  );
}
