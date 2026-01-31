export default function Footer() {
return (
<footer className="bg-slate-950 text-slate-300 mt-24">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16">
<div>
<h3 className="text-white font-semibold text-lg">Logistics Insights</h3>
<p className="text-sm mt-3 text-slate-400">
Enterprise-grade logistics media platform delivering industry intelligence.
</p>
</div>


<div>
<h4 className="text-white font-semibold">Content</h4>
<ul className="space-y-2 mt-4 text-sm">
<li>Articles</li>
<li>Case Studies</li>
<li>Whitepapers</li>
<li>Webinars</li>
</ul>
</div>


<div>
<h4 className="text-white font-semibold">Topics</h4>
<ul className="space-y-2 mt-4 text-sm">
<li>AI in Logistics</li>
<li>Warehousing</li>
<li>Transport</li>
<li>Supply Chain</li>
</ul>
</div>


<div>
<h4 className="text-white font-semibold">Company</h4>
<ul className="space-y-2 mt-4 text-sm">
<li>About</li>
<li>Contact</li>
<li>Advertise</li>
<li>Careers</li>
</ul>
</div>
</div>


<div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
© 2026 Logistics Insights. All rights reserved.
</div>
</footer>
);
}

