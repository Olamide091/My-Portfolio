"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
