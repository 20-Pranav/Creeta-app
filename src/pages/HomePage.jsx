import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import logo from "../assets/car1.png";
import image from "../assets/car.png";
import image1 from "../assets/health.png";
import image2 from "../assets/health1.png";
import image3 from "../assets/life.png";
import image4 from "../assets/life1.png";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // smoother fade transition
  };

  const slides = [
    { src: logo, caption: "Drive with Confidence" },
    { src: image, caption: "Secure Your Car Today" },
    { src: image1, caption: "Protect Your Health" },
    { src: image2, caption: "Comprehensive Health Coverage" },
    { src: image3, caption: "Life Insurance Plans" },
    { src: image4, caption: "Plan for a Safe Future" },
  ];

  return (
    <div>
      <Helmet>
        <title>Home - Creeta Insurance</title>
        <meta
          name="description"
          content="Welcome to Creeta Insurance. Explore health, life, and vehicle insurance plans."
        />
      </Helmet>

      {/* Intro section */}
      <div className="max-w-6xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">
          Welcome to Creeta Insurance
        </h1>
      </div>

      {/* Full-width Hero Slider */}
      <div className="w-full relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.src}
                alt={`slide-${index}`}
                className="w-full h-[550px] object-cover"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-3xl md:text-5xl font-bold px-4 text-center">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="max-w-6xl mx-auto p-8 text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Protect what matters most with our comprehensive insurance plans
          tailored for your health, life, and vehicle.
        </p>
        <Link to="/policies/companies">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            View Top Insurance Companies
          </button>
        </Link>
      </div>
    </div>
  );
}


    
 

