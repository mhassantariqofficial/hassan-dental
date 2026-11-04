import SectionTitle from "./SectionTitle.jsx";

const services = [
  { icon: "✨", title: "Teeth Whitening", text: "Professional whitening for a brighter, radiant smile." },
  { icon: "🦷", title: "Dental Implants", text: "Natural-looking, long-lasting replacements for missing teeth." },
  { icon: "😁", title: "Braces & Aligners", text: "Straighten your teeth discreetly and comfortably." },
  { icon: "💎", title: "Porcelain Veneers", text: "Custom veneers to perfect shape, colour and symmetry." },
  { icon: "🛡️", title: "Root Canal Treatment", text: "Painless, modern treatment to save your natural tooth." },
  { icon: "👶", title: "Children's Dentistry", text: "Friendly, gentle care for our youngest patients." },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          light
          eyebrow="Our Services"
          title="Treatments crafted for you"
          text="From everyday care to complete smile makeovers."
        />

        <div className="mt-8 md:mt-14 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-ink-soft p-4 md:p-8 transition hover:border-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-2xl">
                {s.icon}
              </span>
              <h3 className="mt-3 font-serif text-base md:mt-5 md:text-xl text-white group-hover:text-gold">
                {s.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/60 md:mt-2 md:text-sm">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}