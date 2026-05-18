"use client";

import { useProperty } from "@/contexts/propertyContext";

const PageContent = () => {
  const { data } = useProperty();

  const pageContent = data?.pageContent;

  // only show when pageContent array has data
  if (
    !pageContent?.pageContent ||
    pageContent?.pageContent?.length === 0
  ) {
    return null;
  }

  return (
    <section className="w-full px-4 sm:px-6 pb-4">
      <div className="max-w-7xl mx-auto">

        {/* About Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            About {pageContent?.locality}
          </h2>

          <div className="space-y-5">
            {pageContent?.pageContent?.map((item, index) => (
              <p
                key={index}
                className="text-gray-700 leading-8 text-base md:text-lg"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        {pageContent?.faqs?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {pageContent?.faqs?.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq?.question}
                  </h3>

                  <p className="text-gray-700 leading-7">
                    {faq?.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PageContent;