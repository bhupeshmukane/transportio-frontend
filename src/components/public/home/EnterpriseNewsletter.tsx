export default function EnterpriseNewsletter() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-extrabold">
          Enterprise Logistics Intelligence Brief
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Weekly executive insights on global logistics, automation & AI adoption.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            placeholder="Business email address"
            className="px-5 py-4 rounded-xl text-black w-full sm:w-[350px]"
          />

          <button className="px-8 py-4 bg-orange-600 rounded-xl font-semibold hover:bg-orange-500 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
