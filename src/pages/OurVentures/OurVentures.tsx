import { useNavigate } from "react-router-dom";

const ventures = [
  {
    name: "Indiemakers",
    description: "A platform empowering independent builders to launch faster.",
    status: "Live",
  },
  {
    name: "Stealth Product",
    description: "An AI-powered internal tooling startup.",
    status: "Building",
  },
  {
    name: "Consumer Brand",
    description: "Design-led consumer products for modern India.",
    status: "Stealth",
  },
];

export default function ExploreOurVentures() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full font-poppins text-[#062F2C] animate-fadeIn overflow-x-hidden">
      
      {/* PAGE CONTAINER */}
      <div
        className="
          max-w-[90rem] mx-auto
          px-4 sm:px-6 lg:px-16
          pt-28 sm:pt-32 lg:pt-[12rem]
          pb-16 lg:pb-24
        "
      >
        {/* HEADER */}
        <div className="max-w-4xl mb-10 lg:mb-14 text-center lg:text-left animate-fadeUp">
          <h1 className="text-[clamp(30px,3.5vw,48px)] font-extrabold leading-tight">
            Our Ventures
          </h1>
          <p className="mt-3 text-[clamp(15px,1.6vw,20px)] max-w-xl mx-auto lg:mx-0">
            We partner from day zero to build meaningful, scalable companies
            alongside exceptional founders.
          </p>
        </div>

        {/* VENTURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 120}ms` }}
              className="
                group border border-[#062F2C]/20 rounded-2xl
                p-5 lg:p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg
                animate-fadeUp
              "
            >
              <div className="h-11 w-11 lg:h-12 lg:w-12 rounded-full border border-[#062F2C]/30 flex items-center justify-center font-bold mb-5 group-hover:scale-110 transition-transform duration-300">
                {venture.name.charAt(0)}
              </div>

              <h3 className="text-base lg:text-lg font-semibold mb-2">
                {venture.name}
              </h3>

              <p className="text-sm text-[#062F2C]/80 mb-4 leading-relaxed">
                {venture.description}
              </p>

              <span className="inline-block text-xs px-3 py-1 rounded-full border border-[#062F2C]/40">
                {venture.status}
              </span>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="mt-14 lg:mt-16 flex justify-center lg:justify-start animate-fadeUp">
          <button
            onClick={() => navigate("/")}
            className="px-7 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#062F2C] hover:text-white hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
