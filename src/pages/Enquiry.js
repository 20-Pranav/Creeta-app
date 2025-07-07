import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    policyNumber: "",
    email: "",
    enquiryDetails: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.policyNumber) newErrors.policyNumber = "Policy number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.enquiryDetails) newErrors.enquiryDetails = "Please describe your enquiry";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Enquiry submitted successfully!");
      // reset form
      setFormData({
        fullName: "",
        policyNumber: "",
        email: "",
        enquiryDetails: "",
      });
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <Helmet>
        <title>Submit a Enquiry - Creeta</title>
        <meta name="description" content="Submit your insurance claim easily with Creeta." />
      </Helmet>

      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Submit a Enquiry</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="policyNumber">
            Policy Number
          </label>
          <input
            id="policyNumber"
            name="policyNumber"
            type="text"
            value={formData.policyNumber}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.policyNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.policyNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.policyNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="enquiryDetails">
            Enquiry Details
          </label>
          <textarea
            id="enquiryDetails"
            name="enquiryDetails"
            value={formData.enquiryDetails}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.enquiryDetails ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
          />
          {errors.enquiryDetails && (
            <p className="text-red-500 text-sm mt-1">{errors.enquiryDetails}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-700 text-white font-semibold py-2 rounded hover:bg-indigo-800"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
