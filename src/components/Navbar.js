import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Creeta Insurance</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
        <Link to="/policies" className="text-gray-700 hover:text-indigo-600">Policies</Link>
        <Link to="/claims" className="text-gray-700 hover:text-indigo-600">Claims</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
      </div>
    </nav>
  );
}

