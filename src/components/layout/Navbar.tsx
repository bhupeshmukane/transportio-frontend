"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold text-primary">
          LOGISTIX
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-secondary transition">
            Home
          </Link>
          <Link href="/blog" className="hover:text-secondary transition">
            Blog
          </Link>
          
        </div>
      </div>
    </motion.nav>
  );
}
