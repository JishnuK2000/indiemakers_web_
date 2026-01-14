import { useNavigate } from "react-router-dom";

const ventures = [
  {
    name: "Indiemakers",
    description: "A platform empowering independent builders to launch faster.",
    status: "Live",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    founder: {
      name: "Arjun Menon",
      role: "Founder",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    name: "Stealth Product",
    description: "An AI-powered internal tooling startup.",
    status: "Building",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    founder: {
      name: "Sneha Rao",
      role: "Product Lead",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    name: "Consumer Brand",
    description: "Design-led consumer products for modern India.",
    status: "Stealth",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    founder: {
      name: "Karthik Iyer",
      role: "Co‑Founder",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  },
];

export default function ExploreOurVentures() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full font-poppins text-[#062F2C] animate-fadeIn overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-16 pt-28 sm:pt-32 lg:pt-[12rem] pb-16 lg:pb-24">
        {/* HEADER */}
        <div className="max-w-4xl mb-12 text-center lg:text-left animate-fadeUp">
          <h1 className="text-[clamp(30px,3.5vw,48px)] font-extrabold leading-tight">
            Our Ventures
          </h1>
          <p className="mt-3 text-[clamp(15px,1.6vw,20px)] max-w-xl mx-auto lg:mx-0">
            We partner from day zero to build meaningful, scalable companies
            alongside exceptional founders.
          </p>
        </div>

        {/* VENTURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group border border-[#062F2C]/20 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fadeUp"
            >
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={venture.image}
                  alt={venture.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 lg:p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{venture.name}</h3>

                <p className="text-sm text-[#062F2C]/80 leading-relaxed">
                  {venture.description}
                </p>

                <span className="w-fit text-xs px-3 py-1 rounded-full border border-[#062F2C]/40">
                  {venture.status}
                </span>

                {/* FOUNDER */}
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={venture.founder.avatar}
                    alt={venture.founder.name}
                    className="h-10 w-10 rounded-xl object-cover"
                  />
                  <div className="leading-tight">
                    <p className="text-sm font-medium">{venture.founder.name}</p>
                    <p className="text-xs text-[#062F2C]/60">
                      {venture.founder.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="mt-16 flex justify-center lg:justify-start animate-fadeUp">
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
