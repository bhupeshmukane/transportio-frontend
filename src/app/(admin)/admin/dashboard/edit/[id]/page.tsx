"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/src/lib/api";
import RichEditor from "@/src/components/editor/RichEditor";
import Breadcrumb from "@/src/components/ui/Breadcrumb";
import useAutoSave from "@/src/hooks/useAutoSave";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    const res = await api.get(`/blogs/id/${id}`);
    setTitle(res.data.title);
    setContent(res.data.content);
    setThumbnail(res.data.thumbnail);
  };

  useAutoSave(`draft_edit_${id}`, {
    title,
    content,
    thumbnail,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await api.put(`/blogs/${id}`, {
      title,
      content,
      thumbnail,
      published: true,
    });

    localStorage.removeItem(`draft_edit_${id}`);

    router.push("/admin/dashboard/blogs");
  };

  return (
    <div className="max-w-5xl">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Blogs", href: "/admin/dashboard/blogs" },
          { label: "Edit Blog" },
        ]}
      />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Blog</h1>

        <button
          type="button"
          onClick={() => setPreview(!preview)}
          className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
        >
          {preview ? "Edit Mode" : "Preview Mode"}
        </button>
      </div>

      {preview ? (
        <article className="prose prose-lg max-w-none bg-white p-8 rounded-xl border">
          <h1>{title}</h1>{thumbnail && (
          <img src={thumbnail} className="rounded-xl" />
          )}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            placeholder="Title"
            className="w-full p-3 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Thumbnail Image URL"
            className="w-full p-3 border rounded-lg"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />

          <RichEditor value={content} onChange={setContent} />

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Update Blog
          </button>
        </form>
      )}
    </div>
  );
}
