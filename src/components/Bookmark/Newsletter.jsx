import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="bg-softBlue">
      <div className="mx-auto max-w-lg py-24">
        <p className="mb-6 text-center text-lg uppercase tracking-widest text-white">
          35,000+ Already Joined
        </p>
        <h2 className="mb-6 px-3 text-center text-3xl font-semibold text-white md:text-4xl">
          Stay up-to-date with what we&apos;re doing
        </h2>

        <form
          className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-6 px-6 text-base md:flex-row md:space-x-4 md:space-y-0 md:px-0"
          onSubmit={handleSubmit}
        >
          <div className="mx-auto flex flex-col justify-between items-center md:mx-0 md:flex-row">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 flex-1 rounded-lg border border-white px-6 pt-3 pb-2 focus:outline-none md:mb-0 md:mr-3"
              placeholder="Enter your email address"
              required
            />
            <input
              type="submit"
              className="inline-flex cursor-pointer rounded-lg bg-softRed px-6 py-3 text-center font-semibold text-white duration-200 hover:opacity-90 focus:outline-none"
              value={subscribed ? "Subscribed!" : "Contact Us"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;