"use client";

export default function BrowseBy() {
  const jobTitles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Marketing Specialist",
    "Sales Executive",
    "Data Analyst",
    "Product Manager",
    "HR Manager",
  ];

  return (
    <section className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse By</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobTitles.map((title, index) => (
          <button
            key={index}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded text-left"
          >
            {title}
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
          Load More
        </button>
      </div>
    </section>
  );
}
