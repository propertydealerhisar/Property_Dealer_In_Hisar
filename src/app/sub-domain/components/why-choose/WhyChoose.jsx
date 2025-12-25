import { Check } from "lucide-react"

export function WhyChoose({data}) {
  const reasons = [
    {
      title: "Prime Location in Hisar",
      description:
        "Marvel City is strategically located in the heart of Hisar with excellent connectivity to Delhi, schools, hospitals, and commercial centers, making it perfect for modern families.",
    },
    {
      title: "World-Class Amenities",
      description:
        "Experience luxury living with premium amenities including swimming pool, state-of-the-art gym, landscaped gardens, children's play area, and 24/7 security for complete peace of mind.",
    },
    {
      title: "Superior Construction Quality",
      description:
        "Built with the finest materials and modern construction techniques, Marvel City ensures durability, safety, and aesthetic excellence that stands the test of time.",
    },
    {
      title: "Smart Investment Opportunity",
      description:
        "Hisar's rapid development and infrastructure growth make Marvel City an excellent investment with high appreciation potential and strong rental yields for investors.",
    },
    {
      title: "Vastu-Compliant Design",
      description:
        "All apartments are designed following Vastu Shastra principles to ensure positive energy flow, prosperity, and well-being for you and your family.",
    },
    {
      title: "Green & Sustainable Living",
      description:
        "With ample green spaces, rainwater harvesting, solar lighting, and eco-friendly construction practices, Marvel City promotes sustainable and healthy living.",
    },
    {
      title: "Flexible Payment Plans",
      description:
        "We offer easy payment plans and home loan assistance to make your dream of owning a premium home at Marvel City accessible and hassle-free.",
    },
    {
      title: "Trusted Developer",
      description:
        "Backed by years of experience and a proven track record of delivering quality projects on time, we ensure transparency and commitment to customer satisfaction.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6  max-w-7xl mx-auto text-black">{data?.title}</h2>
          <p className="text-lg md:text-xl text-[#422c18] leading-relaxed max-w-5xl mx-auto">
            {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
          })}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          {data?.points?.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#faecec] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Check className="h-5 w-5 text-[#422c18]" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#422c18]">{item.title}</h3>
                <p className="text-[#422c18] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
