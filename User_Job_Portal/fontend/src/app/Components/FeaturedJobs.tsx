"use client";

export default function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      logo: "screenshot.jpg",
      company: "Google",
      title: "Software Engineer",
    },
    {
      id: 2,
      logo: "AIdro_kXVj3MGEZAiw5LFOtWMYpl9EHk.jpg",
      company: "Microsoft",
      title: "Cloud Architect",
    },
    {
      id: 3,
      logo: "meta-6871457_640.jpg",
      company: "Meta",
      title: "Product Designer",
    },
  ];

  return (
    <section className="bg-sky-100 py-10 px-4 sm:px-70 rounded-lg max-w-full mx-auto mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4">
            <img
              src={job.logo}
              alt={job.company}
              className="w-16 h-16 object-contain rounded"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{job.company}</h3>
              <p className="text-sm text-gray-600">{job.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
