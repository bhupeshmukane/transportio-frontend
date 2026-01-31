"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PublicNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
            Transport<span className="text-orange-600">IO</span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="flex gap-10 font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>

          <button
            onClick={() => handleScroll("about")}
            className="hover:text-orange-600 transition"
          >
            About Us
          </button>

          <Link href="/blog" className="hover:text-orange-600 transition">
            Blog
          </Link>

          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-orange-600 transition"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
