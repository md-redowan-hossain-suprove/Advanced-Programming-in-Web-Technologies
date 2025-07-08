"use client";

import Image from "next/image";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Sidebar on the left */}
      <Sidebar />
      {/* Main content on the right */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4 text-black">Welcome to the Dashboard</h1>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            {/* Add your buttons or content here */}

          </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-2">
  {/* Client Box */}
  <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
    <div className="bg-blue-100 p-3 rounded-full">
      <img src="/icons/user.svg" alt="Client Icon" className="w-6 h-6" />
    </div>
    <div>
      <p className="text-gray-500 text-sm">Clients</p>
      <h3 className="text-xl font-bold text-gray-800">132</h3>
    </div>
  </div>

  {/* Company Box */}
  <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
    <div className="bg-green-100 p-3 rounded-full">
      <img src="/icons/building.svg" alt="Company Icon" className="w-6 h-6" />
    </div>
    <div>
      <p className="text-gray-500 text-sm">Companies</p>
      <h3 className="text-xl font-bold text-gray-800">58</h3>
    </div>
  </div>

  {/* Applications Dropped Box */}
  <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
    <div className="bg-red-100 p-3 rounded-full">
      <img src="/icons/document.svg" alt="Application Icon" className="w-6 h-6" />
    </div>
    <div>
      <p className="text-gray-500 text-sm">Applications Dropped</p>
      <h3 className="text-xl font-bold text-gray-800">204</h3>
    </div>
  </div>
</div>
<div className="flex flex-col lg:flex-row w-full gap-6 mt-8">
  {/* Left: Stat boxes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
    {/* Your 3 legend/stat boxes (Clients, Companies, Applications Dropped) */}
    {/* ...insert previous stat boxes code here... */}
  </div>

  {/* Right: Profile Box */}
  <div className="w-full lg:w-72 bg-white shadow-md rounded-lg p-6">
    {/* Profile Picture */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/man-avatar-profile-picture-isola.jpg" // make sure you place a file in public/profile.jpg
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
      <p className="text-sm text-gray-500 mb-4">Admin</p>
    </div>

    {/* Recent Activities */}
    <div>
      <h4 className="text-md font-medium text-gray-700 mb-2">Recent Activities</h4>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>✔ Posted a job listing</li>
        <li>✔ Approved 3 applications</li>
        <li>✔ Responded to a client</li>
        <li>✔ Reviewed feedback</li>
      </ul>
    </div>
  </div>
</div>

        </main>
      </div>
    </div>
  );
}
