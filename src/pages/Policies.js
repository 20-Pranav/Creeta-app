import { Helmet } from "react-helmet-async";

export default function Policies() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-md">
      <Helmet>
        <title>Policies - Creeta</title>
        <meta
          name="description"
          content="Explore our insurance policies including Health, Life, and Vehicle insurance."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Our Policies</h1>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Health Insurance</li>
        <li>Life Insurance</li>
        <li>Vehicle Insurance</li>
      </ul>
    </div>
  );
}
