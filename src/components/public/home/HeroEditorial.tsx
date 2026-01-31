"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroEditorial({ blogs = [] }: { blogs?: any[] }) {
  if (!Array.isArray(blogs) || blogs.length === 0) return null;

  const main = blogs[0];
  const side = blogs.slice(1, 4);

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Main Hero */}
        <motion.div
  whileHover={{ scale: 1.01 }}
  transition={{ type: "spring", stiffness: 120, damping: 14 }}
  className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group"
>

          <img
            src="/images/hero-logistics.jpg"
            alt="Logistics Intelligence"
            className="h-[480px] w-full object-cover scale-105 transition-transform duration-[1400ms] group-hover:scale-[1.12]"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 backdrop-blur-[1px]" />

          {/* Glass layer */}
          <div className="absolute inset-0 backdrop-[1px]" />

          {/* Content */}
          <div className="absolute bottom-0 p-10 max-w-3xl">
            <span className="inline-block text-xs tracking-widest uppercase text-orange-400 font-semibold">
              Featured Intelligence
            </span>

            <h1 className="mt-3 text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Logistic Intelligence
            </h1>

            <p className="text-gray-200 mt-4 leading-relaxed">
              {main.seoDesc ||
                "Enterprise logistics intelligence on automation, freight analytics, and global supply chain optimization."}
            </p>
          </div>
        </motion.div>

        {/* Side Insights */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold border-b pb-3">
            Executive Insights
          </h3>

          {side.map((b) => (
            
            <Link
              key={b.id}
              href={`/blog/${b.slug}`}
              className="flex gap-5 group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={b.thumbnail}
                  alt={b.title}
                  className="w-28 h-20 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div>
                <h4 className="font-semibold leading-snug group-hover:text-orange-600 transition">
                  {b.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Enterprise Logistics • 6 min read
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
