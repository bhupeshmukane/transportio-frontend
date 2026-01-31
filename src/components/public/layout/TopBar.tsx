import { Search } from "lucide-react";


export default function TopBar() {
return (
<div className="bg-slate-950 text-slate-200 text-sm">
<div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-2">
<div className="flex items-center gap-4">
<span>Logistics Intelligence Platform</span>
</div>
<div className="flex items-center gap-6">
<button className="hover:text-white">Subscribe</button>
<button className="hover:text-white">Advertise</button>
<button className="hover:text-white">Login</button>
</div>
</div>
</div>
);
}