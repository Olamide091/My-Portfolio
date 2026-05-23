"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  { label:"Email",    value:"abolarinwaismail332@gmail.com", href:"mailto:abolarinwaismail332@gmail.com", icon:"✉" },
  { label:"LinkedIn", value:"abolarinwa-ismail",             href:"https://www.linkedin.com/in/abolarinwa-ismail-94a0a83b6/", icon:"💼" },
  { label:"GitHub",   value:"Olamide091",                    href:"https://github.com/Olamide091", icon:"⌥" },
  { label:"WhatsApp", value:"+234 903 702 2997",             href:"https://wa.me/2349037022997", icon:"💬" },
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:abolarinwaismail332@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Enquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setSent(true);
  };

  const inputCls = "bg-[#09090f] border border-white/[0.08] px-4 py-3 text-[0.85rem] text-white/78 placeholder-white/18 focus:outline-none focus:border-blue-500/38 transition-colors duration-300 w-full";

  return (
    <PageTransition>
      <section className="section-py">
        <div className="container">

          {/* HEADER */}
          <ScrollReveal className="border-t border-white/[0.08] pt-6 section-header">
            <span className="text-[0.63rem] tracking-[0.28em] uppercase text-blue-400 flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-blue-500/60" />Contact
            </span>
            <h1 className="font-bebas leading-[.88]" style={{ fontSize: "clamp(2.8rem,8vw,9rem)" }}>
              LET&apos;S BUILD <br className="hidden sm:block" />
              <span className="gradient-text">TOGETHER</span>
            </h1>
            <p className="text-[0.84rem] text-white/38 font-light mt-4 max-w-lg leading-relaxed">
              Open to freelance opportunities, collaborations, and full-time roles. Reach out and let&apos;s discuss your next project.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* FORM */}
            <ScrollReveal delay={0.1}>
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.58rem] tracking-[0.2em] uppercase text-white/35">Name</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.58rem] tracking-[0.2em] uppercase text-white/35">Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your@email.com" className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.58rem] tracking-[0.2em] uppercase text-white/35">Subject</label>
                  <input name="subject" value={form.subject} onChange={onChange} placeholder="Project enquiry, collaboration, job opportunity…" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.58rem] tracking-[0.2em] uppercase text-white/35">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={6} placeholder="Tell me about your project…" className={`${inputCls} resize-none`} />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[0.75rem] tracking-[0.14em] uppercase font-medium hover:shadow-[0_0_36px_rgba(59,130,246,0.28)] transition-all duration-300"
                  data-hover>
                  {sent ? "✓ Sent!" : "Send Message →"}
                </motion.button>
              </form>
            </ScrollReveal>

            {/* LINKS */}
            <ScrollReveal delay={0.15} className="flex flex-col gap-7">
              <p className="text-[0.86rem] text-white/42 font-light leading-relaxed">
                Whether you have a project in mind, a position to fill, or just want to connect — I respond within 24 hours.
              </p>

              <div className="flex flex-col">
                {socials.map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    whileHover={{ paddingLeft: "1rem" }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-between py-4 border-b border-white/[0.06] text-white/55 hover:text-white transition-colors duration-300 group"
                    data-hover>
                    <div className="flex items-center gap-3">
                      <span className="text-base">{s.icon}</span>
                      <div>
                        <div className="text-[0.58rem] tracking-[0.14em] uppercase text-white/28 group-hover:text-blue-400 transition-colors">{s.label}</div>
                        <div className="text-[0.8rem] truncate max-w-[220px] sm:max-w-none">{s.value}</div>
                      </div>
                    </div>
                    <span className="text-white/18 group-hover:text-white/55 transition-colors ml-3 flex-shrink-0">↗</span>
                  </motion.a>
                ))}
              </div>

              {/* CV */}
              <motion.a href="/cv.pdf" download
                whileHover={{ borderColor: "rgba(59,130,246,0.45)" }}
                className="flex items-center justify-between px-5 py-4 border border-white/[0.09] text-white/55 hover:text-white transition-all duration-300 group"
                data-hover>
                <div>
                  <div className="text-[0.58rem] tracking-[0.2em] uppercase text-blue-400/55 mb-0.5">Resume</div>
                  <div className="text-[0.9rem] font-medium">Download My CV</div>
                </div>
                <span className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">↓</span>
              </motion.a>

              {/* Availability */}
              <div className="bg-[#08090d] border border-green-500/14 px-5 py-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[0.58rem] tracking-[0.2em] uppercase text-green-400">Currently Available</span>
                </div>
                <div className="text-[0.76rem] text-white/38 font-light leading-relaxed">
                  Open to freelance projects, long-term collaborations, and full-time opportunities worldwide.
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <footer className="py-5 border-t border-white/[0.05] mt-12 sm:mt-20">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[0.58rem] tracking-[0.1em] uppercase text-white/22">© 2026 Abolarinwa Ismail</span>
          <span className="text-[0.58rem] tracking-[0.1em] uppercase text-white/22">NovaTech · Build · Innovate · Elevate</span>
        </div>
      </footer>
    </PageTransition>
  );
}
