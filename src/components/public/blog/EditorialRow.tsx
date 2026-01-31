import Link from "next/link";

export default function EditorialRow({ blog }: { blog: any }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="grid md:grid-cols-[220px_1fr] gap-6 items-start group border-b pb-8"
    >
      <div className="h-36 rounded-lg overflow-hidden">
        <img
          src={blog.thumbnail || "/placeholder.jpg"}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold leading-snug group-hover:text-blue-600 transition">
          {blog.title}
        </h2>

        <p className="mt-2 text-slate-600 leading-relaxed line-clamp-2">
          {stripHtml(blog.content).slice(0, 180)}...
        </p>

        <p className="mt-2 text-xs text-slate-500">
          {new Date(blog.createdAt).toDateString()}
        </p>
      </div>
    </Link>
  );
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}
