export default function CategorySection({ title }: { title: string }) {
  return (
    <section className="max-w-[1300px] mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-sm text-orange-600 cursor-pointer">
          View All →
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-xl p-5 hover:shadow-xl transition"
          >
            <div className="h-48 bg-slate-200 rounded-lg mb-4" />
            <h3 className="font-semibold leading-snug">
              Logistics Industry Update & Strategic Insight
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
