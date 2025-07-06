import { Helmet } from "react-helmet-async";

export default function Companies() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Top Insurance Companies - Creeta</title>
        <meta
          name="description"
          content="Learn about LIC, Star Health, and New India Assurance. Explore their plans and choose the right insurance for you."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Top Insurance Companies</h1>

      <div className="space-y-8">
        {/* LIC */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600">LIC (Life Insurance Corporation of India)</h2>
          <p className="mt-2 text-gray-700">
            LIC is India's largest and most trusted life insurance provider, owned by the Government of India.
            It offers a range of life insurance plans including term insurance, endowment policies, and pension schemes
            suitable for individuals and families across all income groups.
          </p>
        </div>

        {/* Star Health */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600">Star Health and Allied Insurance</h2>
          <p className="mt-2 text-gray-700">
            Star Health is a leading health insurance provider in India, known for its customer-friendly services,
            quick claims process, and extensive hospital network. It specializes in individual, family floater, and
            senior citizen health plans.
          </p>
        </div>

        {/* New India Assurance */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600">New India Assurance</h2>
          <p className="mt-2 text-gray-700">
            A government-owned general insurance company, New India Assurance offers a wide range of insurance
            solutions including health, motor, travel, home, and marine insurance. Known for its robust financial
            backing and pan-India presence.
          </p>
        </div>
      </div>
    </div>
  );
}
