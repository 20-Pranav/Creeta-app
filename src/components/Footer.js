import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top row: logo + nav + socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo / brand */}
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition"
            aria-label="Creeta Home"
          >
            Creeta
          </Link>

          {/* Quick nav links */}
          <nav
            className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium"
            aria-label="Footer navigation"
          >
            {["Home", "Policies", "Enquiry", "Contact", "About"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-indigo-700 transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-5 text-gray-500 justify-center md:justify-end">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter / X"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Optional newsletter or contact placeholder */}
        {/* <div className="mt-8 text-center">
          <p className="mb-3 text-sm font-semibold text-indigo-700">
            Subscribe to our newsletter
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="ml-2 px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800 transition">
            Subscribe
          </button>
        </div> */}

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom row: copyright + back to top */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm gap-2">
          <p>© {new Date().getFullYear()} Creeta Insurance. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="text-indigo-700 hover:text-indigo-900 font-semibold transition"
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}


