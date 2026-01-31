"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 relative rounded-2xl overflow-hidden group shadow-xl"
        >
          <img
            src="/public/images/hero-logistics.jpg"
            className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Enterprise logistics intelligence"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 p-10">
            <span className="inline-block text-xs tracking-widest uppercase text-orange-400 font-medium mb-3">
              Featured Insight
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              AI-Driven Supply Chain Intelligence
            </h1>

            <p className="text-gray-200 mt-5 max-w-2xl leading-relaxed">
              Enterprise logistics analytics covering freight, automation, fleet intelligence & global supply chain systems.
            </p>

            <div className="mt-6 flex items-center gap-4 text-gray-300 text-sm">
              <span>Logistics Technology</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </motion.div>

        {/* Side Highlights */}
        <div className="space-y-8">
          {[
            {
              title: "Smart Warehousing: Automation Trends for 2026",
              category: "Warehousing",
            },
            {
              title: "Digital Freight Platforms Disrupt Global Shipping",
              category: "Freight",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex gap-5 group cursor-pointer"
            >
              <img
                src="/images/hero-logistics.jpg"
                className="w-32 h-24 rounded-xl object-cover group-hover:scale-105 transition"
                alt={item.title}
              />

              <div>
                <span className="text-xs uppercase tracking-wider text-orange-600">
                  {item.category}
                </span>

                <h3 className="font-semibold text-lg text-gray-900 leading-snug mt-1 group-hover:text-orange-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  6 min read
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
