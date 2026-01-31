"use client";

import { useEffect, useState } from "react";
import api from "@/src/lib/api";
import Link from "next/link";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const res = await api.get("/blogs/admin");
      setBlogs(res.data);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: number) => {
    if (!confirm("Delete this article?")) return;
    await api.delete(`/blogs/${id}`);
    loadBlogs();
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Publications
          </h1>
          <p className="text-gray-500 mt-1">
            Manage enterprise logistics articles & insights
          </p>
        </div>

        <Link
          href="/admin/dashboard/create"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition font-semibold"
        >
          + New Article
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((b) => (
              <tr
                key={b.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="p-4 font-medium">{b.title}</td>

                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      b.published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {b.published ? "Published" : "Draft"}
                  </span>
                </td>

                <td className="p-4 text-center">
                  {new Date(b.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4 flex justify-center gap-5">
                  <Link
                    href={`/admin/dashboard/edit/${b.id}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteBlog(b.id)}
                    className="text-red-600 font-medium hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
