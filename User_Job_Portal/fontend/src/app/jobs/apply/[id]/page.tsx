"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { useRouter } from "next/navigation";

// Define types
interface Job {
  id: number;
  logo: string;
  name: string;
  type: string;
  location: string;
  salary: string;
}

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  jobId: number;
  cv: File | null;
}

export default function JobApplicationPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState<ApplicationData>({
    name: "",
    email: "",
    phone: "",
    jobId: parseInt(params.id, 10),
    cv: null,
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch job by ID
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get<Job>(
          `http://localhost:3000/job/${params.id}`
        );
        setJob(res.data);
        setFormData((prev) => ({ ...prev, jobId: res.data.id }));
        setLoading(false);
      } catch (err) {
        setError("Failed to load job details");
        setLoading(false);
      }
    };

    fetchJob();
  }, [params.id]);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only");
        e.target.value = "";
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.cv) {
      alert("Please upload your CV");
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("jobId", formData.jobId.toString());
      submitData.append("cv", formData.cv);

      await axios.post("http://localhost:3000/application", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push(`/jobs/application-result?status=success`);
    } catch (err) {
      router.push(`/jobs/application-result?status=error`);
    }
  };

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!job) return <p className="text-gray-500">No job found with this ID.</p>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Apply for {job.name}
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white shadow-md border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Your Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="cv"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload CV (PDF only)
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Job Details Section */}
          <div className="w-full lg:w-1/2 bg-white shadow-md border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Job Details
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={job.logo}
                alt={`${job.name} Logo`}
                className="w-14 h-14 rounded-full object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.name}
                </h3>
                <p className="text-sm text-gray-600">{job.type}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm text-blue-600 font-bold">{job.salary}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              This is a great opportunity to join our team and grow your career.
              Make sure to provide accurate contact details so we can reach out
              to you.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
