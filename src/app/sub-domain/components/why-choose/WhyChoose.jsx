import { Check } from "lucide-react"

export function WhyChoose({data}) {

  return (
    <section className="py-10 bg-white px-4 sm:px-6">
      {/* <div className="container mx-auto px-4"> */}
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6  max-w-7xl mx-auto text-black text-left md:text-center">{data?.title}</h2>
          <p className="text-lg md:text-xl text-[#422c18] leading-relaxed max-w-7xl mx-auto text-left md:text-center">
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
      {/* </div> */}
    </section>
  )
}
