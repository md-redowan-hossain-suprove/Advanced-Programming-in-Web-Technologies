"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const allCompanies = [
  { id: 1, name: "Tech Solutions", logo: "562a52c054f32cd0c5b692d9f5fec756.jpg" },
  { id: 2, name: "Innovatech", logo: "473566488b888a0b0d8ad95df0fc2b50.jpg" },
  { id: 3, name: "Microsoft", logo: "AIdro_kXVj3MGEZAiw5LFOtWMYpl9EHk.jpg" },
  { id: 4, name: "FutureSoft", logo: "attachment_67571500.jpg" },
  { id: 5, name: "Meta", logo: "meta-6871457_640.jpg" },
  { id: 6, name: "Google", logo: "screenshot.jpg" },
  { id: 7, name: "NexGen Systems", logo: "images.jpg" },
  { id: 8, name: "Quantum Labs", logo: "images (1).jpg" },
  { id: 9, name: "Bluewave Tech", logo: "vardhaman-logo-design-by-wdsoft.jpg" },
  { id: 10, name: "Solaris Inc", logo: "corporate-company-logo-design-te.jpg" },
  { id: 11, name: "Vertex Dynamics", logo: "562a52c054f32cd0c5b692d9f5fec756.jpg" },
  { id: 12, name: "Omega Solutions", logo: "attachment_67571500.jpg" },
];

const INITIAL_COUNT = 6; 
const LOAD_MORE_COUNT = 3;

export default function CompaniesPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleCompanies = allCompanies.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, allCompanies.length)
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-black">Companies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCompanies.map((company) => (
            <div
              key={company.id}
              className="flex items-center gap-4 p-4 border rounded shadow hover:shadow-lg transition"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://via.placeholder.com/64?text=Logo";
                }}
              />
              <div>
                <h2 className="text-xl font-semibold text-black">{company.name}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allCompanies.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
