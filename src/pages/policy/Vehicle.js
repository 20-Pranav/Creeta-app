import { Helmet } from "react-helmet-async";

export default function Vehicle() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <Helmet>
        <title>Vehicle Insurance - Creeta</title>
        <meta name="description" content="Protect your car or bike with comprehensive vehicle insurance from Creeta." />
      </Helmet>
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Vehicle Insurance</h1>
      <p className="text-gray-700 mb-6">
        Drive worry-free with Creeta’s vehicle insurance plans covering damage, theft, and third-party liabilities.
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Comprehensive & third-party cover</li>
        <li>Cashless claims at network garages</li>
        <li>24x7 roadside assistance</li>
        <li>Instant policy issuance</li>
      </ul>
    </div>
  );
}


