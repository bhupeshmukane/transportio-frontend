import Link from "next/link";

export default function FeaturedBlogCard({ blog }: { blog: any }) {
  if (!blog) return null;

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <img
        src={blog.thumbnail || "/placeholder.jpg"}
        className="rounded-xl h-[360px] w-full object-cover"
        alt={blog.title}
      />

      <div>
        <span className="text-blue-600 font-semibold uppercase text-xs tracking-wide">
          Featured
        </span>

        <h2 className="mt-3 text-4xl font-bold leading-tight">
          {blog.title}
        </h2>

        <p className="mt-4 text-lg text-slate-600 line-clamp-3">
          {stripHtml(blog.content).slice(0, 200)}...
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-block mt-6 text-blue-600 font-semibold"
        >
          Read Full Story →
        </Link>
      </div>
    </div>
  );
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}
