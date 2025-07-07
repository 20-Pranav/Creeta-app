import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeAllMenus = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = ["Home", "Enquiry", "Contact", "About"];

  return (
    <nav className="bg-indigo-700 text-white" role="navigation">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">
          Creeta
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {/* Policies dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center font-medium hover:opacity-90 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="policies-menu"
              type="button"
            >
              Policies <FaChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <ul
                id="policies-menu"
                className="absolute left-0 mt-2 w-48 bg-indigo-600 rounded shadow-lg z-20"
                role="menu"
                aria-label="Policies submenu"
              >
                {[
                  { to: "/policies/health", label: "Health Insurance" },
                  { to: "/policies/life", label: "Life Insurance" },
                  { to: "/policies/vehicle", label: "Vehicle Insurance" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="block px-4 py-2 hover:bg-indigo-500"
                      onClick={closeAllMenus}
                      role="menuitem"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {navLinks.map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white text-white font-semibold"
                    : "hover:border-b-2 hover:border-indigo-300 text-indigo-200"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobile}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          type="button"
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-indigo-700 px-4 pb-4 space-y-2">
          <li>
            <button
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-policies-menu"
              className="w-full flex justify-between items-center py-2 font-medium"
              type="button"
            >
              Policies <FaChevronDown />
            </button>
            {dropdownOpen && (
              <ul
                id="mobile-policies-menu"
                className="pl-4 space-y-1"
              >
                {[
                  { to: "/policies/health", label: "Health Insurance" },
                  { to: "/policies/life", label: "Life Insurance" },
                  { to: "/policies/vehicle", label: "Vehicle Insurance" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={closeAllMenus}
                      className="block py-1 hover:bg-indigo-600 rounded"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {navLinks.map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                onClick={closeAllMenus}
                className="block py-2 pl-2 font-medium hover:bg-indigo-600 rounded"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
