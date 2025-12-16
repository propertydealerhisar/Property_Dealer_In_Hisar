"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./BlogCard";

const recentBlogs = [
  {
    id: 1,
    title: "Top 10 Neighborhoods for Families in 2023",
    excerpt:
      "Discover the best family-friendly neighborhoods with excellent schools, parks, and amenities.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1170&q=80",
    date: "May 15, 2023",
    category: "Neighborhoods",
  },
  {
    id: 2,
    title: "How to Increase Your Home Value Before Selling",
    excerpt:
      "Learn simple and cost-effective ways to boost your property value before listing it on the market.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1170&q=80",
    date: "April 28, 2023",
    category: "Selling Tips",
  },
  {
    id: 3,
    title: "The Future of Smart Homes",
    excerpt:
      "Explore the latest technology trends that are transforming modern homes into smart living spaces.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055e2e8ecea?auto=format&fit=crop&w=1170&q=80",
    date: "April 10, 2023",
    category: "Technology",
  },
];

const BlogsSection = ({data}) => {
  return (
    <section className="py-10 md:py-20 bg-[#f2e8e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="md:text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-[#422c18] mb-3"
          >
            {/* Featured Blogs & Real Estate{" "}
            <span className="text-[#422c18]">Guides</span> */}
            {data?.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#422c18] max-w-5xl mx-auto text-lg"
          >
            {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.blogs?.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link href={`${data?.viewAllButton?.path}`}>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#422c18] text-[#f2e8e1] font-semibold py-3 px-10 rounded-lg shadow-md transition-all duration-300"
            >
              {data?.viewAllButton?.label}
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogsSection;
