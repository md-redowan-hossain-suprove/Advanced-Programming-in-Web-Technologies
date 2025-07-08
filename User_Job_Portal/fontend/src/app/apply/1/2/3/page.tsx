"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ApplyPage() {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null as File | null,
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/jobs/${id}`).then((res) => {
      setJob(res.data);
    });
  }, [id]);

  const handleChange = (e: any) => {
    if (e.target.name === "cv") {
      setFormData({ ...formData, cv: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
    data.append("jobId", id as string);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (formData.cv) data.append("cv", formData.cv);

    await axios.post("http://localhost:3000/api/apply", data);
    alert("Application submitted!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {job && (
        <>
          <h1 className="text-3xl font-bold mb-4">Apply for {job.title}</h1>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
        </>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mt-6 w-full max-w-md"
        encType="multipart/form-data"
      >
        <legend className="text-xl font-semibold mb-4">Apply Now</legend>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          className="mb-4"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
