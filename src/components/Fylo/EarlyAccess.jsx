import { useState } from "react";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="early-access" className="relative px-6 [.dark_&]:bg-[hsl(216_53%_9%)] md:px-0">
      <div className="bg-[#e5e7eb] [.dark_&]:bg-[hsl(218_28%_13%)] relative -top-40 mx-auto max-w-4xl space-y-6 rounded-lg p-10 px-6 text-center md:px-16">
        <h5 className="text-2xl font-bold">Get early access today</h5>
        <p className="text-sm">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start space-y-6 md:flex-row md:space-x-6 md:space-y-0"
        >
          <div className="w-full md:flex-1">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full px-10 py-3 focus:outline-none"
              placeholder="email@example.com"
            />
          </div>
          <button
            type="submit"
            className="bg-[hsl(176_68%_64%)] w-full rounded-full p-3 px-6 hover:scale-95 md:w-56"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
};

export default EarlyAccess;