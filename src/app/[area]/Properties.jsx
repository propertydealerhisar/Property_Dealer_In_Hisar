"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import QueryForm from "@/app/[area]/QueryForm";
import { useProperty } from "@/contexts/propertyContext";

export default function Properties({domain="www.houseforsaleinhisar.com",area}) {
  const [open, setOpen] = useState(false);

  const { data,loading2,error2,setDomain2,setLocality } = useProperty();

  // set domain once
  useEffect(() => {
    setLocality(area)
    if (domain === "www.commercialpropertyforsaleinhisar.com") {
      setDomain2("www.shopforsaleinhisar.com");
    } else {
      setDomain2(domain);
    }
}, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (loading2) {
    return <p className="text-center py-20">Loading properties...</p>;
  }

  if (error2) {
    return <p className="text-center py-20 text-red-500">{error2}</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-[#f7f5f2] px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10 text-left md:text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Premium Residential & Commercial Properties for Sale in Hisar, Haryana
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Explore a wide range of verified residential and commercial properties
              in Hisar with genuine listings and complete assistance.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
              >
                {/* IMAGE */}
               {/* MEDIA (IMAGE / VIDEO) */}
                 <div className="relative h-44 bg-black/20">
                 {property?.media?.type === "image" && property?.media?.url && (
               <Image
              src={property.media.url}
              alt={property.title}
              fill
              loading="lazy"
              className="object-cover"
             />
            )}

         {property?.media?.type === "video" && property?.media?.url && (
          <video
          src={property.media.url}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
         />
         )}
         </div>


                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.locality}
                  </div>

                  <div className="flex-1" />

                  {/* BOTTOM */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t mt-4">
                    
                    {/* PRICE AREA */}
                    {property.price !== 0 ? (
                      <div className="text-sm font-semibold text-[#422c18]">
                        Price: {property.price.toLocaleString("en-IN")}
                      </div>
                    ) : (
                      <button
                        onClick={() => setOpen(true)}
                        className="px-3 py-1.5 text-sm font-semibold
                                   bg-[#f3eee9] text-[#422c18]
                                   rounded-md"
                      >
                        Price on Call
                      </button>
                    )}

                    {/* VIEW DETAILS */}
                    <Link
                      href={`/properties/${property.slug}`}
                      className="px-4 py-2 text-sm font-semibold
                                 bg-[#0e0c0a] text-white rounded-md"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <QueryForm
              onClose={() => setOpen(false)}
              onSubmitSuccess={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}




























// "use client";

// import { useState,useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MapPin } from "lucide-react";
// import QueryForm from "./QueryForm";

// export default function Properties({ data }) {
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//   if (open) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }

//   // cleanup (important)
//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [open]);


//   return (
//     <>
//       <div className="min-h-screen bg-[#f7f5f2] px-4 sm:px-6 py-10">
//         <div className="max-w-7xl mx-auto">

//           {/* HEADING */}
//           <div className="mb-10 text-left md:text-center">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
//               {data?.heading}
//             </h1>
//             <p className="mt-2 text-sm sm:text-base text-gray-600">
//               {data?.description?.map((item, index) => (
//                 <span key={index} className="block">{item}</span>
//               ))}
//             </p>
//           </div>

//           {/* GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data?.propertyCards?.map((property, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-md"
//               >
//                 <div className="relative h-44">
//                   <Image
//                     src={property.img}
//                     alt={property.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {property.title}
//                   </h3>

//                   <div className="flex items-center text-sm text-gray-600 mt-1">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     {property.location}
//                   </div>

//                   <div className="flex justify-between gap-3 pt-4">
//                     {/* OPEN FORM */}
//                     <button
//                       onClick={() => setOpen(true)}
//                       className="px-3 py-2 text-sm font-semibold 
//                                  bg-[#f3eee9] text-[#422c18] 
//                                  rounded-md cursor-pointer"
//                     >
//                       ₹ {property.price}
//                     </button>

//                     <Link
//                       href={`/properties/${property.slug}`}
//                       className="px-4 py-2 text-sm font-semibold 
//                                  bg-[#422c18] text-white rounded-md"
//                     >
//                       View Details →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {open && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center 
//                      bg-black/50"
//           onClick={() => setOpen(false)}   // 👈 OUTSIDE CLICK CLOSE
//         >
//           <div
//             className="w-full max-w-md mx-4"
//             onClick={(e) => e.stopPropagation()} // 👈 INSIDE SAFE
//           >
//             <QueryForm
//               onClose={() => setOpen(false)}
//               onSubmitSuccess={() => setOpen(false)}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }