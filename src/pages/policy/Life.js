import { Helmet } from "react-helmet-async";

export default function Life() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Life Insurance - Creeta</title>
        <meta name="description" content="Secure your family's future with Creeta's Life Insurance plans." />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
        Life Insurance
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Ensure your loved ones are financially protected with our range of life insurance policies, including term and whole life plans.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Term Life Insurance</li>
        <li>Whole Life Coverage</li>
        <li>Flexible Premium Options</li>
        <li>High Claim Settlement Ratio</li>
      </ul>

      <button className="mt-6 bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition">
        Explore Life Plans
      </button>
    </div>
  );
}



