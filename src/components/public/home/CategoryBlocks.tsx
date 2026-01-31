const categories = [
  "Supply Chain",
  "Freight",
  "Warehousing",
  "AI & Automation",
  "Cold Chain",
  "Maritime",
];

export default function CategoryBlocks() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center font-semibold"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
