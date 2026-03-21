"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBlog } from "@/contexts/BlogContext";
import Pagination from "@/components/pagination/Pagination";

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function Page() {
  const {
    blogs,
    error,
    loading,
    page,
    setPage,
    totalPages,setDomain,domain,fetchBlogs
  } = useBlog();

 useEffect(()=>{
     let h = window.location.host;

    if (h === "localhost:3000") {
      h = process.env.NEXT_PUBLIC_DOMAIN;
    }

             if(h)
                setDomain(h)
        },[domain])


  // ================= LOADING FULL SCREEN =================
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-lg font-medium animate-pulse">
          Loading blogs...
        </p>
      </div>
    );
  }

  // ================= ERROR STATE =================
  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-red-500 mb-3">
          Something went wrong
        </h2>
        <p className="mb-6 text-gray-500">
          {error || "Failed to load blogs"}
        </p>
        <button
          onClick={fetchBlogs}
          className="px-6 py-2 rounded-full bg-black text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  // ================= EMPTY =================
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No blogs found
      </div>
    );
  }

  // ================= MAIN UI =================
  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-12 bg-[color:var(--bodyBg)]">
      
      {/* BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post, index) => (
          <Link
            href={`/blog/${post.Slug}`}
            key={index}
            className="group rounded-xl overflow-hidden bg-[color:var(--cardBg)] border border-[color:var(--cardBorder)] hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={post.HeroImg?.url}
                alt={post?.HeroAltText || "Blog Image"}
                width={600}
                height={350}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase mb-2 text-[color:var(--primary)]">
                {post.Category}
              </p>

              <h3 className="text-lg font-semibold mb-3 text-[color:var(--text)] group-hover:text-[color:var(--primary)]">
                {post.Title}
              </h3>

              <p className="text-sm text-[color:var(--mutedText)]">
                {formatDate(post.Date)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-10 flex justify-center">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </section>
  );
}