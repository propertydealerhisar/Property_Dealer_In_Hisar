import {
  Home,
  Key,
  Building,
  Building2,
  Store,
  Landmark,
  Tractor,
  Handshake,
  BriefcaseBusiness,
  HelpCircle,
  
} from "lucide-react";

const ICON_MAP = {
  Home,
  Key,
  Building,
  Building2,
  Store,
  Landmark,
  Tractor,
  Handshake,
  BriefcaseBusiness,
};

const DEFAULT_ICON = HelpCircle;



export function LocationsSection({data}) {
  return (
    <section id="amenities" className="bg-gray-50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-left md:mb-16 md:text-center">
          <h2 className="mb-3 font-bold text-gray-900 md:mb-5 text-3xl md:text-4xl lg:text-5xl">
           {data?.title}
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
          })}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {data?.locations?.map((location, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center gap-3
                rounded-xl
                border border-gray-200
                bg-white
                p-5 md:p-6
                text-center
                shadow-sm
                transition-all
                hover:shadow-md
              "
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 md:h-16 md:w-16">
                {(() => {
               const Icon = ICON_MAP[location.icon] || DEFAULT_ICON;
               return <Icon className="w-6 h-6 text-[#422c18]" />;
               })()}
              </div>

              {/* Label */}
              <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                {location.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}