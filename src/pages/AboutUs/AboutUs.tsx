"use client";

import { ArrowRight, Layers, Rocket, Settings } from "lucide-react";
import { motion } from "framer-motion";
import PageContainer from "../../components/Container";

/* ------------------ Animation Variants ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const cardMotion = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ------------------ Component ------------------ */

export default function AboutUs() {
  return (
    <PageContainer>
      <section className="w-full bg-white overflow-y-auto pb-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* ------------------ Intro ------------------ */}
          <motion.div
            className=" mx-auto mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8"
              variants={fadeUp}
              custom={0}
            >
              About Indiemakers
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10"
              variants={fadeUp}
              custom={1}
            >
              Indiemakers operates at the intersection of venture creation,
              co-building, and selective execution services. Each arm exists to
              reinforce the other—creating a compounding system rather than
              disconnected projects.
            </motion.p>

            <motion.div
              className="space-y-3 text-gray-700 text-base sm:text-lg"
              variants={fadeUp}
              custom={2}
            >
              <p className="font-medium">
                We believe real value is created through:
              </p>
              <ul className="space-y-2">
                <li className="font-semibold">Ownership over outcomes</li>
                <li className="font-semibold">Disciplined execution</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* ------------------ Cards ------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Ventures */}
            <motion.div
              className="group rounded-2xl border-2 border-gray-900 p-8 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardMotion}
              custom={0}
              whileHover={{ y: -8 }}
            >
              <div>
                <IconBox>
                  <Rocket className="w-7 h-7" />
                </IconBox>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Indiemakers Ventures
                </h3>
                <p className="text-sm font-semibold text-gray-600 mb-6">
                  Building Businesses From the Ground Up
                </p>

                <p className="text-sm text-gray-700 mb-4">
                  We conceive, validate, build, and scale digital
                  ventures—primarily SaaS and tech-enabled businesses—designed
                  for global customers from day one.
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>Clear problem selection</li>
                  <li>Sustainable scale</li>
                </ul>

                <p className="text-sm text-gray-700">
                  We retain meaningful ownership and operate with a long-term
                  mindset. This is where we compound.
                </p>
              </div>

              <PrimaryButton text="Explore Our Ventures" />
            </motion.div>

            {/* Labs */}
            <motion.div
              className="group rounded-2xl border-2 border-gray-900 p-8 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardMotion}
              custom={1}
              whileHover={{ y: -8 }}
            >
              <div>
                <IconBox>
                  <Layers className="w-7 h-7" />
                </IconBox>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Indiemakers Labs
                </h3>
                <p className="text-sm font-semibold text-gray-600 mb-6">
                  Co-Building With Founders
                </p>

                <p className="text-sm text-gray-700 mb-4">
                  We partner with founders and domain experts who bring insight
                  and distribution—but need a proven execution team.
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>Idea → MVP → Scale</li>
                  <li>Outcome-aligned partnerships</li>
                </ul>

                <p className="text-sm text-gray-700">
                  If you want a vendor, we’re not a fit. If you want a committed
                  build partner, we should talk.
                </p>
              </div>

              <PrimaryButton text="Apply to Co-Build" />
            </motion.div>

            {/* Services */}
            <motion.div
              className="group rounded-2xl border-2 border-gray-900 p-8 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardMotion}
              custom={2}
              whileHover={{ y: -8 }}
            >
              <div>
                <IconBox>
                  <Settings className="w-7 h-7" />
                </IconBox>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Indiemakers Services
                </h3>
                <p className="text-sm font-semibold text-gray-600 mb-6">
                  Senior Execution for Serious Teams
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>Product Strategy & MVP Execution</li>
                  <li>SaaS Engineering</li>
                  <li>Growth & Monetization</li>
                  <li>CTO-as-a-Service</li>
                </ul>

                <p className="text-sm text-gray-700">
                  Strong engagements can evolve into long-term Labs
                  partnerships.
                </p>
              </div>

              <PrimaryButton text="Start a Conversation" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

/* ------------------ Small Components ------------------ */

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 rounded-xl border-2 border-gray-900 flex items-center justify-center mb-6 text-gray-900">
      {children}
    </div>
  );
}

function PrimaryButton({ text }: { text: string }) {
  return (
    <button className="mt-8 inline-flex items-center gap-2 border-2 border-gray-900 px-5 py-3 rounded-xl text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
      {text}
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
