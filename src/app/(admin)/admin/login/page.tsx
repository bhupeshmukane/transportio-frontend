"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/src/lib/api";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/admin/dashboard");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/shipping-port-sunset-cargo-airplanes-trucks.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border"
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            TransportIO
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Logistics Intelligence Platform
          </p>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-800">
          Admin Dashboard Login
        </h2>

        <p className="text-center text-gray-500 text-sm mt-1">
          Secure access for administrators only
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Admin Email"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold tracking-wide hover:bg-orange-600 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} TransportIO — Secure Admin Portal
        </p>
      </motion.div>
    </div>
  );
}
