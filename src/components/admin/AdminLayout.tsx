"use client";

import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-slate-100">
      
      {/* Sidebar */}
      <aside className="bg-primary text-white p-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>

        <nav className="mt-10 space-y-4">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/dashboard/blogs">Blogs</Link>
          <Link href="/admin/dashboard/create">Create Blog</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-8">{children}</main>
    </div>
  );
}
