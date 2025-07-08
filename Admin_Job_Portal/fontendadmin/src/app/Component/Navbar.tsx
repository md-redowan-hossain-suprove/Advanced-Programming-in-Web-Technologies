"use client";

import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [search, setSearch] = useState('')

  return (
    <nav className="w-full bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center">

        <span className="ml-2 font-bold text-xl text-black">Jobify</span>
      </div>

      {/* Middle: Search box */}
      <div className="flex-1 max-w-lg mx-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>

      {/* Right: Profile Icon */}
      <div className="flex items-center cursor-pointer">
        <Image
          src="/man-avatar-profile-picture-isola.jpg"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full textblack"
        />
      </div>
    </nav>
  )
}
