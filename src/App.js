import { HelmetProvider } from "react-helmet-async";
import Policies from "./pages/Policies";
import Claims from "./pages/Claims";
import Contact from "./pages/Contact";
import React from "react";
import Health from "./pages/policy/Health";
import Life from "./pages/policy/Life";
import Vehicle from "./pages/policy/Vehicle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Companies from './pages/policy/companies'; // no trailing /index needed

<Routes>
  {/* existing routes */}
  <Route path="/policies/companies" element={<Companies />} />
</Routes>
function App() {
  return (  
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies/health" element={<Health />} />
            <Route path="/policies/life" element={<Life />} />
            <Route path="/policies/vehicle" element={<Vehicle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

<HelmetProvider>
  <App />
</HelmetProvider>
export default App;
