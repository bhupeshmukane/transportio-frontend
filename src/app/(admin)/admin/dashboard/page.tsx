"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-10 space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Enterprise Publishing Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Strategic content intelligence & logistics publishing control center
        </p>
      </div>

      {/* KPIs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Articles", value: "124" },
          { label: "Published", value: "98" },
          { label: "Drafts", value: "26" },
          { label: "Monthly Readers", value: "38K" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/admin/dashboard/create"
          className="p-8 rounded-2xl bg-black text-white hover:bg-orange-600 transition"
        >
          <h2 className="text-xl font-semibold">Create Intelligence Article</h2>
          <p className="mt-2 text-gray-300">
            Publish new logistics research & insights
          </p>
        </Link>

        <Link
          href="/admin/dashboard/blogs"
          className="p-8 rounded-2xl bg-white border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">Manage Publications</h2>
          <p className="mt-2 text-gray-500">
            Edit, publish & archive enterprise content
          </p>
        </Link>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-600 to-red-500 text-white">
          <h2 className="text-xl font-semibold">SEO Intelligence</h2>
          <p className="mt-2 text-orange-100">
            Keyword tracking & ranking optimization
          </p>
        </div>
      </div>

    </div>
  );
}
