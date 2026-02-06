export default function PropertyContentSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="mx-auto max-w-4xl">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          Plot for Sale in Hisar
          <span className="block text-lg md:text-xl font-normal text-gray-500 mt-2">
            Verified Land Options for Living & Investment
          </span>
        </h1>

        {/* Intro */}
        <p className="mt-6 text-base text-gray-700 leading-relaxed">
          Finding the right plot for sale in Hisar is not just about price.
          It is about location, legality, future value, and peace of mind.
        </p>

        <div className="my-10 h-px w-full bg-gray-200" />

        {/* Why Hisar */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Why Hisar Is a Good City to Buy a Plot
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Hisar is widely known as the Steel City of India, but today it has
          emerged as a strong education and regional growth hub. Residential
          sectors are expanding, and infrastructure is already well established.
        </p>

        <ul className="mt-5 list-disc pl-5 space-y-2 text-gray-700">
          <li>Long-term investment stability</li>
          <li>Freedom to build your own home</li>
          <li>Better value compared to metro cities</li>
        </ul>

        <div className="my-10 h-px w-full bg-gray-200" />

        {/* Types */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Types of Plots Available in Hisar
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-lg font-medium text-gray-900">
              Residential Plots
            </h3>
            <p className="mt-2 text-gray-700">
              Ideal for home construction or resale after appreciation.
              Available in approved sectors and developing areas.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-lg font-medium text-gray-900">
              Plot for Sale in Hisar on EMI
            </h3>
            <p className="mt-2 text-gray-700">
              Flexible payment options with low booking amount and
              installment-based plans.
            </p>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-gray-200" />

        {/* Areas */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Best Areas to Buy Plot in Hisar
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>
            <span className="font-medium text-gray-900">Sector 16 & 17:</span>{" "}
            Well-planned, strong infrastructure, higher resale value
          </li>
          <li>
            <span className="font-medium text-gray-900">Sector 1–4:</span>{" "}
            Established residential environment
          </li>
          <li>
            <span className="font-medium text-gray-900">Delhi Road:</span>{" "}
            Good connectivity and commercial access
          </li>
          <li>
            <span className="font-medium text-gray-900">Developing Areas:</span>{" "}
            Lower entry price for long-term investors
          </li>
        </ul>

      </div>
    </section>
  );
}
