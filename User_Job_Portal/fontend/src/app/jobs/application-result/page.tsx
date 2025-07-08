"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";

export default function ApplicationResultPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const status = searchParams.get("status");

    if (status === "success") {
      setMessage("✅ Your application was submitted successfully!");
    } else if (status === "error") {
      setMessage("❌ Failed to submit your application. Please try again.");
    } else {
      setMessage("❓ Unknown status. Please check the URL.");
    }
  }, [searchParams]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-white shadow-lg border border-gray-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Application Status
          </h1>
          <p className="text-lg text-gray-700">{message}</p>

          <div className="mt-6">
            <a
              href="/jobs"
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
            >
              Back to Jobs
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
