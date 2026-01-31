import Link from "next/link";

export default function RelatedArticles({ blogs, currentId }: any) {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold mb-8">More Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs
          .filter((b: any) => b.id !== currentId)
          .slice(0, 4)
          .map((b: any) => (
            <Link
              key={b.id}
              href={`/blog/${b.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={b.thumbnail}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="mt-4 font-semibold leading-snug group-hover:underline">
                {b.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {new Date(b.createdAt).toLocaleDateString()}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
}
