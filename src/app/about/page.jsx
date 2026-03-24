import { data } from "./data";
import { headers } from "next/headers";

const   page = async () => {
  // console.log("dddd ",process.env.DOMAIN)
     const h = await headers(); // ✅ MUST await in Next 16
    
      let     domain = h.get("host");
    
      if (!domain) notFound();
    
      if (domain === "localhost:3000") {
         domain = `${process.env.DOMAIN}`;
      }
  if (!domain) return null;

  const matched = data.find(
    (item) => item.domain.toLowerCase() === domain.toLowerCase()
  );

  if (!matched?.html) return null;

  return (
    <section
      className="
        about-locality
        py-8 md:py-12
        bg-[color:var(--bodyBg)] px-4 sm:px-6
      "
    >
      <div
        className="   
          html-content ql-editor
          max-w-7xl mx-auto
          text-[color:var(--text)]
        "
        dangerouslySetInnerHTML={{ __html: matched.html }}
      />
    </section>
  );
};

export default page;
