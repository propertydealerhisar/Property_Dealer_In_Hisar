"use client";

export default function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close"
      className="absolute top-3 right-3 flex h-8 w-8 items-center 
                 justify-center rounded-full 
                 bg-gray-100 text-gray-700 
                 hover:bg-gray-200 hover:text-gray-900 
                 transition"
    >
      ✕
    </button>
  );
}
