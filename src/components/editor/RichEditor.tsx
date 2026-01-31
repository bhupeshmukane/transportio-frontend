"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { uploadImage } from "@/src/lib/upload";

export default function RichEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      handlePaste(view, event) {
        const items = event.clipboardData?.items;
        if (!items) return false;

        for (const item of items) {
          if (item.type.startsWith("image")) {
            const file = item.getAsFile();
            if (file) uploadAndInsert(file);
          }
        }
        return false;
      },

      handleDrop(view, event) {
        const files = event.dataTransfer?.files;
        if (!files?.length) return false;

        uploadAndInsert(files[0]);
        return true;
      },
    },
  });

  const uploadAndInsert = async (file: File) => {
    const url = await uploadImage(file);
    editor?.chain().focus().setImage({ src: url }).run();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadAndInsert(file);
  };

  return (
    <div className="border rounded-xl bg-white shadow-sm">

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 p-3 border-b bg-gray-50">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="editor-btn"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="editor-btn"
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="editor-btn"
        >
          H2
        </button>

        <label className="editor-btn cursor-pointer">
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={onFileChange}
          />
        </label>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="p-6 prose max-w-none focus:outline-none"
      />
    </div>
  );
}
