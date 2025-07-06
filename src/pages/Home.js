export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
            Secure Your Future with Creeta Insurance
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable, reliable, and flexible insurance plans tailored just for you.
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
              Get a Quote
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition">
              View Plans
            </button>
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Creeta?</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          With over a decade of experience, we’ve helped thousands protect what matters most — health, family, and future.
        </p>
      </section>
    </div>
  );
}

