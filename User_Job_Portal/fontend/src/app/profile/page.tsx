"use client";

import { useEffect, useState } from "react";
import axios from "axios"; // Make sure you have axios installed
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";

// Define User interface (match backend response)
interface User {
  id: number;
  name: string;
  email: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const[email, setemail] = useState(localStorage.getItem("email"))

  useEffect(() => {
    const fetchUserData = async () => {

      if (!email) {
        setError("User email not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/user`, {
          params: { email: email },
        });

        if (response.data) {
          setUser(response.data);
        } else {
          setError("User not found.");
        }
      } catch (err) {
        console.error("Failed to fetch user data", err);
        setError("Failed to load user information.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen py-10 px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">My Profile</h1>

          {loading && (
            <p className="text-center text-gray-500">Loading profile...</p>
          )}

          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {!loading && !error && user && (
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/male-face-avatar-icon-set-flat-d.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Profile Details */}
              <div className="text-center text-gray-800 space-y-2">
                <p><strong>Full Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>

              {/* Edit Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}