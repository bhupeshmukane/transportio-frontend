"use client";

import { useState } from "react";
import api from "@/src/lib/api";

export default function ImageUploader({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);

    const res = await api.post("/cloud-upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    onUpload(res.data.url);
    setUploading(false);
  }

  return (
    <div className="border-2 border-dashed rounded-xl p-6 text-center">
      <input
        type="file"
        onChange={handleUpload}
        className="hidden"
        id="fileUpload"
      />

      <label htmlFor="fileUpload" className="cursor-pointer">
        {uploading ? "Uploading..." : "Click to upload image"}
      </label>
    </div>
  );
}
