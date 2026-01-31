"use client";
import GlassCard from "@/src/components/ui/GlassCard";
import { motion } from "framer-motion";

const features = [
  { title: "Global Logistics Intelligence", desc: "AI-powered logistics insights for operational excellence." },
  { title: "Real-Time Industry Updates", desc: "Latest supply chain and logistics trends." },
  { title: "Secure Admin Platform", desc: "Enterprise-grade admin dashboard with secure access." },
  { title: "Data Driven Insights", desc: "Smart analytics for logistics optimization." },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center">
          Why Choose Our Platform
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((f, i) => (
  <motion.div key={i} whileHover={{ y: -8 }}>

  <GlassCard className="p-6">
    <h3 className="text-xl font-semibold">{f.title}</h3>
    <p className="mt-3 text-textMuted">{f.desc}</p>
  </GlassCard>
</motion.div>


          ))}
        </div>
      </div>
    </section>
  );
}
