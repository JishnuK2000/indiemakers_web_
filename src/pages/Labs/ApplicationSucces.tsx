// src/pages/Partner/PartnerIntent.tsx
import { useNavigate } from "react-router-dom";

export default function PartnerIntent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-[#062F2C]">
        <h1 className="text-[36px] sm:text-[48px] font-extrabold mb-4">
          Let’s See If We’re a Fit
        </h1>

        <p className="text-[18px] sm:text-[20px] text-gray-600 mb-12">
          We work with a small number of founders and teams each year.
          Answer a few questions so we can understand your intent and determine the right path.
        </p>

        <div className="grid gap-6">
          {/* Option 1 */}
          <button
            onClick={() => navigate("/labs/apply")}
            className="border rounded-2xl p-6 text-left hover:border-[#062F2C] transition"
          >
            <h3 className="text-[22px] font-semibold mb-2">
              Co-Build a Venture (Labs)
            </h3>
            <p className="text-gray-600">
              For founders and domain experts looking to build a long-term business with shared ownership.
            </p>
          </button>

          {/* Option 2 */}
          <button
            onClick={() => navigate("/services/qualify")}
            className="border rounded-2xl p-6 text-left hover:border-[#062F2C] transition"
          >
            <h3 className="text-[22px] font-semibold mb-2">
              Build or Scale a Product (Services)
            </h3>
            <p className="text-gray-600">
              For startups and teams needing senior execution for an existing product.
            </p>
          </button>

          {/* Option 3 */}
          <button
            onClick={() => navigate("/partner/contact")}
            className="border rounded-2xl p-6 text-left hover:border-[#062F2C] transition"
          >
            <h3 className="text-[22px] font-semibold mb-2">
              Explore Strategic Collaboration
            </h3>
            <p className="text-gray-600">
              For investors, operators, or partners interested in working with Indiemakers long-term.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
