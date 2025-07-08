"use client";

import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidebar from "../Component/Sidebar"; // adjust path if your structure differs

interface User {
  id: number;
  name: string;
  email: string;
  cvStatus: string;
  vivaStatus: string;
}

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/user/all");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: "accepted" | "rejected") => {
    try {
      await axios.patch(`/user/${id}/status`, { cvStatus: status });
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Failed to update status.");
    }
  };

  const deleteUser = async (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`/user/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">User Management</h1>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="overflow-x-auto">
          <table className="min-w-full border rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2 text-black">Name</th>
                <th className="border px-4 py-2 text-black">Email</th>
                <th className="border px-4 py-2 text-black">CV Status</th>
                <th className="border px-4 py-2 text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center hover:bg-gray">
                  <td className="border px-4 py-2 text-black">{user.name}</td>
                  <td className="border px-4 py-2 text-black">{user.email}</td>
                  <td className="border px-4 py-2 capitalize text-black">{user.cvStatus}</td>
                  <td className="border px-4 py-2 space-x-2 text-black">
                    <button
                      onClick={() => updateStatus(user.id, "accepted")}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(user.id, "rejected")}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && !loading && (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
