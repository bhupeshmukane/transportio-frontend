import { motion } from "framer-motion";

const segments = [
  { title: "Supply Chain", desc: "Global trade, sourcing & inventory analytics" },
  { title: "Freight & Shipping", desc: "Ocean, air, rail & trucking intelligence" },
  { title: "Warehousing", desc: "Automation, robotics & smart storage systems" },
  { title: "Cold Chain", desc: "Pharma & temperature controlled logistics" },
  { title: "Ports & Maritime", desc: "Port tech, shipping lanes & trade flows" },
  { title: "Fleet & Telematics", desc: "Connected vehicles & predictive maintenance" },
];

export default function IndustryGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">
      <h2 className="text-3xl font-extrabold mb-12">
        Logistics Intelligence Verticals
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {segments.map((s, i) => (
          <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: i * 0.06 }}
  className="p-8 rounded-2xl border bg-white hover-lift soft-shadow"
>

            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              {s.desc}
            </p>
            
           </motion.div>
         
        ))}
        
      </div>
      
    </section>
  );
}
