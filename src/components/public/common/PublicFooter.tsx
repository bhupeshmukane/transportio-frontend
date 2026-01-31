export default function PublicFooter() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="font-semibold text-white text-lg mb-4">
            TransportIO
          </h3>
          <p className="text-sm">
            Enterprise logistics intelligence platform delivering expert insights,
            industry research and professional editorial coverage.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Content</h4>
          <ul className="space-y-2 text-sm">
            <li>Articles</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>Research</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Supply Chain</li>
            <li>Freight</li>
            <li>Warehousing</li>
            <li>Cold Chain</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Advertise</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm">
        © {new Date().getFullYear()} TransportIO. All rights reserved.
      </div>
    </footer>
  );
}
