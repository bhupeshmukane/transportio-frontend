import Link from "next/link";

export default function EditorialBlogCard({ blog }: { blog: any }) {
  return (
    <article className="flex gap-6 py-6 border-b">
      <img
        src={blog.thumbnail || "/placeholder.jpg"}
        className="w-36 h-28 object-cover rounded-lg"
        alt={blog.title}
      />

      <div>
        <h3 className="text-xl font-semibold leading-snug line-clamp-2">
          {blog.title}
        </h3>

        <p className="mt-2 text-slate-600 text-sm line-clamp-2">
          {stripHtml(blog.content).slice(0, 120)}...
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="text-blue-600 text-sm font-medium mt-2 inline-block"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "");
}
