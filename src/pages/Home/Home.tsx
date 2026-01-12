import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/bgImg.png";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // <-- modal state
  return (
    <div className="relative min-h-screen w-screen overflow-hidden font-poppins text-[#062F2C]">
      {/* BACKGROUND IMAGE — DESKTOP */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[80vw] h-[80vh] bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "bottom right",
          }}
        />
      </div>

      {/* BACKGROUND IMAGE — MOBILE */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <div
          className="w-full h-[58vh] bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "bottom center",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6">
          <div className="w-full lg:w-1/2 space-y-6 animate-slideUp pt-[10rem] sm:pt-[10rem] lg:pt-[20rem]">
            {/* ↑ added top padding for mobile */}

            <h1 className="leading-tight">
              <span className="block font-extrabold text-[clamp(32px,3vw,48px)]">
                From Zero to Scalable
              </span>

              <span className="block font-extrabold text-[clamp(36px,4vw,52px)]  lg:whitespace-nowrap">
                We Build Companies, Not Just Products.
              </span>
            </h1>

            <p className="font-normal text-[clamp(18px,2vw,24px)] max-w-xl">
              A venture studio partnering with exceptional makers to design,
              launch, and scale enduring companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowModal(true)} // <-- open modal
                className="px-8 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium hover:bg-[#062F2C] hover:text-white transition-all duration-300"
              >
                Explore Our Ventures
              </button>

              <button
                onClick={() => setShowModal(true)} // <-- open modal
                className="px-8 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium hover:bg-[#062F2C] hover:text-white transition-all duration-300"
              >
                Partner With Us
              </button>
            </div>
          </div>
          
        </div>
      </div>
{/* MODAL */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setShowModal(false)} // close on backdrop click
    />

    {/* Modal content */}
    <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 p-8 text-center">
      <h2 className="text-2xl font-bold text-[#062F2C] mb-4">
        Coming Soooon 🚀  
      </h2>

      <p className="text-gray-600 mb-6">
        This feature is under development. Stay tuned!
      </p>

      <button
        onClick={() => setShowModal(false)}
        className="px-6 py-3 bg-[#062F2C] text-white rounded-full"
      >
        Close
      </button>
    </div>
  </div>
)}

      {/* SOCIAL LINKS — DESKTOP */}
      <div className="hidden lg:flex absolute bottom-8 right-40 z-20 gap-12 text-sm font-medium">
        <a href="#" className="hover:underline underline-offset-4">
          Instagram
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          LinkedIn
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          Facebook
        </a>
      </div>

      {/* SOCIAL LINKS — MOBILE */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 z-20 flex justify-around text-sm font-medium">
        <a href="#" className="hover:underline underline-offset-4">
          Instagram
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          LinkedIn
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          Facebook
        </a>
      </div>
    </div>
  );
}
