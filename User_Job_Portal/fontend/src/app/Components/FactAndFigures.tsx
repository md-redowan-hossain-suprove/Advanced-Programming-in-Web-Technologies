"use client";

export default function FactAndFigures() {
  const facts = [
    { number: "4,206", label: "Live Jobs" },
    { number: "12,203+", label: "Vacancies" },
    { number: "592", label: "Companies" },
  ];

  return (
    <section className="max-w-5xl mx-auto my-12 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-black mb-8 text-center">Fact & Figures</h2>
      
      <div className="flex justify-center gap-16 flex-wrap">
        {facts.map((fact, idx) => (
          <div key={idx} className="text-center">
            <p className="text-4xl font-extrabold text-blue-400">{fact.number}</p>
            <p className="text-sm text-black mt-1">{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
