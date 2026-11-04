import SectionTitle from "./SectionTitle.jsx";

const doctors = [
  { initials: "AK", name: "Dr. Ahmed Khan", role: "BDS, FCPS – Lead Dentist & Founder" },
  { initials: "HM", name: "Dr. Hamza Malik", role: "BDS, MCPS – Orthodontist" },
  { initials: "BQ", name: "Dr. Bilal Qureshi", role: "BDS, RDS – Cosmetic Dentist" },
];

export default function Team() {
  return (
    <section id="team" className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Our Team"
          title="Meet your dentists"
          text="PMDC-registered specialists who truly care about your comfort."
        />

        <div className="mt-8 md:mt-14 grid grid-cols-3 gap-3 md:gap-8">
          {doctors.map((d) => (
            <div key={d.name} className="text-center">
              <div className="mx-auto flex h-20 w-20 md:h-40 md:w-40 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-ink to-ink-soft font-serif text-2xl text-gold md:text-4xl shadow-lg">
                {d.initials}
              </div>
              <h3 className="mt-3 font-serif text-sm md:mt-6 md:text-xl">{d.name}</h3>
              <p className="mt-1 text-[11px] leading-snug text-gold-dark md:text-sm">{d.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}