import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">About Creeta Insurance</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        At Creeta Insurance, we believe in protecting what matters most to you. With over 10 years of experience in the insurance industry, we have been committed to offering affordable, reliable, and personalized insurance plans tailored to your needs.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Our mission is to provide peace of mind by ensuring that you and your loved ones are covered in every stage of life. Whether it's health, life, or vehicle insurance, our team of dedicated professionals is here to guide you every step of the way.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        We pride ourselves on excellent customer service, fast claims processing, and transparent policies. Thank you for choosing Creeta Insurance as your trusted partner.
      </p>
    </div>
  );
}

