"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import axios from "../utils/axios";

interface Company {
  id: number;
  name: string;
  address: string;
  email: string;
  contactNumber: string;
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchCompanies = async () => {
    try {
      const response = await axios.get("/companies");
      setCompanies(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch companies.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this company?")) return;
    try {
      await axios.delete(`/companies/${id}`);
      setCompanies(companies.filter((company) => company.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete company. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-black">All Companies</h1>

        {loading && <p className="text-black">Loading companies...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && companies.length === 0 && (
          <p className="text-black">No companies found.</p>
        )}

        {!loading && companies.length > 0 && (
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left border-b border-gray-300 text-black">Name</th>
                  <th className="px-4 py-2 text-left border-b border-gray-300 text-black">Address</th>
                  <th className="px-4 py-2 text-left border-b border-gray-300 text-black">Email</th>
                  <th className="px-4 py-2 text-left border-b border-gray-300 text-black">Contact Number</th>
                  <th className="px-4 py-2 text-left border-b border-gray-300 text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 border-b border-gray-200 text-black">{company.name}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-black">{company.address}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-black">{company.email}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-black">{company.contactNumber}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-black">
                      <button
                        onClick={() => handleDelete(company.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
