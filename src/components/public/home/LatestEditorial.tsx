"use client";

import Link from "next/link";

export default function LatestEditorial({ blogs }: { blogs: any[] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-2xl font-bold mb-8 border-b pb-3">
        Latest Articles
      </h2>

      <div className="space-y-10">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="grid md:grid-cols-[260px_1fr] gap-6 items-start group"
          >
            <div className="h-44 overflow-hidden rounded-lg">
              <img
                src={blog.thumbnail || "/placeholder.jpg"}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-snug group-hover:text-blue-600 transition">
                {blog.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed line-clamp-2">
                {stripHtml(blog.content).slice(0, 180)}...
              </p>

              <p className="mt-2 text-xs text-slate-500">
                {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}
