export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-heading font-bold">LOGISTIX</h3>
          <p className="mt-3 text-slate-300">
            Enterprise logistics intelligence platform delivering world-class operational insights.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>Home</li>
            <li>Blogs</li>
            <li>Admin</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-slate-300">support@logistix.com</p>
          <p className="text-slate-300">+91 98765 43210</p>
        </div>
      </div>

      <div className="mt-10 text-center text-slate-400">
        © {new Date().getFullYear()} LOGISTIX. All rights reserved.
      </div>
    </footer>
  );
}
