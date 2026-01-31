"use client";

import Link from "next/link";

type Blog = {
  id: number;
  slug: string;
  title: string;
};

export default function BreakingStrip({ blogs = [] }: { blogs?: Blog[] }) {
  if (!Array.isArray(blogs) || blogs.length === 0) return null;

  return (
    <div className="border-y bg-black">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto scrollbar-hide">

        <span className="px-4 py-1 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Intelligence
        </span>

        {blogs.slice(0, 5).map((b) => (
          <Link
            key={b.id}
            href={`/blog/${b.slug}`}
            className="text-sm text-gray-300 whitespace-nowrap hover:text-orange-400 transition"
          >
            {b.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
