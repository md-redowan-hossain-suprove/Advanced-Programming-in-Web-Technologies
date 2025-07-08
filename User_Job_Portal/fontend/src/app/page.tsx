"use client";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";   
import BrowseBy from "./Components/BrowseBy"; 
import FeaturedJobs from "./Components/FeaturedJobs";
import FactAndFigures from "./Components/FactAndFigures";
import TestimonialBanner from "./Components/TestimonialBanner";
import Footer from "./Components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <BrowseBy />
      <FeaturedJobs />
      <FactAndFigures />
      <TestimonialBanner />
      <Footer />
      
      <main className="p-8">
        {/* your home page content goes here */}
      </main>
    </div>
  );
}
