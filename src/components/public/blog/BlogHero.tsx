"use client";

import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

export default function BlogHero({ blog }: { blog: any }) {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={blog.thumbnail}
        alt={blog.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-end px-6 pb-16">
        
        {/* Category */}
        <span className="inline-block w-fit bg-white/10 backdrop-blur px-4 py-1 rounded-full text-sm text-white tracking-wide">
          Logistics Intelligence
        </span>

        {/* Title */}
        <h1 className="mt-6 max-w-5xl text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-200 text-sm">
          
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>Editorial Team</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>6 min read</span>
          </div>

        </div>

      </div>

    </section>
  );
}
