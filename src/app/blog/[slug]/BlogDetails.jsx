'use client'

import Image from "next/image"
import Link from "next/link"
import "@/app/globals.css";
export default function BlogDetails({ post }) {
  const x="[#84b179]"

  const single = post?.blog;

  return (
    <article className="max-w-6xl mx-auto space-y-10">

      
          {/* IMAGE */}
          <div className="w-full h-[260px] md:h-[380px] flex items-center justify-center bg-gray-300 md:rounded-tl-2xl overflow-hidden max-w-5xl mx-auto">

            <Image
              src={single?.HeroImg?.url}
              alt={single?.HeroAltText || "Blog Image"}
              width={1200}
              height={800}
              priority
              className="w-full h-full object-fit"
            />

          </div>
        <div className="max-w-5xl mx-auto text-md sm:text:lg md:text-2xl font-bold">{single?.Title}</div>


          

      {/* BLOG CONTENT */}
      <div className="max-w-5xl mx-auto">

        {single.Content?.map((section) => (

          <div key={section?._id}>

            <div className="quill-content">
           <div
                className="ql-editor !p-0 text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section?.content }}
            />
            </div>

            {section?.img?.url && (

              <div className="w-full my-6 ">

  <Image
    src={section.img.url}
    alt={section?.img?.altText || "Blog Image"}
    width={900}
    height={600}
    sizes="(max-width: 768px) 100vw, 700px"
    className="max-w-5xl w-full h-auto rounded-lg object-contain"
  />

</div>

            )}

          </div>

        ))}



        {/* FAQs */}
        {single?.FAQs?.length > 0 && (

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              FAQs
            </h2>

            {single.FAQs.map((faq, i) => (

              <details
                key={i}
                className="border-b border-gray-200 py-3 cursor-pointer group"
              >

                <summary className="font-semibold text-gray-800">
                  {faq.Q}
                </summary>

                <p className="mt-2 text-gray-600">
                  {faq.A}
                </p>

              </details>

            ))}

          </div>

        )}

      </div>

    </article>
  )
}