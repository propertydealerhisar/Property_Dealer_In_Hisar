"use client";

export default function PropertyCardSkeleton() {
  return (
    <div className="bg-border-[color:var(--primary)] rounded-xl overflow-hidden border border-[color:var(--primary)] animate-pulse">
      
      {/* Image */}
      <div className="h-44 w-full bg-gray-200" />

      {/* Content */}
      <div className="p-4 flex flex-col">
        
        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-gray-200 mb-3" />

        {/* Location */}
        <div className="h-4 w-1/2 rounded bg-gray-100 mb-6" />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[color:var(--primary)]">
          
          {/* Price */}
          <div className="h-9 rounded-md bg-gray-200" />

          {/* Button */}
          <div className="h-9 rounded-md bg-[#1C4648]/20" />
        </div>
      </div>
    </div>
  );
}