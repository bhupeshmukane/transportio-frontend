"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Image,
  Search,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.replace("/admin/login");
  };

  const nav = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Publications",
      href: "/admin/dashboard/blogs",
      icon: FileText,
    },
    {
      label: "Create Article",
      href: "/admin/dashboard/create",
      icon: PlusCircle,
    },
    {
      label: "Media Library",
      href: "#",
      icon: Image,
    },
    {
      label: "SEO Intelligence",
      href: "#",
      icon: Search,
    },
  ];

  return (
    <aside className="w-[260px] bg-[#0b1220] text-white min-h-screen flex flex-col justify-between border-r border-white/10">
      <div>
        {/* Brand */}
        <div className="px-6 py-5 border-b border-white/10">
          <h2 className="text-xl font-extrabold tracking-tight">
            TransportIO
          </h2>
          <p className="text-xs text-gray-400 mt-1 tracking-wide uppercase">
            Enterprise Admin
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {nav.map((item, i) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                  ${
                    active
                      ? "bg-orange-600 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-3 px-6 py-4 border-t border-white/10 text-sm font-medium text-red-400 hover:bg-red-600 hover:text-white transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
