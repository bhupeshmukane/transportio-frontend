import Link from "next/link";


export default function MegaNavbar() {
return (
<div className="border-b bg-white">
<div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-4">
<Link href="/" className="text-2xl font-bold tracking-tight">
Logistics<span className="text-blue-600">Insights</span>
</Link>


<nav className="hidden md:flex gap-8 text-sm font-medium">
    <Link href="/">Home</Link>
<Link href="/blog">Articles</Link>
<Link href="/admin/login">Login</Link>
<Link href="/about">About</Link>
</nav>
</div>
</div>
);
}


