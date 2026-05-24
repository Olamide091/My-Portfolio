"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[rgba(6,6,8,0.96)] backdrop-blur-2xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-[76px]">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image src="/novatech-logo.png" alt="NovaTech" width={38} height={38} className="object-contain" />
          <div className="leading-tight hidden sm:block">
            <div className="text-[0.85rem] font-semibold text-white tracking-wide">NovaTech</div>
            <div className="text-[0.5rem] text-white/35 tracking-[0.2em] uppercase">Build · Innovate · Elevate</div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className={`text-[0.7rem] tracking-[0.15em] uppercase relative group transition-colors duration-300 ${pathname === l.href ? "text-blue-400" : "text-white/45 hover:text-white"}`}>
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${pathname === l.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[0.58rem] text-white/35 tracking-[0.15em] uppercase">Available</span>
        </div>

        {/* HAMBURGER */}
        <button className="md:hidden flex flex-col gap-[5px] p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`w-5 h-px bg-white/70 transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-5 h-px bg-white/70 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-white/70 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(6,6,8,0.98)] border-b border-white/[0.06] overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link key={l.href} href={l.href}
                  className={`text-sm tracking-[0.15em] uppercase py-1 transition-colors ${pathname === l.href ? "text-blue-400" : "text-white/55 hover:text-white"}`}>
                  {l.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[0.58rem] text-white/35 tracking-[0.15em] uppercase">Available for hire</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
