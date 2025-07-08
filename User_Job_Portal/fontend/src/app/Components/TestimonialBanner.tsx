"use client";

export default function TestimonialBanner() {
  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/recognition-programs-for-employe.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-0" />

      {/* Content */}
      <div className="z-10 text-center text-white px-4">
        <h2 className="text-3xl sm:text-xl mb-4">Testimonials</h2>
        <p className="text-lg sm:text-4xl font-bold mb-6">Success Stories</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">
          Read
        </button>
      </div>
    </section>
  );
}
