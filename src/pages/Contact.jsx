const Contact = () => (
  <div className="bg-neutral-950 min-h-screen pt-32 px-4 text-center">
    <h1 className="text-4xl text-white font-serif font-bold mb-4">
      Contact Us
    </h1>
    <p className="text-neutral-400">
      Reach out to our premium support concierge.
    </p>

    <div className="mt-8 bg-neutral-900 max-w-md mx-auto p-8 rounded-xl border border-white/10">
      <p className="text-emerald-500 mb-2 font-bold">Email</p>
      <p className="text-white mb-6">concierge@emeraldhorizons.com</p>

      <p className="text-emerald-500 mb-2 font-bold">Phone</p>
      <p className="text-white">+91 (555) 123-4567</p>
    </div>
  </div>
);

export default Contact;