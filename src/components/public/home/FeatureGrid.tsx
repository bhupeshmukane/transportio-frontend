import Image from "next/image";
export default function FeaturedGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-14">
      <h2 className="text-2xl font-bold mb-10 border-b pb-4">
        Featured Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <article key={i} className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/hero-logistics.jpg"
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                alt="Logistics Insight"
              />
            </div>

            <h3 className="mt-5 font-semibold text-lg leading-snug group-hover:text-orange-600 transition">
              Optimizing Cold Chain Logistics using AI Forecasting Models
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Predictive analytics reducing spoilage and improving cold storage
              efficiency across enterprise logistics.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
