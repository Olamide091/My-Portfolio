"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { num:"01", icon:"◻", title:"Business Websites",  tag:"Most Popular",
    desc:"Premium, conversion-optimised websites for businesses of all sizes. Built for speed, SEO, and a lasting impression.",
    features:["Custom responsive design","SEO optimisation","CMS integration","Performance-first build"],
    accent:"from-blue-600/18 to-transparent", border:"border-blue-500/20" },
  { num:"02", icon:"⬡", title:"School Platforms",   tag:"",
    desc:"Purpose-built digital platforms for educational institutions — admissions, portals, galleries, and management systems.",
    features:["Admissions system","Student portals","Event management","Gallery & news"],
    accent:"from-purple-600/18 to-transparent", border:"border-purple-500/18" },
  { num:"03", icon:"⟨/⟩", title:"Web Applications", tag:"",
    desc:"Full-stack interactive web applications with authentication, real-time features, APIs, and database integration.",
    features:["React / Next.js frontend","Node.js backend","REST API development","Database integration"],
    accent:"from-blue-500/14 to-purple-500/14", border:"border-blue-400/18" },
  { num:"04", icon:"▦", title:"Dashboard Systems",  tag:"",
    desc:"Data-rich admin dashboards and analytics panels for real-time monitoring and business management.",
    features:["Analytics panels","Data visualisation","Role-based access","Real-time updates"],
    accent:"from-purple-500/18 to-transparent", border:"border-purple-400/18" },
  { num:"05", icon:"↻", title:"Website Redesign",   tag:"",
    desc:"Modernise your outdated website with a premium redesign that improves performance, aesthetics, and conversions.",
    features:["UI/UX audit","Performance upgrade","Mobile optimisation","Brand alignment"],
    accent:"from-blue-600/14 to-purple-600/14", border:"border-blue-500/14" },
];

const process = [
  { step:"01", title:"Discovery",   desc:"Understanding your goals, audience, and technical requirements." },
  { step:"02", title:"Design",      desc:"Wireframes and UI design aligned with your brand identity." },
  { step:"03", title:"Development", desc:"Clean, scalable code built with modern technologies." },
  { step:"04", title:"Delivery",    desc:"Testing, deployment, and handoff with full documentation." },
];

export default function Services() {
  return (
    <PageTransition>
      <section className="section-py">
        <div className="container">

          {/* HEADER */}
          <ScrollReveal className="border-t border-white/[0.08] pt-6 section-header">
            <span className="text-[0.63rem] tracking-[0.28em] uppercase text-blue-400 flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-blue-500/60" />Services
            </span>
            <h1 className="font-bebas leading-[.88]" style={{ fontSize: "clamp(2.8rem,8vw,9rem)" }}>
              WHAT I <span className="gradient-text">BUILD</span>
            </h1>
            <p className="text-[0.84rem] text-white/38 font-light mt-4 max-w-lg leading-relaxed">
              End-to-end digital solutions for businesses, institutions, and startups — from concept to deployment.
            </p>
          </ScrollReveal>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mb-20 sm:mb-28">
            {services.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative bg-[#08090d] border ${s.border} p-6 sm:p-8 overflow-hidden group transition-all duration-350`}
                data-hover>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                {s.tag && (
                  <div className="absolute top-4 right-4 text-[0.52rem] tracking-[0.14em] uppercase text-blue-300 border border-blue-500/28 px-2 py-0.5 bg-blue-500/10">{s.tag}</div>
                )}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <span className="text-2xl sm:text-3xl text-blue-400/58 group-hover:text-blue-400 transition-colors duration-300">{s.icon}</span>
                    <span className="font-bebas text-4xl sm:text-5xl text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300">{s.num}</span>
                  </div>
                  <h3 className="font-bebas text-[1.5rem] sm:text-[1.7rem] text-white mb-2.5 tracking-wide">{s.title}</h3>
                  <p className="text-[0.8rem] sm:text-[0.83rem] font-light text-white/42 leading-relaxed mb-5 sm:mb-6">{s.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[0.73rem] text-white/38">
                        <span className="w-1 h-1 rounded-full bg-blue-400/55 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* CTA CARD */}
            <motion.div
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.45 }}
              className="bg-gradient-to-br from-blue-600/18 to-purple-600/18 border border-blue-500/22 p-6 sm:p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <h3 className="font-bebas text-[1.6rem] sm:text-[2rem] text-white mb-3">HAVE A PROJECT IN MIND?</h3>
                <p className="text-[0.82rem] text-white/45 font-light leading-relaxed">
                  Let&apos;s discuss your requirements and build something exceptional together.
                </p>
              </div>
              <Link href="/contact" data-hover
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[0.72rem] tracking-[0.1em] uppercase hover:shadow-[0_0_28px_rgba(59,130,246,0.35)] transition-all duration-300 w-fit">
                Start a Project →
              </Link>
            </motion.div>
          </div>

          {/* PROCESS */}
          <ScrollReveal delay={0.1} className="border-t border-white/[0.06] pt-14 sm:pt-20">
            <h2 className="font-bebas mb-8 sm:mb-12 text-white/75" style={{ fontSize: "clamp(1.8rem,4.5vw,4rem)" }}>THE PROCESS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
              {process.map((p, i) => (
                <motion.div key={p.step}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.09 }}
                  className="bg-[#060608] p-6 sm:p-8">
                  <div className="font-bebas text-4xl sm:text-5xl text-blue-400/18 mb-4">{p.step}</div>
                  <h3 className="text-[0.92rem] font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-[0.76rem] text-white/38 font-light leading-relaxed">{p.desc}</p>
                </motion.div>
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
