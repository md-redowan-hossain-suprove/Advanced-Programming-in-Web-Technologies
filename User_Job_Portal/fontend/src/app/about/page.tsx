"use client";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen p-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About HireHunt
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            At HireHunt, we believe in connecting the right talent with the
            right opportunity. Our mission is to make the job search experience
            faster, smarter, and more human. Whether you're an employer or a
            job seeker, HireHunt is here to simplify the hiring process and
            create meaningful professional journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🌟 Our Mission
            </h2>
            <p className="text-gray-600">
              To empower every job seeker and company with an intelligent
              platform that helps them grow and succeed.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Our Vision
            </h2>
            <p className="text-gray-600">
              Building a world where finding the perfect job or candidate is
              seamless and stress-free.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              💼 What We Offer
            </h2>
            <p className="text-gray-600">
              Resume tools, smart job matching, personalized career suggestions,
              and company hiring dashboards.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
