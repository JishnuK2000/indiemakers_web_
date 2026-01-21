import { useNavigate } from "react-router-dom";

export default function LabsDetail() {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative w-full font-poppins text-[#062F2C]
        min-h-screen lg:h-screen
        overflow-y-auto lg:overflow-hidden
      "
    >
      {/* CONTENT */}
      <div
        className="
        max-w-[90rem] mx-auto
          px-4 sm:px-6 lg:px-16
          pt-28 sm:pt-32 lg:pt-[12rem]
          pb-16 lg:pb-24
          animate-fadeIn
        "
      >
        {/* HEADER */}
        <div className="mb-6 lg:mb-8 animate-fadeUp text-center lg:text-left">
          <h1 className="text-[clamp(28px,3.2vw,44px)] font-extrabold leading-tight">
            Indiemakers Labs
          </h1>
          <p className="mt-3 text-[clamp(15px,1.6vw,20px)] max-w-xl mx-auto lg:mx-0">
            We co-build long-term, profitable digital businesses with founders
            and domain experts.
          </p>
        </div>

        {/* BODY */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed animate-fadeUp">
          <p>
            Labs is not an accelerator, agency, or short-term engagement. We
            partner early, share ownership, and work hands-on to build enduring
            companies.
          </p>

          <p>
            We work with a small number of founders each year who bring strong
            insight, conviction, and the willingness to build for the long term.
          </p>

          <p className="font-medium">
            This application helps us understand whether a Labs partnership
            makes sense on both sides.
          </p>

          <p className="text-[#062F2C]/80">
            We are selective. Not every application will receive a response.
          </p>
        </div>
      </div>

    

      {/* FIXED CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => navigate("/labs-apply")}
          className="px-8 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium 
             flex items-center gap-2
             hover:bg-[#062F2C] hover:text-white transition-all duration-300"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
