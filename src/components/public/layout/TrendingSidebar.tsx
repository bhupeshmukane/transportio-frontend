import Link from "next/link";

export default function TrendingSidebar({ blogs }: { blogs: any[] }) {
  return (
    <aside className="bg-white p-6 rounded-xl shadow sticky top-24">
      <h3 className="text-xl font-bold mb-6">Trending</h3>

      <div className="space-y-5">
        {blogs.slice(0, 5).map((b, i) => (
          <Link
            key={b.id}
            href={`/blog/${b.slug}`}
            className="flex gap-4 group"
          >
            <span className="text-blue-600 font-bold text-lg">
              {i + 1}
            </span>

            <p className="text-sm font-medium leading-snug group-hover:text-blue-600 transition">
              {b.title}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
