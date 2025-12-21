"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow:
          "0 12px 30px rgba(0,0,0,0.08), 0 6px 12px rgba(0,0,0,0.04)",
      }}
      transition={{ duration: 0.3 }}
      className="bg-[#f2e8e1] rounded-xl overflow-hidden shadow-md border border-[#422c18]/20 flex flex-col h-full"
    >
      {/* Image */}
      <Link href={`/blog/${blog.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />

          {/* Category Badge */}
          <div className="absolute top-0 left-0 bg-[#422c18] text-[#f2e8e1] text-xs px-3 py-1 rounded-br-lg font-medium shadow-md">
            {blog.category}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/blog/${blog.id}`}>
          <h3 className="text-lg font-semibold mb-2 text-[#422c18] transition-colors duration-200">
            {blog.title}
          </h3>
        </Link>

        <p className="text-[#422c18] text-sm font-medium mb-4 flex-grow leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm text-[#422c18]">
          <span>{blog.date}</span>

          <Link
            href={`/blog/${blog.id}`}
            className="text-[#422c18] font-medium transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
