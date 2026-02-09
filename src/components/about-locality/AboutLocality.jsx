"use client";

import { data } from "./data";

const AboutLocality = ({ domain }) => {
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
        bg-[color:var(--bodyBg)]
      "
    >
      <div
        className="
          html-content ql-editor
          max-w-7xl mx-auto
          px-4 sm:px-6
        "
        dangerouslySetInnerHTML={{ __html: matched.html }}
      />
    </section>
  );
};

export default AboutLocality;
