// src/pages/Partner/PartnerIntent.tsx
import { useNavigate } from "react-router-dom";

export default function PartnerIntent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-4xl mx-auto text-[#062F2C]">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Let’s See If We’re a Fit
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          We work with a small number of founders and teams each year.
          Answer a few questions so we can understand your intent and determine the right path.
        </p>

        <div className="space-y-6">
          <IntentCard
            title="Co-Build a Venture (Labs)"
            description="For founders and domain experts looking to build a long-term business with shared ownership."
            onClick={() => navigate("/labs/apply")}
          />

          <IntentCard
            title="Build or Scale a Product (Services)"
            description="For startups and teams needing senior execution for an existing product."
            onClick={() => navigate("/services/qualify")}
          />

          <IntentCard
            title="Explore Strategic Collaboration"
            description="For investors, operators, or partners interested in working with Indiemakers long-term."
            onClick={() => navigate("/partner/contact")}
          />
        </div>
      </div>
    </div>
  );
}

function IntentCard({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full border rounded-2xl p-6 text-left hover:border-[#062F2C] transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </button>
  );
}
