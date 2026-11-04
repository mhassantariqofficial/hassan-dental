import SectionTitle from "./SectionTitle.jsx";

const points = [
  {
    title: "Advanced Technology",
    text: "Digital scans and modern equipment for precise, comfortable treatment.",
  },
  {
    title: "Pain-Free Approach",
    text: "Gentle techniques and a calm environment, so you can relax.",
  },
  {
    title: "Personalised Plans",
    text: "Every smile is different. Your treatment is tailored to you.",
  },
  {
    title: "Family Friendly",
    text: "Caring dental services for children, adults and seniors.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Why Hassan Dental"
          title="Dentistry, elevated"
          text="We combine clinical excellence with a refined, relaxing experience."
        />

        <div className="mt-8 md:mt-14 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gold/20 bg-white p-4 md:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-serif text-3xl text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-base font-semibold md:mt-4 md:text-lg">{p.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink/70 md:mt-2 md:text-sm">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}