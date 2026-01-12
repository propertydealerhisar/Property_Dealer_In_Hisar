import { Home, Shield, Sparkles, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "4 Marla Plot Houses in Urban Estate Hisar",
    description:
      "4 Marla plots are ideal for buyers looking for affordable housing without compromising on location. Houses built on 4 Marla plots are compact, well-planned, and suitable for small families or first-time homebuyers. These homes often include smart layouts, essential amenities, and easy maintenance, making them cost-effective in the long run. A 4 Marla house for sale in Urban Estate Hisar is also a great option for rental income due to high demand in the area.",
  },
  {
    icon: Shield,
    title: "6 Marla Plot Houses in Urban Estate Hisar",
    description:
      "6 Marla plot houses offer a perfect balance between space and affordability. These homes provide additional room for comfortable living, including better ventilation, parking space, and modern interiors. Families looking to upgrade from smaller homes often prefer this size. A 6 Marla house for sale in Urban Estate Hisar is suitable for buyers who want more flexibility in design while staying within a reasonable budget.",
  },
  {
    icon: Sparkles,
    title: "8 Marla Plot Houses in Urban Estate Hisar",
    description:
      "8 Marla plots are popular among families seeking spacious homes with enhanced comfort. These houses usually include larger bedrooms, better living areas, and sometimes lawn space. An 8 Marla house for sale in Urban Estate Hisar is ideal for growing families who value space, privacy, and long-term livability in a premium residential environment.",
  },
  {
    icon: TrendingUp,
    title: "10 Marla Plot Houses in Urban Estate Hisar",
    description:
      "10 Marla plot houses offer luxury with practicality. These homes allow for elegant architectural designs, multiple floors, and premium features. Buyers choosing a 10 Marla house for sale in Urban Estate Hisar often look for a refined lifestyle with ample parking, outdoor space, and modern construction quality, making it a strong long-term investment.",
  },
  {
    icon: TrendingUp,
    title: "12 Marla Plot Houses in Urban Estate Hisar",
    description:
      "12 Marla plots are suited for buyers who want expansive homes with premium specifications. These houses provide generous living areas, landscaped spaces, and scope for custom interiors. A 12 Marla house for sale in Urban Estate Hisar appeals to those who prioritize comfort, status, and long-term property value appreciation.",
  },{
    icon: TrendingUp,
    title: "14 Marla Plot Houses in Urban Estate Hisar",
    description:
      "14 Marla plot houses represent the top tier of residential living in Urban Estate. These properties are spacious, luxurious, and designed for elite living. A 14 Marla house for sale in Urban Estate Hisar is ideal for buyers seeking exclusivity, superior construction quality, and a high standard of living in one of Hisar’s best residential zones.",
  },
]

export function FeaturesSection({data}) {
  return (
    <section id="features" className="bg-white py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-left md:mb-16 md:text-center">
          <h2 className="mb-3 font-bold text-gray-900 md:mb-5 text-3xl md:text-4xl lg:text-5xl">
            {data?.heading}
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg max-w-7xl mx-auto">
            {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
          })}

          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {data?.features.map((feature, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border border-gray-200
                bg-white
                p-6 md:p-8
                shadow-sm
                transition-all
                hover:border-gray-400
                hover:shadow-md
              "
            >
              {/* Icon */}
              {/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 md:mb-6 md:h-16 md:w-16">
                <feature.icon className="h-6 w-6 text-gray-900 md:h-8 md:w-8" />
              </div> */}

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900 md:mb-3 md:text-xl">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
