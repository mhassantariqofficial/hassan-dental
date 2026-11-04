const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "1K+", label: "Happy Patients" },
  { value: "4.9", label: "Average Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-ink via-ink-soft to-ink pt-28 pb-12 md:pt-32 md:pb-24 text-white"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">
            Luxury Dental Care
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your smile deserves{" "}
            <span className="text-gold">exceptional</span> care.
          </h1>
          <p className="mt-4 max-w-md text-base md:mt-6 md:text-lg font-light text-white/70">
            Gentle treatments, modern technology and a calm, welcoming space,
            designed to make every visit comfortable.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
            <a
              href="#appointment"
              className="rounded-full bg-gold px-8 py-3 font-medium text-ink transition hover:bg-gold-dark"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 px-8 py-3 font-medium text-white transition hover:border-gold hover:text-gold"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden h-80 w-80 md:flex items-center justify-center rounded-full border border-gold/40 sm:h-96 sm:w-96">
          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-transparent sm:h-80 sm:w-80">
            <span className="text-[9rem] leading-none sm:text-[11rem]">🦷</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 md:mt-20 grid max-w-6xl grid-cols-3 gap-6 px-6">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-gold/40 pt-4">
            <p className="font-serif text-3xl text-gold sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}