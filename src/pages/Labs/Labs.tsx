import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    title: "What is Labs?",
    description:
      "Labs is not an accelerator or agency. We partner early, share ownership, and build long-term profitable companies with founders.",
  },
  {
    title: "How We Work",
    description:
      "Hands-on engagement, shared decision-making, and long-term commitment. We work closely to co-build meaningful businesses.",
  },
  {
    title: "Who We Partner With",
    description:
      "Founders and domain experts with strong insight, conviction, and the willingness to build for the long term.",
  },
  {
    title: "Why Apply?",
    description:
      "This application helps us understand whether a Labs partnership makes sense on both sides. We are selective; not all applications will receive a response.",
  },
];

export default function LabsDetail() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full font-poppins text-[#062F2C] min-h-screen overflow-y-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-16 pt-28 sm:pt-32 lg:pt-[12rem] pb-16"
      >
        <h1 className="text-[clamp(28px,3.2vw,44px)] font-extrabold leading-tight mb-4 animate-fadeIn">
          Indiemakers Labs
        </h1>
        <p className="mt-3 text-[clamp(15px,1.6vw,20px)] max-w-xl mx-auto lg:mx-0 animate-fadeIn">
          We co-build long-term, profitable digital businesses with founders and domain experts.
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-[#062F2C]/20 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-[#062F2C]/90">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA BUTTON */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <button
          onClick={() => navigate("/labs-apply")}
          className="px-8 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium 
             flex items-center gap-2
             hover:bg-[#062F2C] hover:text-white transition-all duration-300"
        >
          Apply Now
        </button>
      </motion.div>
    </div>
  );
}
