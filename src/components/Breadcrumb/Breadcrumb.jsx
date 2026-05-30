"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({
  items = [],
}) {
  return (
    <nav className="w-full">
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[color:var(--cardBorder)] bg-[color:var(--bodyBg)] px-4 py-3 text-sm">

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-medium text-gray-600 transition hover:text-black"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-[var(--primary)]">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  size={16}
                  className="text-[var(--primary)]"
                />
              )}
            </div>
          );
        })}

      </div>
    </nav>
  );
}