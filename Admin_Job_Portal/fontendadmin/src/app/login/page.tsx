"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "../utils/axios"; // Adjust path if needed

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/admin/login", { email, password });
      // Save token in localStorage (or cookies if you prefer)
      localStorage.setItem("adminToken", res.data.access_token);
      // Redirect to admin dashboard or home page
      router.push("/admin/home");
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md max-w-sm w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && (
          <p className="mb-4 text-red-600 text-center font-semibold">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 mb-4 w-full"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2 mb-6 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
