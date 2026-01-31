"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Global Partners" },
  { value: "120+", label: "Countries Covered" },
  { value: "1M+", label: "Shipments Tracked" },
  { value: "99.9%", label: "System Uptime" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-4xl font-bold">{s.value}</h3>
            <p className="mt-2 text-slate-200">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
