export default function Lic() {
  return (
    <section className="bg-white text-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">
        LIC – Life Insurance Corporation of India
      </h2>
      <p className="mb-2">
        India’s largest life‑insurance provider offering Term, Endowment, Pension and Children plans.
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>Established 1956 • 250 M+ policy‑holders</li>
        <li>Popular: LIC Jeevan Anand, Tech Term, Jeevan Umang</li>
      </ul>
      <a
        href="https://licindia.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:underline"
      >
        Visit LIC
      </a>
    </section>
  );
}
