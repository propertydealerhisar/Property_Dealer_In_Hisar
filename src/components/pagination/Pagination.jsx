"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, setPage, totalPages }) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 4;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, page - 1);
      let end = Math.min(totalPages, start + maxVisible - 1);
      if (end === totalPages) start = totalPages - maxVisible + 1;
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages) pages.push("...");
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="flex items-center justify-center gap-3 py-10">
      {/* Prev */}
      <button
        onClick={() => {
          setPage(page - 1);
          scrollToTop();
        }}
        disabled={page <= 1}
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border ${
          page <= 1
            ? "text-[color:var(--navbarBg)]/70 border-[color:var(--navbarBg)]/30 bg-[color:var(--navbarBg)]/10 cursor-not-allowed"
            : "text-[color:var(--navbarBg)] border-[color:var(--navbarBg)]/50 bg-[color:var(--navbarBg)]/30 hover:bg-[color:var(--navbarBg)] hover:text-white hover:shadow-md"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((num, i) =>
          num === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="text-gray-400 px-3 font-medium select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={num}
              onClick={() => {
                setPage(num);
                scrollToTop();
              }}
              className={`min-w-[40px] px-3 py-2 rounded-full font-medium text-sm border transition-all duration-200 ${
                page === num
                  ? "bg-[color:var(--navbarBg)] text-white border-[color:var(--navbarBg)] shadow-md shadow-[color:var(--navbarBg)]"
                  : "text-[color:var(--navbarBg)] border-[color:var(--navbarBg)]/50 bg-[color:var(--navbarBg)]/30 hover:bg-[color:var(--navbarBg)] hover:text-white hover:shadow-md"
              }`}
            >
              {num}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => {
          setPage(page + 1);
          scrollToTop();
        }}
        disabled={page >= totalPages}
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border ${
          page >= totalPages
            ? "text-[color:var(--navbarBg)]/70 border-[color:var(--navbarBg)]/30 bg-[color:var(--navbarBg)]/10 cursor-not-allowed"
            : "text-[color:var(--navbarBg)] border-[color:var(--navbarBg)]/50 bg-[color:var(--navbarBg)]/30 hover:bg-[color:var(--navbarBg)] hover:text-white hover:shadow-md"
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}