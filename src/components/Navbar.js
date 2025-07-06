import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // Keyboard navigation for dropdown
  function handleDropdownKeyDown(e) {
    if (e.key === "Escape") {
      setDropdownOpen(false);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  }

  return (
    <nav className="bg-indigo-700 text-white" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">Creeta</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onKeyDown={handleDropdownKeyDown}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white font-semibold hover:border-b-2 hover:border-indigo-300"
              type="button"
            >
              Policies <FaChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-indigo-600 rounded shadow-lg z-20"
                role="menu"
                aria-label="Policies submenu"
              >
                <li>
                  <NavLink
                    to="/policies/health"
                    className="block px-4 py-2 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    Health Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/policies/life"
                    className="block px-4 py-2 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    Life Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/policies/vehicle"
                    className="block px-4 py-2 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    Vehicle Insurance
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Other nav links */}
          {["Home", "Claims", "Contact", "About"].map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white font-semibold"
                    : "hover:border-b-2 hover:border-indigo-300"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul id="mobile-menu" className="md:hidden bg-indigo-700 px-4 pb-4 space-y-3">
          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              className="w-full flex justify-between items-center py-2 px-3 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
            >
              Policies <FaChevronDown />
            </button>
            {dropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li>
                  <NavLink
                    to="/policies/health"
                    className="block py-1 hover:bg-indigo-600 rounded"
                    onClick={closeMenu}
                  >
                    Health Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/policies/life"
                    className="block py-1 hover:bg-indigo-600 rounded"
                    onClick={closeMenu}
                  >
                    Life Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/policies/vehicle"
                    className="block py-1 hover:bg-indigo-600 rounded"
                    onClick={closeMenu}
                  >
                    Vehicle Insurance
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Other nav links */}
          {["Home", "Claims", "Contact", "About"].map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "block border-l-4 border-white pl-3 font-semibold py-2"
                    : "block pl-3 hover:border-l-4 hover:border-indigo-300 py-2"
                }
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


