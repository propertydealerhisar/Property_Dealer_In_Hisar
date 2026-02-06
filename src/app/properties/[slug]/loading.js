// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f6f3]">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="h-12 w-12 rounded-full border-4 border-[#e6d8cc] border-t-[#422c18] animate-spin"></div>

        {/* Text */}
        <p className="text-[#422c18] font-medium text-lg">
          Loading property details...
        </p>

        {/* Sub text */}
        <p className="text-sm text-gray-500">
          Please wait while we fetch the best deal for you
        </p>
      </div>
    </div>
  );
}