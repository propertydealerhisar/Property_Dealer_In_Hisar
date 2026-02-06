"use client";

import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogsSection = ({ data }) => {
  return (
    <section className="py-6 md:py-10 bg-[#f2e8e1] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="md:text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#422c18] mb-3">
            {data?.heading}
          </h2>

          <p className="text-[#422c18] max-w-5xl mx-auto text-lg md:text-xl font-medium">
            {data?.description?.map((item, index) => (
              <span key={index} className="block">
                {item}
              </span>
            ))}
          </p>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* ================= BUTTON ================= */}
        <div className="text-center mt-14">
          <Link href={data?.viewAllButton?.path}>
            <button className="bg-[#422c18] text-[#f2e8e1] font-semibold py-3 px-10 rounded-lg shadow-md hover:opacity-90 transition">
              {data?.viewAllButton?.label}
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogsSection;
