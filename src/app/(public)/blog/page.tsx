"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import api from "@/src/lib/api";
import ScrollProgress from "@/src/components/public/common/ScrollProgress";
import BlogCardSkeleton from "@/src/components/ui/skeletons/BlogCardSkeleton";
import Breadcrumb from "@/src/components/ui/Breadcrumb";
import { SAMPLE_BLOGS } from "@/src/data/sampleBlogs";

const USE_SAMPLE_DATA = true; // 🔴 set false in production

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);

  const loadBlogs = async () => {
    if (!hasMore || loading) return;

    try {
      setLoading(true);

      if (USE_SAMPLE_DATA) {
        const chunk = SAMPLE_BLOGS.slice((page - 1) * 6, page * 6);
        setBlogs((prev) => [...prev, ...chunk]);
        setHasMore(page * 6 < SAMPLE_BLOGS.length);
        return;
      }

      const res = await api.get(`/blogs?page=${page}&limit=6`);

      setBlogs((prev) => [...prev, ...res.data.blogs]);
      setHasMore(page < res.data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setPage((p) => p + 1);
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <main className="bg-white min-h-screen">
      <ScrollProgress />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Logistics Intelligence Hub
          </h1>
          <p className="text-gray-600 mt-5 max-w-2xl text-lg leading-relaxed">
            Enterprise-grade logistics insights, freight intelligence & global supply chain analytics.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((b, i) => (
          <motion.article
            key={`${b.id}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <Link href={`/blog/${b.slug}`}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={b.thumbnail}
                  alt={b.title}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-heading font-semibold leading-snug">
                  {b.title}
                </h2>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {b.seoDesc ||
                    "Enterprise logistics insights covering automation, freight & ports."}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}

        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <BlogCardSkeleton key={`sk-${i}`} />
          ))}
      </section>

      <div ref={loaderRef} className="h-12"></div>
    </main>
  );
}
