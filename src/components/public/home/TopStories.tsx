export default function TopStories() {
  const stories = [
    "Supply Chain Disruptions Continue in 2026",
    "Electric Trucks & Future of Freight",
    "Port Automation: The Next Industrial Shift",
    "Warehouse Robotics Boom",
  ];

  return (
    <section className="max-w-[1300px] mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-8">Top Stories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stories.map((title, i) => (
          <div
            key={i}
            className="border rounded-xl p-5 hover:shadow-xl transition"
          >
            <div className="h-44 bg-slate-200 rounded-lg mb-4" />
            <h3 className="font-semibold leading-snug">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
