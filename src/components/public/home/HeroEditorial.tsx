"use client";

import Link from "next/link";

type Blog = {
  title?: string;
  seoDesc?: string;
};

export default function HeroEditorial({ blogs }: { blogs?: Blog[] }) {
  const main = blogs?.[0];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* HERO IMAGE — ALWAYS */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/hero-logistics.jpg"
            alt="TransportIO Logistics Intelligence"
            className="h-[460px] w-full object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 p-10">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
              Featured Insight
            </span>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 max-w-3xl">
              {main?.title || "Global Logistics Intelligence & Supply Chain Strategy"}
            </h1>

            <p className="text-gray-200 mt-4 max-w-xl">
              {main?.seoDesc ||
                "Enterprise-grade insights into freight, ports, automation and global trade flows."}
            </p>
          </div>
        </div>

        {/* SIDE INSIGHTS (optional) */}
        <div className="space-y-6">
          {(blogs || []).slice(1, 4).map((b, i) => (
            <Link key={i} href="/blog" className="block">
              <div className="p-4 border rounded-xl hover:shadow-md transition">
                <h4 className="font-semibold">{b.title}</h4>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
