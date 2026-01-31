export default function NewsletterCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold">Weekly Logistics Brief</h3>
      <p className="text-sm opacity-90 mt-2">
        Industry insights delivered weekly.
      </p>
      <input
        className="mt-4 w-full p-2 rounded text-black"
        placeholder="Enter your email"
      />
      <button className="mt-3 w-full bg-black/20 py-2 rounded">
        Subscribe
      </button>
    </div>
  );
}
