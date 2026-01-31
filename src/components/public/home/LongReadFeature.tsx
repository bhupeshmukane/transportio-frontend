"use client";

import Link from "next/link";

type Blog = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  seoDesc?: string;
};

export default function LongReadFeature({ blog }: { blog?: Blog }) {
  if (!blog) return null;

  return (
    <section className="bg-[#0b1220] text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Content */}
        <div>
          <span className="inline-block text-xs tracking-widest uppercase text-orange-400 font-semibold mb-5">
            Executive Deep Analysis
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {blog.title}
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
            {blog.seoDesc ||
              "In-depth strategic intelligence on logistics modernization, freight analytics, automation, and global supply chain transformation."}
          </p>

          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-3 mt-10 bg-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 transition"
          >
            Read Executive Analysis
            →
          </Link>
        </div>

        {/* Visual */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
  <img
    src={blog.thumbnail}
    alt={blog.title}
    className="object-cover w-full h-[460px] scale-[1.05] transition-transform duration-[1200ms] hover:scale-[1.12]"
  />
  <div className="image-overlay" />
</div>


      </div>
    </section>
  );
}
