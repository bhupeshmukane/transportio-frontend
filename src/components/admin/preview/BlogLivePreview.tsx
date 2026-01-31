export default function BlogLivePreview({
  title,
  content,
  thumbnail,
}: {
  title: string;
  content: string;
  thumbnail: string;
}) {
  return (
    <div className="bg-white border rounded-2xl p-8 shadow-lg overflow-y-auto max-h-[85vh]">
      <div className="max-w-[800px] mx-auto">

        {thumbnail && (
          <img
            src={thumbnail}
            className="rounded-xl mb-8"
          />
        )}

        <h1 className="text-4xl font-extrabold leading-tight mb-6">
          {title || "Live Blog Preview Title"}
        </h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: content || "<p>Start writing your blog content...</p>",
          }}
        />
      </div>
    </div>
  );
}
