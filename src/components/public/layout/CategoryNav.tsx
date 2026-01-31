export default function CategoryNav() {
  const categories = [
    "Logistics",
    
  ];

  return (
    <div className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 flex gap-8 py-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
