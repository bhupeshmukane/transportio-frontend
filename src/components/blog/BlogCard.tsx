"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
}: BlogCardProps) {
  return (
    <motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl"
>
  <div className="overflow-hidden">
    <img
      src={image}
      className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-5">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-textMuted dark:text-slate-400">
      {excerpt}
    </p>
  </div>
</motion.div>

  );
}
