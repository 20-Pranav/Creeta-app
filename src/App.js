import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Policies from "./pages/Policies";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Health from "./pages/policy/Health";
import Life from "./pages/policy/Life";
import Vehicle from "./pages/policy/Vehicle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
          <Navbar />
          <main className="flex-grow max-w-6xl mx-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/policies/health" element={<Health />} />
              <Route path="/policies/life" element={<Life />} />
              <Route path="/policies/vehicle" element={<Vehicle />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

