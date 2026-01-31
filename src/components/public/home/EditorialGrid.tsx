export default function EditorialGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">
          Industry Intelligence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-52 bg-slate-200" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">
                  Logistics Market Trends & Forecast
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  Detailed breakdown of industry evolution and emerging patterns.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
