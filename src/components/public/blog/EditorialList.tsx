import EditorialRow from "./EditorialRow";

export default function EditorialList({ blogs }: { blogs: any[] }) {
  return (
    <section className="space-y-10">
      {blogs.map((blog) => (
        <EditorialRow key={blog.id} blog={blog} />
      ))}
    </section>
  );
}
