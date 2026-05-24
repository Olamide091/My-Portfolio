"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const skills = ["REACT","NEXT.JS","NODE.JS","TAILWIND","EXPRESS","TYPESCRIPT","MONGODB","REST APIs","REACT","NEXT.JS","NODE.JS","TAILWIND","EXPRESS","TYPESCRIPT","MONGODB","REST APIs"];

const reasons = [
  { icon: "⟨/⟩", title: "Clean Code",        desc: "Maintainable, readable, and scalable architecture." },
  { icon: "◻",    title: "Responsive Design", desc: "Pixel-perfect across all devices and screen sizes." },
  { icon: "⬡",    title: "Scalable Solutions",desc: "Built to grow with your business from day one." },
  { icon: "◎",    title: "Fast Delivery",     desc: "Efficient workflows without compromising quality." },
  { icon: "✦",    title: "Modern UI/UX",      desc: "Interfaces that users love and businesses trust." },
];

const mv = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

export default function Home() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let n = 0;
    const iv = setInterval(() => {
      n += Math.floor(Math.random() * 8) + 3;
      if (n >= 100) { n = 100; clearInterval(iv); setTimeout(() => setDone(true), 400); }
      setCount(n);
    }, 55);
    return () => clearInterval(iv);
  }, []);

  return (
    <>

      {/* PRELOADER */}
      <motion.div
        className="fixed inset-0 bg-[#060608] z-[9999] flex items-center justify-center overflow-hidden"
        animate={done ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className="absolute w-full h-px bg-white/5 top-1/2" />
        <div className="absolute h-full w-px bg-white/[0.04] left-1/2" />
        <span className="font-bebas text-[22vw] text-white leading-none select-none">{count}</span>
        <div className="absolute bottom-8 left-[var(--px)] text-[0.58rem] tracking-[0.28em] text-white/25 uppercase">Abolarinwa Ismail</div>
        <div className="absolute bottom-8 right-[var(--px)] text-[0.58rem] tracking-[0.28em] text-white/25 uppercase">NovaTech</div>
      </motion.div>

      <PageTransition>

        {/* ── HERO ────────────────────────────────── */}
   <section className="relative min-h-screen flex flex-col justify-center md:justify-end overflow-hidden"
          style={{ paddingTop: "clamp(5rem,8vw,7rem)", paddingLeft: "var(--px)", paddingRight: "var(--px)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>

          {/* Ghost bg text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas pointer-events-none select-none whitespace-nowrap"
            style={{ fontSize: "clamp(80px,18vw,260px)", color: "transparent", WebkitTextStroke: "1px rgba(242,237,230,0.035)" }}>
            ISMAIL
          </div>

          {/* ORBIT PHOTO — hidden on mobile, shown md+ */}
          <div className="hidden md:flex absolute right-[var(--px)] top-1/2 -translate-y-1/2 items-center justify-center"
            style={{ width: "clamp(280px,30vw,400px)", height: "clamp(280px,30vw,400px)" }}>
            {/* Ring 1 */}
            <div className="ring-cw absolute rounded-full border border-blue-500/20 pointer-events-none"
              style={{ inset: "-20px" }}>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400"
                style={{ boxShadow: "0 0 10px #3b82f6, 0 0 22px rgba(59,130,246,0.5)" }} />
            </div>
            {/* Ring 2 */}
            <div className="ring-ccw absolute rounded-full border border-dashed border-purple-500/15 pointer-events-none"
              style={{ inset: "-42px" }}>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400/70" />
            </div>
            {/* Ring 3 */}
            <div className="ring-slow absolute rounded-full border border-white/[0.04] pointer-events-none"
              style={{ inset: "-65px" }}>
              <div className="absolute top-[30%] -right-1 w-1.5 h-1.5 rounded-full bg-white/25" />
            </div>
            {/* Pulse */}
            <div className="photo-pulse-anim absolute rounded-full pointer-events-none" style={{ inset: "-4px" }} />
            {/* Photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border border-blue-500/20 z-10"
              style={{ width: "clamp(200px,20vw,270px)", height: "clamp(200px,20vw,270px)" }}>
              <Image src="/profile.jpg" alt="Abolarinwa Ismail" fill className="object-cover object-top" style={{ filter: "grayscale(100%) contrast(1.08)" }} />
            </div>
            {/* Tags */}
            <div className="tag-float-1 absolute z-20 text-[0.46rem] tracking-[0.16em] text-white/55 uppercase border border-white/10 px-2.5 py-1 whitespace-nowrap"
              style={{ top: "8%", left: "-26%", background: "rgba(6,6,8,0.8)", backdropFilter: "blur(8px)" }}>Full-Stack Dev</div>
            <div className="tag-float-2 absolute z-20 text-[0.46rem] tracking-[0.16em] text-white/55 uppercase border border-white/10 px-2.5 py-1 whitespace-nowrap"
              style={{ bottom: "12%", right: "-20%", background: "rgba(6,6,8,0.8)", backdropFilter: "blur(8px)" }}>OAU · Nigeria</div>
          </div>

          {/* HERO TEXT */}
          <div className="relative z-10 md:max-w-[58%]">
            <motion.div {...mv(0.08)} className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-7 h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-blue-400">Portfolio · 2026</span>
            </motion.div>

            <div className="font-bebas leading-[0.9] tracking-[-0.01em] mb-5 sm:mb-7"
              style={{ fontSize: "clamp(52px,11vw,140px)" }}>
              <div className="line-clip">
                <motion.div initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.1 }}>FULL</motion.div>
              </div>
              <div className="line-clip">
                <motion.div initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.2 }}>STACK</motion.div>
              </div>
              <div className="line-clip">
                <motion.div initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.3 }}
                  className="text-transparent" style={{ WebkitTextStroke: "1px rgba(242,237,230,0.75)" }}>
                  DEVELOPER
                </motion.div>
              </div>
            </div>

            <motion.p {...mv(0.42)}
              className="text-[0.85rem] sm:text-[0.9rem] font-light text-white/50 leading-relaxed max-w-[480px] mb-2 border-l-2 border-blue-500/35 pl-4">
              Building <strong className="text-white font-medium">scalable, responsive, and modern</strong> digital solutions for businesses, schools, and startups.
            </motion.p>

            <motion.p {...mv(0.5)}
              className="text-[0.7rem] tracking-[0.08em] text-blue-400/75 mb-7 sm:mb-9 pl-4">
              Available for freelance projects, collaborations, and full-time opportunities.
            </motion.p>

            <motion.div {...mv(0.57)} className="flex flex-wrap gap-3">
              <Link href="/projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[0.72rem] tracking-[0.1em] uppercase font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-0.5">
                View Projects
              </Link>
              <a href="/cv.pdf" download
                className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/18 text-white/65 text-[0.72rem] tracking-[0.1em] uppercase hover:border-blue-500/45 hover:text-white transition-all duration-300">
                Download CV
              </a>
              <Link href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 border border-purple-500/28 text-purple-300/75 text-[0.72rem] tracking-[0.1em] uppercase hover:border-purple-400 hover:text-purple-200 transition-all duration-300">
                Contact Me
              </Link>
            </motion.div>

            <motion.div {...mv(0.65)} className="flex gap-6 sm:gap-10 mt-7 sm:mt-9 pt-6 border-t border-white/[0.06]">
              {[["3+","Projects Live"],["2+","Years Exp."],["OAU","CS & Eng."]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-bebas text-xl sm:text-2xl text-blue-400">{n}</div>
                  <div className="text-[0.58rem] tracking-[0.1em] uppercase text-white/35 mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* MOBILE PHOTO — small circle below text */}
          <motion.div {...mv(0.3)} className="md:hidden flex justify-center mt-10">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border border-blue-500/20">
              <Image src="/profile.jpg" alt="Abolarinwa Ismail" fill className="object-cover object-top" style={{ filter: "grayscale(100%)" }} />
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div {...mv(0.9)} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
            <span className="text-[0.52rem] tracking-[0.25em] uppercase text-white/25">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-blue-500/50 to-transparent animate-pulse" />
          </motion.div>
        </section>

        {/* ── MARQUEE ──────────────────────────────── */}
        <div className="py-5 sm:py-7 border-y border-white/[0.06] overflow-hidden">
          <div className="marquee-track">
            {skills.map((s, i) => (
              <span key={i} className="font-bebas px-5 flex-shrink-0 hover:text-white transition-colors duration-300 cursor-default"
                style={{ fontSize: "clamp(44px,6vw,80px)", color: "transparent", WebkitTextStroke: "1px rgba(242,237,230,0.14)" }}>
                {s}<span className="text-blue-400/35 px-2">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── WHY WORK WITH ME ─────────────────────── */}
        <section className="section-py">
          <div className="container">
            <motion.div {...mv(0)} className="section-header text-center">
              <span className="text-[0.63rem] tracking-[0.28em] uppercase text-blue-400 flex items-center justify-center gap-3 mb-3">
                <span className="w-5 h-px bg-blue-500/60" />Why Work With Me<span className="w-5 h-px bg-blue-500/60" />
              </span>
              <h2 className="font-bebas" style={{ fontSize: "clamp(2.2rem,5.5vw,4.5rem)", lineHeight: 0.95 }}>
                THE <span className="gradient-text">ADVANTAGE</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
              {reasons.map((r, i) => (
                <motion.div key={r.title}
                  initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-[#090b11] border border-white/[0.06] p-5 sm:p-6 card-hover cursor-default">
                  <div className="text-xl sm:text-2xl text-blue-400/65 mb-3 sm:mb-4">{r.icon}</div>
                  <div className="text-sm font-medium text-white mb-1.5">{r.title}</div>
                  <div className="text-[0.76rem] text-white/38 leading-relaxed font-light">{r.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-5 border-t border-white/[0.05]">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[0.58rem] tracking-[0.1em] uppercase text-white/22">© 2026 Abolarinwa Ismail</span>
            <span className="text-[0.58rem] tracking-[0.1em] uppercase text-white/22">NovaTech · Build · Innovate · Elevate</span>
          </div>
        </footer>

      </PageTransition>
    </>
  );
}
