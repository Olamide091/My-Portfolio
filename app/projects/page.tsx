"use client";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    num: "01", title: "GadgetCheck", subtitle: "Hardware Testing Tool",
    desc: "A real-time browser-based diagnostic tool for testing keyboard response, speaker output, screen rendering, mouse accuracy, and battery status — zero install required.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: ["Real-time hardware interaction", "Zero-install browser tool", "Multi-component testing", "Responsive interface"],
    live: "https://olamide091.github.io/GadgetCheck-Testing-Tool/",
    github: "https://github.com/Olamide091", year: "2024",
  },
  {
    num: "02", title: "African Genius Academy", subtitle: "Primary School Platform",
    desc: "Production-deployed school website for Al-Falah International School, Ile-Ife. Covers admissions, programmes, gallery, leadership, and school news with a responsive interface.",
    tags: ["Node.js", "CSS3", "JavaScript", "Responsive Design"],
    features: ["Admissions management", "Programme listings", "Gallery system", "Mobile-first design"],
    live: "https://africangeniusacademy.org/",
    github: "https://github.com/Olamide091", year: "2023 – 2024",
  },
  {
    num: "03", title: "African Pro Humanity Tech Hub", subtitle: "Tech Community Platform",
    desc: "A structured community platform connecting tech professionals across Africa — built for collaboration, accessibility, and engagement with programme listings and event announcements.",
    tags: ["HTML5", "CSS3", "JavaScript", "Accessibility"],
    features: ["Community engagement", "Accessible design", "Structured navigation", "Team profiles"],
    live: "https://africanprohumanitytechhub.org/",
    github: "https://github.com/Olamide091", year: "2024",
  },
  {
    num: "04", title: "Commons Naija", subtitle: "Civic Engagement Platform",
    desc: "A civic-focused Nigerian platform designed to inform and engage citizens — featuring community news, local government information, and public interest content.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    features: ["Civic information hub", "Community news", "Government info portal", "Public engagement"],
    live: "https://olamide091.github.io/common-nigeria-website/",
    github: "https://github.com/Olamide091", year: "2024",
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <section className="section-py">
        <div className="container">

          {/* HEADER */}
          <ScrollReveal className="border-t border-white/[0.08] pt-6 section-header">
            <span className="text-[0.63rem] tracking-[0.28em] uppercase text-blue-400 flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-blue-500/60" />Selected Work
            </span>
            <h1 className="font-bebas leading-[.88]" style={{ fontSize: "clamp(2.8rem,8vw,9rem)" }}>
              PROJECTS THAT <span className="gradient-text">SHIP</span>
            </h1>
            <p className="text-[0.84rem] text-white/38 font-light mt-4 max-w-lg leading-relaxed">
              Production-deployed solutions built for real users — businesses, schools, communities, and startups.
            </p>
          </ScrollReveal>

          {/* PROJECT LIST */}
          <div className="flex flex-col">
            {projects.map((p, i) => (
              <motion.div key={p.num}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.07 }}
                className="group border-b border-white/[0.06] py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr_auto] gap-4 sm:gap-6 lg:gap-10 items-start hover:bg-white/[0.012] transition-all duration-400 rounded-sm px-1 sm:px-2">

                {/* NUMBER */}
                <div className="font-bebas text-3xl sm:text-4xl text-white/12 group-hover:text-blue-500/38 transition-colors duration-300">{p.num}</div>

                {/* INFO */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h2 className="font-bebas leading-none text-white group-hover:tracking-wide transition-all duration-400"
                      style={{ fontSize: "clamp(1.6rem,3.5vw,3.5rem)" }}>{p.title}</h2>
                    <span className="text-[0.62rem] tracking-[0.14em] uppercase text-white/32">{p.subtitle}</span>
                    <span className="text-[0.56rem] tracking-[0.1em] text-blue-400/55 ml-auto hidden sm:block">{p.year}</span>
                  </div>
                  <p className="text-[0.82rem] sm:text-[0.86rem] font-light text-white/42 leading-relaxed mb-4 max-w-2xl">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.features.map((f) => (
                      <span key={f} className="text-[0.58rem] tracking-[0.07em] text-white/30 border border-white/[0.05] px-2 py-0.5">{f}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[0.6rem] tracking-[0.05em] text-blue-400/65 border border-blue-500/14 bg-blue-500/[0.04] px-2.5 py-1">{t}</span>
                    ))}
                  </div>

                  {/* LINKS — mobile inline */}
                  <div className="flex gap-3 mt-5 lg:hidden">
                    <a href={p.live} target="_blank" rel="noreferrer" data-hover
                      className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[0.68rem] tracking-[0.08em] uppercase">
                      ↗ Live
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" data-hover
                      className="flex items-center gap-1.5 px-4 py-2 border border-white/10 text-white/45 text-[0.68rem] tracking-[0.08em] uppercase hover:border-white/25 hover:text-white transition-all duration-300">
                      GitHub
                    </a>
                  </div>
                </div>

                {/* LINKS — desktop right column */}
                <div className="hidden lg:flex flex-col gap-2.5 items-end pt-1">
                  <a href={p.live} target="_blank" rel="noreferrer" data-hover
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[0.68rem] tracking-[0.08em] uppercase hover:shadow-[0_0_18px_rgba(59,130,246,0.3)] transition-all duration-300 whitespace-nowrap">
                    ↗ Live Site
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" data-hover
                    className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white/45 text-[0.68rem] tracking-[0.08em] uppercase hover:border-white/28 hover:text-white transition-all duration-300">
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MORE */}
          <div className="mt-12 sm:mt-16 text-center">
            <a href="https://github.com/Olamide091" target="_blank" rel="noreferrer" data-hover
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/[0.08] text-white/45 text-[0.72rem] tracking-[0.14em] uppercase hover:border-blue-500/28 hover:text-blue-300 transition-all duration-300">
              ↗ More on GitHub
            </a>
          </div>

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
