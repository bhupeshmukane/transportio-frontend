"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Blog = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  seoDesc?: string;
};

export default function TrendingGrid({ blogs = [] }: { blogs?: Blog[] }) {
  if (!Array.isArray(blogs) || blogs.length === 0) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-28">
      <div className="flex items-end justify-between mb-14">
        <div>
          <span className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
            Intelligence Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Strategic Intelligence
          </h2>
        </div>

        <Link
          href="/blog"
          className="text-sm font-semibold text-orange-600 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.slice(0, 6).map((b, i) => (
          <motion.article
            key={b.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden border bg-white soft-shadow hover-lift"
          >
            <Link href={`/blog/${b.slug}`}>
              <div className="relative overflow-hidden">
                <img
                  src={b.thumbnail}
                  alt={b.title}
                  className="h-64 w-full object-cover transition-transform duration-[1000ms] group-hover:scale-110"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              <div className="p-8">
                <h3 className="font-semibold text-xl leading-snug group-hover:text-orange-600 transition">
                  {b.title}
                </h3>

                <p className="text-gray-600 text-sm mt-4 line-clamp-3 leading-relaxed">
                  {b.seoDesc ||
                    "Enterprise logistics intelligence covering automation, freight analytics and supply chain modernization."}
                </p>

                <div className="mt-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Enterprise Logistics
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
