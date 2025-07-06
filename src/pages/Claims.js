import { useState } from "react";

export default function Claims() {
  const [formData, setFormData] = useState({
    fullName: "",
    policyNumber: "",
    email: "",
    claimDetails: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Basic validation
  function validate() {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.policyNumber.trim()) newErrors.policyNumber = "Policy number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.claimDetails.trim()) newErrors.claimDetails = "Please describe your claim";
    return newErrors;
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Claim submitted successfully! (This is a demo, no backend connected)");
      // Clear form
      setFormData({ fullName: "", policyNumber: "", email: "", claimDetails: "" });
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">File a Claim</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="policyNumber">Policy Number</label>
          <input
            id="policyNumber"
            name="policyNumber"
            type="text"
            value={formData.policyNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.policyNumber ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.policyNumber && <p className="text-red-500 text-sm mt-1">{errors.policyNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="claimDetails">Claim Details</label>
          <textarea
            id="claimDetails"
            name="claimDetails"
            rows="4"
            value={formData.claimDetails}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded resize-none ${errors.claimDetails ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.claimDetails && <p className="text-red-500 text-sm mt-1">{errors.claimDetails}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-700 transition"
        >
          Submit Claim
        </button>
      </form>
    </div>
  );
}
