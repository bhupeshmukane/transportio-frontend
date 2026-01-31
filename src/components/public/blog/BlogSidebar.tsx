import Link from "next/link";

export default function BlogSidebar({ blogs }: { blogs: any[] }) {
  return (
    <div className="space-y-10">

      {/* NewsletterBox */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold">Industry Brief</h3>
        <p className="text-sm text-gray-600 mt-2">
          Weekly logistics intelligence directly to your inbox.
        </p>

        <input
          className="mt-4 w-full border rounded-lg px-4 py-2 text-sm"
          placeholder="Enter your email"
        />

        <button className="mt-3 w-full bg-black text-white py-2 rounded-lg text-sm font-medium">
          Subscribe
        </button>
      </div>

      {/* Trending */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Trending</h3>
        <div className="space-y-4">
          {blogs.slice(0, 5).map((b) => (
            <Link
              key={b.id}
              href={`/blog/${b.slug}`}
              className="block hover:opacity-70 transition"
            >
              <p className="text-sm font-medium leading-snug">
                {b.title}
              </p>
              <span className="text-xs text-gray-500">
                {new Date(b.createdAt).toLocaleDateString()}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
