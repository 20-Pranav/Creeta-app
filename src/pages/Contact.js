import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <Helmet>
        <title>Contact Us - Creeta</title>
        <meta
          name="description"
          content="Get in touch with Creeta Insurance for inquiries and support."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Contact Us</h1>
      <p className="mb-4 text-gray-700">
        Have questions or need assistance? Reach out to us through the contact details below or fill out our contact form.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Address</h2>
          <p>123 Insurance Blvd, Mumbai, Maharashtra, India</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Phone</h2>
          <p>+91 98765 43210</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Email</h2>
          <p>support@creeta.com</p>
        </div>
      </div>
    </div>
  );
}

