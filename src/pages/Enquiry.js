import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
console.log("Rendering Enquiry component");

export default function Enquiry() {
  const { type } = useParams();

  // Form state, with insuranceType initialized from route param
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    enquiryDetails: "",
    insuranceType: type ? type.charAt(0).toUpperCase() + type.slice(1) : "",
  });

  const [errors, setErrors] = useState({});

  // Update insuranceType if route param changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      insuranceType: type ? type.charAt(0).toUpperCase() + type.slice(1) : "",
    }));
  }, [type]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.enquiryDetails) newErrors.enquiryDetails = "Please describe your enquiry";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Enquiry submitted successfully!");
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        enquiryDetails: "",
        insuranceType: type ? type.charAt(0).toUpperCase() + type.slice(1) : "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <Helmet>
        <title>Submit an Enquiry - Creeta</title>
        <meta
          name="description"
          content={`Submit your ${formData.insuranceType} insurance enquiry easily with Creeta.`}
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Submit an Enquiry for {formData.insuranceType || "Insurance"}
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
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

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="text"
            value={formData.mobileNumber}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.mobileNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
          )}
        </div>

        {/* Email */}
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

        {/* Insurance Type (readonly) */}
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="insuranceType">
            Insurance Type
          </label>
          <input
            id="insuranceType"
            name="insuranceType"
            type="text"
            value={formData.insuranceType}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Enquiry Details */}
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

        {/* Submit Button */}
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
