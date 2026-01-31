"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import api from "@/src/lib/api";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.get(`/blogs?category=${category}`);
      setBlogs(res.data);
    };
    load();
  }, [category]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category.replace("-", " ")}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((b) => (
          <div key={b.id} className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {b.content.replace(/<[^>]+>/g, "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
