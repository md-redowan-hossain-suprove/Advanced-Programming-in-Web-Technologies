// /app/Components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
      <img src="hirehunt-02.svg" alt="HireHunt Logo" className="h-8 w-auto" />
      </div>


      {/* Menu */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/jobs">Jobs</Link></li>
        <li><Link href="/companies">Companies</Link></li>
        <li><Link href="/about">About Us</Link></li>
        {token && <li><Link href="/profile">Profile</Link></li>}
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>

      {/* Login Button */}
      {token ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
}
