import Lic from "./Lic";
import StarHealth from "./StarHealth";
import NewIndiaAssurance from "./NewIndiaAssurance";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import HealthImg from "../../../assets/Health.webp";
import LifeImg from "../../../assets/Life.webp";
import VehicleImg from "../../../assets/Vehicle.webp";

export default function Companies() {
  const policies = [
    {
      title: "Health Insurance",
      image: HealthImg,
      path: "/policies/health",
      description: "Affordable plans from top providers for all age groups.",
    },
    {
      title: "Life Insurance",
      image: LifeImg,
      path: "/policies/life",
      description: "Secure your family’s future with trusted coverage.",
    },
    {
      title: "Vehicle Insurance",
      image: VehicleImg,
      path: "/policies/vehicle",
      description: "Protect your vehicle from accidents and theft.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <Helmet>
        <title>Top Insurance Companies - Creeta</title>
        <meta
          name="description"
          content="Explore insurance plans from the most trusted companies in India."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        Top Insurance Categories
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map(({ title, image, path, description }) => (
          <div
            key={title}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <Link
                to={path}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

