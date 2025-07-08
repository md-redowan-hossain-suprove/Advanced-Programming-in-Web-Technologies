"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "file" && files) {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Resume submitted:", formData);
    // Here you'd integrate with your backend/API
    alert("Resume submitted successfully!");
  };

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Life at HireHunt
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat, arcu vel eleifend pretium, orci sapien hendrerit leo, vel
            placerat ex nisl sit amet orci.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Drop your Resume
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Upload Resume
              </label>
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx"
                required
                className="w-full border border-gray-300 p-2 rounded bg-white"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
