import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePage from "./HomePage";
import EnquiryPage from "./Enquiry";  // file is Enquiry.js

import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

import Companies from "./policy/companies";

export default function Home() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/enquiry/:type" element={<EnquiryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
