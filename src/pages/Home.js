import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePage from "./HomePage";
import EnquiryPage from "./EnquiryPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

import Companies from "./policy/companies";

export default function Home() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/policies/health" element={<Companies />} />
            <Route path="/policies/life" element={<Companies />} />
            <Route path="/policies/vehicle" element={<Companies />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
