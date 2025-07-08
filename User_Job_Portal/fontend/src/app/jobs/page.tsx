"use client";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { METHODS } from "http";
import Link from "next/link";

interface Job {
  id: number;
  logo: string;
  name: string;
  type: string;
  location: string;
  salary: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>();
  useEffect(() => {
    const getjobs = async () => {
      const res = await axios.get("http://localhost:3000/job");
      setJobs(res.data);
    };
    getjobs();
  });

  const token = localStorage.getItem("token");

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Active Jobs
        </h1>

        {!token && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md text-center">
            Please log in to apply for jobs
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs &&
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={job.logo}
                    alt="Company Logo"
                    className="w-14 h-14 rounded-full object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.name}
                    </h3>
                    <p className="text-sm text-gray-600">{job.type}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                    <p className="text-sm text-blue-600 font-bold">
                      {job.salary}
                    </p>
                  </div>
                </div>
                {token ? (
                  <Link
                    href={`/jobs/apply/${job.id}`}
                    className="mt-auto flex justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
                  >
                    Apply
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="mt-auto flex justify-center bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-md"
                  >
                    Apply
                  </Link>
                )}
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
