"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import api from "@/src/lib/api";
import BlogDetailSkeleton from "@/src/components/ui/skeletons/BlogDetailSkeleton";
import Breadcrumb from "@/src/components/ui/Breadcrumb";
import ScrollProgress from "@/src/components/public/common/ScrollProgress";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get(`/blogs/slug/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  if (loading) return <BlogDetailSkeleton />;
  if (!blog) return <div className="text-center py-32">Blog not found</div>;

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <ScrollProgress />

      {/* Floating Share Bar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        {[
          { icon: Twitter },
          { icon: Linkedin },
          { icon: Facebook },
          { icon: LinkIcon, action: copyLink },
        ].map((Item, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 transition"
            onClick={Item.action}
          >
            <Item.icon size={18} />
          </motion.button>
        ))}
      </div>

      {/* HERO */}
      <section className="relative h-[72vh] min-h-[540px] overflow-hidden">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover scale-[1.08]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

        <div className="relative max-w-[1100px] mx-auto px-6 h-full flex flex-col justify-end pb-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: blog.title },
            ]}
          />

          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-6 max-w-4xl">
            {blog.title}
          </h1>

          <div className="text-gray-300 text-sm mt-6 flex items-center gap-4">
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>TransportIO Intelligence</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-[860px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="prose prose-logistics max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </>
  );
}
