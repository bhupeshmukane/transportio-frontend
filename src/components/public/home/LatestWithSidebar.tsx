import Image from "next/image";
export default function LatestWithSidebar() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Article Feed */}
        <div className="lg:col-span-2 space-y-12">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="flex gap-6 group cursor-pointer">
              <div className="overflow-hidden rounded-xl w-52 h-32 shrink-0">
                <img
                  src="/images/hero-logistics.jpg"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  alt="Logistics Insight"
                />
              </div>

              <div>
                <h3 className="font-semibold text-xl leading-snug group-hover:text-orange-600 transition">
                  Digital Freight Platforms: Are They Replacing Traditional Brokers?
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  How technology-driven freight platforms are redefining global
                  shipping networks and broker ecosystems.
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Freight Tech • 7 min read
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          <div>
            <h4 className="font-semibold text-lg border-b pb-3 mb-6">
              Trending Articles
            </h4>

            <ul className="space-y-4 text-sm">
              {[1, 2, 3, 4, 5].map((i) => (
                <li
                  key={i}
                  className="hover:text-orange-600 cursor-pointer transition"
                >
                  Smart Ports: AI Driven Maritime Logistics Systems
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl">
            <h4 className="font-semibold mb-4 text-lg">
              Executive Industry Brief
            </h4>

            <p className="text-gray-300 text-sm mb-6">
              Weekly enterprise-grade logistics intelligence.
            </p>

            <input
              placeholder="Your business email"
              className="w-full p-3 rounded-lg text-black"
            />

            <button className="w-full bg-orange-600 py-3 mt-4 rounded-lg font-semibold hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
