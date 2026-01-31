export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="relative h-[420px] w-full">
        <img
          src="/images/shipping-port-sunset-cargo-airplanes-trucks.jpg"
          alt="Global Logistics Network"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Powering the Future of Global Logistics Intelligence
          </h1>

          <p className="text-gray-200 mt-5 max-w-2xl text-lg">
            Advanced insights, analytics, and automation shaping the next generation
            of supply chain operations.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1100px] mx-auto px-6 py-20 space-y-16">

        {/* Intro */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            TransportIO is an enterprise-grade logistics intelligence platform designed
            to deliver actionable insights, operational analytics, and automation strategies
            for modern supply chain ecosystems. We combine deep industry knowledge with
            advanced technology to help organizations operate faster, smarter, and more efficiently.
          </p>
        </div>

        {/* Mission + Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          <div className="p-8 rounded-2xl border bg-slate-50">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower logistics leaders with cutting-edge intelligence, enabling
              data-driven decisions across transportation, warehousing, freight management,
              and global supply chains.
            </p>
          </div>

          <div className="p-8 rounded-2xl border bg-slate-50">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the world’s most trusted logistics intelligence platform — driving
              digital transformation, sustainability, and efficiency across global trade networks.
            </p>
          </div>

        </div>

        {/* What We Deliver */}
        <div>
          <h2 className="text-3xl font-bold mb-6">What We Deliver</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Industry Intelligence</h4>
              <p className="text-gray-600 text-sm">
                Deep insights into logistics technology, automation, AI adoption, and market trends.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Operational Analytics</h4>
              <p className="text-gray-600 text-sm">
                Data-driven strategies for improving freight efficiency, warehouse productivity,
                and transport optimization.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Enterprise Content</h4>
              <p className="text-gray-600 text-sm">
                Executive-level research, reports, case studies, and industry briefings.
              </p>
            </div>

          </div>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Building the Intelligence Layer of Global Logistics
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TransportIO exists to simplify complexity, unlock efficiency, and power the digital
            evolution of logistics networks worldwide.
          </p>
        </div>

      </section>
    </main>
  );
}
