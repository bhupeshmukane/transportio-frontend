"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/src/lib/api";
import RichEditor from "@/src/components/editor/RichEditor";
import BlogLivePreview from "@/src/components/admin/preview/BlogLivePreview";
import useAutoSave from "@/src/hooks/useAutoSave";

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useAutoSave("draft_create_blog", {
    title,
    content,
    thumbnail,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await api.post("/blogs", {
      title,
      content,
      thumbnail,
      published: true,
    });

    router.push("/admin/dashboard/blogs");
  };

  return (
    <div className="max-w-[1600px]">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Editor */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            placeholder="Blog title"
            className="w-full p-4 border rounded-xl text-lg font-semibold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Thumbnail image URL"
            className="w-full p-3 border rounded-xl"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />

          <RichEditor value={content} onChange={setContent} />

          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition">
            Publish Blog
          </button>
        </form>

        {/* Live Preview */}
        <BlogLivePreview
          title={title}
          content={content}
          thumbnail={thumbnail}
        />
      </div>
    </div>
  );
}
