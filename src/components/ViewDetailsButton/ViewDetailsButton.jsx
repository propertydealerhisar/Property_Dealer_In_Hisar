"use client";

import Link from "next/link";
import { useProperty } from "@/contexts/propertyContext";

let renderedCount = 0;

// yaha apni start date do
const START_DATE = "2026-05-21";

export default function ViewDetailsButton({
  href,
}) {
  const { dailyLimit } = useProperty();

  renderedCount++;

  const buttonNumber = renderedCount;

  // days calculate
  const start = new Date(START_DATE);

  const today = new Date();

  const diffTime = today - start;

  const daysPassed = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  // day wise unlock
  const unlockedLimit =
    (daysPassed + 1) * dailyLimit;

  const isEnabled =
    buttonNumber <= unlockedLimit;

  return (
    <Link
      href={isEnabled ? href : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        px-4 py-2 text-sm font-semibold rounded-md
        bg-[color:var(--btnPrimaryBg)]
        text-[color:var(--btnPrimaryText)]
        hover:bg-[color:var(--btnPrimaryHover)]
        transition
        ${
          !isEnabled
            ? "cursor-not-allowed pointer-events-none"
            : ""
        }
      `}
    >
      {isEnabled
        ? "View Details →"
        : "View Details →"}
    </Link>
  );
}