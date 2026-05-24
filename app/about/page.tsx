"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const stack = [
  { cat: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { cat: "Backend",  items: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
  { cat: "Tools",    items: ["Git", "GitHub", "Vercel", "Figma"] },
];

const timeline = [
  { year: "2023 – Present", label: "BSc Computer Science & Engineering", sub: "Obafemi Awolowo University (OAU)" },
  { year: "2023 – 2024",    label: "Frontend Developer",                  sub: "African Genius Academy" },
  { year: "2024 – Present", label: "Full Stack Developer",                sub: "NovaTech — Independent" },
  { year: "2026",           label: "Open to Opportunities",               sub: "Freelance · Full-time · Collaboration" },
];

export default function About() {
  return (
    <PageTransition>
      <section className="section-py">
        <div className="container">

          {/* HEADER */}
          <ScrollReveal className="border-t border-white/[0.08] pt-6 section-header">
            <span className="text-[0.63rem] tracking-[0.28em] uppercase text-blue-400 flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-blue-500/60" />About
            </span>
            <h1 className="font-bebas leading-[.88]" style={{ fontSize: "clamp(2.8rem,8vw,9rem)" }}>
              THE <span className="gradient-text">DEVELOPER</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(242,237,230,0.45)" }}>BEHIND THE CODE</span>
            </h1>
          </ScrollReveal>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 sm:mb-28">

            {/* PHOTO */}
            <ScrollReveal delay={0.1}>
              <div className="relative">
                {/* shadow frame */}
                <div className="absolute top-3 left-3 right-[-10px] bottom-[-10px] border border-blue-500/12 pointer-events-none hidden sm:block" />
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-[420px] sm:h-[480px]">
                  <Image src="/profile.jpg" alt="Abolarinwa Ismail" fill
                    className="object-cover object-top border border-white/[0.09]"
                    style={{ filter: "grayscale(100%) contrast(1.08)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/55 via-transparent to-transparent" />
                </div>
                {/* badge */}
                <div className="mt-3 sm:absolute sm:mt-0 sm:bottom-[-12px] sm:right-[-10px] bg-[#0a0c12] border border-blue-500/20 px-4 py-2.5">
                  <div className="text-[0.58rem] tracking-[0.2em] uppercase text-blue-400 mb-0.5">Currently</div>
                  <div className="text-sm font-medium text-white">@ NovaTech</div>
                </div>
              </div>
            </ScrollReveal>

            {/* TEXT */}
            <ScrollReveal delay={0.15} className="flex flex-col justify-center">
              <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/58 leading-[1.95] mb-4 sm:mb-5">
                I&apos;m <strong className="text-white font-medium">Abolarinwa Ismail</strong>, a Full Stack Developer building
                <strong className="text-white font-medium"> scalable, production-ready web applications</strong> that solve real business problems.
                Based in Ile-Ife, Nigeria — currently studying Computer Science &amp; Engineering at OAU.
              </p>
              <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/58 leading-[1.95] mb-4 sm:mb-5">
                I architect <strong className="text-white font-medium">end-to-end digital solutions</strong> — from responsive frontends with React and Next.js,
                to robust REST APIs powered by Node.js and Express. I&apos;ve delivered platforms for
                <strong className="text-white font-medium"> schools, tech communities, and startups</strong>.
              </p>
              <p className="text-[0.9rem] sm:text-[0.95rem] font-light text-white/58 leading-[1.95] mb-7 sm:mb-9">
                Beyond shipping code, I <strong className="text-white font-medium">mentor developers</strong> and contribute to team growth.
                Every solution I build prioritises <strong className="text-white font-medium">performance, maintainability, and modern UI/UX</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/cv.pdf" download
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[0.73rem] tracking-[0.1em] uppercase hover:shadow-[0_0_28px_rgba(59,130,246,0.3)] transition-all duration-300">
                  Download CV
                </a>
                <Link href="/contact"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/14 text-white/55 text-[0.73rem] tracking-[0.1em] uppercase hover:border-blue-500/38 hover:text-white transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* TIMELINE */}
          <ScrollReveal delay={0.1} className="mb-20 sm:mb-28">
            <h2 className="font-bebas mb-8 sm:mb-10 text-white/75" style={{ fontSize: "clamp(1.8rem,4.5vw,3.5rem)" }}>TIMELINE</h2>
            <div className="relative border-l border-white/[0.08] pl-6 sm:pl-10 flex flex-col gap-7 sm:gap-9">
              {timeline.map((t, i) => (
                <motion.div key={t.year}
                  initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="relative">
                  <div className="absolute -left-[2.45rem] sm:-left-[3.2rem] top-1.5 w-2.5 h-2.5 rounded-full border border-blue-500/55 bg-[#060608]" />
                  <div className="text-[0.58rem] tracking-[0.2em] text-blue-400 uppercase mb-1">{t.year}</div>
                  <div className="text-[0.95rem] sm:text-base font-medium text-white leading-snug">{t.label}</div>
                  <div className="text-[0.78rem] text-white/38 font-light mt-0.5">{t.sub}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* TECH STACK */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-bebas mb-8 sm:mb-10 text-white/75" style={{ fontSize: "clamp(1.8rem,4.5vw,3.5rem)" }}>TECH STACK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05]">
              {stack.map((s) => (
                <div key={s.cat} className="bg-[#060608] p-6 sm:p-8">
                  <div className="text-[0.6rem] tracking-[0.22em] uppercase text-blue-400 mb-5 flex items-center gap-3">
                    {s.cat}<span className="flex-1 h-px bg-white/[0.07]" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <motion.span key={item}
                        whileHover={{ borderColor: "rgba(59,130,246,0.45)", color: "#93c5fd" }}
                        className="text-[0.76rem] text-white/55 border border-white/[0.07] px-3 py-1.5 transition-all duration-300 cursor-default"
                       >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      <footer className="py-5 border-t border-white/[0.05]">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[0.58rem] tracking-[0.1em] uppercase text-white/22">© 2026 Abolarinwa Ismail</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase text-white/22">NovaTech · Build · Innovate · Elevate</span>
        </div>
      </footer>
    </PageTransition>
  );
}
