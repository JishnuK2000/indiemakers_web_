import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/bgImg.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  {
    line1: "From Zero to Scalable",
    line2: "We Build Companies, Not Just Products.",
  },
  {
    line1: "From Idea to Impact",
    line2: "We Co-Build Ventures With Founders.",
  },
  {
    line1: "From Conviction to Company",
    line2: "We Partner Early and Scale Together.",
  },
];

const TYPING_SPEED = 50;
const BACKSPACE_SPEED = 8;
const HOLD_DURATION = 1200;

export default function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedLine1.length < current.line1.length) {
        timeout = setTimeout(() => {
          setDisplayedLine1(
            current.line1.slice(0, displayedLine1.length + 1)
          );
        }, TYPING_SPEED);
      } else if (displayedLine2.length < current.line2.length) {
        timeout = setTimeout(() => {
          setDisplayedLine2(
            current.line2.slice(0, displayedLine2.length + 1)
          );
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), HOLD_DURATION);
      }
    } else {
      if (displayedLine2.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedLine2(displayedLine2.slice(0, -1));
        }, BACKSPACE_SPEED);
      } else if (displayedLine1.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedLine1(displayedLine1.slice(0, -1));
        }, BACKSPACE_SPEED);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedLine1, displayedLine2, isDeleting, titleIndex]);

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
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[90rem] mx-auto pl-[1.5rem] pr-[1.5rem] sm:pl-6 sm:pr-6 lg:pl-[4.5rem] lg:pr-[1.5rem]">
          <div className="w-full lg:w-1/2 space-y-6 animate-slideUp text-left">
            <motion.h1
              className="leading-tight min-h-[120px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block font-extrabold text-[clamp(32px,3vw,48px)]">
                {displayedLine1}
                {/* <span className="animate-pulse">|</span> */}
              </span>

              <span className="block font-extrabold text-[clamp(36px,4vw,52px)] lg:whitespace-nowrap">
                {displayedLine2}
              </span>
            </motion.h1>

            <p className="font-normal text-[clamp(18px,2vw,24px)] max-w-xl">
              A venture studio partnering with exceptional makers to design,
              launch, and scale enduring companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => navigate("/our-ventures")}
                className="px-8 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium hover:bg-[#062F2C] hover:text-white transition-all duration-300"
              >
                Explore Our Ventures
              </button>

              <button
                onClick={() => navigate("/labs-apply")}
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
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />

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
        <a
          href="https://www.instagram.com/indiemakers.vs?igsh=MXBxb3ZweGJxYjg2ag=="
          className="hover:underline underline-offset-4"
        >
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
        <a
          href="https://www.instagram.com/indiemakers.vs?igsh=MXBxb3ZweGJxYjg2ag=="
          className="hover:underline underline-offset-4"
        >
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
