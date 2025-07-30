import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import logo from "../assets/car1.png";
import image from "../assets/car.png";
import image1 from "../assets/health.png";
import image2 from "../assets/health1.png";
import image3 from "../assets/life.png";
import image4 from "../assets/life1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  const slides = [logo, image, image1, image2, image3, image4];

  return (
    <div className="w-full">
      <Helmet>
        <title>Home - Creeta Insurance</title>
      </Helmet>

      {/* HERO with background slider */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Slider {...settings} className="absolute inset-0 z-0">
          {slides.map((src, index) => (
            <div key={index} className="w-full h-[90vh]">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Secure Your Future with Creeta Insurance
          </h1>
          <p className="text-lg max-w-2xl mb-6">
            Comprehensive Health, Life, and Vehicle plans to protect what matters most.
          </p>
          <Link to="/policies/health">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Explore Plans
            </button>
          </Link>
        </div>
      </div>

      {/* POLICIES SECTION */}
      <div className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          Our Insurance Plans
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
             {/* Health */}
             <div className="bg-white p-6 rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src={image1}
              alt="Health"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Health Insurance
            </h3>
            <p className="text-gray-600 mb-4">
              Safeguard your family with coverage for hospitalizations, illnesses, and more.
            </p>
            <Link to="/enquiry/health">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Life */}
           <div className="bg-white p-6 rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src={image3}
              alt="Life"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Life Insurance
            </h3>
            <p className="text-gray-600 mb-4">
              Protect your loved ones' future with comprehensive life coverage.
            </p>
            <Link to="/enquiry/life">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Vehicle */}
           <div className="bg-white p-6 rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src={logo}
              alt="Vehicle"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Vehicle Insurance
            </h3>
            <p className="text-gray-600 mb-4">
              Get coverage for cars, bikes, and other vehicles at the best rates.
            </p>
            <Link to="/enquiry/vehicle">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

