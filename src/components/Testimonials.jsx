import SectionTitle from "./SectionTitle.jsx";

const reviews = [
  {
    name: "Hassan Raza, Islamabad",
    text: "The most relaxing dental visit I have ever had. The team was gentle and very professional.",
  },
  {
    name: "Usman Tariq, Rawalpindi",
    text: "My root canal was completely painless. Clean clinic and very honest pricing.",
  },
  {
    name: "Ali Noman, Lahore",
    text: "Beautiful clinic and friendly staff. My whole family now visits Hassan Dental!",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Reviews"
          title="Loved by our patients"
        />

        <div className="mt-8 md:mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="min-w-[85%] snap-center rounded-2xl border border-gold/20 bg-ivory p-6 md:min-w-0 md:p-8"
            >
              <p className="text-gold">★★★★★</p>
              <blockquote className="mt-4 leading-relaxed text-ink/80">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 font-serif text-lg">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}