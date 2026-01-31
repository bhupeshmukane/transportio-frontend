"use client";

import heroImage from "@/src/assets/hero-logistics.jpg";
import Image from "next/image";

export default function HeroFeature() {
  return (
    <div
      className="relative h-[520px] bg-cover bg-center rounded-3xl shadow-xl overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-logistics.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-end pb-20">
        <span className="text-orange-400 text-sm uppercase tracking-wide font-semibold">
          Featured Insight
        </span>

        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mt-4 max-w-3xl tracking-tight">
          AI & Automation Transforming Global Logistics Intelligence
        </h1>

        <p className="text-gray-200 mt-6 max-w-2xl leading-relaxed text-lg">
          Deep industry analysis on enterprise freight systems, predictive supply
          chains, automation, and next-generation logistics modernization.
        </p>
      </div>
    </div>
  );
}
