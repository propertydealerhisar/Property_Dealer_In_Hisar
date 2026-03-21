"use client";

import { createContext, useContext, useState,useEffect } from "react";
import axios from "axios";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [domain,setDmonain]=useState("www.dealacres.com");
  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(1)

  const api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000, // ⏱️ request timeout
  });

  // 🔥 Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null); // reset old error

      const { data } = await api.get("/admin/blog/fetchBlogs", {
        params: { domain, page, limit:11 },
      });

      if (data.success) {
        console.log("data =>",data?.blogs);
        
        setBlogs(data.blogs);
        setTotalPages(data?.totalPages)
      } else {
        setError(data.message || "Failed to fetch blogs");
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);

      // 🔥 Smart error handling
      if (err.response) {
        // server responded with error
        setError(err.response.data?.message || "Server error");
      } else if (err.request) {
        // request sent but no response
        setError("No response from server");
      } else {
        // something else
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    console.log("API CALL TRIGGER");
     fetchBlogs()
  },[page])

  return (
    <BlogContext.Provider
      value={{
        blogs,
        loading,
        error,page,setPage,totalPages
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);