
"use client";

import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white" style={{ backgroundImage: "url('yellow-chair-standing-out-crowd.jpg')" }}>
      <div className=" bg-opacity-10 w-full h-full absolute top-0 left-0 z-0" />
      
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Find the right job here</h1>

        {/* Search Box */}
        <div className="max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search jobs by title or keyword..."
              className="w-full px-4 py-3 text-gray-800 focus:outline-none"
            />
            <button className="px-3 py-4 bg-blue-600 hover:bg-blue-700 text-white h-full">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
