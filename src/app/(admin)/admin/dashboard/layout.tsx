"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/src/components/admin/layout/AdminSidebar";
import PageTransition from "@/src/components/public/common/PageTransition";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.replace("/admin/login");
  }, []);

  return (
  <div className="flex">
    <AdminSidebar />
    <main className="flex-1 bg-gray-50 min-h-screen p-6">
      <PageTransition>
        {children}
      </PageTransition>
    </main>
  </div>
);

}
