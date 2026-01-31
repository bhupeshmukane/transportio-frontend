export default function ContactPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>

      <p className="text-gray-600 text-lg mb-8">
        Reach out for logistics consulting, partnerships, or platform support.
      </p>

      <form className="grid gap-6 max-w-xl">
        <input
          className="border px-4 py-3 rounded-lg"
          placeholder="Your Name"
        />

        <input
          className="border px-4 py-3 rounded-lg"
          placeholder="Email"
        />

        <textarea
          className="border px-4 py-3 rounded-lg h-32"
          placeholder="Message"
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
