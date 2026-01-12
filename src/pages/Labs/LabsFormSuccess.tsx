// src/pages/Labs/ApplicationSuccess.tsx
export default function ApplicationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center text-[#062F2C]">
        <h1 className="text-4xl font-extrabold mb-4">
          Application Received
        </h1>

        <p className="text-lg text-gray-600">
          Thank you for applying to Indiemakers Labs.
          <br />
          If there is a potential fit, we will reach out to schedule a conversation.
          Due to volume, we may not be able to respond to every application.
        </p>
      </div>
    </div>
  );
}
