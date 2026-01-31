import Link from "next/link";
import Image from "next/image";

export default function BlogFeed() {
  return (
    <div className="space-y-16">
      {[1, 2, 3, 4, 5].map((i) => (
        <article
          key={i}
          className="group grid grid-cols-1 md:grid-cols-3 gap-8 items-start cursor-pointer"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/hero-logistics.jpg"
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
              alt="Logistics Insight"
            />
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2">
              Supply Chain
            </p>

            <h2 className="text-2xl font-bold leading-snug group-hover:text-orange-600 transition">
              AI Powered Demand Forecasting in Modern Logistics Networks
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              How artificial intelligence and predictive analytics are
              revolutionizing global logistics planning, inventory optimization,
              and transportation efficiency.
            </p>

            <div className="flex items-center gap-4 mt-5 text-sm text-gray-500">
              <span>By Editorial Team</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Jan 2026</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
