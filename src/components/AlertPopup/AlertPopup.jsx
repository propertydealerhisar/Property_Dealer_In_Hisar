"use client";

import { Check } from "lucide-react";

export default function AlertPopup({
  open,
  type,
  message,
  onClose,
}) {
  if (!open) return null;

  const success = type === "success";

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-[3px] px-4">

      {/* modal */}
      <div
        className="w-full max-w-[380px] rounded-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] animate-[popup_.2s_ease]"
        style={{
          background: "var(--navbarBg)",
          border: "1px solid var(--cardBorder)",
        }}
      >

        {/* icon */}
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${
            success
              ? "bg-[color:var(--cardBorder)]/20"
              : "bg-[color:var(--btnSecondaryBg)]/15"
          }`}
        >
          {success ? (
            <Check
              size={28}
              strokeWidth={3}
              className="text-[color:var(--cardBorder)]"
            />
          ) : (
            <span className="text-2xl font-semibold text-red-600">
              ×
            </span>
          )}
        </div>

        {/* heading */}
        <h2 className="mt-5 text-center text-[28px] font-bold text-[color:var(--heading)]">
          {success ? "Enquiry Submitted" : "Submission Failed"}
        </h2>

        {/* text */}
        <p className="mt-3 text-center text-sm leading-7 text-[color:var(--footerText)]/80">
          {message}
        </p>

        {/* button */}
        <button
          onClick={onClose}
          className={`mt-7 w-full rounded-xl py-3 text-sm font-semibold transition-all
          ${
            success
              ? "bg-[color:var(--cardBorder)] text-[color:var(--primary)] hover:opacity-90"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          {success ? "Done" : "Close"}
        </button>
      </div>

      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}