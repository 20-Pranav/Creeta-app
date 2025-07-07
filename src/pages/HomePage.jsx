import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <Helmet>
        <title>Home - Creeta Insurance</title>
        <meta
          name="description"
          content="Welcome to Creeta Insurance. Explore health, life, and vehicle insurance plans."
        />
      </Helmet>

      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center">
        Welcome to Creeta Insurance
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Protect what matters most with our comprehensive insurance plans tailored for your health, life, and vehicle.
      </p>
      <div className="flex justify-center mt-6">
  <Link to="/policies/companies">
    <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
      View Top Insurance Companies
    </button>
  </Link>
</div>
      {/* You can add featured plans, highlights or call-to-actions here */}
    </div>
  );
}


