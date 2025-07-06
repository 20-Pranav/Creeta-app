import { Helmet } from "react-helmet-async";
const policies = [
  {
    title: "Health Insurance",
    description: "Comprehensive health coverage for individuals and families.",
    color: "bg-green-100 text-green-800"
  },
  {
    title: "Life Insurance",
    description: "Secure your family’s future with tailored life insurance plans.",
    color: "bg-blue-100 text-blue-800"
  },
  {
    title: "Vehicle Insurance",
    description: "Protect your car, bike, or commercial vehicle from damages and theft.",
    color: "bg-yellow-100 text-yellow-800"
  },
];

export default function Policies() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Our Insurance Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {policies.map((policy, index) => (
          <div key={index} className={`rounded-lg p-6 shadow-sm border ${policy.color}`}>
            <h2 className="text-xl font-semibold mb-2">{policy.title}</h2>
            <p className="text-sm">{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


