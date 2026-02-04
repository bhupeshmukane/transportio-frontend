"use client";

import { useEffect, useState } from "react";
import api from "@/src/lib/api";

import HeroEditorial from "@/src/components/public/home/HeroEditorial";
import BreakingStrip from "@/src/components/public/home/BreakingStrip";
import TrendingGrid from "@/src/components/public/home/TrendingGrid";
import LongReadFeature from "@/src/components/public/home/LongReadFeature";
import IndustryGrid from "@/src/components/public/home/IndustryGrid";
import EnterpriseNewsletter from "@/src/components/public/home/EnterpriseNewsletter";

import { Blog } from "@/src/types/blog";
import { SAMPLE_BLOGS } from "@/src/data/sampleBlogs";
import Skeleton from "@/src/components/ui/Skeleton";

/**
 * 🔴 IMPORTANT
 * - true  → use sample data (UI testing / demos / client preview)
 * - false → use real backend data
 */
const USE_SAMPLE_DATA = false;

export default function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (USE_SAMPLE_DATA) {
      // ✅ SAMPLE DATA MODE
      setBlogs(SAMPLE_BLOGS.slice(0, 8));
      setLoading(false);
      return;
    }

    // ✅ REAL API MODE
    const load = async () => {
      try {
        const res = await api.get("/blogs?page=1&limit=8");
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error("Home blogs fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  /* -------------------- LOADING STATE -------------------- */
  if (loading) {
    return (
      <main className="max-w-[1400px] mx-auto px-6 py-20 space-y-16">
        <div className="h-[460px] rounded-3xl bg-gray-100 animate-pulse" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[320px] rounded-2xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      </main>
    );
  }

  /* -------------------- MAIN HOME -------------------- */
  return (
    <main>
      {/* HERO */}
      <HeroEditorial blogs={blogs} />

      {loading && <Skeleton />}
 
      {/* BREAKING STRIP */}
      <BreakingStrip blogs={blogs} />

      {/* INDUSTRY VERTICALS */}
      <IndustryGrid />

      {/* TRENDING / GRID */}
      <TrendingGrid blogs={blogs} />

      {/* LONG READ FEATURE */}
      <LongReadFeature blog={blogs[0]} />

      {/* ABOUT SECTION (Navbar → About Us) */}
      <section
        id="about"
        className="bg-gray-50 border-t border-b"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            About TransportIO Intelligence
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            TransportIO is an enterprise-grade logistics intelligence platform delivering
            deep insights into global supply chains, freight movement, automation,
            port intelligence, and infrastructure modernization.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <EnterpriseNewsletter />

      {/* CONTACT SECTION (Navbar → Contact Us) */}
      <section
        id="contact"
        className="bg-white border-t"
      >
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Contact TransportIO
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            For editorial partnerships, enterprise intelligence, or collaboration,
            connect with the TransportIO team.
          </p>

          <a
            href="mailto:contact@transportio.com"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 transition"
          >
            contact@transportio.com
          </a>
        </div>
      </section>
    </main>
  );
}
