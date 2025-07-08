"use client";

import { useState } from "react";
import axios from "axios"; // 🔥 Don't forget to install axios: npm install axios
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useRouter } from "next/navigation";

// Define types
interface LoginResponse {
  message: string;
  access_token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset previous errors

    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        }
      );

      // Handle success
      console.log("Login response:", response.data);
      // alert("Login successful!");
      // You can redirect or store token here
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("email", email);
      router.push("/jobs");
    } catch (err: any) {
      // Handle error
      const errorMessage =
        err.response?.data?.message || "An error occurred during login.";
      setError(errorMessage);
      // alert("Login failed: " + errorMessage);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-10 mb-20">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}