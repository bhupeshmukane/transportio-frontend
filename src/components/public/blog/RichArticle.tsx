export default function RichArticle({ content }: { content: string }) {
  return (
    <article
      className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:leading-8 prose-img:rounded-xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
