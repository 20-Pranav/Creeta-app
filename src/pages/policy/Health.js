import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Health() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry/health");
  };
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Health Insurance - Creeta</title>
        <meta name="description" content="Explore a wide range of health insurance plans tailored to your needs." />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
        Health Insurance
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Safeguard your family with our customizable Health Insurance policies covering hospitalizations, critical illnesses, and more.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Individual & Family Health Plans</li>
        <li>Cashless Hospital Network</li>
        <li>Pre and Post Hospitalization Coverage</li>
        <li>Critical Illness Rider Options</li>
      </ul> 
<Link to="/enquiry/health">
  <button 
  onClick={handleEnquiryClick}
  className="mt-6 bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition">
    Get Health Quote
  </button>
</Link>
    </div>
  );
}


