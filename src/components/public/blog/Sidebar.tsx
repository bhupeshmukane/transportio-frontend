import Link from "next/link";

export default function Sidebar({ blogs }: { blogs: any[] }) {
  return (
    <aside className="space-y-12 sticky top-24">
      {/* Recent */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-3 mb-5">
          Recent Articles
        </h3>

        <div className="space-y-4">
          {blogs.slice(0, 5).map((b) => (
            <Link
              key={b.id}
              href={`/blog/${b.slug}`}
              className="block text-sm leading-snug hover:text-blue-600 transition"
            >
              {b.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-3 mb-5">
          Categories
        </h3>

        <ul className="space-y-3 text-sm">
          <li>Logistics</li>
          <li>Freight</li>
          <li>Warehousing</li>
          <li>Supply Chain</li>
          <li>Technology</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-slate-100 p-6 rounded-xl">
        <h3 className="font-semibold text-lg">Newsletter</h3>
        <p className="text-sm text-slate-600 mt-2">
          Get weekly logistics insights delivered to your inbox.
        </p>

        <input
          placeholder="Enter your email"
          className="w-full mt-4 px-3 py-2 border rounded-lg text-sm"
        />

        <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">
          Subscribe
        </button>
      </div>
    </aside>
  );
}
