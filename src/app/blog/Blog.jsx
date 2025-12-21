"use client";
import React from "react";
// import { useBlogs } from "@/contexts/blog-context/BlogContext";
// import Pagination from "@/components/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";

// Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
   const loading= false;
   const error= null;
   const blogs = [
    {
      _id: "1",
      Slug: "digital-marketing-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      },
      HeroAltText: "Digital Marketing for Real Estate",
      Category: "Real Estate",
      Title: "How Digital Marketing Helps Real Estate Businesses Grow Faster",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "seo-tips-for-property-dealers",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      },
      HeroAltText: "SEO Tips for Property Dealers",
      Category: "SEO",
      Title: "Top SEO Tips Every Property Dealer Should Follow in 2024",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "social-media-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      HeroAltText: "Social Media Marketing for Real Estate",
      Category: "Social Media",
      Title: "Using Social Media to Generate Quality Property Leads",
      Date: "2024-03-18",
    },
    {
      _id: "4",
      Slug: "content-marketing-property-business",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      HeroAltText: "Content Marketing for Property Business",
      Category: "Content",
      Title: "Why Content Marketing Is Important for Property Dealers",
      Date: "2024-02-05",
    },
    {
      _id: "5",
      Slug: "google-ads-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      },
      HeroAltText: "Google Ads for Real Estate",
      Category: "Paid Ads",
      Title: "How Google Ads Can Bring Instant Leads for Real Estate",
      Date: "2024-01-12",
    },
    {
      _id: "6",
      Slug: "local-seo-for-property-dealers",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      },
      HeroAltText: "Local SEO for Property Dealers",
      Category: "Local SEO",
      Title: "Local SEO Strategies to Dominate Property Searches in Your City",
      Date: "2023-12-28",
    },
    {
      _id: "1",
      Slug: "digital-marketing-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      },
      HeroAltText: "Digital Marketing for Real Estate",
      Category: "Real Estate",
      Title: "How Digital Marketing Helps Real Estate Businesses Grow Faster",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "seo-tips-for-property-dealers",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      },
      HeroAltText: "SEO Tips for Property Dealers",
      Category: "SEO",
      Title: "Top SEO Tips Every Property Dealer Should Follow in 2024",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "social-media-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      HeroAltText: "Social Media Marketing for Real Estate",
      Category: "Social Media",
      Title: "Using Social Media to Generate Quality Property Leads",
      Date: "2024-03-18",
    },
    {
      _id: "4",
      Slug: "content-marketing-property-business",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      HeroAltText: "Content Marketing for Property Business",
      Category: "Content",
      Title: "Why Content Marketing Is Important for Property Dealers",
      Date: "2024-02-05",
    },
    {
      _id: "5",
      Slug: "google-ads-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      },
      HeroAltText: "Google Ads for Real Estate",
      Category: "Paid Ads",
      Title: "How Google Ads Can Bring Instant Leads for Real Estate",
      Date: "2024-01-12",
    },
    {
      _id: "6",
      Slug: "local-seo-for-property-dealers",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      },
      HeroAltText: "Local SEO for Property Dealers",
      Category: "Local SEO",
      Title: "Local SEO Strategies to Dominate Property Searches in Your City",
      Date: "2023-12-28",
    },
  ];
   
  return (
    <section className="px-4 sm:px-6 max-w-7xl mx-auto py-12 bg-[#f2e8e1]">
      {/* -------- Loading State -------- */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-56 bg-gray-200 rounded-lg" />
              <div className="h-3 w-1/3 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-1/2 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      )}

      {/* -------- Error State -------- */}
      {error && !loading && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Oops! Something went wrong 
          </h2>
          <p className="text-gray-600 mb-6">
            {error?.message || "Unable to load blogs right now."}
          </p>
          <button
            onClick={fetchBlogs}
            className="px-6 py-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      )}

      {/* -------- Blog List -------- */}
      {!loading && !error && blogs?.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post,index) => (
              <Link href={`/blog/${post.Slug}`} key={index} className="transition-all duration-300">
               <Image
                src={post.HeroImg?.url}
                 alt={post?.HeroAltText || "Digital Marketing Company In India"}
                 width={600}
                 height={350}
                 loading="lazy"   // optional hai, by default lazy hota hai
                 className="w-full object-contain rounded-sm mb-4 hover:scale-105 transition-transform duration-500"
                />
                <p className="text-xs font-semibold text-red-600 uppercase mb-2 tracking-wider">
                  {post.Category}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 hover:text-[#422c18] transition-colors duration-300">
                  {post.Title}
                </h3>

                <p className="text-sm text-gray-500">
                  {formatDate(post.Date)}
                </p>
              </Link>
            ))}
          </div>

          {/* -------- Pagination -------- */}
          {/* <div className="flex justify-center">
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </div> */}
        </>
      )}

      {/* -------- Empty State -------- */}
      {!loading && !error && blogs?.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          <p>No blogs found.</p>
        </div>
      )}
    </section>
  );
}










