import { Helmet } from "react-helmet-async";
export default function Vehicle() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Vehicle Insurance</h1>
      <p className="text-lg text-gray-700 mb-4">
        Protect your car or bike with our comprehensive Vehicle Insurance plans including third-party and own-damage coverage.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Third-party liability insurance</li>
        <li>Comprehensive vehicle insurance</li>
        <li>Roadside assistance</li>
        <li>Easy claim process</li>
      </ul>
    </div>
  );
}

