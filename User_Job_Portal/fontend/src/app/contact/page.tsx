"use client";

import { useState } from "react";
import axios from "axios"; // Make sure you have axios installed
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Define types
interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function ContactUsPage() {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);

    try {
      await axios.post("http://localhost:3000/contact", form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact HireHunt</h1>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Get in Touch</h2>

            <p className="mb-4 text-gray-600">
              Have a question, concern, or feedback? We'd love to hear from you.
            </p>

            {/* Success Message */}
            {success && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
                <p className="font-medium">Thank you for contacting us!</p>
                <p>We will get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                <p>{error}</p>
              </div>
            )}

            {/* Contact Info */}
            <div className="mb-6">
              <p className="text-gray-700"><strong>Email:</strong> support@hirehunt.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +880-1234-567890</p>
              <p className="text-gray-700"><strong>Address:</strong> Gulshan 1, Dhaka, Bangladesh</p>
            </div>

            {/* Contact Form */}
            {!success && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+880 XXXX XXXXXX"
                    required
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-gray-300 text-black px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message here..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition ${
                    submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}