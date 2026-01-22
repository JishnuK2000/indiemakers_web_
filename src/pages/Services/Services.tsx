import {
  Code,
  Layers,
  TrendingUp,
  Cpu,
  Target,
  Handshake,
  Palette,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import PageContainer from "../../components/Container";

export default function Services() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      icon: Target,
      title: "Product Strategy & MVP Execution",
      description:
        "From idea clarity to a production-ready MVP designed for speed, learning, and scale.",
    },
    {
      icon: Palette,
      title: "Design-as-a-Service",
      description:
        "Continuous product, UI, and brand design by senior designers—fast, focused, and outcome-led.",
    },
    {
      icon: Code,
      title: "SaaS Engineering & Architecture",
      description:
        "Scalable, maintainable systems built by senior engineers with founder mindset.",
    },
    {
      icon: TrendingUp,
      title: "Growth & Monetization Systems",
      description:
        "Funnels, pricing, onboarding, and retention—engineered, tested, and optimized.",
    },
    {
      icon: Cpu,
      title: "CTO-as-a-Service",
      description:
        "Technical leadership for early-stage teams before hiring a full-time CTO.",
    },
  ];

  const principles = [
    {
      icon: Layers,
      title: "High-impact",
      text: "Built to move real metrics, not just ship features.",
    },
    {
      icon: Target,
      title: "Outcome-driven",
      text: "Aligned on business results, not hours or tasks.",
    },
    {
      icon: Handshake,
      title: "Selective by design",
      text: "We say no more than we say yes.",
    },
  ];

  const handleApply = () => {
    navigate("/services-apply");
  };

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageContainer>
      <div style={{ overflow: "hidden" }}>
        <div
          className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
          style={{
            overflowY: window.innerHeight < 800 ? "auto" : "hidden",
          }}
        >
          {/* HERO */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4"
              variants={fadeUp}
            >
              Indiemakers Services
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 font-medium mb-4"
              variants={fadeUp}
            >
              Execution for Teams Who Care About Outcomes
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
              variants={fadeUp}
            >
              Our Services arm exists for one reason: to generate cash flow,
              market insight, and partnerships that strengthen our venture
              ecosystem.
            </motion.p>
          </motion.div>

          {/* PHILOSOPHY */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We work with a limited number of ambitious teams who need{" "}
              <span className="font-semibold">senior-level execution</span>, not
              staff augmentation.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              This is not outsourcing.
              <br />
              <span className="font-semibold">
                This is focused execution with ownership thinking.
              </span>
            </p>
          </motion.div>

          {/* PRINCIPLES */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border-2 border-gray-300 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 mx-auto mb-4 border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* SERVICES */}
          <motion.div
            className="mb-16"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              What We Offer
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    variants={cardVariants}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-10 h-10 border-2 border-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300">
                        <Icon className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowModal(true)}
                      className="text-sm font-semibold text-gray-800 hover:underline"
                    >
                      View Portfolio →
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ENGAGEMENT MODEL */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Engagement Model
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We prefer <span className="font-semibold">retainers</span>,
              <span className="font-semibold"> milestones</span>, and
              <span className="font-semibold"> long-term engagements</span>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              When there is strong alignment, service engagements can evolve
              into <span className="font-semibold">Labs partnerships</span>.
              <br />
              Execution is often the beginning—not the end.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Start a Conversation
            </h3>

            <p className="text-gray-600 mb-6">
              If you care about outcomes,
              <br />
              we should probably talk.
            </p>

            <button
              onClick={handleApply}
              className="px-8 py-3 border-2 border-[#062F2C] rounded-full text-sm font-medium 
            
             hover:bg-[#062F2C] hover:text-white transition-all duration-300"
            >
              Explore Our Ventures
            </button>
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-gray-900">
                Portfolio Coming Soon
              </h4>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              We’re currently working on curating and documenting our portfolio.
              <br />
              <br />
              In the meantime, feel free to start a conversation—we’d be happy
              to walk you through relevant work.
            </p>

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </PageContainer>
  );
}
