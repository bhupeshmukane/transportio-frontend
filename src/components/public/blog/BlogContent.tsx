export default function BlogContent({ content }: { content: string }) {
  return (
    <article
      className="prose prose-lg lg:prose-xl prose-neutral max-w-none leading-relaxed
                 prose-headings:font-semibold prose-headings:tracking-tight
                 prose-p:leading-8
                 prose-img:rounded-xl prose-img:shadow-lg
                 prose-blockquote:border-l-4 prose-blockquote:border-gray-300
                 prose-blockquote:pl-6 prose-blockquote:text-gray-600"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
